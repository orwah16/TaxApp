import {ClientInfo} from "./types"


const url = "http://127.0.0.1:5000";
const controller = new AbortController();


export const updateUsers = async (client: ClientInfo) => {
  console.log("Post function: user:", client.firstName);
  const options = {
    setTimeout: 5000,
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

  console.log("before fetch");

  // Return the promise chain
  return fetch(url + '/API', options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(json => {
      console.log('Response is a JSON object:', json);
      if (json.status === "Invalid") {
        console.log("Invalid: ", json.status);
        return "Invalid";
      } else {
        console.log("Valid: ", json.status);
        return "Valid";
      }
    })
    .catch(error => {
      console.error('Error:', error);
      return undefined;
    });
};

