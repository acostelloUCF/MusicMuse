import {FETCH_BAND_LIST,FETCH_BAND} from '../actions';

export default function (state={},action){
    switch(action.type){
        case FETCH_BAND_LIST:{
            return _.mapKeys(action.payload.data,"id");
        }
        case FETCH_BAND:{
            const band = action.payload.data;
            return {...state,[band.id]:band};
        }
        default:
            return state;
    }
}

