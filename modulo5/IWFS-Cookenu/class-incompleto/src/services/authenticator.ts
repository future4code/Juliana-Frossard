import * as jwt from "jsonwebtoken";


export interface AuthenticationData {
    id: string
}
export const generateToken = (input: AuthenticationData): string => {
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
}

export const getTokenData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
        id: payload.id,
        role: payload.role
    };
    return result;
};

// export class Authenticator {
//     public generate(input: AuthenticationData): string {
//         const token = jwt.sign(
//             {
//                 id: input.id,
//             },
//             process.env.JWT_KEY as string,
//             {
//                 expiresIn: process.env.EXPIRES_IN
//             }
//         )
//         return token
//     };
//     public getTokenData(token: string): AuthenticationData {
//         const data = jwt.verify(
//             token,
//             process.env.JWT_KEY as string
//         )
//         return data as AuthenticationData;
//     };
// }