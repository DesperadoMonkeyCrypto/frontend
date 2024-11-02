// src/components/Orders.js
import React, { useEffect, useState } from 'react';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch orders from the backend
        fetch('http://localhost:3000/orders')
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>
                            <p>Order ID: {order.id}</p>
                            <p>Description: {order.description}</p>
                            <p>Price: ${order.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Orders;
