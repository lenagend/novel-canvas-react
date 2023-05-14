import {useLocation} from "react-router-dom";
import Header from "../component/header/Header";
import LoginContainer from "../component/body/container/LoginContainer";

const Login = () =>{
    const location = useLocation();
    const originPath = location.state?.originPath ?? "/";

    return (
        <div className="App">
            <Header />
            <LoginContainer originPath={originPath}/>
        </div>
    );

}

export default Login;