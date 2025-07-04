import React from 'react';

function ProfileCard({ name, email, avatarUrl }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
      <img src={avatarUrl} alt="avatar" style={{ width: '100%' }} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default ProfileCard;
