import { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import { Circles } from  'react-loader-spinner';
import { fetchAdverts } from "../../servise/api";
import local from "../../servise/localStorage";
import {AdvertsGalleryItem} from '../AdvertsGalleryItem/AdvertsGalleryItem';
import css from './AdvertsGallery.module.css';

export const AdvertsGallery = ({query}) => {
    const [adverts, setAdverts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRender, setIsRender] = useState(false);
    const [numberPart, setNumberPart] = useState(1);
    const [visibleLoadBtn, setVisibleLoadBtn] = useState(false);

    const changeNumberPart = () => {
      setNumberPart(numberPart + 1);
    };

    const selectByQuery = (adverts, query) => {
      const {make, priceTo, mileageFrom, mileageTo} = query;
      let result = adverts;

      if (make) {
        result = adverts.filter(advert => advert.make.toLowerCase() === make.toLowerCase());
      } 

      if (priceTo) {
        result = result.filter(advert => parseFloat(advert.rentalPrice.replace(/[^0-9.]/g, '')) <= priceTo)
      } 

      if (mileageFrom && mileageTo) {
        result = result.filter(advert => advert.mileage >= mileageFrom && advert.mileage <= mileageTo)
      }
      else if (mileageFrom) {
        result = result.filter(advert => advert.mileage >= mileageFrom)
      }
      else if (mileageTo) {
        result = result.filter(advert => advert.mileage <= mileageTo)
      }

      return result;
    };

    const selectByNumberPart = (adverts, number) => {
      const favoritesAdverts = local.load('favorites') ? local.load('favorites') : [];
      
      number * 8 < adverts.length && setVisibleLoadBtn(true);

      const partAdverts = adverts.reduce((partAdverts, advert) => {
        
        if (adverts.indexOf(advert) < number * 8) {
          const valueFavorite = favoritesAdverts.some(({id}) => id === advert.id);
          
          partAdverts.push({...advert, favorite: valueFavorite});
        };
        return partAdverts;
      }, []);

      return partAdverts;
    };

    const handleFetchAdverts = useCallback(async (number, query) => {
      setIsRender(false);
      setVisibleLoadBtn(false);

      try {
        const {data} = await fetchAdverts();
        
        const result = query ? selectByQuery(data, query) : data;
      
        const partAdverts = selectByNumberPart(result, number);

        setAdverts(partAdverts);
        setIsRender(true); 
      } 
      catch (error) {
        alert("ERROR Sorry, ads have not loaded. Please try again."); 
      } 
      finally {
        setIsLoading(false);
      };
    },[]); 

    useEffect(() => {
        handleFetchAdverts(numberPart, query);
    },[numberPart, query, handleFetchAdverts]);

    return (
        isRender &&
            <div className={css.box}>
                {isLoading && <Circles/>}
            
                <ul className={css.advertsGallery}>
                    {adverts.map((advert) => (
                    <AdvertsGalleryItem
                    advert={advert}
                    id={advert.id}
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
    )
};

AdvertsGallery.propTypes = {
  query: PropTypes.object,
};