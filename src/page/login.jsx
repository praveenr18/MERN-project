
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
  //const [username, setName] = useState('')
  //const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: ""
  })
  function handlechange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }
  const formsubmit = (e) => {
    e.preventDefault()
    console.log(formdata)
    alert("login successfully")
    navigate('/dashboard',{
      state:formdata
    });
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={formsubmit}>
        <label>name:</label>
        <input type="text" name="username" placeholder="Enter Name"  onChange={handlechange}  />
        <br /><br />
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter Email"  onChange={handlechange}/>
        <br /><br />
        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter Password"  onChange={handlechange} />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Login
