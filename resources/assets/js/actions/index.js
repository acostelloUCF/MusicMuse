import axios from 'axios';

const API_ROOT = 'https://shmeel.life/api';

export const FETCH_LATEST_POST = 'FETCH_LATEST_POST';
export const FETCH_POST_LIST = 'FETCH_POST_LIST';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_BAND_LIST = 'FETCH_BAND_LIST';
export const FETCH_BAND = 'FETCH_BAND';
export const FETCH_BAND_ERROR = 'FETCH_BAND_ERROR';
export const FETCH_TAGS = 'FETCH_TAGS';
export const FETCH_TAG = 'FETCH_TAG';
export const FETCH_CONCERTS = 'FETCH_CONCERTS';
export const FETCH_CONCERT = 'FETCH_CONCERT';
export const CREATE_POST = 'CREATE_POST';



export function fetchLatestPost(){
    const url = `${API_ROOT}/posts/latest`;
    const request = axios.get(url);

    return{
        type:FETCH_LATEST_POST,
        payload: request
    };

}

export function fetchPostList(){
    const url = `${API_ROOT}/posts`;
    const request = axios.get(url);

    return{
        type:FETCH_POST_LIST,
        payload: request
    };
}

export function fetchPost(id){
    const url = `${API_ROOT}/posts/${id}`;
    const request = axios.get(url);

    return{
        type:FETCH_POST,
        payload: request
    };
}

export function fetchBandList(searchTerm=null){
    var url = `${API_ROOT}/bands`;
    if(searchTerm){
        url = `${url}?searchTerm=${searchTerm}`;
    }
    const request = axios.get(url);

    return{
        type:FETCH_BAND_LIST,
        payload: request
    };
}

export function fetchBand(id){
    const url = `${API_ROOT}/bands/${id}`;
    const request = axios.get(url)

    return{
        type:FETCH_BAND,
        payload: request
    };
}

export function fetchTags(searchTerm=null){
    var url = `${API_ROOT}/tags`;
    if(searchTerm){
        url = `${url}?searchTerm=${searchTerm}`;
    }
    const request = axios.get(url);

    return{
        type:FETCH_TAGS,
        payload: request
    };
}

export function fetchTag(id){
    const url = `${API_ROOT}/tags/${id}`;
    const request = axios.get(url);

    return{
        type:FETCH_TAG,
        payload: request
    };
}

export function fetchConcerts(){
    const url = `${API_ROOT}/concerts`;
    const request = axios.get(url);

    return{
        type:FETCH_CONCERTS,
        payload: request
    };
}

export function fetchConcert(id){
    const url = `${API_ROOT}/concerts/${id}`;
    const request = axios.get(url);

    return{
        type:FETCH_CONCERT,
        payload: request
    };
}

export function createPost(props){
    const url = `${API_ROOT}/posts`;
    const request = axios.post(url,props);

    return{
        type:CREATE_POST,
        payload:request
    }

}
    
