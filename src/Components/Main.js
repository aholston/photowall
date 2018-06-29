import React, { Component }from 'react';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import Title from './Title';
import { Route } from 'react-router-dom';
import { removePost } from '../redux/actions';



class Main extends Component {
  constructor()
{
  super();
}


  render() {
    console.log(this.props)
    return (
      <div>
      <Route exact path = '/' render = {() => (
        <div>
         <Title title='PhotoWall'/>
         <Photowall {...this.props}/>
        </div>

      )}/>
    </div>

    )
  }
}

export default Main
