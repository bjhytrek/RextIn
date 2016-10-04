import axios from "axios";

export function fetchBooking() {
  return function(dispatch) {
    axios.get("http://splatters.simplybook.me/iframe/pm_loader_v2.php?width=1000&url=//splatters.simplybook.me&theme=bootstrap__square_rainbow__colored_light&layout=bootstrap__square_rainbow&timeline=modern_week&mode=auto&mobile_redirect=0&hidden_steps=event&event=1")
    .then((response) => {
      dispatch({
        type: "FETCH_BOOKINGSCRIPT_FULFILLED",
        payload: response.data
      })
    })
    .catch((err) => {
      dispatch({type: "FETCH_BOOKINGSCRIPT_REJECTED", payload: err})
    })
  }
}
