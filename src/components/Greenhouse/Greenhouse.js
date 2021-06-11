import { useTheme } from '../../context/ThemeContext';
import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
// import { ThemeContext } from '../../context/ThemeContext';
// import { useContext } from 'react';



import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const { themeName, setThemeName } = useTheme();
  // same as below
  // const { themeName, setThemeName } = useContext(ThemeContext);
  const themeChoice = themeName === "day" ? dayImage : nightImage;
  return (
    <section>
      <img className='greenhouse-img' src={themeChoice} alt='greenhouse' />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
