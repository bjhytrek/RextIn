export default function reducer(
  state={
    booking: {},
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_BOOKINGSCRIPT_FULFILLED": {
        return {
          ...state,
          fetched: true,
          booking: action.payload,
          }
      }
      case "FETCH_BOOKINGSCRIPT_REJECTED": {
        return {
          ...state,
          fetching: false,
          error: action.payload}
      }
    }
    return state
}
