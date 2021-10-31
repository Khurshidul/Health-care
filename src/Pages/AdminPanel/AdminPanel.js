import React from 'react';
import './AdminPanel.css';
const AdminPanel = ({admin}) => {
    const {name,username, email, phone } = admin;
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <div class ="card-body">
                        <h5 class ="card-title">{name}</h5>
                        <h6>{username}</h6>
                        <p>{email}</p>
                        <p>{phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;