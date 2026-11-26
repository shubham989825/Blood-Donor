
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [available, setAvailable] = useState(true);

  // Temporary sample profile data
  const user = {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "9876543210",
    role: "Blood Donor",
    bloodGroup: "O+",
    city: "Bhopal",
    state: "Madhya Pradesh",
    lastDonation: "Not updated",
  };

  return (
    <main className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>

          <div>
            <h1>{user.name}</h1>
            <p>{user.role}</p>
          </div>
        </div>

        <div className="profile-content">
          <section className="profile-section">
            <h2>Personal Information</h2>

            <div className="profile-details">
              <div>
                <span>Full Name</span>
                <strong>{user.name}</strong>
              </div>

              <div>
                <span>Email Address</span>
                <strong>{user.email}</strong>
              </div>

              <div>
                <span>Mobile Number</span>
                <strong>{user.phone}</strong>
              </div>

              <div>
                <span>Account Type</span>
                <strong>{user.role}</strong>
              </div>
            </div>
          </section>

          <section className="profile-section">
            <h2>Blood Donation Information</h2>

            <div className="profile-details">
              <div>
                <span>Blood Group</span>
                <strong className="blood-group">{user.bloodGroup}</strong>
              </div>

              <div>
                <span>City</span>
                <strong>{user.city}</strong>
              </div>

              <div>
                <span>State</span>
                <strong>{user.state}</strong>
              </div>

              <div>
                <span>Last Donation</span>
                <strong>{user.lastDonation}</strong>
              </div>
            </div>

            <div className="availability-row">
              <div>
                <h3>Donation Availability</h3>
                <p>Allow recipients to see that you may be available.</p>
              </div>

              <label className="availability-switch">
                <input
                  type="checkbox"
                  checked={available}
                  onChange={(e) => setAvailable(e.target.checked)}
                />
                <span className="availability-slider"></span>
              </label>
            </div>

            <p className="availability-status">
              Status: {available ? "Available" : "Unavailable"}
            </p>
          </section>

          <div className="profile-actions">
           <Link to="/edit-profile" className="edit-profile-btn">
  Edit Profile
</Link>

            <Link to="/" className="back-home-btn">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
