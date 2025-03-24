import React from "react";
import "../css/footer.css"; // Import a separate CSS file for footer styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Victor Hernandez. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.conservationcouncil.ca%2Fone-fish-two-fish-maybe-thats-too-few-fish%2F&psig=AOvVaw10Y8dv-AvXoRweJsdlEE_M&ust=1742939336027000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPittpLZo4wDFQAAAAAdAAAAABAE" target="_blank" rel="noopener noreferrer">Fish</a>
          <a href="https://github.com/VicciHz" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/victor__hz" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
