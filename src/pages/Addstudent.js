import React, {Component} from 'react'
import axios from 'axios'



class Addstudent extends Component {

    
  //GET INPUTS VALUES
  state = {
    name:'',
    course:'',
    email:'',
    phone:'',
  }


  handleInput = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  saveStudent = async (e) => {
    e.preventDefault()
    const res = await axios.post('http://127.0.0.1:8000/api/add-student', this.state);

    if (res.data.status === 200) {
        console.log(res.data.messages);
        this.setState({
            name:'',
            course:'',
            email:'',
            phone:'',
        })
       
    }
  }

  

   render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                     <div className="card">
                        <div className="card-header">
                            <h4>Add students</h4>
                        </div>
                        <div className="card-body">
                        <form  onSubmit={this.saveStudent} >
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" name="name" placeholder='name' onChange={this.handleInput} value={this.state.name} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" name="course" placeholder="course" onChange={this.handleInput} value={this.state.course}   />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" name="email" placeholder="email"  onChange={this.handleInput}  value={this.state.email}   />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control"  name="phone" placeholder="phone" onChange={this.handleInput}  value={this.state.phone}   />
                        </div>
                        <div className="form-group mb-3">
                            <button className="btn btn-primary" >save</button>
                        </div>
                       
                    </form>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      )
   }
}
export default Addstudent;