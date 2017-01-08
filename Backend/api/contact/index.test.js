import { stub } from 'sinon'
import request from 'supertest-as-promised'
import express from '../../express'
import routes from '.'
const app = () => express(routes)

test('POST /contact 200 ', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ email: 'john@doe.com', name: 'name', message:'message' })
  expect(status).toBe(200)
  expect(typeof body).toBe('object')
  expect(typeof body.data).toBe('object')
})
