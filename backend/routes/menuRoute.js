import express from 'express';
import {sendMenu}from '../controller/menu.js';

const router= express.Router();

router.post('/send',sendMenu);

export default router;