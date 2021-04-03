import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from './DataGrid'
import PersistentDrawerLeft from './PersistentDrawer';

class App extends React.Component {
  state = {
    message: "this is just testing that data can be passed by the components",
  }

  changeMessage = (a) => {
    this.setState({ message : a.data.firstName });
  }

  handleDelete = (rowIndex) => {

  }

  startEditing = (rowIndex) => {

  }

  stopEditing = () => {

  }

  handleChange = () => {

  }

  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        <DataTable
        changeMessage={this.changeMessage}
        />
      </div>
      
    )
  }
}
export default App;
