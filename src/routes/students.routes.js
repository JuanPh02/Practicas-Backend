const {Router} = require('express')
const router = Router()
const StudentsCtrl = require('../controllers/students.controllers')
const Auth = require('../helper/Auth')

router.get('/',StudentsCtrl.search)
router.get('/:document',StudentsCtrl.searchByDoc)
router.put('/update/:document',Auth.verifyToken,StudentsCtrl.update)

module.exports = router