import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const AdminLoginPage = ({ handleSubmit }) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate();
 const handleEmailChange = (e) => {
    setEmail(e.target.value);
 };

 const handlePasswordChange = (e) => {
    setPassword(e.target.value);
 };
 const handleLogin = () => {
    if (!email || !password) return;
    // submit to server here...
    console.log(`${email} ${password}`);
    navigate('/admin/dashboard', { replace: true });
 };

 return (
    <div className="login-container">
      <h1>Admin Login</h1>
      <input type="email" placeholder="Email" onChange={handleEmailChange} />
      <input type="password" placeholder="Password" onChange={handlePasswordChange} />
      <button onClick={handleLogin}>Login</button>
      {/* navigate('/'); */}
    </div>
 );
};

export default AdminLoginPage;