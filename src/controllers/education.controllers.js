const EducationCtrl = {}
const Education = require('../models/education.models')

EducationCtrl.searchByDoc= async(req,res)=>{
    const document = req.params.document
    console.log(document);
    const ans= await Education.findOne({document: document})
    await res.json(ans)
}

EducationCtrl.update= async(req,res)=>{
    const document = req.params.document
    const ans= await Education.findOneAndUpdate({document: document},req.body)
    await res.json({ 
        mensaje:'Actualizado'
    })
}

module.exports = EducationCtrl