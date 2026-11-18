import crypt from "crypto";
import OTP from "../models/otp.models.js";

export const homeRoute = (req, res) => {
  res.send("Hello Route is Running From Controller Page Page");
};

export const quoryLearning = async (req, res) => {
  // res.send("Quory Routed Connected Successfully");
  try {
    const { email, name } = req.query;
    // console.log(email, name);
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email Not Found" });
    }
    const otpGenerat = crypt.randomInt(100000, 1000000).toString();

    await OTP.findOneAndUpdate(
      { email },
      { email, name, otpGenerat },
      { upsert: true, new: true },
    );
    console.log(`OTP saved for Email: ${email} and OTP ${otpGenerat}`);
    return res.status(200).json({
      success: true,
      message: "OTP saved successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "সার্ভার এরর।" });
  }
};
