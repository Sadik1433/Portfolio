const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 mt-2">
          Designed & Developed with ❤️ by Sadik 🚀
            <p className="text-[1rem]">
              Thank you for visiting my portfolio. I am continuously learning,
              building, and improving my skills to become a better software
              developer.
            </p>
          </p>
      </div>
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
