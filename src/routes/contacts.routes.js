const {Router} = require('express')
const router = Router()
const Auth = require('../helper/Auth')
const AccountsCtrl = require('../controllers/accounts.controllers')
const ContactCtrl = require('../controllers/contacts.controllers')


router.post('/create',ContactCtrl.createContact,AccountsCtrl.createAccountContact)
router.get('/',ContactCtrl.search)
router.get('/:document',ContactCtrl.searchByDoc)
router.post('/login',ContactCtrl.login)

module.exports = router