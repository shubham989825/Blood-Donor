
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";

function EditProfile() {
  const navigate = useNavigate();

  const [name, setName] = useState("Rahul Sharma");
  const [phone, setPhone] = useState("9876543210");
  const [bloodGroup, setBloodGroup] = useState("O+");
  const [city, setCity] = useState("Bhopal");
  const [state, setState] = useState("Madhya Pradesh");
  const [lastDonation, setLastDonation] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      alert("Enter a valid 10-digit mobile number.");
      return;
    }

    alert("Profile updated in this demo! Database integration will come later.");
    navigate("/profile");
  };

  return (
    <main className="edit-profile-page">
      <div className="edit-profile-container">
        <h1>Edit Your Profile</h1>
        <p>Keep your information up to date.</p>

        <form className="edit-profile-form" onSubmit={handleSubmit}>
          <div className="edit-form-group">
            <label htmlFor="edit-name">Full Name</label>
            <input
              id="edit-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="edit-form-group">
            <label htmlFor="edit-phone">Mobile Number</label>
            <input
              id="edit-phone"
              type="tel"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="edit-form-group">
            <label htmlFor="edit-blood">Blood Group</label>
            <select
              id="edit-blood"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              required
            >
              <option value="">Select Blood Group</option>
              {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                (group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="edit-form-group">
            <label htmlFor="edit-city">City</label>
            <input
              id="edit-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div className="edit-form-group">
            <label htmlFor="edit-state">State</label>
            <input
              id="edit-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>

          <div className="edit-form-group">
            <label htmlFor="edit-donation">Last Blood Donation Date</label>
            <input
              id="edit-donation"
              type="date"
              value={lastDonation}
              onChange={(e) => setLastDonation(e.target.value)}
            />
          </div>

          <div className="edit-profile-actions">
            <button type="submit">Save Changes</button>
            <button
              type="button"
              className="cancel-edit-btn"
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default EditProfile;
