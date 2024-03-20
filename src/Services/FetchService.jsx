import React from 'react'
import { getCookie } from '../App';

export const environment = "https://localhost:7259" // The API url we are fetching from
const token = ''; // TODO: TESTING purposes only. Should be replaced with a function that fetches the token stored on the client side.


export const FetchData = async (url, setState) => {
    let errorOccurred = false; // Flag to track if an error occurred
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("accessToken")}`
            },
        })

        if (!response.ok) {
            const errorMessage = await getErrorMessage(response); // Get error message
            alert(errorMessage); // Display error in alert
            errorOccurred = true;
            return errorOccurred;
        }
        const data = await response.json()
        setState(data)
    } catch (error) {
        errorOccurred = true
        alert(error);
        console.error('Error fetching data:', error)
    }
    return errorOccurred
}

export const PostData = async (url, bodyData, setState) => {
    let errorOccurred = false; // Flag to track if an error occurred
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("accessToken")}`
            },
            body: JSON.stringify(bodyData)
        });

        if (!response.ok) {
            errorOccurred = true;
            const errorMessage = await getErrorMessage(response); // Get error message
            alert(errorMessage); // Display error in alert
            return errorOccurred;
        }
        const data = await response.json();
        setState(data);
    } catch (error) {
        errorOccurred = true;
        alert(error);
        console.error('Error posting data:', error);
    }
    return errorOccurred
}

export const DeleteData = async (url, setState) => {
    let errorOccurred = false; // Flag to track if an error occurred
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${getCookie("accessToken")}`
            }
        });

        if (!response.ok) {
            errorOccurred = true;
            const errorMessage = await getErrorMessage(response); // Get error message
            alert(errorMessage); // Display error in alert
            return errorOccurred;
        }

        const data = await response.json();
        setState(data);
    } catch (error) {
        errorOccurred = true;
        console.error('Error deleting data:', error);
    }
    return errorOccurred
}

export const UpdateData = async (url, payload, setState) => {
    let errorOccurred = false; // Flag to track if an error occurred
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("accessToken")}`
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            errorOccurred = true;
            const errorMessage = await getErrorMessage(response); // Get error message
            alert(errorMessage); // Display error in alert
            return errorOccurred;
        }
        const data = await response.json();
        setState(data);
    } catch (error) {
        errorOccurred = true;
        console.error('Error updating data:', error);
    }
    return errorOccurred
}
export const UpdateDataAtParam = async (url, payload, setState, parameter) => {
    let errorOccurred = false; // Flag to track if an error occurred
    try {
        const response = await fetch(url + `/${parameter}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("accessToken")}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            errorOccurred = true;
            const errorMessage = await getErrorMessage(response); // Get error message
            alert(errorMessage); // Display error in alert
            return errorOccurred;
        }
        const data = await response.json();
        setState(data);
    } catch (error) {
        errorOccurred = true;
        console.error('Error updating data:', error);
    }
    return errorOccurred
}
// Function to get error message from response
const getErrorMessage = async (response) => {
    let errorMessage = '';
    const errorData = await response.json(); // Parse error response body
    if (Object.keys(errorData).length > 0) {
        errorMessage = constructErrorMessage(errorData); // Construct error message if errorData is present
    } else {
        errorMessage = `Error: ${response.status}`; // Display HTTP error status code if no errorData
    }
    return errorMessage;
};

// Function to construct error message from error data object
const constructErrorMessage = (errorData) => {
    let errorMessage = '';
    for (const key in errorData) {
        if (errorData.hasOwnProperty(key)) {
            errorMessage += `${key}: ${errorData[key][0]}\n`; // Concatenate each error message
        }
    }
    return errorMessage;
};