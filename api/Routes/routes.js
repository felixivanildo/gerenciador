const { Router } = require('express');
const controler = require ("../Controler/controler")
const router = Router();
const multer = require ('multer')
const upload = multer({ dest: 'uploads/' }); 


router.put('/getable', controler.getRegisters)
// router.get('/:id', controler.getRegistersId)
// router.get('/gsan/:id', controler.getGsanCode)
router.post('/intranet', controler.postUpdate)
router.post('/cabeleira', controler.teste)
router.post('/imgrecieve', controler.imgConverter)
router.get('/teste', controler.testeambiente)

module.exports = router;