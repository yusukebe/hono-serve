import app from './src/index'
import { serveStatic } from 'hono/cloudflare-workers'

app.get('/static/*', serveStatic({ root: './' }))

export default app
