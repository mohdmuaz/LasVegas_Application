import React from 'react';

import Nav from "./Components/Nav";
import Home from '../src/Components/Home';
import AboutUs from './Components/AboutUs';
import AboutUsmore from './Components/AboutUsmore';
import SlidingPage from './Components/SlidingImages';
import ReservationPage from './Components/ReservationPage';
import ImagePage from './Components/ImagePage';
import Review from './Components/Review';
import NewsletterPage from './Components/Newsletter';
import Footer from './Components/Footer';
import PopupPage from './Components/Popuppage';

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <AboutUs/>
      <AboutUsmore />
      <SlidingPage />
      <ReservationPage />
      <ImagePage />
      <Review />
      <NewsletterPage />
      <Footer />
      <PopupPage />

    </div>
  );
};

  export default App;