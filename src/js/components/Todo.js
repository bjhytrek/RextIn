import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { fetchPosts, deletePost, createPost } from "../actions/postsActions";
import { Button, FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';

@connect((store) => {
  return {
    posts: store.posts.posts,
    postsFetched: store.posts.fetched,
  };
})

export default class Todo extends React.Component {
state = { post: '' };

componentWillMount() {
  this.props.dispatch(fetchPosts())
}

clickDelete(key){
  this.props.dispatch(deletePost(key));
}

handleFormSubmit() {
this.props.dispatch(createPost(this.state.post));
}

handleInputChange(event) {
   this.setState({ post: event.target.value });
 }

 render() {
   const { user, posts } = this.props;
   const mappedPosts = Object.keys(posts).map((key) => {
     return <ListGroupItem key={key}>{posts[key]}<Button bsStyle="danger" onClick={() => { this.clickDelete(key) }}>DELETE</Button></ListGroupItem>
   });

   return <div>
     <ListGroup>{mappedPosts}</ListGroup>
       <FormGroup>
       <ControlLabel>Type your post here:</ControlLabel>
       <FormControl
           type="text"
           value={this.state.post}
           placeholder="Enter text"
           onChange={this.handleInputChange.bind(this)}
         />
         {/* <input
         placeholder="Add a post"
         value={this.state.post}
         onChange={this.handleInputChange.bind(this)}
         /> */}
         <Button bsStyle="primary" onClick={() => this.handleFormSubmit()}>Add Post</Button>

       </FormGroup>
       </div>
 }

 }
