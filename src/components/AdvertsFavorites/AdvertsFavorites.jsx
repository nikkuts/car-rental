import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { selectAllTAdverts } from "../../redux/adverts/selectors";
import local from "../../servise/localStorage";
import {AdvertsGalleryItem} from '../AdvertsGalleryItem/AdvertsGalleryItem';
import { selectByQuery } from "js/func/selectByQuery";
import css from './AdvertsFavorites.module.css';

export const AdvertsFavorites = ({query}) => {
  const [visibleAdverts, setVisibleAdverts] = useState([]);
  const [numberPart, setNumberPart] = useState(1);
  const [visibleLoadBtn, setVisibleLoadBtn] = useState(false);
  const [switcher, setSwitcher] = useState(null);

  const allAdverts = useSelector(selectAllTAdverts);

  const changeSwitcher = (id) => {
    setSwitcher(id);
  };

  const changeNumberPart = () => {
    setNumberPart(prevState => prevState + 1);
  };

  const getVisibleAdverts = useCallback(() => {
    const idFavorites = local.load('favorites');
    const allAdvertsFavorites = allAdverts.filter(advert => 
    idFavorites.includes(advert.id));

    const result = query ? selectByQuery(allAdvertsFavorites, query) : allAdvertsFavorites;

    const startIndex = (numberPart - 1) * 8;
    const endIndex = Math.min(startIndex + 8, result.length);
    setVisibleLoadBtn(endIndex < result.length);

    const partAdverts = result.slice(0, endIndex);
    setVisibleAdverts(partAdverts);
  }, [allAdverts, query, numberPart]);

  useEffect(() => {
    getVisibleAdverts();
  }, [switcher, numberPart, query, getVisibleAdverts]);
  
  return (
      <>
        {visibleAdverts.length === 0 && !query ?
            <h1 className={css.title}>
                Favorites list is still empty. Choose your favorite cars in the catalog!
            </h1>
            : 
            <div className={css.box}>       
                <ul className={css.advertsGallery}>
                    {visibleAdverts.map((advert) => (
                      <AdvertsGalleryItem
                      advert={advert}
                      id={advert.id}
                      followFavorite={changeSwitcher}
                    />
                    ))}
                </ul>

                {visibleLoadBtn && 
                <button type='button' className={css.loadBtn}
                  onClick={changeNumberPart}
                >
                  Load more
                </button>
                }            
            </div>
        }
      </>   
    )
};

AdvertsFavorites.propTypes = {
  query: PropTypes.object,
};