import React from 'react';
import {
  CodaHero,
  Footer,
  Iphone13Pro,
  IphoneSE,
  Unicef,
} from '../../components';

export default function Home() {
  return (
    <div className="w-full block overflow-hidden">
      <Unicef />
      <Iphone13Pro />
      <IphoneSE />
      <CodaHero />
      <Footer />
    </div>
  );
}
