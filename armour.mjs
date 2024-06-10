import express from 'express';

import { getArmour, getArmours, createArmour, updateArmour, deleteArmour } from '../controllers/armour.mjs';

const router = express.Router();

router.post('/', createArmour);
router.get('/', getArmours);
router.get('/:id', getArmour);
router.put('/:id', updateArmour);
router.delete('/:id', deleteArmour);

export default router;