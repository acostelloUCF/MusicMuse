import { combineReducers } from "redux";
import LatestPostReducer from "./reducer_latest_post";
import BandReducer from "./reducer_bands";
import PostReducer from "./reducer_posts"
import TagReducer from "./reducer_tags";
import ConcertReducer from "./reducer_concerts";


const rootReducer = combineReducers({
  latestPost: LatestPostReducer,
  bands: BandReducer,
  posts: PostReducer,
  tags: TagReducer,
  concerts: ConcertReducer
});

export default rootReducer;