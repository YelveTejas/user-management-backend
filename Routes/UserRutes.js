import express from 'express'
import { Postuser } from '../Controllers/Postuser.js'
import { Getusers } from '../Controllers/Getuers.js'
import { Edituser } from '../Controllers/Edituser.js'
import { Deleteuser } from '../Controllers/Delete.js'
import { Singleuser } from '../Controllers/Singleuser.js'
const route = express.Router()

route.post('/post',Postuser)
route.get('/get',Getusers)
route.put('/update/:id',Edituser)
route.delete('/delete/:id',Deleteuser)
route.get('/details/:id',Singleuser)

export {route}