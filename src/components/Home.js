import { KingBed } from "@material-ui/icons";
import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* Product Component */}
          <Product
            id="23425"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
            price={13.99}
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aspernatur ipsa error consequatur nisi facilis nam dicta perspiciatis fuga."
          />
          <Product
            id="15577"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
            price={13.99}
            title="IPhone 5"
          />
          {/* Product Component */}
        </div>
        <div className="home__row">
          <Product
            id="53235"
            image="https://images-na.ssl-images-amazon.com/images/I/61eAq6gg-XL._AC_SX679_.jpg"
            rating={3}
            price={199.2}
            title="Kindle"
          />
          <Product
            id="9094"
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={4}
            price={13.99}
            title="IPhone 5"
          />
          <Product
            id="00012"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
            price={13.99}
            title="IPhone 5"
          />

          {/* Product Component */}
          {/* Product Component */}
          {/* Product Component */}
        </div>
        <div className="home__row">
          {/* Product Component */}
          <Product
            id="19023"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
            price={1002.99}
            title="Samsung curved LASDFWEFSD2345 Gaming monitor"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
