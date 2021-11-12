import { BaseButton } from "./components/button/BaseButton";
import { PrimaryButton } from "./components/button/PrimaryButton";
import { SecondaryButton } from "./components/button/SecondaryButton";
import { Searchinput } from "./components/molecules/Searchinput";
import { UserCard } from "./components/organisms/users/UserCard";
import "./styles.css";

const user = {
  name: "なん",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12222@example.com",
  phone: "090-0120-sssss",
  company: {
    name: "テスト会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>ボタン</PrimaryButton>
      <SecondaryButton>2ndボタン</SecondaryButton>
      <br />
      <Searchinput />
      <UserCard user={user} />
    </div>
  );
}
