import React from 'react'
import axios from 'axios';

class EditContact extends React.Component 
{
    constructor(props){
        super(props)
        this.obj = new FormData();
        this.editing = this.editing.bind(this)
    }
    editing = () =>{
        const d = this.obj
        const h = {
            "content-type": "multipart/form-data",
        }
        const refToSelf = this;
        axios.put('http://127.0.0.1:8000/'+this.props.id,d, h)
        .then(function (response) {
            //console.log(response.data);
            refToSelf.props.lcf();
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render()
    {
        return (<div className = "ui main" >
            <h2> Edit Contact  {this.props.id} </h2>
            <form className = "ui form" >
                <div className = "field" >
                    <label>
                        First Name
                    </label>
                    <input onChange={(e)=> {this.obj.append(e.target.name, e.target.value); console.log(this.obj)}} type = "text" name = "First_Name" placeholder = "Ex: John" >
                    </input>
                </div>
                <div className = "field" >
                    <label>
                        Last Name
                    </label>
                    <input onChange={(e)=> {this.obj.append(e.target.name, e.target.value); console.log(this.obj)}} type = "text" name = "Last_Name" placeholder = "Ex: Swift" >
                    </input>
                </div>
                <div className = "field" >
                    <label>
                        Email
                    </label>
                    <input onChange={(e)=> {this.obj.append(e.target.name, e.target.value); console.log(this.obj)}} type = "text" name = "Email" placeholder = "JohnSwift@nomail.com" >
                    </input>
                </div>
                <div className = "field" >
                    <label>
                        Phone Number
                    </label>
                    <input onChange={(e)=> {this.obj.append(e.target.name, e.target.value);}} type = "text" name = "Phone_Number" placeholder = "913456789012" >
                    </input>
                </div>
                <div className = "field" >
                    <label>
                        Company Name
                    </label>
                    <input onChange={(e)=> {this.obj.append(e.target.name, e.target.value);}} type = "text" name = "Company_Name" placeholder = "JohnSwift@nomail.com" >
                    </input>
                </div>
                <div className = "field" >
                    <label>
                        Address
                    </label>
                    <input onChange={(e)=> {this.obj.append(e.target.name, e.target.value);}} type = "text" name = "Address" placeholder = "H. 123, Block - A, PQR Society, Sec - 45, Fakepur" >
                    </input>
                </div>
                <div class="input-group field">
                    <label>
                        Profile Pic
                    </label>
                    <input onChange={(e)=> {
                        this.obj.append(e.target.name, e.target.files[0], e.target.files[0].name)
                    }} type="file" class="form-control" name = "Profile_Pic" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                    </input>
                </div>
            </form>
                <button className = "ui button blue" onClick={this.editing}>
                    Edit
                </button>
        </div>)
    }
}

export default EditContact;