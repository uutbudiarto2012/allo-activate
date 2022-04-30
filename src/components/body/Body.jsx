import "./Body.scss";

import Wallet from "../../img/wallet.svg";
import Point from "../../img/point.svg";
import Benefit from "../../img/benefit.svg";

const Body = () => {
  return (
    <div className="body">
      <div className="item">
        <div className="icon">
          <img src={Wallet} className="icon-img" alt="wallet" />
        </div>
        <div className="text">
          <div className="title">Allo Wallet</div>
          <div className="description">
            Experience convenience in daily transactions and get 5% interest.
          </div>
        </div>
      </div>
      <div className="item">
        <div className="icon">
          <img src={Point} alt="point" className="icon-img" />
        </div>
        <div className="text">
          <div className="title">Coupons & Points</div>
          <div className="description">
            Make shopping and dining more enjoyable with these rewards.
          </div>
        </div>
      </div>
      <div className="item">
        <div className="icon">
          <img src={Benefit} alt="benefit" className="icon-img" />
        </div>
        <div className="text">
          <div className="title">Membership Benefits</div>
          <div className="description">
            Get birthday gift, exclusive access to events and more surprises.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
