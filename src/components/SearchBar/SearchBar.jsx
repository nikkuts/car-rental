import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { InputSelection } from "components/InputSelection/InputSelection";
import {makes, price} from '../../js/data';
import css from './SearchBar.module.css';

export const SearchBar = ({onSubmit}) => {
    const [query, setQuery] = useState();

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            const parseValue = parseFloat(value);
            
            setQuery(prevQuery => ({
                ...prevQuery,
                [name]: parseValue,
            }));
          };

        const handleInputSelect = useCallback((inputValue, name)  => {
            setQuery(prevQuery => ({
              ...prevQuery,
              [name]: inputValue,
            }));
          }, []);

        const handleSearch = (e) => {
            e.preventDefault();
            const {make, priceTo, mileageFrom, mileageTo} = query;
 
            if (make) {
                const isValidMake = makes.some((item) => item.toLowerCase() === make.toLowerCase());
                if (isValidMake === false) {
                    alert('Invalid car brand value. Choose a car brand from the list.');
                    return;
                }
            }

            if (priceTo) {
                const isValidPrice = price.some((item) => item === priceTo);
                if (isValidPrice === false) {
                    alert('Invalid rental price value. Choose a rental price from the list.');
                    return;
                }
            }

            if ((mileageFrom && isNaN(mileageFrom)) || (mileageTo && isNaN(mileageTo))) {
                alert('Mileage must be specified as a number. Change your search query.');
                return;
            }
                
            if (mileageFrom && mileageTo) {
                if (mileageFrom > mileageTo) {
                    alert('Mileage range error. Change your search query.');
                    return;
                }
            }

            if (!make && !priceTo && !mileageFrom && !mileageTo) {
                alert('No search options. Enter your search query.');
                return;    
            }

            onSubmit(query);
          };

    return (
        <form className={css.searchBar}>
            <div className={css.inputBlock}>
                <div className={css.brand}>
                    <p className={css.title}>Car brand</p>
                    <InputSelection
                    placeholder={"Enter the text"}
                    name={'make'} 
                    options={makes}
                    onChange={handleInputSelect}
                    />
                </div>
                <div className={css.price}>
                    <p className={css.title}>Price/ 1 hour</p>
                    <InputSelection
                    placeholder={"To $"}
                    name={'priceTo'} 
                    options={price}
                    onChange={handleInputSelect}
                    />
                </div>
                <div className={css.mileage}>
                    <p className={css.title}>Сar mileage / km</p>
                    <div className={css.mileageBox}>
                        <div className={css.mileageInput}>
                            <input
                                className={css.input}
                                type="text"
                                placeholder={'From'}
                                name='mileageFrom'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={css.mileageBox}>
                            <input
                                className={css.input}
                                type="text"
                                placeholder={'To'}
                                name='mileageTo'
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button type='submit' className={css.searchBtn}
                onClick={handleSearch}
            >
                Search
            </button>
        </form>
  )
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};