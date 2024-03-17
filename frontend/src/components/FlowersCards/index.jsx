import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { SearchContext } from "../../context/SearchContext";
const FlowersCards = () => {
  const { search, handleSearch } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [sortproperty, setSortproperty] = useState(null);
  async function GetFetch() {
    try {
      fetch("http://localhost:3100/flowers")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);
  async function deleteItem(id) {
    await fetch("http://localhost:3100/flowers/" + id, { method: "DELETE" });
    await GetFetch();
  }
  return (
    <>
      <div className="sort_search">
        <input type="text" onChange={(e) => handleSearch(e)} />
        <button
          onClick={() => setSortproperty({ property: "price", asc: true })}
        >
          min-max
        </button>
        <button
          onClick={() => setSortproperty({ property: "price", asc: false })}
        >
          max-min
        </button>
        <button onClick={() => setSortproperty(null)}>default</button>
      </div>
      <div className="flowers_cards">
        {data &&
          [...data]
            .sort((a, b) => {
              if (sortproperty && sortproperty.asc) {
                return a[sortproperty.property] > b[sortproperty.property]
                  ? 1
                  : b[sortproperty.property] > a[sortproperty.property]
                  ? -1
                  : 0;
              } else if (sortproperty && sortproperty.asc === false) {
                return a[sortproperty.property] < b[sortproperty.property]
                  ? 1
                  : b[sortproperty.property] < a[sortproperty.property]
                  ? -1
                  : 0;
              } else {
                return 0;
              }
            })
            .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
            .map((x) => (
              <div className="flowers_card">
                <div className="flowers_img">
                  <img src={x.img} alt="" />
                  <div className="icons">
                    <i
                      onClick={() => deleteItem(x._id)}
                      class="fa-solid fa-trash"
                    ></i>
                  </div>
                </div>
                <div className="flowers_text">
                  <h4>{x.name}</h4>
                  <p>${x.price}</p>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default FlowersCards;
