import './App.css';
import ContactList from './ContactList'
import AddContact from './AddContact'
import EditContact from './EditContact'
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      n : 1,
      id : 0,
    };
    this.EditContactfunc = this.EditContactfunc.bind(this)
    this.ListContactFunc = this.ListContactFunc.bind(this)
  }
  ListContactFunc()
  {
    this.setState({n : 1})
  }
  EditContactfunc(u)
  {
    this.setState({n : 3, id : u})
  }
  render(){
    var t = <div></div>;
    if(this.state.n===1)
    {
      t = <ContactList edf={this.EditContactfunc} />
    }
    else if(this.state.n===2)
    {
      t = <AddContact />
    }
    else if(this.state.n===3)
    {
      t = <EditContact id = {this.state.id} lcf = {this.ListContactFunc}/>
    }
    return (
      <div className="ui container">
        {t}
      </div>
    );
  }
}

export default App;
