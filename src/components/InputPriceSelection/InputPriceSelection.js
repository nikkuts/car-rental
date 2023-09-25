import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { ReactComponent as VectorDeployment } from './icons/deployment.svg';
import { ReactComponent as VectorFolding } from './icons/folding.svg';
import css from './InputPriceSelection.module.css';

export const InputSelection = ({options, onChange}) => {
    const [inputValue, setInputValue] = useState();
    const [isList, setIsList] = useState(false);

    const toogleList = () => setIsList(!isList);

    const handleInputChange = (e) => {
      const {value} = e.target;
      setInputValue(value);
    };

    const handleOptionSelect = (option)  => {
      setIsList(false)
      setInputValue(option);
    };
    
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
        onChange(inputValue);
      }, [inputValue, onChange]);
    
      return (
        <div className={css.box}>
          <input
            className={css.input}
            type="text"
            placeholder={'To $'}
            name={'priceTo'}
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
      onChange: PropTypes.func.isRequired,
  };