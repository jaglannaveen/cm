import React, { Component } from 'react'

class Addcontact extends Component {
    constructor(props){
        super(props);
        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();
    }
    
    onSubmit=e=>{
        e.preventDefault();
        const contact={
            name:this.nameInput.current.value,
            email:this.emailInput.current.value,
            phone:this.phoneInput.current.value,
        }
        console.log(contact);
    };
    static defaultProps={
        name:'abcd',
        email:'abcd@gmail.com',
        phone:'65156156165'
    }
    render() {
        const{name ,email,phone}=this.props;
        return (
            <div className="card mb-3">
             <div className="card-header">
              Addcontact  </div>
              <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                      <label htmlFor="name">name</label>
                      <input type="text" name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name...."
                      defaultvalue={name}
                      ref={this.nameInput}
                      /></div>
                      <div className="form-group">
                      <label htmlFor="text">email</label>
                      <input type="email" name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter email...."
                      defaultvalue={email}
                      ref={this.emailInput}
                       /></div>
                      <div className="form-group">
                      <label htmlFor="phone">phone</label>
                      <input type="text" name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter phone...."
                      defaultvalue={phone}
                      ref={this.phoneInput}
                       /></div>
                  <input type="submit" value="Add contact"
                  className="btn btn-block bt-light"/>
                  </form>
                  </div>
                  </div>
        );
    }
}
export default  Addcontact