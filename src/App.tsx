import "./App.css";
import { useState } from "react";
import ImageUplouder from "./components/ImageUplouder";
import Loader from "./components/Loader";
import Result from "./components/Result";

const App = () => {
  const [step, useStep] = useState(1);
  const [data, useData] = useState({});

  var component: JSX.Element = <ImageUplouder />;

  if (step === 1) {
    component = <ImageUplouder response={useData} step={useStep} />;
  } else if (step === 2) {
    component = <Loader />;
  } else if (step === 3) {
    component = <Result response={data} step={useStep} />;
  }

  return <div className="App">{component}</div>;
};

export default App;
