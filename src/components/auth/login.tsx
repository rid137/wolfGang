import CustomAuthPage from "./customAuthPage";

const Login = () => {
    return(
        <CustomAuthPage
            title="Log In"
            description="Don’t have an account? Create an Account"
            firstInputName="Email"
            firstInputPlaceholder="Enter email"
            secondInputName="Password "
            secondInputPlaceholder="Enter password"
            footerText
            forgotYourPassword
            route="/forgot_password"
            btnText="Log In"        
        />
    )
}

export default Login;