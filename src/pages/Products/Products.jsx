import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {
    const catId = parseInt(useParams().id);
    //console.log(params);
    const [maxPrice, setMAxPrice] = useState(5000);
    const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Hats</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">T-shirt</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span style={{display:"block"}}>₹200 -- To -- ₹5000</span> 
            <input type="range" min={200} max={5000} onChange={(e) => setMAxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
        <h2>Sort by</h2>
        <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")} />
            <label htmlFor="asc">Price (Lowest first)</label>
        </div>
        <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("desc")} />
            <label htmlFor="asc">Price (Highest first)</label>
        </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
