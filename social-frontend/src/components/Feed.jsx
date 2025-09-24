import { useEffect, useState } from 'react';
import api from '../api/api';

function ExamplePost() {
  const [likes, setLikes] = useState(128);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    { id: 1, author: 'Angelin', text: 'Love this!' },
    { id: 2, author: 'Vaibhav', text: 'So cool 🔥' },
  ]);

  const addComment = () => {
    if (!commentText.trim()) return;
    const next = { id: Date.now(), author: 'You', text: commentText.trim() };
    setComments(prev => [...prev, next]);
    setCommentText('');
  };

  return (
    <div style={{border:'1px solid #333', padding:10, marginBottom:16}}>
      <div style={{fontWeight:700}}>Example User</div>
      <div style={{margin:'8px 0'}}>
        <img src="/images/harryporter.jpg" alt="post" style={{maxWidth:'100%', borderRadius:8}} onError={(e)=>{ e.currentTarget.src='/images/pic.jpg'; }} />
        {/* To demo video instead of image, comment the img above and uncomment below if /videos/f1.mp4 exists */}
        {/* Video demo - uncomment when video file exists
        <video controls style={{maxWidth:'100%', borderRadius:8}}>
          <source src="/videos/f1.mp4" type="video/mp4" />
        </video>
        */}
      </div>
      <div>
        <button onClick={()=>setLikes(likes+1)}>Like ({likes})</button>
      </div>
      <div style={{marginTop:8}}>
        <input value={commentText} onChange={e=>setCommentText(e.target.value)} placeholder="Write comment..." />
        <button onClick={addComment}>Comment</button>
      </div>
      <div>
        {comments.map(c => (
          <div key={c.id} style={{marginTop:6}}><b>{c.author}</b>: {c.text}</div>
        ))}
      </div>
    </div>
  );
}

function PostItem({p}) {
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(()=>{ api.get(`/posts/${p.id}/likes`).then(r=>setLikes(r.data.likes)).catch(()=>{}); api.get(`/posts/${p.id}/comments`).then(r=>setComments(r.data)).catch(()=>{}); },[p.id]);

  const submitComment = async () => {
    const user = JSON.parse(localStorage.getItem('voxora_user') || 'null');
    if(!user) return alert('Login first');
    await api.post(`/posts/${p.id}/comment`, { authorId: user.id, text: comment });
    setComment('');
    const r = await api.get(`/posts/${p.id}/comments`); setComments(r.data);
  };

  const toggleLike = async () => {
    const user = JSON.parse(localStorage.getItem('voxora_user') || 'null');
    if(!user) return alert('Login first');
    const r = await api.post(`/posts/${p.id}/like`, { userId: user.id });
    setLikes(r.data.likes);
  };

  return (
    <div style={{border:'1px solid #333', padding:10, marginBottom:10}}>
      <div style={{fontWeight:700}}>{p.author?.username || 'Unknown'}</div>
      <div style={{margin:'8px 0'}}>{p.content}</div>
      <div style={{fontSize:12, color:'#aaa'}}>{p.createdAt}</div>
      <div style={{marginTop:8}}>
        <button onClick={toggleLike}>Like ({likes})</button>
      </div>
      <div style={{marginTop:8}}>
        <input value={comment} onChange={e=>setComment(e.target.value)} placeholder="Write comment..." />
        <button onClick={submitComment}>Comment</button>
      </div>
      <div>
        {comments.map(c=>(<div key={c.id} style={{marginTop:6}}><b>{c.author?.username}</b>: {c.text}</div>))}
      </div>
    </div>
  );
}

export default function Feed(){
  const [posts,setPosts]=useState([]);
  const [content,setContent]=useState('');

  const fetch = ()=> api.get('/posts').then(r=>setPosts(r.data)).catch(()=>{});
  useEffect(() => { fetch(); }, []);

  const submitPost = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if(!user) return alert('Login first');
    await api.post('/posts', { authorId: user.id, content });
    setContent('');
    fetch();
  };

  return (
    <div>
      <h2>Feed</h2>
      <ExamplePost />
      <form onSubmit={submitPost}>
        <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="What's happening?" rows={3} style={{width:'100%'}} />
        <button type="submit">Post</button>
      </form>

      <div style={{marginTop:20}}>
        {posts.map(p=> <PostItem key={p.id} p={p} />)}
      </div>
    </div>
  );
}
