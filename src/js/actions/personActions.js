  var firebase = require("firebase");
  var config = {
      apiKey: "AIzaSyD0zevOZ8r9Wb00GCxZ1vVSRYHwWzjvWc4",
      authDomain: "rextin-d976b.firebaseapp.com",
      databaseURL: "https://rextin-d976b.firebaseio.com",
      storageBucket: "rextin-d976b.appspot.com",
      messagingSenderId: "107525177257"
    };
    firebase.initializeApp(config);

 const Fb = firebase.database();

  export function fetchPerson(person) {
    return dispatch => {
      Fb.ref('people/'+person).on('value', snapshot =>{
        dispatch({
          type: 'FETCH_PERSON_FULFILLED',
          payload: snapshot.val()
        });
      });
    };
  }
  export function fetchEndorsements(person) {
    return dispatch => {
      Fb.ref('people/'+person+'/endorsements').on('value', snapshot =>{
        dispatch({
          type: 'FETCH_ENDORSEMENTS_FULFILLED',
          payload: snapshot.val()
        });
      });
    };
  }
