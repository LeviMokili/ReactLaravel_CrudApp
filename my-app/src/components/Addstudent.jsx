import { useState } from 'react'


function Addstudent() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
                <div className="col-md-12">
                    <form action="">
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" name="name" placeholder='name' />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" name="course" placeholder="course" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" name="email" placeholder="email"  />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control"  name="phone" placeholder="phone" />
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