import React from 'react';
import { Table } from 'react-bootstrap';

class Coches extends React.Component {
  constructor  (props) {
    super(props);
  }

  render(){
    return (
      <div className="main-site">
        <h1>Coches</h1>
        <Table responsive>

        </Table>
      </div>
    )
  }
}