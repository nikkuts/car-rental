import { useState } from "react";
import PropTypes from 'prop-types';
import {Modal} from "components/Modal/Modal";
import { ReactComponent as VectorHeart } from './icons/heart.svg';
import { ReactComponent as VectorIsHeart } from './icons/isheart.svg';
import local from "../../servise/localStorage";
import css from './AdvertsGalleryItem.module.css'; 

export const AdvertsGalleryItem = ({id, advert, followFavorite}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(advert.favorite);
  
  const toogleFavorite = (advertId, advertObj) => {
    const favoritesAdverts = local.load('favorites') ? local.load('favorites') : [];
  
    if (isFavorite) {
      setIsFavorite(false);
      const newFavoritesAdverts = favoritesAdverts.filter(item => item.id !== advertId);
      local.save('favorites', newFavoritesAdverts);
      followFavorite(advertId);
    }
    else {
      setIsFavorite(true);
      favoritesAdverts.push({...advertObj, favorite: true});
      local.save('favorites', favoritesAdverts)
    }
  };
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false); 

    return ( 
      <li className={css.item} key={id}>
        <div className={css.itemAdvert}>
          <div className={css.itemVector}
            onClick={() => toogleFavorite(id, advert)}
          >
            {isFavorite ? <VectorIsHeart/> : <VectorHeart/>}
          </div>
          <img src={advert.img} alt={advert.make} 
            className={css.itemImage}  
          />
          <div className={css.itemInfo}>
            {advert.make}, {advert.year}
            <span>{advert.rentalPrice}</span>
          </div>
          <div className={css.itemDetaliesBlock}>
            <div className={css.itemDetalies}>
              {advert.address.split(',')[1]}
              <div className={css.line}>|</div>
              {advert.address.split(',')[2]}
              <div className={css.line}>|</div>
              {advert.rentalCompany}
              <div className={css.line}>|</div>
              {advert.year}
            </div>
            <div className={css.itemDetalies}>
              {advert.make}
              <div className={css.line}>|</div>
              {advert.year}
              <div className={css.line}>|</div>
              {advert.year}
              <div className={css.line}>|</div>
              {advert.year}
            </div>
          </div>
        </div>
        <button type='button' className={css.itemBtn}
          onClick={openModal}
        >
          Learn more
        </button>
        { isModalOpen && 
        <Modal
          advert={advert}
          onClick={closeModal}
        />
        }  
      </li>
    )
};
  
AdvertsGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  advert: PropTypes.object.isRequired,
  followFavorite: PropTypes.func,
};