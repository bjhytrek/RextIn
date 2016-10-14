import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import posts from "./postsReducer"
import booking from "./bookingReducer"
import person from "./personReducer"
import people from "./peopleReducer"
import user from "./userReducer"

export default combineReducers({
  posts,
  tweets,
  booking,
  person,
  people,
  user,
})
