import express from 'express'
import aiService from '../services/ai.service.js'

export const generateContent = async (req,res)=>{
const code = req.body.code;

if(!code) {
    return res.status(401).send("Prompt is required")
}

const response = await aiService(code);
res.status(200).send(response)
}
 

 