import './index.css'

function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <aside>
          <p className="">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
