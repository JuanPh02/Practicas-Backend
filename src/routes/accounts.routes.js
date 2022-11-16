const {Router} = require('express')
const router = Router()
const contactCtrl = require('../controllers/contacts.controllers')
const companyCtrl = require('../controllers/companies.controllers')
const Auth = require('../helper/Auth')
const AccountsCtrl = require('../controllers/accounts.controllers')


router.post('/create',AccountsCtrl.createAccountCompany, companyCtrl.createCompany, contactCtrl.createContact)
router.post('/login',AccountsCtrl.login)

module.exports = router