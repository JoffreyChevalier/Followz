const argon2 = require("argon2");
const Joi = require("joi");

const models = require("../models");

class UserController {
  // eslint-disable-next-line
  static me = async (req, res) => {
    const { user } = req.session;

    if (!user) {
      return res.sendStatus(401);
    }

    res.send(user);
  };

  static login = async (req, res) => {
    const { nickname, password } = req.body;

    const validation = Joi.object({
      nickname: Joi.string().min(3).max(255).required(),
      password: Joi.string().min(6).max(255).required(),
    }).validate({ nickname, password }, { abortEarly: false });

    if (validation.error) {
      return res.status(400).send("Nickname or password incorrect");
    }

    const [data] = await models.users.findByNickname(nickname);

    if (data.length === 0) {
      return res.sendStatus(401);
    }

    const user = data[0];

    if (await argon2.verify(user.password, password)) {
      delete user.password;

      req.session.user = user;

      return res.send(user);
    }

    return res.sendStatus(401);
  };
}

module.exports = UserController;
