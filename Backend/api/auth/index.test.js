import { stub } from 'sinon'
import request from 'supertest-as-promised'
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

import express from '../../express'
import routes from '.'
const secret = 'superSecret'

const app = () => express(routes)

var token=null;

test('POST /auth 200 ', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ email: 'john@doe.com', password: 'secret' })
  expect(status).toBe(200)
  expect(typeof body).toBe('object')
  expect(typeof body.token).toBe('string')
  token = body.token;
  expect(typeof body.data).toBe('object')
  expect(await jwt.verify(body.token,secret)).toBeTruthy()
})

test('POST /auth - invalid email', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ email: 'john@doe.comm', password: 'secret' })
  expect(status).toBe(200)
  expect(typeof body).toBe('object')
  expect(body.success).toBe(false)
})

test('GET /auth - invalid token', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ token: '' })
  expect(status).toBe(403)
})

test('GET /auth - valid token', async () => {
  const { status, body } = await request(app())
    .get('/')
    .send({ token: token })
  expect(status).toBe(200)
})
