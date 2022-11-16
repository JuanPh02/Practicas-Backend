const CompanyCtrl = {}
const Company = require('../models/companies.models')


CompanyCtrl.createCompany = async (req, res) => {
    try {
        const { nit, company_name, sector, employers_number, webpage, country, department, city,  email} = req.body

        const newCompany = new Company({
            nit,
            company_name,
            //logo_file,
            sector,
            employers_number,
            webpage,
            country,
            department,
            city,
            //rut_file,
            email,
            //agreement_file
        })
        const nitCompany = await Company.findOne({ nit: nit })
        if (nitCompany) {
            res.send("Esta empresa ya esta creada")
        }
        else {
            await newCompany.save()
            res.send("Lista la empresa")
        }

    } catch (error) {
        return res.send({
            ok: false,
            message: "Ha ocurrido un error creando la empresa",
            content: error,
        });
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