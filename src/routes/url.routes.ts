import express, { Request, Response } from "express";
const router = express.Router();
import { Url } from "../model/url";
import {
    createUrl,
    getUrlByShortCode,
    getAllUrls,
    updateShortCode,
    deleteShortCode
} from "../controller/url.controller"; 

const url: Url[] = [];

// Rutas
router.get('/url', (req: Request, res: Response) => {
    getAllUrls(req, res, url);
});

router.post('/url', (req: Request, res: Response) => {
    createUrl(req, res, url);
});

router.get('/url/shortcode/:shortcode', (req: Request, res: Response) => {
    getUrlByShortCode(req, res, url);
});

router.put('/url/shortcode/:shortcode', (req: Request, res: Response) => {
    updateShortCode(req, res, url);
});

router.delete('/url/shortcode/:shortcode', (req: Request, res: Response) => {
    deleteShortCode(req, res, url);
});

export default router;