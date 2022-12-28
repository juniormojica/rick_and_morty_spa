


export const validation = (userData) => {
    
 const REGEX_USERNAME = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 const  REGEX_PASSWORD = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    
    let errors ={
        
    };
    if (!REGEX_USERNAME.test(userData.username)) {
      
        errors.username = "Name must be a valid  email"
       
        
    }

    if (!userData.username) {
        errors.username = "Writte an user "
    }
    if (userData.username >35) {
        errors.username = "Must have less than 35 characters"
    }

    if (!REGEX_PASSWORD.test(userData.password)) {
        errors.password = "Type a correct Password"
    }

    return errors
}
