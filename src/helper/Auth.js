const Auth = {}
const jwt = require('jsonwebtoken')

Auth.verifyToken = (req,res,next) =>{
    if(!req.headers.authorization){
        return res.json({
            message: 'No autorizado'
        })
    }
    const token = req.headers.authorization
    if(token==null){
        return res.json({
            message: 'No autorizado'
        })
    }

    jwt.verify(token, 'Secreta', (error,result)=>{
        if(error){
            return res.json({
                message: 'No autorizado'
            })
        }
        next();
    })
}

module.exports= Auth 