import bodyParser from 'body-parser'
import express from 'express'

import { get404 } from './controllers/error'
import { adminRouter, shopRouter } from './routes'
import { getPath } from './utils/path'

const app = express()

app.set('view engine', 'ejs')
app.set('views', getPath('views'))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(getPath('..', 'public')))

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use(get404)

app.listen(3000, () => {
  console.log('Express server running at http://localhost:3000/')
})
