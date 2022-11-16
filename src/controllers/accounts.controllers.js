const AccountsCtrl = {}
const Account = require('../models/accounts.models')
//const Contact = require('../models/contacts.models')
const Student = require('../models/students.models')
const Company = require('../models/companies.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

AccountsCtrl.createAccountCompany = async (req, res) => {
    try {
        const { nit, password } = req.body

        const newAccount = new Account({
            document: nit,
            password,
            rol: 1984
        })

        const docAccount = await Account.findOne({ document: nit })
        if (docAccount) {
            res.send("Esta empresa ya esta creado")
        }
        else {
            newAccount.password = await bcrypt.hash(password, 10)
            const token = jwt.sign({ _id: newAccount._id }, "Secreto")
            await newAccount.save()
            res.send("Cuenta creada correctamente")
        }

    } catch (error) {
        return console.log("")
    }
}

AccountsCtrl.login = async (req, res) => {
    const { document, password } = req.body
    const account = await Account.findOne({ document: document })
    if (!account) {
        res.send("Documento incorrecto")
    } else {
        const match = await bcrypt.compare(password, account.password)
        if (match) {
            const token = jwt.sign({ _id: account._id }, "Secreta")
            const nitCompany = await Company.findOne({ document: document })
            await res.json({
                nit: nitCompany.nit,
                message: 'Bienvenido',
                name: nitCompany.company_name,
                token
            })
        }
        else {
            res.send('Contraseña incorrecta')
        }
    }
}


module.exports = AccountsCtrl