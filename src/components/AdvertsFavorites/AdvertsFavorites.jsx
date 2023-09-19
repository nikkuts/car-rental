import { useState, useEffect } from "react";
import local from "../../servise/localStorage";
import {AdvertsGalleryItem} from '../AdvertsGalleryItem/AdvertsGalleryItem';
import css from './AdvertsFavorites.module.css';

export const AdvertsFavorites = () => {
    const [adverts, setAdverts] = useState([]);
    const [switcher, setSwitcher] = useState(false);
    const [isRender, setIsRender] = useState(false);

    const changeSwitcher = () => {
        setSwitcher(!switcher);
    };
  
    const handleFetchAdverts = () => {
      setIsRender(false);

        const favoritesAdverts = [];

        for (let i = 0; i < localStorage.length; i += 1) {
          const key = localStorage.key(i);
          const value = local.load(key);
          favoritesAdverts.push(value);
        };
     
        console.log(favoritesAdverts);
        setAdverts(favoritesAdverts)
        setIsRender(true); 
    };

    useEffect(() => {
        handleFetchAdverts();
    },[switcher]);

    return (
        isRender &&
            <div className={css.box}>
            
                <ul className={css.advertsGallery}>
                    {adverts.map((advert) => (
                    <AdvertsGalleryItem
                    advert={advert}
                    id={advert.id}
                    followFavorite={changeSwitcher}
                    />
                    ))}
                </ul>       
            </div>
    )
};