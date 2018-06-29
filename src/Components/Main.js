import React, { Component }from 'react';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import Title from './Title';
import { Route, Link} from 'react-router-dom';
import { removePost } from '../redux/actions';



class Main extends Component {
  constructor()
{
  super();
}


  render() {
    return (
      <div>
        <h1>
        <Link to='/'>
          PhotoWall
        </Link>
        </h1>
        <Route exact path = '/' render = {() => (
          <div>
           <Photowall {...this.props}/>
          </div>
        )}/>

        <Route path= "/AddPhoto" render = {({history}) => (
          <AddPhoto {...this.props} onHistory = {history}/>

        )}/>
        </div>
      )
    }
}
export default Main
