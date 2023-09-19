import { useEffect } from "react";
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({advert, onClick}) => {
  
  const onBackdropClose = e => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  useEffect(() => {
    const keyDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', keyDown);
    return () => {window.removeEventListener('keydown', keyDown);}
  }, [onClick])

    return (
        <div className={css.overlay} onClick={onBackdropClose}>
            <div className={css.modal}>
                <img src={advert.img} alt={advert.make} 
                    className={css.itemImage}  
                />
                <div className={css.itemAdvert}>
                    <div className={css.itemInfoBlock}>
                        <div className={css.itemInfo}>
                            {advert.make}, {advert.year}
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
                                <div className={css.line}>|</div>
                                {advert.year}
                            </div>
                            <div className={css.itemDetalies}>
                                {advert.make}
                                <div className={css.line}>|</div>
                                {advert.year}
                            </div>
                        </div>
                        <div className={css.itemDescription}>
                            {advert.description}
                        </div>
                    </div>
                    <div className={css.itemInfoBlock}>
                        <div className={css.itemSupportText}>
                        Accessories and functionalities:
                        </div>
                        <div className={css.itemDetaliesBlock}>
                            <div className={css.itemDetalies}>
                                {advert.make}
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
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={css.itemSupportText}>
                        Rental Conditions:
                        </div>
                        <div className={css.itemCharacteristicsBlock}>
                            <div className={css.itemСharacteristics}>
                                <div className={css.characteristic}>
                                {advert.make}
                                </div>
                                <div className={css.characteristic}>
                                {advert.make}
                                </div>
                            </div>
                            <div className={css.itemСharacteristics}>
                                <div className={css.characteristic}>
                                {advert.make}
                                </div>
                                <div className={css.characteristic}>
                                {advert.make}
                                </div>
                                <div className={css.characteristic}>
                                {advert.make}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type='button' className={css.itemBtn}
                    //   onClick={}
                    >
                    Rental Car
                    </button>
                </div>
            </div>
        </div>
    );
};
  
Modal.propTypes = {
    advert: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};