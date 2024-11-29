import React, { useState } from 'react';

const Register = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password) {
      alert('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      alert('อีเมลนี้ถูกลงทะเบียนแล้ว!');
    } else {
      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('สมัครสมาชิกสำเร็จ!');
      setCurrentPage('login'); 
    }
  };

  return (
    <div>
      <h2>สมัครสมาชิก</h2>
      <input
        type="email"
        placeholder="อีเมล"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="รหัสผ่าน"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>สมัครสมาชิก</button>
    </div>
  );
};

export default Register;
