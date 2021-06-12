import express from 'express';

import {createUser, getUsers, getUser, deleteUser, updateUser} from '../controllers/users.js'

const router = express.Router();

//all routes in here are starting with /users
router.get('/', getUsers)

//adding users to our array
router.post('/', createUser)

//user/1 is stored in req.params {id=1} 
router.get('/:id', getUser)

//delete a user
router.delete('/:id', deleteUser)

//update user content
router.patch('/:id', updateUser)

export default router;