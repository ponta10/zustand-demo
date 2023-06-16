import React from 'react'
import useStore from '../stores/useCreate';
import { useNavigate } from 'react-router';

const Select = () => {
    const selectedPost = useStore(state => state.selectedPost);

    const navigate = useNavigate()

  return (
    <div>
      {selectedPost && (
        <div style={{ padding: "20px" }}>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
          <button onClick={() => navigate('/')}>戻る</button>
        </div>
      )}
    </div>
  );
}

export default Select;
