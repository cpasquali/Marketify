import './footer.css'

export const Footer = () => {
  return (
<footer>
    <div className="footer-container bg-body-tertiary">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>Learn more about our company and our mission.</p>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:info@example.com">info@example.com</a></li>
          <li><a href="tel:+1234567890">+1 234 567 890</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul className="social-media">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}
