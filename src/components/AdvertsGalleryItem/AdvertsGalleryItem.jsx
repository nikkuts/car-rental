import { useState } from "react";
import PropTypes from 'prop-types';
import Modal from "components/Modal/Modal";
import css from './AdvertsGalleryItem.module.css'; 

export const AdvertsGalleryItem = ({advert}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavoriteAdvert, setIsFavoriteAdvert] = useState(advert.favorite); 
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false); 

    return (
      <li className={css.item} key={advert.id}>
        <div className={css.itemAdvert}>
          <img src={advert.img} alt={advert.make} 
            className={css.itemImage}  
          />
          <div className={css.itemInfo}>
            {advert.make}, {advert.year}
            <span>{advert.rentalPrice}</span>
          </div>
          <div className={css.itemDetaliesBlock}>
            <div className={css.itemDetalies}>
              {advert.make}
              <div className={css.line}>|</div>
              {advert.year}
              <div className={css.line}>|</div>
              {advert.year}
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
  advert: PropTypes.object.isRequired,
};