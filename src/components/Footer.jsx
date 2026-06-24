const Footer = () => {
  return (
    <footer className="text-[var(--color-text-body)]">
      <div className="container mx-auto text-center">
        <p className="text-[var(--color-text-highlight)] font-bold mt-2"> 
          Designed & Developed with ❤️ by Sadik 🚀
            </p>
            <p className="text-[1rem]">
              Thank you for visiting my portfolio. I am continuously learning,
              building, and improving my skills to become a better software
              developer.
          </p>
      </div>
      <div className="container mx-auto text-center font-bold text-[var(--color-text-muted)]  py-2">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
