export const selectByQuery = (adverts, query) => {
    const {make, priceTo, mileageFrom, mileageTo} = query;
    let result = adverts;

    if (make) {
      result = adverts.filter(advert => advert.make.toLowerCase() === make.toLowerCase());
    } 

    if (priceTo) {
      result = result.filter(advert => parseFloat(advert.rentalPrice.replace(/[^0-9.]/g, '')) <= priceTo);
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