import React from 'react';
import {Link} from 'react-router-dom';
import {MenuItems} from '../data/MenuItems';

import '.header.css';

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = 
      {clicked: false};
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

  changeClicked() {
    this.setState({clicked : !this.state.clicked})
  }

  render(){
    return (
      <nav className="header-navbar">
        <div className="navbar-logo">
          <img 
            className="logo-image"
            src="http://iesaglinares.org/meteo/img/iesnuevo.png"/>
          <div className="fa-futbol"/>
          <i class="fas-user-graduate"/>
        </div>
        
        <div className="navbar-menu">
          <ul>{this.createMenuLinks()}</ul>
          <ul>
            /* Forma map, funcion flecha*/
            {MenuItems.map((item) => {
              return(
                <li key={item.id} className="navbar-link">
                  <Link to={item.path}>{item.title}</Link>
                </li>
                );
            })}
          </ul> 
        </div>
        <i className="menu-icon" onClick={this.changeClicked().bind(this)} className={this.state.clicked ? "fa-times" : "fa-bars"} />
      </nav>
    );
  }
}

export default header;
