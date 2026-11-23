import bcrypt from "bcrypt"
const SALT_ROUNDS = 10
class PasswordService{


async  hashPassword(password) {
    return bcrypt.hash(password, SALT_ROUNDS)
}

 async comparePassword(password , hash) {
    return bcrypt.compare(password , hash)
}


}

export default new PasswordService()