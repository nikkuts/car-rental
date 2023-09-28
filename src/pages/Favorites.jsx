import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../redux/adverts/selectors";
import { fetchAdverts } from "../redux/adverts/operations";
import { SearchBar } from "components/SearchBar/SearchBar";
import { AdvertsFavorites } from "../components/AdvertsFavorites/AdvertsFavorites";

const Favorites = () => {
  const [query, setQuery] = useState();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSearch = (search) => {
    setQuery(search);
  };

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <div>{isLoading && <b>Request in progress...</b>}</div>
      <SearchBar
        onSubmit={handleSearch}
      />
      <AdvertsFavorites
        query={query}
      />
    </>
  )
};

export default Favorites;