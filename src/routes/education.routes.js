const {Router} = require('express')
const router = Router()
const EducationCtrl = require('../controllers/education.controllers')
const Auth = require('../helper/Auth')

router.get('/:document',EducationCtrl.searchByDoc)
router.put('/update/:document',Auth.verifyToken,EducationCtrl.update)

module.exports = router