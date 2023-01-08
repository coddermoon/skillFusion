import express, { Application, Request, Response } from 'express';

const app:Application = express();
const port:any = process.env.PORT ||5000


app.use(express.json());


app.get('/',(req:Request,res:Response) => {
    res.send('server is running at http://localhost:5000');
})

app.listen(port,()=>console.log('listening on http://localhost:5000'));