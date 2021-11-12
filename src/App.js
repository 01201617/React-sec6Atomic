import { BaseButton } from "./components/button/BaseButton";
import { PrimaryButton } from "./components/button/PrimaryButton";
import { SecondaryButton } from "./components/button/SecondaryButton";
import { Searchinput } from "./components/molecules/Searchinput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>ボタン</PrimaryButton>
      <SecondaryButton>2ndボタン</SecondaryButton>
      <br />
      <Searchinput />
    </div>
  );
}
