import {FETCH_TAGS,FETCH_TAG} from '../actions';

export default function (state={},action){
    switch(action.type){
        case FETCH_TAGS:{
            return _.mapKeys(action.payload.data,"id");
        }
        case FETCH_TAG:{
            const tag = action.payload.data;
            return {...state,[tag.id]:tag};
        }
        default:
            return state;
    }
}