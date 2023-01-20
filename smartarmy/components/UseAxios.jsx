import axios from "axios";
export default function useAxios({data: inputData, url:inputUrl, method: inputMethod, authen:inputAuthen}){
    console.log(inputData, inputUrl)
    authen = false;
    var config = {
        method: inputMethod,
        url: inputUrl,
        headers: { 
            // 'Authorization': `Bearer ${Cookies.get('token')}`:"", 
            'Content-Type': 'application/json'
        },
        data : inputData
    };

    axios(config)

    .then(function (response) {
        console.log(JSON.stringify(response.data));
        return JSON.stringify(response.data)
    })
    
    .catch(function (error) {
        console.log(error);
        return error
    });

}