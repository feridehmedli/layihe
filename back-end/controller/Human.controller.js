const { Human } = require("../models/Human.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'ferid'
const HumanController = {
  getAll: async (req, res) => {
    try {
      const humans = await Human.find();
      res.status(200).json(humans);
    } catch (error) {
      console.error("Error fetching humans:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Human.findOne({ email, password });
      if (user && (await bcrypt.compare(password, user.password))) {
        res.send(user);
      } else {
        res.send("Email or password is not true");
      }
    } catch (error) {}
  },
  register: async (req, res) => {
    try {
      const { name, surname, password, email } = req.body;
      let user = await Human.findOne({ email });
      if (user) {
        return res.status(404).send("User var");
      } else {
      }
      const salt = await bcrypt.genSalt(10);
      const newPassword = await bcrypt.hash(password, salt);
      const newHuman = new Human({
        name,
        surname,
        password: newPassword,
        email,
      });
      await newHuman.save();
      res
        .status(201)
        .send({
          name: newHuman.name,
          surname: newHuman.surname,
          password: newHuman.password,
          email: newHuman.email,
          token: await generateToken(newHuman._id),
        });
    } catch (error) {
      res.status(404).send("Can not post");
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await Human.findByIdAndDelete(id);
      res.status(200).send("User deleted");
    } catch (error) {
      res.status(404).send("Can not delete");
    }
  },
};
const generateToken = async (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = { HumanController };
