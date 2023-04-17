import axios from "axios";
export default async function UseAxios({
  data: inputData,
  url: inputUrl,
  method: inputMethod,
  auth: inputAuthen,
}) {
  var config = {
    method: inputMethod,
    url: inputUrl,
    headers: {
      Authorization: `Bearer ${inputAuthen}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(inputData),
  };

  // const response = await axios(config)
  //   .then((response) => {
  //     return response;
  //   })

  //   .catch((error) => {
  //     // console.log(error);
  //     return error;
  //   });

  //   return response.data;

  try {
    const response = await axios(config);
    // console.log(response);
    if (Math.floor((response.status/10)%100) == 20) {
      return response.data;
    }
    // else{
    //   return response.data?.response?.data;
    // }
  }
  catch (error) {
    return error.response?.data;
  }
}
