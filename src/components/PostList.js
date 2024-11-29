import React, { useState } from 'react';
import PostItem from './PostItem';
import AddPost from './AddPost';

const PostList = ({ posts, setPosts, user }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const addPost = (newPost) => {
    // เพิ่ม owner เพื่อระบุว่าโพสต์นี้ถูกสร้างโดยใคร
    const postWithOwner = { ...newPost, owner: user.email };
    setPosts([...posts, postWithOwner]);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>โพสต์ทั้งหมด</h2>
      
      {/* ส่วนการค้นหาหรือฟิลเตอร์โพสต์ */}
      <input
        type="text"
        placeholder="ค้นหาโพสต์..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* เพิ่มโพสต์ใหม่ ถ้ามีผู้ใช้ล็อกอิน */}
      {user && <AddPost addPost={addPost} />}

      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <PostItem
              key={index}
              post={post}
              posts={posts}
              setPosts={setPosts}
              user={user}
            />
          ))
        ) : (
          <p>ไม่พบโพสต์ที่ค้นหา</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
