import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { ReactComponent as VectorDeployment } from './icons/deployment.svg';
import { ReactComponent as VectorFolding } from './icons/folding.svg';
import css from './InputSelection.module.css';

export const InputSelection = ({options, placeholder, name, onChange}) => {
    const [inputValue, setInputValue] = useState('');
    const [isList, setIsList] = useState(false);

    const handleInputChange = (e) => {
      const {value} = e.target;
      setInputValue(value);
    };

    const handleOptionSelect = (option)  => {
      setInputValue(option);
    };
    
    const toogleList = () => setIsList(!isList);
    
      const renderOptions = () => {
        return options.map((option, index) => (
          <li className={css.option}
            key={index}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </li>
        ));
      };

      useEffect(() => {
        onChange(name, inputValue);
      }, [inputValue, name]);
    
      return (
        <div className={css.box}>
          <input
            className={css.input}
            type="text"
            placeholder={placeholder}
            name={name}
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className={css.vector}
            onClick={() => toogleList()}
          >
            {isList ? <VectorFolding/> : <VectorDeployment/>}
          </div>
          <div className={css.listBox}>
                <ul className={isList ? css.list : css.disable}>
                    {renderOptions()}
                </ul>
          </div>
        </div>
      );
    };

    InputSelection.propTypes = {
      options: PropTypes.array.isRequired,
      placeholder: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
  };