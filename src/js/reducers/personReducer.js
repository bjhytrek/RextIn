export default function reducer(
  state={
    person: {},
    endorsements: {},
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_PERSON": {
        return {...state, fetching: true}
      }
      case "FETCH_PERSON_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PERSON_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          person:  action.payload,
        }
      }
      case "FETCH_ENDORSEMENTS_FULFILLED": {
        return {
          ...state,
          endorsements: action.payload,
        }
      }
    }
return state
}
