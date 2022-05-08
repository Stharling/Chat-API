import User from "../model/user.js";

export const createUsers = async (req, res)=>{
    const user = req.body;
    const userDB = new User({...user});

    try {
         const savedUser = await userDB.save();
         console.log("User added successfully");
         res.status(200).json(savedUser);

    }catch(err ){
        console.log("Error adding User");
        res.status(500).json({ message: err });
    }
}

export const getUsers = async (req, res)=>{
    try {
        const listUser = await User.find();
        res.status(200).json(listUser);

   }catch(err ){
       console.log("Error listing User");
       res.status(500).json({ message: err });
       
   }
 
};

export const getUserByID = async (req, res)=>{
    const {id} = req.params;
    
    try {
        const listUser = await User.findById(id);
        res.status(200).json(listUser);

   }catch(err ){
       console.log(err);
       res.status(500).json({ message: err });
   }

};

export const deleteUser = async (req, res)=>{
    const {id} = req.params;
    
    try {
        const removeUser = await User.deleteMany({ _id: id});
        res.status(200).json(removeUser);

   }catch(err ){
       console.log(err);
       res.status(500).json({ message: err });
   }

};

export const updateUser = async (req, res)=>{
    const {id} = req.params;
    
    try {
        const updatedUser = await User.updateOne({ _id: id},
        { $set : { firstName: req.body.firstName, 
                   lastName: req.body.lastName, 
                   age: req.body.age }
        });
        
        res.status(200).json(updatedUser);

   }catch(err ){
       console.log(err);
       res.status(500).json({ message: err });
   }
};