
const fetch = require('node-fetch')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors());


app.get('*', async (req,res) => {
    if(req.path === '' || req.path === '/') return res.send({})

    try {
        
        const response = await fetch(`https://jsonplaceholder.typicode.com${req.path}`)
        console.log(req.path);
        const json = await response.json()
        res.set('x-codedamn-project', 'jsonproxyholder')
    
        res.send(json)
    } catch (error) {
        res.send({
            status : "error",
            error : "error proxying"
        })
    }
})



app.listen(3001, ()=> {
    console.log("listening on port 3001");
})