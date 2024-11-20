import express,{Request,Response} from 'express'
import { createUrl,getAllUrls, getUrlByShortCode,deleteShortCode,updateShortCode } from './controller/url.controller'
const PORT = 3000
const app = express()
import { Url } from './model/Url'
let url: Url[] = []
function start() {
app.use(express.json())
app.get('/api/url', (req:Request, res:Response) => { getAllUrls(req,res,url)} )
app.post('/api/url', (req:Request, res:Response) => {
    createUrl(req,res,url)
})
app.get('/api/url/shortcode/:shortcode', (req:Request, res:Response) => {
    getUrlByShortCode(req,res,url)
})
app.put('/api/url/shortcode/:shortcode', (req:Request, res:Response) => {
    updateShortCode(req,res,url)
})
app.delete('/api/url/shortcode/:shortcode', (req:Request, res:Response) => {
    deleteShortCode(req,res,url)
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    })  
}

start()