import express from 'express';
import { login, logout, signup, getMe } from '../controllers/auth-controller.js';
import { protectRoute } from '../middleware/protect-route.js';

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
router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);





export default router;