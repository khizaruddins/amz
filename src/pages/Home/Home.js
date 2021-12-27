import React from "react";
import "./Home.scss";
import Product from "../../core/Product/Product";

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
          <Product
            id="1"
            key={1}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            title="The Lean startup"
            price={29.99}
            rating={5}
          />
          <Product
            id="2"
            key={2}
            image="https://m.media-amazon.com/images/I/41u43kSx7FL._AC_SY200_.jpg"
            title="ASUS TUF Gaming F15 Laptop 15.6'' (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, GeForce GTX 1650 4GB GDDR6 Graphics "
            price={800.34}
            rating={4}
          />
          <Product
            id="3"
            key={3}
            image="https://m.media-amazon.com/images/I/61IJBsHm97L._AC_SY200_.jpg"
            title="iphone 13 pro"
            price={982.42}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4"
            key={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/71gg8mPlAuL._AC_UL160_SR160,160_.jpg"
            title="Apple watch series 7"
            price={400.88}
            rating={5}
          />
          <Product
            id="5"
            key={5}
            image="https://m.media-amazon.com/images/I/81xCMK2zR4L._AC_SY200_.jpg"
            title="Papa Protect Non-Woven Fabric Disposable Surgical 3 Ply Face Mask "
            price={10.99}
            rating={4}
          />
          <Product
            id="6"
            key={6}
            image="https://m.media-amazon.com/images/I/41FzSPMlLmL._AC_SY200_.jpg"
            title="LG UltraWide 29 Inch WFHD (2560 x 1080) IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker"
            price={289.44}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="7"
            key={7}
            image="https://m.media-amazon.com/images/I/51JU8ZlLATL._AC_SY200_.jpg"
            title="Bigmuscles Nutrition Crude Whey - 1 kg (Rich Chocolate)"
            price={140.99}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
