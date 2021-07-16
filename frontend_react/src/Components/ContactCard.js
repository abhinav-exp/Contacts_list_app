import React from 'react';

class ContactCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            card : this.props.carddetails
        };
    }
    render()
    {
        console.log(this.state.card);
        console.log(this.state.card.Profile_Pic)
        return (
        <div className="item">1
            <img className="rounded float-start" src={"http://127.0.0.1:8000" + this.state.card.Profile_Pic} alt="Prof Pic"></img>
            <div className="content"></div>
        </div>);
    }
}

export default ContactCard;