import React from "react";
import "./LoginModal.css";
import {useState} from 'react'
import AdminLoginPage from "../LoginPages/AdminLoginPage";
const LoginModal = () => {
    const [showAdminLoginPage, setShowAdminLoginPage] = useState(false);

    const handleLoginClick = () => {
        setShowAdminLoginPage(true);
    };
   
    const handleCloseLoginModal = () => {
        setShowAdminLoginPage(false);
    };


    return (
       <div className="modal-container">
            <button className="modal-button" onClick={handleLoginClick}>Admin</button>
            {showAdminLoginPage && <AdminLoginPage onClose={handleCloseLoginModal} />}
            <button className="modal-button" onClick={() => window.location.href='/chiefRegistrar'}>Chief Registrar</button>
            <button className="modal-button" onClick={() => window.location.href='/registrar'}>Registrar</button>
            <button className="modal-button" onClick={() => window.location.href='/client'}>Client</button>
       </div>
    );
};
export default LoginModal;