import dotenv from 'dotenv'

dotenv.config()

const env = {
  dbPort: parseInt(process.env.DB_PORT || '', 10),
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbSchema: process.env.DB_SCHEMA,
  dbDebug: process.env.DB_DEBUG === 'true',
  dbPoolMin: parseInt(process.env.DB_POOL_MIN || '0', 10),
  dbPoolMax: parseInt(process.env.DB_POOL_MIN || '1', 10),
}

export default Object.freeze(env)
