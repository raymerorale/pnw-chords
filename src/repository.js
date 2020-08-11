import axios from 'axios';
const BASE_URL = 'http://localhost:8081';

export function getSongs() {
        return axios.get(`${BASE_URL}/`)
                .then(response => response.data);
}

export function showSong(id) {
        return axios.get(`${BASE_URL}/${id}`)
                .then(response => response.data);
}


export function createSong(data) {
        return axios.post(`${BASE_URL}/create`, 
        { 
                title: data.title,
                artist: data.artist,
                details: data.details, 
                chords: data.chords, 
                stanza: data.stanza,
                stanzaCount: data.stanzaCount
        }
        )      .then(response => {
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}


export function updateSong(data, id) {
        return axios.post(`${BASE_URL}/${id}/update`, { data })
                .then(response => {
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}