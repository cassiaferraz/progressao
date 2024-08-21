import React, { useState } from 'react';

const avatars = [
  'avatar1.png',
  'avatar2.png',
  'avatar3.png',
  'avatar4.png',
  'avatar5.png',
  'avatar6.png'
];

function AvatarSelector ({ onSelect }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleSelect = (avatar) => {
    setSelectedAvatar(avatar);
    onSelect(avatar);
  };

  return (
    <div>
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={`/path/to/avatars/${avatar}`}
          alt={`Avatar ${index + 1}`}
          onClick={() => handleSelect(avatar)}
          style={{ border: selectedAvatar === avatar ? '2px solid blue' : 'none' }}
        />
      ))}
    </div>
  );
};

export default AvatarSelector;