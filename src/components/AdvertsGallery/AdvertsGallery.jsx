import { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import { Circles } from  'react-loader-spinner';
import { fetchAdverts } from "../../servise/api";
import { AdvertsGalleryItem } from '../AdvertsGalleryItem/AdvertsGalleryItem';
import { selectByNumberPart } from 'js/func/selectByNumberPart';
import { selectByQuery } from "js/func/selectByQuery";
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

    const handleFetchAdverts = useCallback(async (number, query) => {
      setIsRender(false);
      setVisibleLoadBtn(false);

      try {
        const {data} = await fetchAdverts();
        const result = query ? selectByQuery(data, query) : data;
      
        number * 8 < result.length && setVisibleLoadBtn(true);

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