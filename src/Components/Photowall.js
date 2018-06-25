import React from 'react';
import Photo from './Photo';

function Photowall(props) {
  return (
    <div className='photoGrid'>
    {props.posts.map(function(post, idx) {
      return <Photo key = { idx } post = { post }/>
    })}
  </div>
)
}

export default Photowall
