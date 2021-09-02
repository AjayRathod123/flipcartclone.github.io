import User from "../model/userSchema.js";

export const userSignup = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json("Registration ho gaya bhai");
  } catch (error) {
    console.log("Error ", error.message);
  }

  return "hello";
};

export const userLogin = async (req, res) => {
  try {
    let user = await User.findOne({
      username: req.body.email,
      password: req.body.password,
    });
    if (user) {
      return res.status(200).json(`${req.body.email} login successful`);
    } else {
      res.status(401).json("Invalid Login");
    }
  } catch (error) {
    console.log("Error ", error.message);
  }
};
