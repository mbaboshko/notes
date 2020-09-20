const Note = require('../models/Note.model')
const { Router } = require('express')
const router = Router()

const errorHandler = error => {
  console.error('Error', error.message)
  res.status(500).json({ status: 'error', message: 'Internal Error' })
}

router.post('/', async (req, res) => {
  try {
    const note = new Note(req.body)
    await note.save()

    res.status(201).json({
      status: 'success',
      message: `Note with title '${req.body.title}' added to database`,
    })
  } catch (error) {
    errorHandler(error)
  }
})

router.put('/:id', async (req, res) => {
  try {
    await Note.findByIdAndUpdate(req.params.id, req.body)

    res.status(201).json({
      status: 'success',
      message: `Note with id '${req.params.id}' updated`,
    })
  } catch (error) {
    errorHandler(error)
  }
})

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find()

    res.status(200).json(notes)
  } catch (error) {
    errorHandler(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)

    res.status(200).json(note)
  } catch (error) {
    errorHandler(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id)

    res.status(201).json({
      status: 'success',
      message: `Note with id '${req.params.id}' deleted from database`,
    })
  } catch (error) {
    errorHandler(error)
  }
})

module.exports = router
