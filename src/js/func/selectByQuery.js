export const selectByQuery = (adverts, query) => {
    const {make, parsePriceTo, mileageFrom, mileageTo} = query;
    let result = adverts;

    if (make) {
      result = adverts.filter(advert => advert.make.toLowerCase() === make.toLowerCase());
    } 

    if (parsePriceTo) {
      result = result.filter(advert => parseFloat(advert.rentalPrice.replace(/[^0-9.]/g, '')) <= parsePriceTo);
    } 

    if (mileageFrom && mileageTo) {
      result = result.filter(advert => advert.mileage >= mileageFrom && advert.mileage <= mileageTo)
    }
    else if (mileageFrom) {
      result = result.filter(advert => advert.mileage >= mileageFrom)
    }
    else if (mileageTo) {
      result = result.filter(advert => advert.mileage <= mileageTo)
    }

    return result;
  };