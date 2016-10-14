var firebase = require("firebase");

const Posts = firebase.database().ref('posts/');

export function fetchPosts() {
  return dispatch => {
    Posts.on('value', snapshot =>{
      dispatch({
        type: 'FETCH_POSTS_FULFILLED',
        payload: snapshot.val()
      });
    });
  };
}
export function createPost(newPost){
  return dispatch => Posts.push(newPost);
}

export function deletePost(key) {
  return dispatch => Posts.child(key).remove();
}
