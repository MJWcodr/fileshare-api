import dotenv from 'dotenv'

dotenv.config()
// directory to save files at
export const dataDir = "./data/files/"

// sets length of request ID
export const idLength: number = 3


// complex/environment variables

export const siteUrl = () => {
    if (process.env.SITE_URL) {
        return process.env.SITE_URL
    } else {
        dotenv.config()
        return process.env.SITE_URL
    }
}
