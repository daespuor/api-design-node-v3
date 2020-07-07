import { Router } from 'express'

const router = Router()

router
  .route('/')
  .get((req, res) => {
    res.send({ message: 'ok get' })
  })
  .post((req, res) => {
    res.send({ message: 'ok post' })
  })

router
  .route('/:id')
  .get((req, res) => {
    res.send({ message: 'ok get' })
  })
  .put((req, res) => {
    res.send({ message: 'ok put' })
  })
  .delete((req, res) => {
    res.send({ message: 'ok delete' })
  })

export default router
