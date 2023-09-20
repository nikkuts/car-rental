import { useState, useEffect } from "react";
import local from "../../servise/localStorage";
import {AdvertsGalleryItem} from '../AdvertsGalleryItem/AdvertsGalleryItem';
import css from './AdvertsFavorites.module.css';

export const AdvertsFavorites = () => {
    const [adverts, setAdverts] = useState([]);
    const [switcher, setSwitcher] = useState(null);

    const changeSwitcher = (id) => {
        setSwitcher(id);
    };
  
    const handleFetchAdverts = () => {
        const favoritesAdverts = local.load('favorites') ? local.load('favorites') : [];
        setAdverts(favoritesAdverts)
    };

    useEffect(() => {
        handleFetchAdverts();
    },[switcher]);

    return (
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
