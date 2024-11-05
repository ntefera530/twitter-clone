import express from 'express';
import { protectRoute } from '../middleware/protect-route.js';
import { createPost, likeUnlikePost, commentOnPost, deletePost, getAllPosts, getLikedPosts, getFollowingPosts,getUserPosts } from '../controllers/post-controller.js';

const router = express.Router();

router.post("/create", protectRoute, createPost);
router.post("/likeUnlike/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);

router.get("/all", protectRoute, getAllPosts);
router.get("/getLiked/:id", protectRoute, getLikedPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/user/:username", protectRoute, getUserPosts);


export default router;