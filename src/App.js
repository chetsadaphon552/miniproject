import React, { useState } from 'react';
import PostList from './components/PostList';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null); 
  const [currentPage, setCurrentPage] = useState('login'); 
  return (
    <div className="App">
      <h1>Twitter Fake</h1>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={() => setUser(null)}>Logout</button>
          <PostList posts={posts} setPosts={setPosts} user={user} />
        </div>
      ) : currentPage === 'login' ? (
        <Login setUser={setUser} setCurrentPage={setCurrentPage} />
      ) : (
        <Register setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default App;
