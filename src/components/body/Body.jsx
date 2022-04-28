import "./Body.scss";

const Body = () => {
  return (
    <div className="body">
      <div className="item">
        <div className="icon">
            <img src="/wallet.svg" className="icon-img" alt="wallet" />
        </div>
        <div className="text">
          <div className="title">Allow Wallet</div>
          <div className="description">
            Experience convenience in daily transactions and get 5% interest.
          </div>
        </div>
      </div>
      <div className="item">
        <div className="icon">
            <img src="/point.svg" alt="point" className="icon-img" />
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
            <img src="/benefit.svg" alt="benefit" className="icon-img" />
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
