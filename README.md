# Name of the application
Car Rental

# Using
With the help of this application, the user can quickly and conveniently find and rent the desired car in Ukraine.

Just go to the directory and use the search bar.

Three search filters are available:
1) in the first field, select the desired car brand from the drop-down list.
2) in the second, also from the list, select the upper limit of the price per rental hour.
3) in the third, specify the desired mileage range of the car.

Fields can be filled in selectively. In case of an error, you will see a message with a hint on the screen. Modify your query accordingly.

Click the "Search" button.

All available cars that meet the specified search criteria will appear on the page.

Change the search query to get the desired result.

Go to a detailed view of information by clicking on the "Learn more" button in the car card.

To quickly contact the company, use the " Rental Car" button in the modal window.

You can add a car to the list of favorites by clicking on the heart icon in the upper right corner of the card.

You can go to the list of favorites and return to the main catalog in the header.

A search bar is also available on the favorites page, just like in the catalog.

To remove a car from the favorites list, simply click the heart icon again.

Have a nice trip!

# Application development technologies used
HTML
CSS
JavaScript
React

# Developer 
Mykola Kuts
GitHub: https://github.com/nikkuts 
Telegram: https://t.me/nickkuts888
Email: nickkuts888@gmail.com 

 <li className={css.itemDetalies}>
            {/* <div className={css.detaliess}> */}
              {/* <span className={css.detalies}>{advert.address.split(',')[1]}</span> */}
              {advert.address.split(',')[1]}
              <span className={css.line}>|</span>
              {/* <span className={css.detalies}>{advert.address.split(',')[2]}</span> */}
              {advert.address.split(',')[2]}
              <span className={css.line}>|</span>
              {/* <span className={css.detalies}>{advert.rentalCompany}</span> */}
              {advert.rentalCompany}
              <span className={css.line}>|</span>
              <span className={css.detalies}>Premium</span>
              <br></br>
            {/* </div> */}
            {/* <div className={css.detaliess}> */}
              {advert.type}
              <span className={css.line}>|</span>
              {/* <span className={css.detalies}>{advert.model}</span> */}
              {advert.model}
              <span className={css.line}>|</span>
              {/* <span className={css.detalies}>{advert.mileage}</span> */}
              {advert.mileage}
              <span className={css.line}>|</span>
              <span className={css.detalies}>{advert.accessories[2]}</span>
              {/* {advert.accessories[2]} */}
            {/* </div> */}
          </li>