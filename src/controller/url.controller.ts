import { Url } from "../model/url";
import { Request, Response } from "express"
import createShortCode from "../utils/generateString";

const createUrl = (req: Request, res: Response, url: Url[]) => {
    try {
        const shortCode: string = createShortCode()
        const newUrl: Url = {
            id: url.length + 1,
            url: req.body.url,
            shortCode: shortCode,
            timesAccessed: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        url.push(newUrl)
        return res.status(200).json(url)
    } catch (error) {
        return res.status(500).json({ error: error })
    }

}
const getAllUrls = (req: Request, res: Response, url: Url[]) => {
    try {
        return res.status(200).json(url)
    } catch (error) {
        return res.status(500).json({ error: error })
    }

}
const getUrlByShortCode = (req: Request, res: Response, url: Url[]) => {
    try {
        const shortCode: string = req.params.shortcode
        if (!shortCode) {
            return res.status(404).json("Short code is undefined")
        }
        const urlFinded: Url | undefined = url.find((url) => url.shortCode === shortCode)
        if (!urlFinded) {
            return res.status(404).json("Short Code is not at database")
        } else {
            urlFinded.timesAccessed = urlFinded.timesAccessed + 1
            const fullUrl: string = urlFinded.url;
            return res.status(200).json(fullUrl)
        }
    } catch (error) {
        return res.status(500).json({ error: error })
    }

}
const updateShortCode = (req: Request, res: Response, url: Url[]) => {
    try {
        const shortCode: string = req.params.shortcode
        const newShortCode: string = createShortCode()
        if (!shortCode) {
            return res.status(404).json("Short code is undefined")
        }
        const urlFinded: Url | undefined = url.find((url) => url.shortCode === shortCode)
        if (!urlFinded) {
            return res.status(404).json("Short code is not at database")
        } else {
            urlFinded.shortCode = newShortCode;
            return res.status(201).json(url)
        }
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}
const deleteShortCode = (req: Request, res: Response, url: Url[]) => {
    try {
        const shortCode: string = req.params.shortcode
        console.log(shortCode)
        if (!shortCode) {
            return res.status(404).json("ShortCode is undefined")
        }
        console.log("URL ANTES", url)
        url = url.filter((url) => url.shortCode !== shortCode)
        console.log("URL DEPOIS", url)
        return res.status(200).json(url)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}
export { createUrl, getUrlByShortCode, getAllUrls, updateShortCode, deleteShortCode }
