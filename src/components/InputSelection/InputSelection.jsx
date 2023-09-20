import { useState } from "react";
import { ReactComponent as VectorDeployment } from './icons/deployment.svg';
import { ReactComponent as VectorFolding } from './icons/folding.svg';
import css from './InputSelection.module.css';

export const InputSelection = ({options, placeholder}) => {
    const [inputValue, setInputValue] = useState('');
    const [isList, setIsList] = useState(false);
    
    const toogleList = () => setIsList(!isList);

    const handleOptionSelect = (option) => {
        setInputValue(option);
      };
    
      const handleInputChange = (e) => {
        setInputValue(e.target.value);
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
    
      return (
        <div className={css.box}>
          <input
            className={css.input}
            type="text"
            placeholder={placeholder}
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