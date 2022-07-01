import { Request, Response } from "express"
import shortId from "shortid";
import { config } from "../config/constants"

export class URLcontroller {
    
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originURL } = req.body

        const hash = shortId.generate()

        const shortURL = `${config.API_URL}/${hash}`

        res.json({ originURL, hash, shortURL })
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params

        const url = {
            originURL: "https://github.com/gabriel-lumertz",
            hash: "GJjos2WY4",
            shortURL: "http://localhost:3000/GJjos2WY4"
        }

        res.redirect(url.originURL)
    }
}