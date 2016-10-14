export default function reducer(
  state={
    user: {},
    fetching: false,
    fetched: false,
    error: null,
    message: null,
    activeUser: false,
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "USER_SIGNED_IN": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          activeUser:  action.payload,
        }
      }
      case "NO_ACTIVE_USER": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          activeUser:  action.payload,
        }
      }
      case "LOGIN_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload[0].message}
      }
      case "LOGIN_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user:  action.payload,
        }
      }
      case "SIGNUP_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload[0].message}
      }
      case "SIGNUP_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          message:  action.payload,
        }
      }
    }
return state
}
