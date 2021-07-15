import React from 'react'
import axios from 'axios';

class AddContact extends React.Component 
{
    posting()
    {
        console.log("hello");
        // const h = {
        //     "Content-Type": "application/json",
        // }
        axios.get('http://127.0.0.1:8000/?format=json',)
        .then(function (response) {
            console.log(response.data);
            // I need this data here ^^
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render()
    {
        return (
        <div className = "ui main">
            <br></br>
            <h2> Add Contact </h2>
            <form className = "ui form">
                <div className = "field" >
                    <label>
                        First Name
                    </label>
                    <input type = "text" name = "First Name" placeholder = "Ex: John" >
                    </input>
                </div>
                <div className = "field" >
                    <label>
                        Last Name
                    </label>
                    <input type = "text" name = "Last Name" placeholder = "Ex: Swift" >
                    </input>
                </div>
                <div className = "field" >
                    <label>
                        Email
                    </label>
                    <input type = "text" name = "email" placeholder = "Email" >
                    </input>
                </div>
                <button className = "ui button blue" onClick={this.posting}>
                    Add
                </button>
            </form>
        </div>)
    }
}

export default AddContact;