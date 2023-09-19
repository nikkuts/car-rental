import { useEffect } from "react";
import PropTypes from 'prop-types';
import { ReactComponent as VectorX } from './icons/x.svg';
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
                <div className={css.modalContent}>
                    <div className={css.itemVector}
                        onClick={() => onClick()}
                    >
                    <VectorX/>
                    </div>
                    <img src={advert.img} alt={advert.make} 
                        className={css.itemImage}  
                    />
                    <div className={css.itemAdvert}>
                        <div className={css.itemInfoBlock}>
                            <p className={css.itemInfo}>
                                {advert.make}, {advert.year}
                            </p>
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
                            <p className={css.itemDescription}>
                                {advert.description}
                            </p>
                        </div>
                        <div className={css.itemInfoBlock}>
                            <p className={css.itemSupportText}>
                            Accessories and functionalities:
                            </p>
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
                            <p className={css.itemSupportText}>
                            Rental Conditions:
                            </p>
                            <div className={css.itemCharacteristicsBlock}>
                                <div className={css.itemСharacteristics}>
                                    <div className={css.characteristic}>
                                    {advert.year}
                                    </div>
                                    <div className={css.characteristic}>
                                    {advert.year}
                                    </div>
                                </div>
                                <div className={css.itemСharacteristics}>
                                    <div className={css.characteristic}>
                                    {advert.year}
                                    </div>
                                    <div className={css.characteristic}>
                                    {advert.year}
                                    </div>
                                    <div className={css.characteristic}>
                                    {advert.year}
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
        </div>
    );
};
  
Modal.propTypes = {
    advert: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};