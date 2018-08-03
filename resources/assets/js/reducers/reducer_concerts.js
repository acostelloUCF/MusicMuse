import {FETCH_CONCERTS,FETCH_CONCERT} from '../actions';

export default function (state={},action){
    switch(action.type){
        case FETCH_CONCERTS:{
            return _.mapKeys(action.payload.data,"id");
        }
        case FETCH_CONCERT:{
            const concert = action.payload.data;
            return {...state,[concert.id]:concert};
        }
        default:
            return state;
    }
}