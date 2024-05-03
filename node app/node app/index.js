const express=require('express')
const app=express()

app.use(express.static('public2'))

const port=3000
app.listen(port,()=>{
    console.log("http://${port}")
})