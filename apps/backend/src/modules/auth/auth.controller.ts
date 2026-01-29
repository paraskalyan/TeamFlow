import { Request, Response } from "express";
import * as authService from './auth.service'
export const login = (req: Request, res: Response) => {
    const data = authService.login();
    return res.json(data)
}