import React from "react"
import ContactCard from "./ContactCard";
import axios from "axios";

class ContactList extends React.Component 
{
    constructor(props){
        super(props);
        this.state = {
            data : []
        };
        //console.log("BIG BANG");
    }
    componentDidMount = () => {
        //console.log("CDM started");
        let ref_to_this = this;
        axios.get('http://127.0.0.1:8000/?format=json',)
        .then(function (response) {
            //console.log(response.data);
            ref_to_this.setState({data : response.data});
            //console.log(ref_to_this.state.data);
            //console.log("CDM finished")
        })
        .catch(function (error) {
            console.log(error);
            //console.log("CDM finished")
        });
    }
    render = () => {
        //console.log("render started");
        //console.log(this.state.data)
        const t = []
        this.state.data.forEach(e => {
            t.push(<ContactCard carddetails = {e} edf = {this.props.edf}/>)
        });
        //console.log(t)
        //console.log("render finished");
        return (<div className = "main"> 
                <h1 style={{textAlign: 'center'}}> Contact List </h1>
                <div className="ui celled list" style={{marginLeft : '12.5%', marginRight : '12.5%'}}>
                    {t}
                </div>
             </div>)
    }
}

export default ContactList;