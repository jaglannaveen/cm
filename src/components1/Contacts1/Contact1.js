import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context1";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
class Contact extends Component {
  state = { showcontactInfo: false };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;

    const { showcontactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name} {""}
                <i
                  onClick={() =>
                    this.setState({
                      showcontactInfo: !this.state.showcontactInfo,
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                
                <Link to ={`contact/edit/${id}`}>
                <i
                  className="fas fa-pencil-alt"
                  style={{
                    cursor: "pointer",
                    float: "right",
                    color: "black",
                    marginRight: "1rem",
                  }}
                />
                </Link>
              </h4>
              {showcontactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">email:{email}</li>
                  <li className="list-group-item">Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  Contact: PropTypes.object.isRequired,
};
export default Contact;
