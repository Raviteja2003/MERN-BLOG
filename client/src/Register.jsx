import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';
import { useState } from "react";

function Register()
{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/auth/register',{name,email,password})
        .then(
            result => 
            {
                console.log(result)
                navigate("/login");
            }
        )
        .catch(err => console.log(err));

    }
    return (
        <div className="flex justify-center items-center min-h-[90vh]">
            <div className="p-[20px] rounded-xl border border-gray-300 w-[30%]">
                <h2 className="text-center font-bold text-lg">SignUp</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">
                            UserName:
                        </label>
                        <br/>
                        <input type="text" name="name" placeholder="Enter username" className="p-[8px] mt-[2px] w-[100%] rounded-md border border-solid border-gray-300 "
                            onChange={e=>setName(e.target.value)}></input>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="">
                            Email:
                        </label>
                        <br/>
                        <input type="email" name="email" placeholder="Enter E-mail" className="p-[8px] mt-[2px] w-[100%] rounded-md border border-solid border-gray-300 "
                            onChange={e=>setEmail(e.target.value)}></input>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="">
                            Password:
                        </label>
                        <br/>
                        <input type="password" name="password" placeholder="*********" className="p-[8px] mt-[2px] w-[100%] rounded-md border border-solid border-gray-300 "
                            onChange={e=>setPassword(e.target.value)}></input>
                    </div>
                    <button className="w-[100%] p-[8px] rounded-md cursor-pointer border border-solid border-gray-300 bg-blue-600 text-white mt-[8px]">SignUp</button>
                </form>
                <br/>
                <p>Already have an account?</p>
                <Link to="/login"><button className="w-[100%] p-[8px] rounded-md cursor-pointer border border-solid border-gray-300 bg-green-600 text-white">Login</button></Link>
            </div>
        </div>
    )
}

export default Register;