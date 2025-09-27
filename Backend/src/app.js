import express, { json } from 'express'
import aiRoutes from './routes/ai.routes.js'
import cors from 'cors'
const app = express();

app.use(express.json())
app.get('/', (req, res)=>{
    res.send("Hi am a code reviewer")
} )

const corsOptions = {
  origin: [
    'http://localhost:5173', // for local dev
    'https://mern-code-reveiwer.vercel.app' // replace with your actual deployed frontend URL
  ],
  credentials: true
};

app.use(cors(corsOptions));

app.use('/ai', aiRoutes)

export default app;