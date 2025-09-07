const Footer = () => {

  const dateObject = new Date()
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://www.linkedin.com/in/mohan-p-2b520417b" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2" />
          </div>
        </a>

        <a href="https://github.com/aspmohan15" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://crazytechpark.blogspot.com" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/blogger.png" alt="twitter" className="w-1/2 h-1/2" />
          </div>
        </a>

        <a href="https://www.youtube.com/@crazyclicks5236" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/youtube.png" alt="twitter" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.instagram.com/dairy_of_mohan" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </div>
        </a>
      </div>

      <p className="text-white-500">© {dateObject.getUTCFullYear()} Mohan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
