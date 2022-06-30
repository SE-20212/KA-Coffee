// this gives us access to the real Model
import Order from "../models/orderDB.js";
// import User from '../models/usersDB.js';
// getting products from the DB
export const getOrder = async (req, res) => {
    const { name, phone_number, address } = req.body;

    try {
        const order = await Order.create({
          name: name, 
          phone_number: phone_number,
          address: address,
        });
        // const member = User.findOne(name)
        // if(member) {
            
        // }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }

};
