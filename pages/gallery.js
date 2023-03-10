import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import GalleryBlock from '../components/galleryBlock';

const bjjArray = [
  {
    number: 1,
    title: 'Clients',
    image: '/images/gallery/alec.jpg',
  },
  {
    number: 2,
    title: 'Nora',
    image: '/images/gallery/denton.jpg',
  },
  {
    number: 3,
    title: 'Nora',
    image: '/images/gallery/tiredhailey.jpg',
  },
  {
    number: 4,
    title: 'Nora',
    image: '/images/gallery/blake.jpg',
  },
  {
    number: 5,
    title: 'Nora',
    image: '/images/gallery/veronika.jpg',
  },
  {
    number: 6,
    title: 'Nora',
    image: '/images/gallery/nora2.jpg',
  },
];

const headshotArray = [
  {
    number: 1,
    title: 'headshottunnel',
    image: '/images/gallery/aliceheadshottunnel.jpg',
  },
  {
    number: 2,
    title: 'headshottunnel 2',
    image: '/images/gallery/aliceheadshottunnel2.jpg',
  },
  {
    number: 3,
    title: 'alice mayhem',
    image: '/images/gallery/alicemayhem.jpg',
  },
];

const pets = [
  {
    number: 1,
    title: 'Clients',
    image: '/images/gallery/sasukenoble.jpg',
  },
  {
    number: 2,
    title: 'Nora',
    image: '/images/gallery/sasukespeed.jpg',
  },
  {
    number: 3,
    title: 'maeda',
    image: '/images/gallery/maeda.jpg',
  },
  {
    number: 4,
    title: 'mocha',
    image: '/images/gallery/mocha.jpg',
  },
];

const Gallery = () => {
  return (
    <div className="scroll-smooth">
      <div className="text-lg text-center sm:justify-center scroll-smooth">
        <h1 className="text-3xl">Jiu Jitsu</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {bjjArray.map((image) => {
          return (
            <Zoom key={image.number}>
              <div className={'p-3 md:p-3 lr:p-10 lr:w-80'}>
                <div>
                  <picture>
                    <img src={image.image} width="400" alt={image.title} />
                  </picture>
                </div>
              </div>
            </Zoom>
          );
        })}
      </div>
      <div className="text-lg text-center scroll-smooth">
        <h1 className="text-3xl">Headshots</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {headshotArray.map((image) => {
          return (
            <Zoom key={image.number}>
              <div className={'p-3 md:p-3 lr:p-10 lr:w-80'}>
                <div>
                  <picture>
                    <img src={image.image} width="400" alt={image.title} />
                  </picture>
                </div>
              </div>
            </Zoom>
          );
        })}
      </div>
      <div className="text-lg text-center scroll-smooth">
        <h1 className="text-3xl">Pet Friends</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {pets.map((image) => {
          return (
            <Zoom key={image.number}>
              <div className={'p-3 md:p-3 lr:p-10 lr:w-80'}>
                <div>
                  <picture>
                    <img src={image.image} width="400" alt={image.title} />
                  </picture>
                </div>
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
