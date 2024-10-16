import express from 'express';
import { login, logout, signup } from '../controllers/auth-controller.js';

const router = express.Router();

// router.get("/signup", (req,res) => {
//     res.json({
//        data: "You hit the signup endpoint" 
//     });
// });

// router.get("/login", (req,res) => {
//     res.json({
//        data: "You hit the login endpoint" 
//     });
// });

// router.get("/logout", (req,res) => {
//     res.json({
//        data: "You hit the logout endpoint" 
//     });
// });
`   `
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);



export default router;