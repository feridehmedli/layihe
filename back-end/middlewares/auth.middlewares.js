// const { Human } = require("../models/Human.model");
// const jwt = require("jsonwebtoken");
// const JWT_SECRET = 'ferid';

// const protect = async (req, res, next) => {
//   try {
//     let token;
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       token = req.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token, JWT_SECRET);
//       req.user = await Human.findById(decoded.id).select('-password');
//       next();
//     } else {
//       res.status(401).send("Not authorized");
//     }
//   } catch (error) {
//     res.status(401).send("Not authorized");
//   }
// };

// module.exports = { protect };
