
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./BloodRequest.css";

function BloodRequest() {
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState("1");
  const [hospital, setHospital] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [urgency, setUrgency] = useState("normal");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(contact)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    alert("Blood request form submitted! Backend integration will come later.");
    navigate("/");
  };

  return (
    <main className="blood-request-page">
      <div className="blood-request-container">
        <div className="request-heading">
          <span>🩸</span>
          <h1>Request Blood</h1>
          <p>Share your requirements to find potential blood donors.</p>
        </div>

        <form className="blood-request-form" onSubmit={handleSubmit}>
          <div className="request-field">
            <label htmlFor="patient-name">Patient Name</label>
            <input
              id="patient-name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter patient name"
              required
            />
          </div>

          <div className="request-field">
            <label htmlFor="request-blood">Required Blood Group</label>
            <select
              id="request-blood"
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

          <div className="request-field">
            <label htmlFor="units">Units Required</label>
            <input
              id="units"
              type="number"
              min="1"
              max="10"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              required
            />
          </div>

          <div className="request-field">
            <label htmlFor="hospital">Hospital Name</label>
            <input
              id="hospital"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              placeholder="Enter hospital name"
              required
            />
          </div>

          <div className="request-field">
            <label htmlFor="request-city">City</label>
            <input
              id="request-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city"
              required
            />
          </div>

          <div className="request-field">
            <label htmlFor="contact">Contact Number</label>
            <input
              id="contact"
              type="tel"
              maxLength={10}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="10-digit mobile number"
              required
            />
          </div>

          <div className="request-field">
            <label htmlFor="urgency">Request Urgency</label>
            <select
              id="urgency"
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="urgent">Urgent</option>
              <option value="critical">Critical</option>
            </select>
          </div>

          <div className="request-field request-full-width">
            <label htmlFor="details">Additional Details</label>
            <textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter any additional information..."
              rows={4}
            />
          </div>

          <div className="request-full-width request-notice">
            Please verify the patient's requirements with the treating
            hospital. Blood group compatibility and donor eligibility
            must be confirmed by qualified medical professionals.
          </div>

          <button type="submit" className="submit-request-btn">
            Submit Blood Request
          </button>
        </form>
      </div>
    </main>
  );
}

export default BloodRequest;
