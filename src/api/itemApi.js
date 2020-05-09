import axios from 'axios'
import {handleResponse, handleError} from './apiUtils'

export function getItems() {
    return axios
        .get(`http://192.168.0.12:8091/get-items`)
        .then(handleResponse)
        .catch(handleError);
};

export function addItem(name) {
    let item = {id: Math.floor(Math.random() * 1000) + 1, name};
    return axios
        .post(`http://192.168.0.12:8091/add-item`, item)
        .then(()=>{
            return item;
        })
        .catch(handleError);
}

export function deleteItem(id) {
    return axios
        .delete(`http://192.168.0.12:8091/delete-item/?id=` + id)
        .then(handleResponse)
        .catch(handleError);
}

// public function generateRandom() {
//     return Math.floor(Math.random() * 1000) + 1;
// };