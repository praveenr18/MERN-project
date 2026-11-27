
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const [logindata, setFormdata] = useState({
        username: "",
        password: ""
    })
    function handleChange(e) {
        setFormdata({
            ...logindata,
            [e.target.name]: e.target.value
        })
    }
    const handlesubmit = (event) => {
        event.preventDefault()
        const registerdata = location.state
        console.log("Login data", logindata)
        console.log("Register data", registerdata)
        if (
            registerdata &&
            logindata.username === registerdata.name &&
            logindata.password === registerdata.password
        ) {
            alert("Login successfully")
            navigate("/dashboard", {
                state: logindata
            })
        } else {
            alert("Invalid Credentials")
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-white p-7 shadow-lg w-99">
                <h1 className="text-3xl font-bold text-center mb-6 text-green-600">
                    Login Form
                </h1>
                <form onSubmit={handlesubmit}>
                    <label className="block mb-2"> Username :</label>
                    <input className="w-full border p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter username" type="text" name="username" onChange={handleChange} required />
                    <br />
                    <label className="block mb-2"> Password </label>
                    <input  className="w-full border p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder="Enter password" type="password" name="password" onChange={handleChange}  required />
                    <br /><br />
                    <button type="submit"  className="w-full bg-green-400 text-white p-2 rounded-lg hover:bg-red-700 transition" >  Login  </button>
                </form>
            </div>
        </div>
    )
}
export default Login
