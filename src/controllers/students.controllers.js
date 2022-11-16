const StudentsCtrl = {}
const Student = require('../models/students.models')

StudentsCtrl.search= async(req,res)=>{
    const ans= await Student.find()
    await res.json(ans)
}

StudentsCtrl.searchByDoc= async(req,res)=>{
    const document = req.params.document
    console.log(document);
    const ans= await Student.findOne({document: document})
    await res.json(ans)
}

StudentsCtrl.update= async(req,res)=>{
    const document = req.params.document
    const ans= await Student.findOneAndUpdate({document: document},req.body)
    await res.json({
        mensaje:'Actualizado'
    })
}

module.exports = StudentsCtrl