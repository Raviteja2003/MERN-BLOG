import { Link } from "react-router-dom";

function Navbar(){
    return (
        
        <div className="w-full h-[40px] px-25 py-25 flex justify-between items-center bg-gradient-to-r from-blue-900 via-red-600 to-blue-900 text-white">
            <div className="p-[30px]"><h3>Blog App</h3></div>
            <div>
                <a href="" className="text-white no-underline mt-0 mb-0 mr-10 ml-10">Home</a>
                <a href="" className="text-white no-underline mt-0 mb-0 mr-10 ml-10">Create</a>
                <a href="" className="text-white no-underline mt-0 mb-0 mr-10 ml-10">Contact</a>
            </div>
            <div><h5><Link to='/register' className="text-white no-underline mt-0 mb-0 mr-10 ml-10">Register/Login</Link></h5></div>
        </div>
        
    )
}

export default Navbar;