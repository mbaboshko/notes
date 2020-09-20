const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

app.use([express.json(), express.urlencoded({ extended: false }), require('cors')()])
app.use('/api/notes', require('./routes/notes.routes'))

const PORT = config.get('port') || 5000

const connect = async () => {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })

    app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}`))
  } catch (error) {
    console.error(`Server Error: ${error.message}`)
    process.exit(1)
  }
}

connect()
