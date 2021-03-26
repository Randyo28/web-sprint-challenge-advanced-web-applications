import axios from "axios";

export const axiosWithAuth = () => {
    axios.create({
        header: 'token',
        baseURL: 'Localhosthttp://localhost:5000/api/'
    })
}

//Task List:
//Build and export a function used to send in our authorization token