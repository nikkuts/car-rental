import { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { selectAllTAdverts } from "../../redux/adverts/selectors";
import { AdvertsGalleryItem } from '../AdvertsGalleryItem/AdvertsGalleryItem';
import { selectByQuery } from "js/func/selectByQuery";
import css from './AdvertsGallery.module.css';

export const AdvertsGallery = ({ query }) => {
  const [visibleAdverts, setVisibleAdverts] = useState([]);
  const [numberPart, setNumberPart] = useState(1);
  const [visibleLoadBtn, setVisibleLoadBtn] = useState(false);

  const allAdverts = useSelector(selectAllTAdverts);

  const changeNumberPart = () => {
    setNumberPart(prevState => prevState + 1);
  };

  const getVisibleAdverts = useCallback(() => {
    const result = query ? selectByQuery(allAdverts, query) : allAdverts;

    const startIndex = (numberPart - 1) * 8;
    const endIndex = Math.min(startIndex + 8, result.length);
    setVisibleLoadBtn(endIndex < result.length);

    const partAdverts = result.slice(0, endIndex);
    setVisibleAdverts(partAdverts);
  }, [allAdverts, query, numberPart]);

  useEffect(() => {
    getVisibleAdverts();
  }, [numberPart, query, getVisibleAdverts]);

  return (
      <div className={css.box}>
        <ul className={css.advertsGallery}>
          {visibleAdverts.map(advert => (
            <AdvertsGalleryItem 
            advert={advert} 
            id={advert.id} 
            />
          ))}
        </ul>

        {visibleLoadBtn && (
          <button type="button" className={css.loadBtn} onClick={changeNumberPart}>
            Load more
          </button>
        )}
      </div>
  );
};

AdvertsGallery.propTypes = {
  query: PropTypes.object,
};