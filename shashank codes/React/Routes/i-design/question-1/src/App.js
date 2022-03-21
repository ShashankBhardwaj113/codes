import { useNavigate } from "react-router-dom";
import LoginBody from "./components/LoginBody";

const App = () => {
  let navigate = useNavigate();

  const loginState = (state) => {

    if(state === 1){
      navigate("/user");
      return 1;
    }else if(state === 2){
      return 2;
    }else{
      return 0;
    }
  }

  return (
    <LoginBody loginState={loginState}/>
  );
}

export default App;
