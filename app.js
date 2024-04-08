import express from "express"
import routerApp from "./routes/RouterApp.js"
import cors from "cors";

const app = express()
const port = 3001


app.use(cors())
app.use(routerApp)



app.listen(port,(req,res)=>{
    console.log(`Iniciando servidor en el puerto ${port}`)
})


