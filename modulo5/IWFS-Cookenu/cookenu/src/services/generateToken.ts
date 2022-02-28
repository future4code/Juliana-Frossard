import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../entities/AuthenticationData";

const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        {
            id: input.id,

        },
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.EXPIRES_IN
        }
    );
    return token;
};

export default generateToken;


