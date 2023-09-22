import { useState } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { AdvertsGallery } from "../components/AdvertsGallery/AdvertsGallery";

export const Catalog = () => {
  const [query, setQuery] = useState();

  const handleSearch = (search) => {
    setQuery(search);
  };

  return (
    <>
      <SearchBar
        onSubmit={handleSearch}
      />
      <AdvertsGallery
        query={query}
      />
    </>
)
};