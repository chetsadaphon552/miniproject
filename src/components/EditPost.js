import React, { useState } from 'react';

const AddPost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addPost({ title, content, likes: 0, comments: [] });
      setTitle('');  
      setContent('');  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="หัวข้อโพสต์"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="เนื้อหาของโพสต์"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">เพิ่มโพสต์</button>
    </form>
  );
};

export default AddPost;
