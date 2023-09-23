import { useState, useEffect } from "react";
import local from "../../servise/localStorage";
import {AdvertsGalleryItem} from '../AdvertsGalleryItem/AdvertsGalleryItem';
import { selectByQuery } from "js/func/selectByQuery";
import css from './AdvertsFavorites.module.css';

export const AdvertsFavorites = ({query}) => {
    const [adverts, setAdverts] = useState([]);
    const [numberPart, setNumberPart] = useState(1);
    const [visibleLoadBtn, setVisibleLoadBtn] = useState(false);
    const [switcher, setSwitcher] = useState(null);

    const changeSwitcher = (id) => {
        setSwitcher(id);
    };

    const changeNumberPart = () => {
        setNumberPart(prevState => prevState + 1);
      };
  
    const handleFetchAdverts = (number, query) => {
        const data = local.load('favorites') ? local.load('favorites') : [];
        const result = query ? selectByQuery(data, query) : data;
        
        number * 8 < result.length ? setVisibleLoadBtn(true) : setVisibleLoadBtn(false);
       
        const partAdverts = result.reduce((partAdverts, advert) => {
      
            if (result.indexOf(advert) < number * 8) {           
              partAdverts.push(advert);
            };

            return partAdverts;
          }, []);

        setAdverts(partAdverts)
    };

    useEffect(() => {
        handleFetchAdverts(numberPart, query);
    },[switcher, numberPart, query]);

    return (
        <>
        {adverts.length === 0 && !query ?
            <h1 className={css.title}>
                Favorites list is still empty. Choose your favorite cars in the catalog!
            </h1>
            : 
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