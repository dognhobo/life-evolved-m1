import React from 'react';
import { DigitalHome } from './digital-home';

type Page = 'home' | 'habitat' | 'capture' | 'ecosystem';

interface HomeScreenProps {
  setPage: (page: Page) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ setPage }) => {
  return (
    <DigitalHome
      userName="Ricky"
      dateLabel="Thursday, 23 July"
      weatherLabel="17° · Calm"
      onOpenHabitat={(id) => setPage('habitat')}
      onCaptureSeed={() => setPage('capture')}
      onOpenJourney={() => console.log('journey')}
      onOpenEcosystem={() => setPage('ecosystem')}
    />
  );
};

export default HomeScreen;