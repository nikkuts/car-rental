// import { useState } from "react";
// import PropTypes from 'prop-types';
// import Modal from "components/Modal/Modal";
import css from './AdvertsGalleryItem.module.css'; 

export const AdvertsGalleryItem = ({
    id, 
    img,
    make,
    year,
    price
  }) => {
  /* const [isModalOpen, setIsModalOpen] = useState(false); */
  
/* const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false); */

    return (
      <li className={css.item} key={id}>
        <div className={css.itemAdvert}>
          <img src={img} alt={id} 
          className={css.itemImage} 
          /* onClick={openModal}  */
          />
          <div className={css.itemInfo}>
            {make}, {year}
            <span>{price}</span>
          </div>
          <div className={css.itemDetaliesBlock}>
            <div className={css.itemDetalies}>
              {make}
              <div className={css.line}>|</div>
              {year}
              <div className={css.line}>|</div>
              {year}
              <div className={css.line}>|</div>
              {year}
            </div>
            <div className={css.itemDetalies}>
              {make}
              <div className={css.line}>|</div>
              {year}
              <div className={css.line}>|</div>
              {year}
              <div className={css.line}>|</div>
              {year}
            </div>
          </div>
        </div>
        <button type='button' className={css.itemBtn}>
          Learn more
        </button>
      </li>
    )
};
  
/* ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
}; */