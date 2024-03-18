import axios from 'axios';
const url = 'http://localhost:8080';

export const AddUser = async (data) => {
    try {
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}

export const getAllUsers = async () => {
    try {
        let respose = await axios.get(`${url}/users`);
        return respose.data;
    }
    catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}


export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    }
    catch (error) {
        console.log('Error while calling addUser API ', error.message);
    }
}


export const getConversationDetails = async (data) => {
    try {
       let res= await axios.post(`${url}/conversation/get`, data);
       return res.data;
    }
    catch (error) {
        console.log('Error while calling getConversation API ', error.message);
    }
}
export const newMessage = async(data)=>{
    try{
       let res= await axios.post(`${url}/message/add`, data);
        return res.data
    }
    catch(error){
        console.log('Error while calling getConversation API ', error.message);

    }
}