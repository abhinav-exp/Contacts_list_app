import React from 'react'
import axios from 'axios';

class AddContact extends React.Component 
{
    constructor(props){
        super(props)
        this.state = {
            'postdetails' : {}
        }
        this.obj = new FormData();
        // this.posting.bind(this)
    }
    // posting() was not making variables accessable
    posting = () =>{
        //console.log("posted")
        //console.log(this.obj)
        const d = this.obj
        //console.log(d)
        const h = {
            "content-type": "multipart/form-data",
        }
        var u = process.env.REACT_APP_BACKEND_DOMAIN + "/all"
        console.log(u)
        axios.post(u,d, h)
        .then(function (response) {
            console.log(response.data);
            // I need this data here ^^
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    // onchangedata(k, v){
    //     console.log(k)
    //     console.log(v)
    //     console.log("event happened")
    //     const d = this.state['postdetails']
    //     d[k] = v;
    //     this.setState({'postdetails' : d})
    //     console.log(this.state['postdetails'])
    // }
    render()
    {
        return (<div className = "ui main" >
            <h2> Add Contact </h2>
            <form className = "ui form" >
                <div className = "field" >
                    <label>
                        First Name
                    </label>
                    <input onChange={(e)=> {this.obj.append(e.target.name, e.target.value);}} type = "text" name = "First_Name" placeholder = "Ex: John" required>
                    </input>
                </div>
                <div className = "field" >
                    <label>
                        Last Name
                    </label>
                    <input onChange={(e)=> {this.obj.append(e.target.name, e.target.value);}} type = "text" name = "Last_Name" placeholder = "Ex: Swift" required>
                    </input>
                </div>
                <div className = "field" >
                    <label>
                        Email
                    </label>
                    <input onChange={(e)=> {this.obj.append(e.target.name, e.target.value);}} type = "text" name = "Email" placeholder = "JohnSwift@nomail.com" required>
                    </input>
                </div>
                <div className = "field" >
                    <label>
                        Phone Number
                    </label>
                    <input onChange={(e)=> {this.obj.append(e.target.name, e.target.value);}} type = "text" name = "Phone_Number" placeholder = "913456789012" required >
                    </input>
                </div>
                <div className = "field" >
                    <label>
                        Company Name
                    </label>
                    <input onChange={(e)=> {this.obj.append(e.target.name, e.target.value);}} type = "text" name = "Company_Name" placeholder = "JohnSwift@nomail.com" required >
                    </input>
                </div>
                <div className = "field" >
                    <label>
                        Address
                    </label>
                    <input onChange={(e)=> {this.obj.append(e.target.name, e.target.value);}} type = "text" name = "Address" placeholder = "H. 123, Block - A, PQR Society, Sec - 45, Fakepur" required>
                    </input>
                </div>
                <div class="input-group field">
                    <label>
                        Profile Pic
                    </label>
                    <input onChange={(e)=> {
                        this.obj.append(e.target.name, e.target.files[0], e.target.files[0].name)
                    }} type="file" class="form-control" name = "Profile_Pic" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required>
                    </input>
                </div>
                <button className = "ui button blue" onClick={this.posting}>
                    Add
                </button>
                <button className = "ui button green float-end" onClick={this.props.lcf}>
                    Back
                </button>
            </form>
            <br></br>
                
        </div>)
    }
}

export default AddContact;