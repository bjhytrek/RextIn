var firebase = require("firebase");




export function fetchUser() {
  const auth = firebase.auth();
  return dispatch => {
    firebase.auth().onAuthStateChanged((activeUser) => {
      if(activeUser) {
        dispatch({
          type: 'USER_SIGNED_IN',
          payload: [activeUser],
        });
      }
      else {
        console.log("no activeUser")
        dispatch({
          type: 'NO_ACTIVE_USER',
          payload: false,
        })
      }
    })
  }
}

export function loginUser(email, password) {
  const auth = firebase.auth();
  return dispatch => {
    auth.signInWithEmailAndPassword(email, password)
      .then((user) =>{
        dispatch({
          type: 'LOGIN_USER_FULFILLED',
          payload: [user],
        });
      }, (error) => {
        dispatch({
          type: 'LOGIN_USER_REJECTED',
          payload: [error],
        })
      });

  }
}

export function signUp(newUser) {
  const auth = firebase.auth();
  return dispatch => {
    auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((createdUser) =>{
       //save user's profile into firebase so we can list users,
       //use them in security and firebase Rules, and show profiles
         console.log("Created User",createdUser);
         console.log("current firebase User",auth.currentUser);
         auth.currentUser.updateProfile({
           displayName: [newUser.name],
         });
         firebase.database().ref("/users").child(createdUser.uid).set({
           name: newUser.name,
           email: newUser.email,
           position: newUser.position,
           phone: newUser.phone,
           address: newUser.address,
           about: newUser.about,
           status: newUser.status,
         });
        dispatch({
          type: 'SIGNUP_USER_FULFILLED',
          payload: ['User was Created.'],
        });
      }, (error) => {
        dispatch({
          type: 'SIGNUP_USER_REJECTED',
          payload: [error],
        })
      });

  }
}
export function signOut() {
  const auth = firebase.auth();
  return dispatch => {
    auth.signOut()
      .then(() =>{
        dispatch({
          type: 'SIGNOUT_USER_FULFILLED',
          payload: 'User was Signed Out.',
        });
      }, (error) => {
        dispatch({
          type: 'SIGNOUT_USER_REJECTED',
          payload: [error],
        })
      });

  }
}
