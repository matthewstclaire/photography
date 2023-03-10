import React from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import DesktopNav from '../components/Navigation/DesktopNav';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <section>
      <div className="flex justify-center sticky">
        <Image src="/images/bigLogo.png" height="300" width="300" />
      </div>

      <div className="flex justify-center flex-col">
        <div>
          <p>
            This is a place to simply and easily display some work I have done.
          </p>
        </div>

        <Carousel
          className="width-4/6 md:w-1/2"
          ariaLabel="Photo Carousel"
          autoPlay
        >
          <div>
            <img
              src="images/gallery/aliceheadshottunnel.jpg"
              alt="me"
              width="500"
              height="500"
            />
          </div>

          <div>
            <img
              src="images/gallery/aliceheadshottunnel2.jpg"
              alt="me"
              width="500"
              height="500"
            />
          </div>
          <div>
            <img
              src="images/gallery/aliceheadshottunnel.jpg"
              alt="me"
              width="500"
              height="500"
            />
          </div>
          <div>
            <img
              src="images/gallery/aliceheadshottunnel2.jpg"
              alt="me"
              width="500"
              height="500"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
