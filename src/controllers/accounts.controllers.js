const AccountsCtrl = {}
const Account = require('../models/accounts.models')
const Contact = require('../models/contacts.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

AccountsCtrl.createAccountContact = async (req, res) => {
    try {
        const { document, password } = req.body

        const newAccount = new Account({
            document,
            password,
            rol: 1984
        })

        const docAccount = await Account.findOne({ document: document })
        if (docAccount) {
            res.send("Este contacto ya esta creado")
        }
        else {
            newAccount.password = await bcrypt.hash(password, 10)
            const token = jwt.sign({ _id: newAccount._id }, "Secreto")
            await newAccount.save()
            res.send("Cuenta creada correctamente")
        }

    } catch (error) {
        // return res.json({
        //     ok: false,
        //     message: "Ha ocurrido un error obteniendo los usuarios",
        //     content: error,
        // });
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
            const docContact = await Contact.findOne({ document: document })
            await res.json({
                document: document,
                message: 'Bienvenido',
                name: docContact.name + " " + docContact.first_lastname,
                rol: account.rol,
                token
            })
        }
        else {
            res.send('Contraseña incorrecta')
        }
    }
}
module.exports = AccountsCtrl