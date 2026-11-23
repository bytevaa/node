import jwt from "jsonwebtoken"

const JWT_SECRET = "super123"
const EXPIRES_IN = "3d"

class TokenService{
    generateToken(userId){
        return jwt.sign({id: userId} , JWT_SECRET , EXPIRES_IN )
    }
}
export default new TokenService()
