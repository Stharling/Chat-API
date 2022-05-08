import jwt from 'jsonwebtoken'
import config from "dotenv/config";

class JsonWebToken {

  generateToken(userEmail){
    try {
          let jwtSecretKey = process.env.JWT_SECRET_KEY;
          let data = {
                time: Date(),
                userId: userEmail
            }

           return jwt.sign(data, jwtSecretKey);
    }catch(error){
        console.log(error);
    }
}

}
export default JsonWebToken
