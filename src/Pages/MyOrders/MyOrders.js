import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';
const MyOrders = () => {
    const [order, setOrder] = useState([]);
    const {user} = useAuth();
    useEffect(()=>{
        fetch('http://localhost:7000/myOrder')
        .then(res => res.json())
        .then(data => setOrder(data))
            
       
    },[]);
    const handleDelete = id => {
        const url = `http://localhost:7000/myOrder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Are you sure to delete?');

                    const remainingOrder = order.filter(singleOrder => singleOrder._id !== id);
                    setOrder(remainingOrder);

                }

            })
    }

    return (
        <div>
            <h1>My Order</h1>
            {
                order.map(order =><div
                key = {order._id}
                >
        
                    {
                        user.email === order.email ?
                            <div className="container">
                                <div className="row manage-order">
                                    <div className="col">
                                        <h4>{order.name}</h4>
                                    </div>
                                    <div className="col">
                                        <h4>{order.email}</h4>
        
                                    </div>
                                    <div className="col">
                                        <h4>{order.phone}</h4>
        
                                    </div>
        
                                </div>
                                <div>
                                    <button  onClick={() => handleDelete(order._id)} className="btn btn-danger">Delete <i class="fas fa-trash-alt"></i></button>
        
                                </div>
                            </div>
                            :
                            <div>
                                <h1>Can't find your email.</h1>
                            </div>
                    }
        
                </div>)
            }
            
        </div>
    );
};

export default MyOrders;

