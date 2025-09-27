import express from 'express'
import { generateContent } from '../controllers/ai.controller.js'
const router = express.Router()

router.post("/get-review", generateContent)



export default router;