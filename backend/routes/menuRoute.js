import express from 'express';
import {sendMenu, getAllMenus}from '../controller/menu.js';

const router= express.Router();

router.post('/send',sendMenu);

router.get("/fetchAll", getAllMenus);

export default router;