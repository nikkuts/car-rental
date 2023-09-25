import {makes, price} from '../data';

export const validateSearch = (query) => {
    let search = {};
    const {make, priceTo, mileageFrom, mileageTo} = query;

    if (make) {
        const isValidMake = makes.some((item) => item.toLowerCase() === make.toLowerCase());
        if (isValidMake === false) {
            alert('Invalid car brand value. Choose a car brand from the list.');
            return;
        } else {
            search = {make}
        }
    }

    if (priceTo) {
        const parsePriceTo = parseFloat(priceTo.replace(/[^0-9.]/g, ''));
        const isValidPrice = price.some((item) => item === parsePriceTo);
        if (isValidPrice === false) {
            alert('Invalid rental price value. Choose a rental price from the list.');
            return;
        } else {
            search = {...search, priceTo: parsePriceTo}
        }
    } 

    if (mileageFrom) {
        const parsemileageFrom = parseFloat(mileageFrom.replace(/[^0-9.]/g, ''));
        if (isNaN(parsemileageFrom)) {
            alert('Mileage must be specified as a number. Change your search query.');
            return;  
        } else {
            search = {...search, mileageFrom: parsemileageFrom}
        }
    }

    if (mileageTo) {
        const parsemileageTo = parseFloat(mileageTo.replace(/[^0-9.]/g, ''));
        if (isNaN(parsemileageTo)) {
            alert('Mileage must be specified as a number. Change your search query.');
            return;  
        } else {
            search = {...search, mileageTo: parsemileageTo}
        }
    }
        
    if (mileageFrom && mileageTo) {
        if (parseFloat(mileageFrom.replace(/[^0-9.]/g, '')) > parseFloat(mileageTo.replace(/[^0-9.]/g, ''))) {
            alert('Mileage range error. Change your search query.');
            return;
        }
    }

    if (!make && !priceTo && !mileageFrom && !mileageTo) {
        alert('No search options. Enter your search query.');
        return;    
    }

    return search;
};