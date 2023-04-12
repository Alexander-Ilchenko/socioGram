import React from "react";
const Profile = () => {
  return (
    <main className="main">
      <div className="user">
        <div className="user-avatar">
          <img src="avatar.png" />
        </div>
        <div className="user-about">
          <ul>
            <li>age:20</li>
            <li>first name:Ivan</li>
            <li>last name: Ivanov</li>
            <li>nationality: russian</li>
          </ul>
        </div>
      </div>
      <div className="my-photo">
        <h3>Photos</h3>
        <div className="photos">
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
        </div>
      </div>
      <div className="post-wrupper">
        <h3>My Posts</h3>
        <ul className="post-list">
          <li className="post-list-item">
            <div>lorem skdnkjnnglndflknlksdfnlkndfn</div>
          </li>
          <li className="post-list-item">
            <div>lorem skdnkjnnglndflknlksdfnlkndfn</div>
          </li>
          <li className="post-list-item">
            <div>lorem skdnkjnnglndflknlksdfnlkndfn</div>
          </li>
          <li className="post-list-item">
            <div>lorem skdnkjnnglndflknlksdfnlkndfn</div>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default Profile;
