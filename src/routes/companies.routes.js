const {Router} = require('express')
const CompanyCtrl = require('../controllers/companies.controllers')
const router = Router()
const Auth = require('../helper/Auth')


router.post('/create',CompanyCtrl.createCompany)
router.get('/',CompanyCtrl.search)
router.get('/:nit',CompanyCtrl.searchByNit)
router.put('/update/:id',Auth.verifyToken,CompanyCtrl.update)

module.exports = router