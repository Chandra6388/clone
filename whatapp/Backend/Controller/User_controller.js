const User = require('../Modle/User_model')

const addUser = async (request, response) => {

    try {
        let exist = await User.findOne({ sub: request.body.sub });

        if(exist) {
            return response.status(200).json('user already exists');
        }

        const newUser = new User(request.body);
        await newUser.save();
       return  response.status(200).json(newUser);
    } catch (error) {
       return  response.status(500).json(error);
    }
}

const getAllUsers = async (req,res)=>{
    try{
     const users=  await User.find();
       
        return res.status(200).json(users)

    }
    catch(error){
     return  response.status(500).json(error);

    }
}

module.exports = { addUser, getAllUsers };

 

