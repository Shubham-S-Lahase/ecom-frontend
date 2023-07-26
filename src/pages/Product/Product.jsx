import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("imgOne");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  let img1Url = data?.attributes?.imgOne?.data?.attributes?.url;
  let img2Url = data?.attributes?.imgTwo?.data?.attributes?.url;
  let img1Src = `http://localhost:1337${img1Url}`;
  let img2Src = `http://localhost:1337${img2Url}`;


  return (
    <div className="product">
      {loading ? (
        "loading.."
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img src={img1Src} alt="" onClick={(e) => setSelectedImg("imgOne")} />
              <img src={img2Src} alt="" onClick={(e) => setSelectedImg("imgTwo")} />
            </div>
            <div className="mainImg">
              <img src={ process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">₹{data?.attributes?.newPrice}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <div>
              <button className="add">
                <AddShoppingCartIcon /> ADD TO CART
              </button>
              <div className="link">
                <div className="item">
                  <FavoriteBorderIcon /> ADD TO WISHLIST
                </div>
                <div className="item">
                  <BalanceIcon /> ADD TO COMPARE
                </div>
              </div>
              <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
