import {appData} from "./global.js";

const saveLS = () => {
    const serializedArr = JSON.stringify(appData);
    localStorage.setItem("app", serializedArr);
}

const getLS = () => {
    const retrievedArr = localStorage.getItem("app");
    if(retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
}

export {appData, saveLS, getLS};