import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom"
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { userRegisteration } from "../redux/authSlice";

const Register = () => {

  const [passwordVisible,setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm();
  const { register,handleSubmit,formState } = form;
  const {errors} = formState;
  const errorMessages = Object.values(errors);

  if(errorMessages.length!==0)
  {
    toast.error(errorMessages[0]?.message);
  }

  const togglePasswordVisibility =()=> {
    setPasswordVisible(!passwordVisible);
  }

  const handleRegister = async(data) => {
    const response = await dispatch(userRegisteration(data));
    if(response.meta.requestStatus === "fullfilled")
    {
      navigate("/login",{replace:true})
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <Card>
        <CardHeader 
            floated={false}
            shadow={false}
            className="font-bold text-xl text-black py-4">
          Create New Account
        </CardHeader>
        <CardBody className="p-4 w-screen max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md rounded-lg bg-primary text-white">
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col gap-5"
            autoComplete="off"
          >
            <Input 
              color="blue" 
              label="Name"
              {...register("name",{
                required:{
                  value:true,
                  message:"Name is required"
                }
              })}/>
            <Input 
              color="blue" 
              label="Email"
              {...register("email",{
                required:{
                  value:true,
                  message:"Enter the E-mail"
                },
                validate:{
                  matchPattern : (v) => {
                    return (
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email is Invalid"
                    )
                  }
                }
              })}/>
            <Input 
              color="blue"
              label="password"
              type={passwordVisible ? "text":"password"} 
              icon={
                passwordVisible ? (
                  <BsFillEyeSlashFill
                      className="cursor-pointer"
                      onClick={togglePasswordVisibility}
                  />
                ):(
                  <BsFillEyeFill
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                  )
              }
              {...register("password",{
                validate:{
                  value:true,
                  message:"password is required"
                }
              })}
            />
            <Button className="bg-blue-700" type="submit">
              Register
            </Button>
          </form>
        </CardBody>
        <CardFooter className="py-4">
            Have an Account?{" "}
            <Link to="/login" className="text-deep-orange-700 font-bold">Login Here</Link>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Register;
