import {Link} from "react-router-dom"
function Register()
{
    return (
        <div className="flex justify-center items-center min-h-[90vh]">
            <div className="p-[20px] rounded-xl border border-gray-300 w-[30%]">
                <h2 className="text-center font-bold text-lg">SignUp</h2>
                <form action="">
                    <div>
                        <label htmlFor="">
                            UserName:
                        </label>
                        <br/>
                        <input type="text" placeholder="Enter username" className="p-[8px] mt-[2px] w-[100%] rounded-md border border-solid border-gray-300 "></input>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="">
                            Email:
                        </label>
                        <br/>
                        <input type="email" placeholder="Enter E-mail" className="p-[8px] mt-[2px] w-[100%] rounded-md border border-solid border-gray-300 "></input>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="">
                            Password:
                        </label>
                        <br/>
                        <input type="password" placeholder="*********" className="p-[8px] mt-[2px] w-[100%] rounded-md border border-solid border-gray-300 "></input>
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