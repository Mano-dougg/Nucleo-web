import {Router, Request, Response} from 'express'
import { login, signup } from '../controllers/auth'
import { prismaClient } from '..'

const authRoutes:Router = Router()

authRoutes.post('/signup',signup)
authRoutes.post('/login',login)

export default authRoutes