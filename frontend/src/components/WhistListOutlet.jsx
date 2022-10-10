import React from "react";

const WhistListOutlet = () => {
  return (
    <div className="fo-card">
      <div className="card-header">
        <Link to={`/outlet/${item._id}`}>
          <img src={item.imgUrl} alt={item.name} />
        </Link>
      </div>
      <div className="card-body">
        <h3 className="title">{item.name}</h3>
        <span>{item.address}</span>
      </div>
      <div className="card-footer">
        <button
          onClick={() => {
            addToWhistList();
            ChangeColor();
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </div>
  );
};

export default WhistListOutlet;
