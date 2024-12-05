const userModel = require('../models/user-model')

const getAllUsers = async (req,res) =>{
    try{
        const user = await userModel.getAllUsers()
        if(!user) res.json({message: 'User Not Found'})
        res.json(user)
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'Error Get All Users'})
    }
}

module.exports = {getAllUsers}