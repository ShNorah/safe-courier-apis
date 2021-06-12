import express from 'express';

import { createParcel, getParcels, getParcel, deleteParcel, updateParcel, getUserParcels } from '../controllers/parcels.js';

const router = express.Router();

//all routes in here are starting with /parcels
router.get('/', getParcels)

//adding parcels to our array
router.post('/', createParcel)

//getting a parcel of a specified id
router.get('/:id', getParcel)


//delete a parcel
router.delete('/:id', deleteParcel)

//update parcel order
router.put('/:id', updateParcel)

//Fetch all parcel delivery orders by a specific user
router.get('/:id/parcels', getUserParcels)


export default router;