import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Winter Coat",
      desc: "Pure Woolen made",
      isNew: true,
      oldPrice: 1099,
      newPrice: 999,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3210714/pexels-photo-3210714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Hoodie",
      desc: "Best Premium Quality",
      isNew: true,
      oldPrice: 1099,
      newPrice: 999,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {data?.map(item => (
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">
                    1 X {item.newPrice}
                </div>
            </div>
            <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$171</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
