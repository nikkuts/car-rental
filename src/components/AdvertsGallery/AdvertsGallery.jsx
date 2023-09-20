import { useState, useEffect } from "react";
import { Circles } from  'react-loader-spinner';
import { fetchAdverts } from "../../servise/api";
import local from "../../servise/localStorage";
import {AdvertsGalleryItem} from '../AdvertsGalleryItem/AdvertsGalleryItem';
import css from './AdvertsGallery.module.css';

export const AdvertsGallery = () => {
    const [adverts, setAdverts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRender, setIsRender] = useState(false);
    const [numberPart, setNumberPart] = useState(1);
    const [visibleLoadBtn, setVisibleLoadBtn] = useState(false);

    const changeNumberPart = () => {
      setNumberPart(numberPart + 1);
    };
  
    const handleFetchAdverts = async (num) => {
      setIsRender(false);
      setVisibleLoadBtn(false);
      const favoritesAdverts = local.load('favorites') ? local.load('favorites') : [];

      try {
        const {data} = await fetchAdverts();
        num * 8 < data.length && setVisibleLoadBtn(true);
        
        const partAdverts = [];
        for (let i = 0; i < num * 8; i += 1) {
          const valueFavorite = favoritesAdverts.some(({id}) => id === data[i].id);
          partAdverts.push({...data[i], favorite: valueFavorite});
        };
        
        setAdverts(partAdverts);
        setIsRender(true); 
      } 
      catch (error) {
        alert("ERROR Sorry, ads have not loaded. Please try again."); 
      } 
      finally {
        setIsLoading(false);
      };
    };

    useEffect(() => {
        handleFetchAdverts(numberPart);
    },[numberPart]);

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