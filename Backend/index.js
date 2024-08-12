import express from 'express';


const app = express()
const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[{
        id:1,
        type:"first jokes",
        content:"look for another jokes"
    },
    {
        id:2,
        type:"second jokes",
        content:"look for another jokes"
    },
    {
        id:3,
        type:"third jokes",
        content:"look for another jokes"
    },
    {
        id:4,
        type:"forth jokes",
        content:"look for another jokes"
    },
    {
        id:5,
        type:"six jokes",
        content:"look for another jokes"
    },
    {
        id:6,
        type:"sixth jokes",
        content:"look for another jokes"
    },
]
res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})