import axios from "axios";

const BASE_URL = 'http://localhost:8080/user-system';


export const userSystemList = async () => {
    try {
        const response = await axios.get(BASE_URL);                    
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}


export const addUserSystem = async({name, lastname, position, area, email, password}, listaRoles) => {
    
    try {
        const response = await axios.post(BASE_URL, {

            name : name, 
            lastname : lastname, 
            position : position, 
            area : area, 
            email : email,
            roles : listaRoles,
            password : password
    
        });   

        return response;

    } catch (error) {
        console.error(error);
        throw error;
    }
    return null;
}


export const updateUserSystem = async({idUser, name, lastname, position, area, email}, listaRoles) => {

    console.log('updateUserSystem --- idUser: ', idUser)

    try {
        const response = await axios.put(`${BASE_URL}/${idUser}`, {
            
            idUser : idUser,
            name : name, 
            lastname : lastname, 
            position : position, 
            area : area, 
            email : email,
            roles : listaRoles
    
        });   

        return response;

    } catch (error) {
        console.error(error);
        throw error;
    }
    return null;

}


export const deleteUserSystem = async(idUser) => {

    try {

        const response = await axios.delete(`${BASE_URL}/${idUser}`);

        return response;

    } catch (error) {
        console.error(error);
    }
    return null;

}