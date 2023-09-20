import { useState } from 'react';
import { InputSelection } from "components/InputSelection/InputSelection";
import css from './SearchBar.module.css';

export const SearchBar = () => {
    const makes = [
        "Buick",
        "Volvo",
        "HUMMER",
        "Subaru",
        "Mitsubishi",
        "Nissan",
        "Lincoln",
        "GMC",
        "Hyundai",
        "MINI",
        "Bentley",
        "Mercedes-Benz",
        "Aston Martin",
        "Pontiac",
        "Lamborghini",
        "Audi",
        "BMW",
        "Chevrolet",
        "Mercedes-Benz",
        "Chrysler",
        "Kia",
        "Land"        
    ];
    const price = [
        30,
        40,
        50,
        60,
        70,
        80,
        90,
        100,
        110,
        120,
        130,
        140,
        150   
    ];
    const [query, setQuery] = useState('');

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setQuery({
              ...query,
              [name]: value,
            });
          };

          const handleSearch = (e) => {
            e.preventDefault();
    
            if (query === '') {
              alert('Enter a search');
              return;
            }
            // onSubmit(query);
            setQuery('');
          };

    return (
        <form className={css.searchBar}>
            <div className={css.inputBlock}>
                <div className={css.brand}>
                    <p className={css.title}>Car brand</p>
                    <InputSelection
                    placeholder={"Enter the text"} 
                    options={makes}
                    />
                </div>
                <div className={css.price}>
                    <p className={css.title}>Price/ 1 hour</p>
                    <InputSelection
                    placeholder={"To $"} 
                    options={price}
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
                                value={query.mileageFrom}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={css.mileageBox}>
                            <input
                                className={css.input}
                                type="text"
                                placeholder={'To'}
                                value={query.mileageTo}
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