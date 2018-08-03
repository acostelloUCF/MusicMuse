import {FETCH_POST_LIST,FETCH_POST} from '../actions'
export default function (state={},action){
    switch(action.type){
        case FETCH_POST_LIST:{
            return _.mapKeys(action.payload.data,"id");
        }
        case FETCH_POST:{
            const post = action.payload.data;
            return {...state,[post.id]:post};
        }
        default:
            return state;
    }
}