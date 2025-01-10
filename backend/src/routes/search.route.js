import { getSongSuggestions } from "../controller/song.controller.js";
import { Router } from "express";
const router = Router();



router.get('/', getSongSuggestions);



export default router;
