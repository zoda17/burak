import { Request, Response } from "express";
import{ T } from "../libs/types/common";
import MemberService from "../models/Member.service"; 
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";
import AuthService from "../models/Auth.service";

const memberService = new MemberService
const authService = new AuthService

const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
    try{
        console.log("signup");
        const input: MemberInput = req.body,
        result: Member = await memberService.signup(input);
        const token = await authService.createToken(result);
        console.log("token:", token);

        res.json({ member: result });
    } catch (err) {
        console.log("Error, signup:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};
memberController.login = async (req: Request, res: Response) => {
    try{
        console.log("login");
        const input: LoginInput = req.body,
        result = await memberService.login(input),
        token =  await authService.createToken(result);
        console.log("TOKEN =>", token);

        res.json({ member: result });
    } catch (err) {
        console.log("Error, login:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

export default memberController;