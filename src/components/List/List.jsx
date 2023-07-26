import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ catId, maxPrice, sort, subCats }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][newPrice][$lte]=${maxPrice}&sort=[newPrice]:${sort}`
  );
  // console.log(data);
  return (
    <div className="list">
      {
      loading ? "loading" : data?.map((item) => <Card item={item} key={item.id} />)
      }
    </div>
  );
};

export default List;
