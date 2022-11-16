const CompanyCtrl = {}
const Company = require('../models/companies.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

CompanyCtrl.createCompany = async (req, res, next) => {
    try {
        const { nit, company_name, sector, employers_number, webpage, country, department, city,  email} = req.body

        const newCompany = new Company({
            nit,
            company_name,
            sector,
            employers_number,
            webpage,
            country,
            department,
            city,
            email,
            
        })
        const nitCompany = await Company.findOne({ nit: nit })
        if (nitCompany) {
            return res.send("Esta empresa ya esta creada")
        }
        else {
            const token = jwt.sign({ _id: newCompany._id }, "Secreto")
            await newCompany.save()
            res.send("Lista la empresa")
            next()
        }

    } catch (error) {
        return console.log("problemas")
    }
}

CompanyCtrl.login = async (req, res) => {
    const { nit, password } = req.body
    const company = await Company.findOne({ document: nit })
    if (!company) {
        res.send("Nit incorrecto")
    }
    const match = await bcrypt.compare(password, company.password)
    if (match) {
        const token = jwt.sign({ _id: company._id }, "Secreta")
        await res.json({
            nit: company.nit,
            message: 'Bienvenido',
            name: company.company_name,
            token
        })
    }
    else {
        res.send('Contraseña incorrecta')
    }
}

CompanyCtrl.search = async (req, res) => {
    const ans = await Company.find()
    await res.json(ans)
}

CompanyCtrl.searchByNit = async (req, res) => {
    const nit = req.params.nit
    const ans = await Company.findOne({ nit: nit })
    await res.json(ans)
}

CompanyCtrl.update = async (req, res) => {
    const nit = req.params.nit
    const ans = await Company.findOneAndUpdate({ nit: nit }, req.body)
    await res.json({
        mensaje: 'Actualizado'
    })
}

module.exports = CompanyCtrl