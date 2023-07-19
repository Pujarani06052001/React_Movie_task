import React, { useState } from 'react';

const LikeButton = ({ handleLike, handleDislike, voteCount }) => {
  return (
    <div>
      <div className="box5">
        <img src="Icon - Like (1).png" alt="Like" onClick={handleLike} />
      </div>
      <div className="box6">
        <p>{voteCount}</p>
      </div>
      <div className="box7">
        <img src="Icon - Like (2).png" alt="Dislike" onClick={handleDislike} />
      </div>
    </div>
  );
};
export default LikeButton;
