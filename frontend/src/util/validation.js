//Admin
export  const adminValidation = (username , password) => {
    const error = {};

    const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    
    //check username
    if(username === ""){
        error.usernameError = "Username requierd";
    }else if(username !== adminUsername){
        error.usernameError = "Incorrect username";
    }

    //check password
    if(password === ""){
        error.passwordError = "Password required";
    }else if(password !== adminPassword){
        error.passwordError = "Invalid password";
    }

    return error;
};