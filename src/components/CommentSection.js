import React, { useState } from 'react';

const CommentSection = ({ post, posts, setPosts, user }) => {
  const [comment, setComment] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!comment) {
      alert('กรุณากรอกคอมเมนต์');
      return;
    }

    const updatedPosts = posts.map((p) =>
      p === post ? { ...p, comments: [...p.comments, comment] } : p
    );
    setPosts(updatedPosts);
    setComment('');
  };

  return (
    <div>
      <h4>คอมเมนต์</h4>
      {post.comments && post.comments.length > 0 ? (
        <ul>
          {post.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      ) : (
        <p>ยังไม่มีคอมเมนต์</p>
      )}
      {user && (
        <form onSubmit={handleAddComment}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="เขียนคอมเมนต์..."
          ></textarea>
          <button type="submit">เพิ่มคอมเมนต์</button>
        </form>
      )}
    </div>
  );
};

export default CommentSection;
