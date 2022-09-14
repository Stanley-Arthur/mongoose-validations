const User = require("./user.model");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const generateToken = (user) =>{
      const token = jwt.sign(
        { id: user._id, email: user.email },
        "fdba2096dcb571714353f2a62ceba6d4b7c5db1a51586bdc5d882961d1574765",
        {
          expiresIn: "1h",
        }
      );
       return {
        token,
        user,
      };

}
exports.register= async (req,res)=>{
    const {email, password} = req.body;

    //checking to see if email already exists
    const emailExists = await User.findOne({email})
    if (emailExists){
        return res.status(400).json({"error":"Email already in use"})
    }

    const hashedPassword = await bcrypt.hash(password ,12)

    const user =await User.create({...req.body, password: hashedPassword});

    //generate token
    const token = generateToken(user);
    res.status(201).json({token})

};




exports.login = async (req, res)=>{
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "invalid credentials " });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "invalid credentials" });
  }
  //generate token
 const token =generateToken(user)

  res.status(200).json({ token });
}