import express from 'express'
const PORT = 3000
const app = express()
import router from './routes/url.routes'
function start() {
app.use(express.json())
app.use('/api',router)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    })  
}

start()