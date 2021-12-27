import React, { Component } from 'react';
import { Consumer } from '../../context1';
import TextInputGroup from '../layout1/TextInputGroup';
//import {v4 as uuid} from 'uuid'
import axios from 'axios';
//const id = uuid()

class Addcontact extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        errors:{}
    };
    onSubmit=async (dispatch,e)=>{
        e.preventDefault();
        const{name ,email,phone}=this.state;
        //check for errors
        if(name===''){
            this.setState({errors:{name:'name is required'}});
            return;
        }
        if(email===''){
            this.setState({errors:{email:'email is required'}});
            return;
        }
        if(phone===''){
            this.setState({errors:{phone:'phone is required'}});
            return;
        }
        const newContact={
          // id:uuid(),
            name,
            email,
            phone
        };
      const res=await axios.post(`https://jsonplaceholder.typicode.com/users`,newContact);
      dispatch({type: 'ADD_CONTACT', payload:res.data});
       
       // dispatch({ type: 'ADD_CONTACT', payload:newContact });
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        });
        this.props.history.push('/');
    };
    onChange=e=>this.setState({[e.target.name]:e.target.value});
    render() {
        const { name, email, phone ,errors} = this.state;
        return(
            <Consumer>
                {
                    value=>{
                        const{dispatch}=value;
                        return (
                            <div className="card mb-3">
                             <div className="card-header">
                              Addcontact  </div>
                              <div className="card-body">
                              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                      <TextInputGroup
                                      label="Name"
                                      name="name"
                                      placeholder="Entername"
                                      value={name}
                                      onChange={this.onChange}
                                      error={errors.name}
                                       />
                                      <TextInputGroup
                                      label="Email"
                                      name="email"
                                      placeholder="Enter Email"
                                      value={email}
                                      onChange={this.onChange} 
                                      error={errors.email}
                                      />
                                      <TextInputGroup
                                      label="Phone"
                                      name="phone"
                                      placeholder="Enter Phone"
                                      value={phone}
                                      onChange={this.onChange} 
                                      error={errors.phone}
                                      />
                                  <input type="submit" value="Add contact"
                                  className="btn btn-block bt-light"/>
                                  </form>
                                  </div>
                                  </div>
                        ); 
                    }
                }
            </Consumer>
        )
        /*return (
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
                      value={name}
                      onChange={this.onChange} /></div>
                      <div className="form-group">
                      <label htmlFor="text">email</label>
                      <input type="email" name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter email...."
                      value={email}
                      onChange={this.onChange} /></div>
                      <div className="form-group">
                      <label htmlFor="phone">phone</label>
                      <input type="text" name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter phone...."
                      value={phone}
                      onChange={this.onChange} /></div>
                  <input type="submit" value="Add contact"
                  className="btn btn-block bt-light"/>
                  </form>
                  </div>
                  </div>
        );*/
    }
}
export default  Addcontact