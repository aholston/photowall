import { database } from '../database/config';
export function startAddingPost(post) {
  return (dispatch) => {
    return database.ref('posts').update({[post.id]: post}).then(() => {
      dispatch(addPost(post))
    }).catch((error) => {
      console.log(error)
    })
  }
}


// remove
export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index
  }
}

export function startLoadingPosts() {
  return (dispatch) => {
    return database.ref('posts').once('value').then((snapshot) => {
      let posts = []
      snapshot.forEach((child) => {
        posts.push(child.val())
      })
      dispatch(loadPosts(posts))
    })
  }
}

export function startRemovingPosts(index, id) {
  return (dispatch) => {
    return database.ref(`posts/${id}`).remove().then(() => {
      dispatch(removePost(index))
    })
  }
}

// add
export function addPost(post) {
  return {
    type: 'ADD_POST',
    post
  }
}

export function addComment(comment, postId) {
  return {
    type: 'ADD_COMMENT',
    comment,
    postId
  }
}

export function loadPosts(posts) {
  return {
    type: 'LOAD_POSTS',
    posts
  }
}
