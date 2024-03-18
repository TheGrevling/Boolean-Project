import React from 'react'

export const environment = "https://localhost:7259"

export const fetchData = async (url, setState) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        setState(data)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

export const postData = async (url, bodyData, setState) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        });
        const data = await response.json();
        setState(data);
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const deleteData = async (url, setState) => {
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        const data = await response.json();
        setState(data);
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

export const updateData = async (url, payload, setState) => {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        setState(data);
    } catch (error) {
        console.error('Error updating data:', error);
    }
}
export const updateDataAtParam = async (url, payload, setState, parameter) => {
    try {
        const response = await fetch(url + `/${parameter}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        setState(data);
    } catch (error) {
        console.error('Error updating data:', error);
    }
}