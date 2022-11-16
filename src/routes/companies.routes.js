const {Router} = require('express')
const CompanyCtrl = require('../controllers/companies.controllers')
const router = Router()
const Auth = require('../helper/Auth')
const AccountsCtrl = require('../controllers/accounts.controllers')


router.post('/create',CompanyCtrl.createCompany,AccountsCtrl.createAccountCompany)
router.get('/',CompanyCtrl.search)
router.get('/:nit',CompanyCtrl.searchByNit)
router.put('/update/:id',Auth.verifyToken,CompanyCtrl.update)
router.post('/login',CompanyCtrl.login)

module.exports = router