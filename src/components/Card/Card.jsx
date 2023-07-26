import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({item}) => {
  // console.log(item);
  let img1Url = item.attributes?.imgOne?.data?.attributes?.url;
  let img2Url = item.attributes?.imgTwo?.data?.attributes?.url;
  let img1Src = `http://localhost:1337${img1Url}`;
  let img2Src = `http://localhost:1337${img2Url}`;
    return(
      <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
            {item?.attributes.isNew && <span>New Season</span>}
            <img src={img1Src} alt="" className="mainImg" />
            <img src={img2Src} alt="" className="secondImg" />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3>₹{item?.attributes.oldPrice}</h3>
            <h3>₹{item?.attributes.newPrice}</h3>
        </div>
      </div>
      </Link>
    )
}

export default Card;