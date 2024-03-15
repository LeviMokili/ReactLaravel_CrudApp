import { useState } from 'react'
import axios from 'axios'


function Addstudent() {
  const [count, setCount] = useState(0)


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
    const res = await axios.post('/api/add-students', this.state);
  }

  return (
    <>
      <div className="container">
                <div className="col-md-12">
                    <form  onsubmit={this.saveStudent}>
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
       
    </>
  )
}

export default Addstudent