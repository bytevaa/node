import User from "../models/User.js";
import passwordService from "../services/passwordService.js";


class AuthController {
  async register(req, res) {
    try {
      const { firstName, lastName, email, password, avatar, role } = req.body;

      if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: "заполните все поля" });
      }

      const condidate = await User.findOne({ email });
      if (condidate) {
        return res.status(400).json({ message: "Email занят" });
      }

      const hashPassword = await passwordService.hashPassword(password);

      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
        avatar,
        role: "user",
      });
      res.status(200).json({
        user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            avatar: user.avatar,
            role: user.role
        }
      });
    } catch (err) {
      res.status(500).json("Ошибка при регистрации");
    }
  }
}


export default new AuthController()