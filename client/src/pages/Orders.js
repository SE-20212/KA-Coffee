import {  faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { LOGIN_SIGNUP } from '../constants/routes';
import {getOrder} from '../redux/actions/orders'

const orderDetail = {
  name: "",
  phone_number: "",
  address: "",
  productName: "",
  price: 0,
  quantity: 0,
  status: "",
  total: 0,
};

function Orders() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const CartProducts = JSON.parse(localStorage.getItem("cartItems"));
  const dispatch = useDispatch()
  // const [fullName, setFullName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [address, setAddress] = useState('');
  const [formData, setFormData] = useState(orderDetail);

    useEffect(() => {
      if (!user) {
        return history.push(LOGIN_SIGNUP);
      }
      

      // setFormData({ ...formData, total: total.toFixed(2) })
    }, [history, user, CartProducts]);

    useEffect(() => {
      CartProducts.map((product) => {
        console.log(product.name);
        setFormData({ ...formData, productName: product.name });
        setFormData({ ...formData, price: product.price });
        setFormData({ ...formData, quantity: product.quantity });
      });
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(getOrder(formData,history));
      console.log(formData);

    }
  
    let qty =CartProducts.map((product) => product.qty).reduce((acc, val) => {
      return acc + val;
    }, 0);
 
    let total = CartProducts.reduce((acc, val) => {
      return acc + val.qty * val.price;
    }, 0);

    let cartProduct = {
      name: "",
      price: 0,
      quantity: 0,
    };

    CartProducts.map((product) => {
      cartProduct.name = product.name;
      cartProduct.price = product.price;
      cartProduct.quantity = product.quantity;
    });

    useEffect(() => {
      setFormData({ ...formData, total: total.toFixed(2) }) ;
      // setFormData({ ...formData, productName: cartProduct.name});
      // setFormData({ ...formData, price: cartProduct.price});
      // setFormData({ ...formData, quantity: cartProduct.quantity});
    }, []);
    
    // setFormData({ ...formData, total: total.toFixed(2) })
    
    
    // CartProducts.map((product) => {
    //   setFormData({ ...formData, productName: product.name });
    //   setFormData({ ...formData, price: product.price });
    //   setFormData({ ...formData, quantity: product.quantity });
    // });
    return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
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
                  <input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type="text"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <strong className="p__cormorant"
                    >Your Phone Number: 
                  </strong>
                </div>
                <div className="col-1 text-right">
                  <input
                    value={formData.phone_number}
                    onChange={(e) =>
                      setFormData({ ...formData, phone_number: e.target.value })
                    }
                    type="text"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <strong className="p__cormorant"
                    >Your Address: 
                  </strong>
                </div>
                <div className="col-1 text-right">
                  <input
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    type="text"
                    className="form-input"
                  />
                </div>
              </div>
          </div>

          <div className="border-b mt-4"></div>
          {/* {CartProducts.map((product) => {
            setFormData({ ...formData, productName: product.name });
            setFormData({ ...formData, price: product.price });
            setFormData({ ...formData, quantity: product.quantity });
          })} */}
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

          {/* {setFormData({ ...formData, total: total.toFixed(2) })} */}

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
            <button className="form-button">Purchase</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Orders
