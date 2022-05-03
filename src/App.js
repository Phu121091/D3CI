import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Text from './component/Text';
import { useState} from "react";
import Div from './component/Div';
import Btnalert from './component/Btnalert';

function App() {
  const [text, setText] = useState(`Hidden`);
  // console.log("count", count);
  // const decrease = () => {
  //   setCount(count-1);
  //   console.log("count", count);
  // }
  const change = () => {
    if(text==`Show`){setText(`Hidden`)}
    else
    setText(`Show`)
  }
  return(
    <>
    <Div color="blue" form="square"/>
    <Button onclick={change} text={text}/>
    <Text text={text} />
    <Btnalert text="OK"/>
    <Btnalert text="Good"/>
    <Btnalert text="Oh Shit"/>
    <Btnalert text="He he he"/>
    <Btnalert text="Oh my god"/>

    </>
  )
}

export default App;
