import bodyParser from 'body-parser'
import express from 'express'

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

app.use((req, res) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' })
})

app.listen(3000, () => {
  console.log('Express server running at http://localhost:3000/')
})
