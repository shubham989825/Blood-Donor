
import { useState } from "react";
import { donors } from "../data/donors";
import type { Donor } from "../data/donors";
import DonorCard from "../components/DonorCard";
import { useSearchParams } from "react-router-dom";
import "./Donors.css";

interface DonorsProps {
  initialBloodGroup?: string;
  initialLocation?: string;
}

function Donors({
  initialBloodGroup = "",
  initialLocation = "",
}: DonorsProps) {
    const [searchParams] = useSearchParams();

const initialGroup = searchParams.get("bloodGroup") || "";
const initialCity = searchParams.get("location") || "";
 const [bloodGroup, setBloodGroup] = useState(initialBloodGroup);
const [location, setLocation] = useState(initialCity);
  const [availability, setAvailability] = useState("all");
  const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null);

  const filteredDonors = donors.filter((donor) => {
    const matchesBlood =
      !bloodGroup || donor.bloodGroup === bloodGroup;

    const matchesLocation =
      !location ||
      donor.city.toLowerCase().includes(location.toLowerCase()) ||
      donor.state.toLowerCase().includes(location.toLowerCase());

    const matchesAvailability =
      availability === "all" ||
      (availability === "available" && donor.available) ||
      (availability === "unavailable" && !donor.available);

    return matchesBlood && matchesLocation && matchesAvailability;
  });

  return (
    <section className="donors-page">
      <div className="donors-header">
        <span>FIND BLOOD DONORS</span>
        <h1>Available Blood Donors</h1>
        <p>Find potential donors based on blood group and location.</p>
      </div>

      <div className="donor-filters">
        <div>
          <label>Blood Group</label>
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">All Groups</option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
              (group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <label>Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city or state"
          />
        </div>

        <div>
          <label>Availability</label>
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          >
            <option value="all">All Donors</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
      </div>

      <div className="results-heading">
        <h2>Donor Results</h2>
        <span>{filteredDonors.length} donors found (sample data)</span>
      </div>

      {filteredDonors.length > 0 ? (
        <div className="donors-grid">
          {filteredDonors.map((donor) => (
            <DonorCard
              key={donor.id}
              donor={donor}
              onViewProfile={setSelectedDonor}
            />
          ))}
        </div>
      ) : (
        <div className="no-donors">
          <span>🩸</span>
          <h3>No donors found</h3>
          <p>Try changing your blood group or location.</p>
        </div>
      )}

      {selectedDonor && (
        <div className="donor-modal-overlay" onClick={() => setSelectedDonor(null)}>
          <div className="donor-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedDonor(null)}
            >
              ×
            </button>

            <div className="donor-avatar modal-avatar">
              {selectedDonor.name.charAt(0)}
            </div>

            <h2>{selectedDonor.name}</h2>
            <p>Blood Group: <strong>{selectedDonor.bloodGroup}</strong></p>
            <p>Location: {selectedDonor.city}, {selectedDonor.state}</p>
            <p>Availability: {selectedDonor.available ? "Available (self-reported)" : "Unavailable"}</p>
            <p>Last Donation: {selectedDonor.lastDonation}</p>

            <p className="modal-note">
              Sample donor profile. Contact details will be available
              through a consent-based request in the real application.
            </p>

            <button
              className="view-profile-btn"
              onClick={() => setSelectedDonor(null)}
            >
              Close Profile
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Donors;
