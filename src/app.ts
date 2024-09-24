import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions",
});

/** 1-ENTRY **/
const app = express();
// console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/
// AUTH & SID REQ.
app.use(
 session({
    secret: String(process.env.SESSION_SECRET),
  cookie: {
    maxAge: 1000 * 3600 * 6 // 3h
  },
  store: store,
  resave: true,
  saveUninitialized: true,
 })
);

app.use(function(req, res, next) { // browser variables uchun yordamchi
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS  **/
app.use("/admin", routerAdmin); // BSSR: EJS orqali
app.use("/", router); // Middlewere Design Pattern / SPA: REACT

export default app;