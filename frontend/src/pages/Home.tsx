
import { useState } from "react";
import "./Home.css";

function Home() {
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!location.trim()) {
      setMessage("Please enter your city or location.");
      return;
    }

    setMessage(
      `Searching for ${bloodGroup} blood donors near ${location}.`
    );
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-tag">
            <span>❤️</span> Be someone's reason to live
          </div>

          <h1>
            Donate Blood.
            <br />
            <span>Save Lives.</span>
          </h1>

          <p>
            Every drop counts. Connect with blood donors in your
            area and help someone get a second chance at life.
          </p>

          <div className="hero-buttons">
            <a href="#find-donors" className="primary-btn">
              Find Blood Donors →
            </a>

            <a href="/register" className="secondary-btn">
              Become a Donor
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>24/7</h3>
              <span>Search Access</span>
            </div>
            <div>
              <h3>8</h3>
              <span>Blood Groups</span>
            </div>
            <div>
              <h3>1 Life</h3>
              <span>Can Save Many</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="blood-circle">
            <span>🩸</span>
          </div>

          <div className="floating-card card-one">
            <span>❤️</span>
            <div>
              <strong>Be a Hero</strong>
              <small>Your donation matters</small>
            </div>
          </div>

          <div className="floating-card card-two">
            <span>🩸</span>
            <div>
              <strong>Every Drop Counts</strong>
              <small>Donate blood, save lives</small>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section" id="find-donors">
        <div className="search-heading">
          <span>FIND A DONOR</span>
          <h2>Find Blood Donors Near You</h2>
          <p>Search by blood group and your location.</p>
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <div className="form-group">
            <label>Blood Group</label>
            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                (group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="form-group location-group">
            <label>Your Location</label>
            <input
              type="text"
              placeholder="Enter city or PIN code"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button type="submit" className="search-btn">
            Search Donors →
          </button>
        </form>

        {message && <p className="search-message">{message}</p>}
      </section>

      {/* How it works */}
      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Saving Lives Is Simple</h2>
          <p>Three simple steps to make a difference.</p>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon">🔍</div>
            <h3>Search Donors</h3>
            <p>
              Find blood donors by selecting your required blood
              group and location.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">🤝</div>
            <h3>Connect</h3>
            <p>
              View donor profiles and send a blood request to
              connect with available donors.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">❤️</div>
            <h3>Save Lives</h3>
            <p>
              Coordinate with the donor and an authorized blood
              bank or hospital.
            </p>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="about-section" id="about">
        <div>
          <span>OUR MISSION</span>
          <h2>One Donation Can Make a Difference</h2>
          <p>
            Blood Donor aims to bring donors and people in need
            closer together. Our mission is to make finding
            potential blood donors easier, faster and more
            accessible.
          </p>
        </div>

        <div className="about-highlight">
          <span>🩸</span>
          <h3>Give Blood. Give Hope.</h3>
          <p>A small act of kindness can make a big difference.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
