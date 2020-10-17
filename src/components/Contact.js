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

    test_email() {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
      
        return expression.test(String(this.state.email).toLowerCase())
    }

    handleSubmit(event){
        event.preventDefault();

        if (! this.test_email()){
            alert("Please enter valid e-mail.")
        }

        else if (this.state.name === "" || this.state.message === ""){
            alert("Please enter all fields.")
        }

        else{
            alert("Email Sent!")
        }
        
        this.resetForm();
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
            <div style={{padding: "30px"}}>
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