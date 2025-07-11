import './index.css'

function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <aside>
          <p className="">
            © Sadik {new Date().getFullYear()} Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
