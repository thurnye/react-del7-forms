import React, { Component } from 'react';
import Nav from '../../components/navbar/navbar'

export default class contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
    }


    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
        // console.log(e.target.name, e.target.value)
      }


    handleSubmit = async () => {
        const message = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(message)
        };

        await fetch("/api", options)
          .then(res => res.json())
          .then(data => {
            this.props.getMessages();
            // clear out this.state.content
            this.setState({ name: "", email:"", message:"" })
          })
    }

    render() {

        return (
            <React.Fragment>
            <Nav />
            <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Full Name</span>
                    <input type="text" className="form-control" 
                        value={this.state.name}  onChange={this.handleChange} name="name" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">E-mail</span>
                    <input type="text" className="form-control"  onChange={this.handleChange} name="email"  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group">
                    <span className="input-group-text">Message</span>
                    <textarea className="form-control"  onChange={this.handleChange}name="message" aria-label="With textarea"></textarea>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>         
            </form>
        </React.Fragment>
        )
    }
}
