const ContactCtrl = {}
const Contact = require('../models/contacts.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


ContactCtrl.createContact = async (req, res, next) => {

    try {
        const { doctype, document, gender, name, first_lastname, second_lastname, company, area, job, phone, email } = req.body

        const newContact = new Contact({
            doctype,
            document,
            gender,
            name,
            first_lastname,
            second_lastname,
            company,
            area,
            job,
            phone,
            email
        })

        const docContact = await Contact.findOne({ document: document })
        if (docContact) {
            return res.send("Este contacto ya esta creado")
        }
        else {
            const token = jwt.sign({ _id: newContact._id }, "Secreto")
            await newContact.save()
            res.send("Contacto creado correctamente")
            next()
        }

    } catch (error) {
        return res.send({
            ok: false,
            message: "Ha ocurrido un error al crear el contacto",
            content: error,
        });
    }
}

ContactCtrl.login = async (req, res) => {
    const { document, password } = req.body
    const contact = await Contact.findOne({ document: document })
    if (!contact) {
        res.send("Documento incorrecto")
    }
    const match = await bcrypt.compare(password, contact.password)
    if (match) {
        const token = jwt.sign({ _id: contact._id }, "Secreta")
        await res.json({
            document: contact.document,
            message: 'Bienvenido',
            name: contact.name,
            token
        })
    }
    else {
        res.send('Contraseña incorrecta')
    }
}

ContactCtrl.search = async (req, res) => {
    const ans = await Contact.find()
    await res.json(ans)
}

ContactCtrl.searchByDoc = async (req, res) => {
    const document = req.params.document
    console.log(document);
    const ans = await Contact.findOne({ document: document })
    await res.json(ans)
}

module.exports = ContactCtrl