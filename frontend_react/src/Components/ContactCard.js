import React from 'react';
import axios from 'axios';

class ContactCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            card : this.props.carddetails
        };
        this.editcard = this.editcard.bind(this)
        this.deletecard = this.deletecard.bind(this)
    }
    editcard(){
        //axios.delete()
        var a = this.state.card.id
        this.props.edf(a);
    }
    deletecard(){
        var u = `http://127.0.0.1:8000/${this.state.card.id}`
        console.log(u)
        
        axios.delete(u,)
        .then((r)=>{
            console.log(r)
            this.props.rfs()
        })
        .catch((c)=>{
            console.log(c);
        })
    }
    render()
    {
        //console.log(this.state.card);
        //console.log(this.state.card.Profile_Pic)
        return (
        <div className="item" >
            <img className="rounded float-start" style={{height : 100}} src={"http://127.0.0.1:8000" + this.state.card.Profile_Pic} alt="Prof Pic"></img>
            <div className="content" style={{textAlign : 'center'}}>
                <div className="header" >
                    <h2>Name : {this.state.card.First_Name} {this.state.card.Last_Name}</h2> 
                </div>
                Email : {this.state.card.Email}&nbsp;&nbsp;&nbsp;&nbsp;
                Phone Number : {this.state.card.Phone_Number}<br></br>
                Company Name : {this.state.card.Company_Name}&nbsp;&nbsp;&nbsp;&nbsp;
                Address : {this.state.card.Address}<br></br>
                <i className = "edit alternate outline icon" style={{marginRight : 100, marginTop : 5, color : 'blue'}} 
                onClick={this.editcard} ></i>
                <i className = "trash alternate outline icon" style={{color : 'red'}}
                onClick={this.deletecard}></i>
            </div>
        </div>);
    }
}

export default ContactCard;