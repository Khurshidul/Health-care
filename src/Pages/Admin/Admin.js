import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminPanel from '../AdminPanel/AdminPanel';

const Admin = () => {
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/admin')
            .then(res => res.json())
            .then(data => setAdmins(data));
    }, [])
    return (
        <div>

            <h1>Our Admin panel.</h1>
            <div className="admin-panel">
                {
                    admins.map(admin => <AdminPanel
                        key={admin._id}
                        admin={admin}
                    ></AdminPanel>)
                }


            </div>


        </div>
    );
};

export default Admin;