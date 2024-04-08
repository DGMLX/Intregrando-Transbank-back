import express from "express"
import pkg from 'transbank-sdk'

const router = express.Router()

const {WebpayPlus} = pkg
const { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } = pkg

const generarPago = async(req,res) =>{
   
    console.log("generadndo pago")
    const buyOrder='121';
    const sessionId='10';
    const amount=54990;
    const returnUrl='https://www.google.com.mx/?hl=es-419';
    

    const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));
    const response = await tx.create(buyOrder, sessionId, amount, returnUrl);
    console.log(response)
    return res.json({
        token:response.token,
        url:response.url
    })
 

}

router.post("/pago",generarPago)


export default router