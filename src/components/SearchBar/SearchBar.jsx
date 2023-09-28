import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {validateSearch} from '../../js/func/validateSearch';
import { InputSelection } from "components/InputSelection/InputSelection";
import {makes, price} from '../../js/data';
import css from './SearchBar.module.css';

export const SearchBar = ({onSubmit}) => {
    const initialState = {
        make: '',
        priceTo: '',
        mileageFrom: '',
        mileageTo: '',
    }; 
    const [query, setQuery] = useState(initialState);
    const [reset, setReset] = useState(false);

        const handleChange = useCallback((inputValue, name)  => {
            setQuery(prevQuery => ({
              ...prevQuery,
              [name]: inputValue,
            }));
          }, []);

        const handleSearch = (e) => {
            e.preventDefault();
            const search = validateSearch(query);      
            
            onSubmit(search);
        };

        const resetForm = () => {
            setReset(prevState => !prevState);
            onSubmit(initialState);
        };

    return (
        <form className={css.searchBar}>
            <div className={css.inputBlock}>
                <div className={css.brand}>
                    <p className={css.title}>Car brand</p>
                    <InputSelection
                    placeholder={"Enter the text"}
                    name={'make'}
                    initialText={''} 
                    options={makes}
                    onChange={handleChange}
                    reset={reset}
                    />
                </div>
                <div className={css.price}>
                    <p className={css.title}>Price/ 1 hour</p>
                    <InputSelection
                    placeholder={"To $"}
                    name={'priceTo'}
                    initialText={'To $'} 
                    options={price}
                    onChange={handleChange}
                    reset={reset}
                    />
                </div>
                <div className={css.mileage}>
                    <p className={css.title}>Сar mileage / km</p>
                    <div className={css.mileageBox}>
                        <InputSelection
                        placeholder={"From"}
                        name={'mileageFrom'}
                        initialText={'From '} 
                        onChange={handleChange}
                        reset={reset}
                        />
                        <InputSelection
                        placeholder={"To"}
                        name={'mileageTo'}
                        initialText={'To '} 
                        onChange={handleChange}
                        reset={reset}
                        />
                    </div>
                </div>
            </div>
            <button type='submit' className={css.searchBtn}
                onClick={handleSearch}
            >
                Search
            </button>
            <button type='button' className={css.searchBtn}
                onClick={resetForm}
            >
                Reset
            </button>
        </form>
  )
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};