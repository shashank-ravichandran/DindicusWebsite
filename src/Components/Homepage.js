import { useState } from "react";
import { ListCard } from "./ListCard";

export const Homepage = () => {
  let testData = [
    { id: "1", header: "testValue1 " },
    { id: "2", header: "testValue2" },
    { id: "3", header: "testValue3" },
    { id: "4", header: "testValue4" },
    { id: "5", header: "testValue5" },
    { id: "6", header: "testValue6" },
    { id: "7", header: "testValue7" },
    { id: "8", header: "testValue8" },
    { id: "9", header: "testValue9" },
    { id: "10", header: "testValue10" },
  ];
  let [displayedCards, setDisplayCards] = useState([]);
  let [pageCounter, setPageCounter] = useState(0);

  let handleSearch = (e) => {
    let value = e.target.value;
    if (value !== "") {
      setDisplayCards(
        testData.filter((card) => {
          return card.header.includes(value);
        })
      );
    } else {
      setDisplayCards([]);
    }
  };

  let changePage = (action) => {
    if (action === "back") {
      let newPageCounter = pageCounter - 1 >= 0 ? pageCounter - 1 : 0;
      setPageCounter(newPageCounter);
    } else {
      let newPageCounter =
        (pageCounter + 1) * 8 <= displayedCards.length
          ? pageCounter + 1
          : pageCounter;
      setPageCounter(newPageCounter);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="navbar row">
          <div className="col-8">
            <h4 className="">Title</h4>
          </div>
          <div className="col-4 nav-links-container">
            <h5>Page 1</h5>
            <h5>Page 2</h5>
            <h5>Page 3</h5>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="d-flex">
          <input
            className="search-box"
            placeholder="Placeholder text"
            onChange={(e) => handleSearch(e)}
          />
        </div>

        <div className="d-flex">
          <button className="mx-auto px-3 py-1 custom-btn-1">
            Help button
          </button>
        </div>

        <div className="mx-5 my-2 card-container">
          {displayedCards
            .slice(pageCounter * 8, (pageCounter + 1) * 8)
            .map((card) => (
              <ListCard key={card.id} card={card} />
            ))}
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="mx-5 my-4 pr-4 py-1 custom-btn-1 back-btn"
            onClick={() => changePage("back")}
          >
            <span className="material-symbols-outlined">chevron_left</span>
            <span className="mx-1 my-auto">PREV</span>
          </button>
          <button
            className="mx-5 my-4 pl-3 py-1 custom-btn-1 nxt-btn"
            onClick={() => changePage("next")}
          >
            <span className="mx-1 my-auto">NEXT</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </>
  );
};
