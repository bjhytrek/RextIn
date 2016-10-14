var firebase = require("firebase");

  const Fb = firebase.database();

   export function fetchPeople() {
     return dispatch => {
       Fb.ref('people/').on('value', snapshot =>{
         dispatch({
           type: 'FETCH_PEOPLE_FULFILLED',
           payload: snapshot.val()
         });
       });
     };
   }
