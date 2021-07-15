import './App.css';
import Header from './Header'
// import ContactList from './ContactList'
import AddContact from './AddContact'
import React from 'react';

function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      {/* <ContactList /> */}
    </div>
  );
}

export default App;
