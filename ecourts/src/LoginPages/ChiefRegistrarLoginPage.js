import React, { useState } from 'react';

const ChiefRegistrarLogin = ({ handleSubmit }) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleEmailChange = (e) => {
    setEmail(e.target.value);
 };

 const handlePasswordChange = (e) => {
    setPassword(e.target.value);
 };

 const handleLogin = () => {
    handleSubmit(email, password);
 };

 return (
    <div className="login-container">
      <h1>Chief Registrar Login</h1>
      <input type="email" placeholder="Email" onChange={handleEmailChange} />
      <input type="password" placeholder="Password" onChange={handlePasswordChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
 );
};

export default ChiefRegistrarLogin;