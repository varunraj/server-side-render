import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions'

class UserList extends Component {

    // we still need this client side fetch because if user went to 
    // home and then come to users, react router wont send request to 
    // express. So at that time, client need to fetch the data

    componentDidMount(){
        this.props.fetchUsers();
    }

    renderUsers(){
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li> 
        });
    }

    render(){
        return (
            <div>
                Here is a list of users:
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {users : state.users}
}

function loadData (store) {
    //console.log("Loading some data")
    // dispatch the action creator and return promise to index.js
    return store.dispatch(fetchUsers());
}


export default {
    loadData: loadData,
    component: connect(mapStateToProps,{ fetchUsers})(UserList)
}