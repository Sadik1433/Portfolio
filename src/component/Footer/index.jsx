function Footer() {
  return (
    <div className="mainContainer " >
      <footer className="footer sm:footer-horizontal footer-center  text-base-content p-4">
        <aside>
          <p className="text-2xl mask-radial-from-stone-50 border-b-2 border-blue-50 shadow-m  ">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
