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
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/?format=json',)
        .then(function (response) {
            console.log(response.data);
            this.setState('data' : response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render(){
        const r = this.state.data.reduce((temp, x) => {
            return (<ContactCard />)
        }, null)
        console.log(JSON.stringify(r))
        return (<div> ;) </div>)
    }
}

export default ContactList;