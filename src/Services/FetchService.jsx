import { getCookie } from './CookieService';

export const environment = "https://localhost:7259" // The API url we are fetching from


export const FetchData = async (url, setState) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("accessToken")}`
            },
        })
        const data = await response.json()
        setState(data)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

export const PostData = async (url, bodyData, setState) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("accessToken")}`
            },
            body: JSON.stringify(bodyData)
        });
        const data = await response.json();
        setState(data);
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const DeleteData = async (url, setState) => {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${getCookie("accessToken")}`
            }
        });
        const data = await response.json();
        setState(data);
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

export const UpdateData = async (url, payload, setState) => {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("accessToken")}`
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        setState(data);
    } catch (error) {
        console.error('Error updating data:', error);
    }
}
export const UpdateDataAtParam = async (url, payload, setState, parameter) => {
    try {
        const response = await fetch(url + `/${parameter}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("accessToken")}`
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        setState(data);
    } catch (error) {
        console.error('Error updating data:', error);
    }
}