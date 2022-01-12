import React from 'react';
import {Link} from 'react-router-dom';
import {MenuItems} from '../data/MenuItems';

import '.header.css';

class Header extends React.Component {
  constructor(props){
    super(props)
  }

  createMenuLinks(){
    const listComponents = [];
    for (let i = 0; i< MenuItems.length; i++){
      listComponents.push(
        <li>
        <Link to={MenuItems[i].path}>{MenuItems[i].title}</Link>
      </li>
      );
    }
    return <div />
  }

  render(){
    return (
      <nav>
        <h1>Mi aplicacion</h1>
        <ul>{this.createMenuLinks()}</ul>
        <ul>
          /* Forma map, funcion flecha*/
          {MenuItems.map((item) => {
            return(
              <li>
                <Link to={item.path}>{item.title}</Link>
              </li>
              );
          })}
        </ul>   
      </nav>
    );
  }
}

export default header;
