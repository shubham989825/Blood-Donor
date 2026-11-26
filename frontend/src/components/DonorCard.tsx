
import type { Donor } from "../data/donors";
import "./DonorCard.css";

interface DonorCardProps {
  donor: Donor;
  onViewProfile: (donor: Donor) => void;
}

function DonorCard({ donor, onViewProfile }: DonorCardProps) {
  return (
    <div className="donor-card">
      <div className="donor-card-top">
        <div className="donor-avatar">
          {donor.name.charAt(0)}
        </div>

        <span className={`availability ${donor.available ? "available" : "unavailable"}`}>
          {donor.available ? "Available" : "Unavailable"}
        </span>
      </div>

      <h3>{donor.name}</h3>

      <div className="donor-blood">
        <span>🩸</span>
        {donor.bloodGroup}
      </div>

      <div className="donor-info">
        <p>📍 {donor.city}, {donor.state}</p>
        <p>📏 {donor.distance} away (sample distance)</p>
        <p>🗓 Last donation: {donor.lastDonation}</p>
      </div>

      <button
        className="view-profile-btn"
        onClick={() => onViewProfile(donor)}
      >
        View Profile →
      </button>
    </div>
  );
}

export default DonorCard;
