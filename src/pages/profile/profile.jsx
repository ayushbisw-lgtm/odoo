import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image">
          👤
        </div>

        <h2>Sayantani Chatterjee</h2>
        <p className="designation">Frontend Developer</p>

        <div className="profile-details">
          <p><strong>Employee ID:</strong> EMP001</p>
          <p><strong>Email:</strong> sayantani@example.com</p>
          <p><strong>Department:</strong> IT</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
        </div>

        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;