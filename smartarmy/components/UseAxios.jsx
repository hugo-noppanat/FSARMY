import axios from "axios";
export default function useAxios({data: inputData, url:inputUrl, method: inputMethod, authen:inputAuthen}){
    var config = {
        method: inputMethod,
        url: inputUrl,
        headers: { 
            // 'Authorization': `Bearer ${Cookies.get('token')}`:"", 
            'Content-Type': 'application/json'
        },
        data : JSON.stringify(inputData)
    };

    axios(config)

    .then(function (response) {
        return JSON.stringify(response.data)
    })
    
    .catch(function (error) {
        return error
    });

}