// fetch()
import {ClientInfo} from "./types"


const url = "http://127.0.0.1:5000";
const controller = new AbortController();


export const updateUsers = async (client: ClientInfo) => {
  console.log("Post function: user:",client.firstName)
  const options = {
    method: "POST",
    signal: controller.signal,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },

    body: JSON.stringify({
      first_name: client.firstName, 
      last_name: client.lastName, 
      phone_number: client.phoneNumber, 
      type_of_employment: client.typeOfEmployment,
      income: client.income
    }),
  };
  console.log("before fetch")
  // const timeoutId = setTimeout(() => controller.abort(), 4000);
  try{
  const promise = fetch(url+'/API', options)

  promise
    .then((response) => {
        console.log(response)
        if (response.status === 200) {
          console.log(response.status)
          return response.json();
        } else {
          throw 'Error updating clients'
        }
      }).then((data) => {
          console.log(data);
      });
  } catch(error){
    console.log("issue with backend")
  }
}