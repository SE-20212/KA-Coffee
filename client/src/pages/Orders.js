import {  faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { LOGIN_SIGNUP } from '../constants/routes';


function Orders() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const CartProducts = JSON.parse(localStorage.getItem("cartItems"));
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

   useEffect(() => {
     if (!user) {
       return history.push(LOGIN_SIGNUP);
     }
     
   }, [history, user, CartProducts]);
  
  
  
   let qty =CartProducts.map((product) => product.qty).reduce((acc, val) => {
     return acc + val;
   }, 0);
 
    let total = CartProducts.reduce((acc, val) => {
      return acc + val.qty * val.price;
    }, 0);


 
  return (
    <section className="section">
      <div className="order-container">
        <h1 className="mt-4">Hello, {user?.result.name}</h1>
        <div>
         
            <h1 className="text-3xl mt-2">Please fill in your purchase information</h1>
         
            <div className="row">
              <div className="col-2">
                <strong 
                  className="p__cormorant" 
                  >Your Full Name: 
                </strong>
              </div>
              <div className="col-1 text-right">
                <input type="text" className='order-info name'
                onChange={(e) => {
                  setFullName(e.target.value);
                }}>
                </input>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong className="p__cormorant"
                  >Your Phone Number: 
                </strong>
              </div>
              <div className="col-1 text-right">
                <input type="text" className='order-info number' 
                onChange={(e) => {
                    setPhoneNumber(e.target.value);
                }}></input>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong className="p__cormorant"
                  >Your Address: 
                </strong>
              </div>
              <div className="col-1 text-right">
                <input type="text" className='order-info address'
                onChange={(e) => {
                  setAddress(e.target.value);
                }}></input>
              </div>
            </div>
        </div>

        <div className="border-b mt-4"></div>
        {CartProducts && CartProducts.map((product) => (
          <div className="mt-4" key={product._id}>
            <div className="flex items-center">
              <img src={product.selectedFile} alt="" className="h-44" />
              <div>
                <p>{product.name}</p>
                <p>Quantity: {product.qty}</p>
                <p>Price: ${product.price}</p>
              </div>
            </div>
            <div className="border-b mt-2"></div>
          </div>
        ))}
        {CartProducts.length && (
          <div className="flex justify-end mt-4 ">
            <div className="bg-gray-100 p-5">
              <h1>
                Subtotal( {qty <= 1 ? `${qty} item` : `${qty} items`} ): $
                {total.toFixed(2)}
              </h1>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <a className="bg-white-300 border border-gray-400 mt-4 px-2 rounded-sm" href="">
            purchase
          </a>
        </div>
      </div>
    </section>
  );
}

export default Orders
