import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
    const data = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          img2: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "Winter Coat",
          isNew: true,
          oldPrice: 1099,
          newPrice: 999,
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/3210714/pexels-photo-3210714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "Hoodie",
          isNew: true,
          oldPrice: 1099,
          newPrice: 999,
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/991511/pexels-photo-991511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "T-Shirt",
          isNew: true,
          oldPrice: 1099,
          newPrice: 999,
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "Jeans",
          isNew: true,
          oldPrice: 1099,
          newPrice: 999,
        },
      ];
    return(
        <div className="list">
            {
            data?.map(item=>(
                <Card item={item} key={item.id} />
            ))
            }
        </div>
    )
}

export default List;