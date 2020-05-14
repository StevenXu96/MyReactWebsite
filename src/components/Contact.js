import React from 'react'

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            name: "",
            email: "",
            message : ""
        }
    }

    handleSubmit(event){
        /*
        event.preventDefault();

        fetch('http://localhost:3002/send',{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response)=>{
            if (response.status === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.status === 'fail'){
                alert("Message failed to send.")
            }
        })
         */
        alert("Email Sent!")
        this.resetForm();
        event.preventDefault();
    }

    resetForm(){
        this.setState({name: "", email: "", message: ""})

    }

    handleChange(event){
        const {id, value} = event.target
        this.setState({[id]: value})
    }

    render() {
        return (
            <div style={{marginLeft: "25%", padding: "30px 20px"}}>
                <form className="contact-form" id="contact-form" >
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" id="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Message (max 150 characters)</label>
                        <br />
                        <textarea className="form-control" maxLength="150" rows="5" cols="50" id="message" value={this.state.message} onChange={this.handleChange}/>
                    </div>
                    <br />
                    <button className="contact-me-button" onClick={this.handleSubmit}>SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default Contact