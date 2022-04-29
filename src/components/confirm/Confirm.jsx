import "../body/Body.scss";
import ConfImage from "../../img/confirm.svg";
const Confirm = ({ onClick }) => {
  return (
    <div className="confirm">
      <div className="modal-box">
        <div className="icon-confirm">
          <img src={ConfImage} alt="conform" />
        </div>
        <div className="title">
          WALLET ACTIVATION <br /> SUCCESSFUL{" "}
        </div>
        <span className="description">
          Your wallet activation is complete. With Allopay you can experience
          convenience in your daily transactions
        </span>
        <div className="divider" />
        <button onClick={onClick} className="done">
          DONE
        </button>
      </div>
    </div>
  );
};

export default Confirm;
