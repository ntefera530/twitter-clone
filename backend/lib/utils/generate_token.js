import jwt from 'jsonwebtoken'

export const generateTokenAndSetCockies = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000, // 15 days in MS
        httpOnly: true, 
        sameSite: "strict",
        secure: process.env.Node_ENV !== "development",
    });
};