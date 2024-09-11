import { Request, Response } from "express";
import { T } from "../libs/types/common";
import  MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { LoginInput } from "../libs/types/member";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
      console.log("goHome");
      res.send("Home Page");
// send | json | redirect | end | render 
    } catch(err) {
    console.log("Error, go Home:", err);
    }
};

restaurantController.getLogin= (req: Request, res: Response) => {
    try {
    console.log("getLogin");
    res.send("Login Page");
    } catch(err) {
     console.log("Error, getLogin:", err);
    }
};

restaurantController.getSignUp = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send("SignUp Page");
    } catch(err) {
      console.log("Error, getSignUp:", err);
    }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;

    const memberService = new MemberService();
    const result = await memberService.processlogin(input);
  
    res.send(result);
    } catch(err) {
    console.log("Error, processLogin", err);
    res.send(err);
    }
};

restaurantController.processSignUp = async (req: Request, res: Response) => {
    try {
        console.log("processSignUp");

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result = await memberService.processSignUp(newMember); 

       res.send(result); 
     } catch(err) {
        console.log("Error, processSignUp", err);
        res.send(err);
    }
};

export default restaurantController;