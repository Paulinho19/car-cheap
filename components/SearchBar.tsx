"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

("");

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {
    console.log("searching...");
  };

  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}
