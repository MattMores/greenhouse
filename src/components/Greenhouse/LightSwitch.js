import './LightSwitch.css';
import { useTheme } from "../../context/ThemeContext"

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();
  return (
    <div className="light-switch day">
      <div onClick={ (event) => setThemeName("day")} className="on">DAY</div>
      <div onClick={ (event) => setThemeName("night")} className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;
