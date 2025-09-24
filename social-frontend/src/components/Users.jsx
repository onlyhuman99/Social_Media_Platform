import { useEffect, useState } from 'react';
import api from '../api/api';

export default function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{ api.get('/users').then(r=>setUsers(r.data)).catch(()=>{}) },[]);
  return (
    <div>
      <h2>All Users</h2>
      <ul>{users.map(u=>(<li key={u.id}>{u.username} ({u.email})</li>))}</ul>
    </div>
  );
}
