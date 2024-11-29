import React, { useState } from 'react';
const Login = ({ setUser, setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setUser({ email }); 
      setCurrentPage('posts'); 
    } else {
      alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง!');
    }
  };

  return (
    <div>
      <h2>เข้าสู่ระบบ</h2>
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
      <button onClick={handleLogin}>เข้าสู่ระบบ</button>
      <p>
        ยังไม่มีบัญชีใช่ไหม?{' '}
        <button onClick={() => setCurrentPage('register')}>สมัครสมาชิก</button>
      </p>
    </div>
  );
};

export default Login;
