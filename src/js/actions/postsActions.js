// import axios from "axios";
// var firebase = require("firebase");
// var config = {
//    apiKey: "AIzaSyDNReLZ0VS6coIEeKbWafQ_hv4eEhWwLfg",
//    authDomain: "gatorjacks-8427c.firebaseapp.com",
//    databaseURL: "https://gatorjacks-8427c.firebaseio.com",
//    storageBucket: "gatorjacks-8427c.appspot.com",
//    messagingSenderId: "1032473896473"
//  };
// firebase.initializeApp(config);
//
//  const Posts = firebase.database().ref('posts/');
//
// export function fetchPosts() {
//   return dispatch => {
//     Posts.on('value', snapshot =>{
//       dispatch({
//         type: 'FETCH_POSTS_FULFILLED',
//         payload: snapshot.val()
//       });
//     });
//   };
// }
// export function createPost(newPost){
//   return dispatch => Posts.push(newPost);
// }
//
// export function deletePost(key) {
//   return dispatch => Posts.child(key).remove();
// }
