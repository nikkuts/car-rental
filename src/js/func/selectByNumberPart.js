import local from "../../servise/localStorage";

export const selectByNumberPart = (adverts, number) => {
    const favoritesAdverts = local.load('favorites') ? local.load('favorites') : [];

    const partAdverts = adverts.reduce((partAdverts, advert) => {
      
      if (adverts.indexOf(advert) < number * 8) {
        const valueFavorite = favoritesAdverts.some(({id}) => id === advert.id);
        
        partAdverts.push({...advert, favorite: valueFavorite});
      };
      return partAdverts;
    }, []);

    return partAdverts;
  };