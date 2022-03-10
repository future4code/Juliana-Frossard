import * as jwt from "jsonwebtoken";
import { InputAuthentication } from '../types';

const expiresIn = "1min"

export const TokenGenerator = (input: InputAuthentication): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }



