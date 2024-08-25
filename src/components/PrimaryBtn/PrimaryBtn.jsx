import { useState } from "react";
import ReactiveButton from "reactive-button";

const PrimaryBtn = () => {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <ReactiveButton
      buttonState={state}
      onClick={onClickHandler}
      color={"dark"}
      idleText={"Submit"}
      type={"button"}
      className={"class1 class2"}
      outline={true}
      shadow={true}
      rounded={false}
      size={"large"}
      block={true}
      messageDuration={2000}
      disabled={false}
      buttonRef={null}
      height={null}
      animation={true}
    />
  );
};

export default PrimaryBtn;

/**
 * i

function App() {
  
}

export default App;
 */
