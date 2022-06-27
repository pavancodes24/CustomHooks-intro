import Button from "./component/Button";
import GithubSearchHooks from "./component/GithubSearchHooks";
import CustomHooks from "./component/Hooks";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>UseContext Hooks</h1>
      <br />
      <Button label="button" />
      <CustomHooks />
      <GithubSearchHooks />
    </div>
  );
}
