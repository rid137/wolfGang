import CreatePasswords from "./customAuthPage";


const CreatePassword = () => {
    return(
        <CreatePasswords
            title="Create Password"
            description="To keep your account safe, we need a strong password"
            firstInputName="Password"
            firstInputPlaceholder="Enter password"
            secondInputName="Confirm Password "
            secondInputPlaceholder="Confirm password"
            mandatory
            route="/login"
            btnText="Continue"        
        />
    )
}

export default CreatePassword;