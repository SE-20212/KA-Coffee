// this gives us access to the real Model
import Order from "../models/orderDB.js";
import User from '../models/usersDB.js';
// getting products from the DB
export const getOrder = async (req, res) => {
    const { name, phone_number, address, productName, price, quantity, status, total } = req.body;

    try {
        const order = await Order.create({
          'customer.name': name, 
          'customer.phone_number': phone_number,
          'customer.address': address,
          'product.name': productName,
          'product.price': price,
          'product.quantity': quantity,
          'status': status,
          'total': total,
        });
        await order.save()
        const filter = {name: name};

        const update = {$inc : {point: 10}};
        await User.findOneAndUpdate(filter, update);
        
        res.status(200).json(order);
    } catch (error) {
        return res.status(500).json({message:"something went wrong"})
    }

};
