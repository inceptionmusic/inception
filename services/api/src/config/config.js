import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

export default {
  env: process.env.NODE_ENV || 'development',
  port: 3000,
  services: {
    cms: axios.create({
      baseURL: 'http://cms:1337/api',
      headers: {
        Authorization: `Bearer ${process.env.CMS_TOKEN}`,
      },
    }),
  },
}
