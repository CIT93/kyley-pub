import { cfpData } from "./global.js";

const saveLS = function() {
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
}

const getLS = function() {
    const retrievedArr = localStorage.getItem("cfp");
    if(retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
}

export {cfpData, saveLS, getLS};