
import React, { Component } from 'react'
import axios from 'axios'



class Student extends Component {

    state = {
        messages : [],
        loading : true
    }

    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/fetch');
        if (res.data.status === 200) {
           this.setState({
              messages : res.data.messages,
              loading : false
           })
        }
        
    }

    render() {

        var student_HTML_TABLE = "";

        if (this.state.loading) {
            student_HTML_TABLE = <tr><td colspan="7">Loading...</td></tr>
        }else{
           student_HTML_TABLE =
           this.state.messages.map( (item) =>{
              return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.course}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
              );
           })
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                studets data
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">name</th>
                                            <th scope="col">course</th>
                                            <th scope="col">email</th>
                                            <th scope="col">phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {student_HTML_TABLE}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Student;