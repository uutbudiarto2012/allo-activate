import { useState } from "react";
import Confirm from "../confirm/Confirm";
import "./Footer.scss";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(true);
  };
  return (
    <div className="footer">
      <span className="term">
        By accepting your treat, you agree to the
        <a
          href="https://www.allobank.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy |
        </a>
        <a
          href="https://www.allobank.com/term-condition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms & Conditions
        </a>
      </span>
      <button onClick={handleModal} className="btn-get-wallet">
        Get My Wallet
      </button>
      {open && <Confirm onClick={() => setOpen(false)} />}
    </div>
  );
};

export default Footer;
