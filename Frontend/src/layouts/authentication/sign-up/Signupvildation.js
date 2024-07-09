function Validation(values){
    let error = {}

    
    if(values.name === ''){
        error.name = 'name not khali'
    }else if(!(values.name)){
        error.name = "name not match"
    }else{
        error.name = ''
    }

    if(values.email === ''){
        error.email = 'email not khali'
    }else if(!(values.email)){
        error.email = "email not match"
    }else{
        error.email = ''
    }

    if(values.password === ''){
        error.password = 'password not khali'
    }else if(!(values.password)){
        error.password = "password not match"
    }else{
        error.password = ''
    }
    return error
}
export default Validation;