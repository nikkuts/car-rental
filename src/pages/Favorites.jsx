import { useState } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { AdvertsFavorites } from "../components/AdvertsFavorites/AdvertsFavorites";

export const Favorites = () => {
  const [query, setQuery] = useState();

  const handleSearch = (search) => {
    setQuery(search);
  };

  return (
    <>
      <SearchBar
        onSubmit={handleSearch}
      />
      <AdvertsFavorites
        query={query}
      />
    </>
  )
};