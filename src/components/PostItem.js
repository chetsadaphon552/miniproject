import React, { useState } from 'react';
import CommentSection from './CommentSection';

const PostItem = ({ post, posts, setPosts, user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(post.content);

  const likePost = () => {
    if (!user) return alert('กรุณาล็อกอินก่อนที่จะกดไลค์โพสต์!');
    const updatedPosts = posts.map((p) =>
      p === post ? { ...p, likes: p.likes + 1 } : p
    );
    setPosts(updatedPosts);
  };

  const deletePost = () => {
    if (!user || user.email !== post.owner)
      return alert('คุณไม่มีสิทธิ์ลบโพสต์นี้!');
    setPosts(posts.filter((p) => p !== post));
  };

  const saveEdit = () => {
    const updatedPosts = posts.map((p) =>
      p === post ? { ...p, content: editedContent } : p
    );
    setPosts(updatedPosts);
    setIsEditing(false);
  };

  return (
    <div>
      <h3>{post.title}</h3>
      {isEditing ? (
        <>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          ></textarea>
          <button onClick={saveEdit}>บันทึก</button>
        </>
      ) : (
        <p>{post.content}</p>
      )}
      <p>จำนวนไลค์: {post.likes}</p>
      <button onClick={likePost}>ไลค์</button>
      {user && user.email === post.owner && (
        <>
          <button onClick={() => setIsEditing(!isEditing)}>แก้ไข</button>
          <button onClick={deletePost}>ลบ</button>
        </>
      )}
      <CommentSection post={post} posts={posts} setPosts={setPosts} user={user} />
    </div>
  );
};

export default PostItem;
