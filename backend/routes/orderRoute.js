import express from 'express';
import {placeOrder}from '../controller/placeorder.js';

const router= express.Router();

router.post('/', placeOrder);

export default router;