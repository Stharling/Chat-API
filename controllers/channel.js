import Account from "../model/account.js";

export const createAccount = async (req, res)=>{
    const account = req.body;
    const accountDB = new Account({...account});
 
    try {
         const savedAccount = await accountDB.save();
         console.log("User added successfully");
         res.status(200).json(savedAccount);

    }catch(err ){
        console.log("Error adding User");
        res.status(500).json({ message: err });
    }
}
