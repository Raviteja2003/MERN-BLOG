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
  import {Link, useNavigate,Navigate} from "react-router-dom"
  import {useDispatch, useSelector} from "react-redux"
  import Loading from './Loading';
  import { userLogin } from "../redux/authSlice";

const Login = () => {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {token,isLoading,role} = useSelector((state)=>state["auth"]);
    const form = useForm();
    const { register,handleSubmit,formState } = form;
    const {errors} = formState;
    const errorMessages = Object.values(errors);
  
    if(errorMessages.length!==0)
    {
      toast.error(errorMessages[0]?.message);
    }
  
    
  
    const handleLogin = async(data) => {
      const response = await dispatch(userLogin(data));
      if(response.meta.requestStatus === "fullfilled")
      {
        navigate(`/${response.payload.user.role}`, { replace: true });
      }
    };
    if (token) {
        return <Navigate to={`/${role}`} replace/>
      }
      if (isLoading) {
        return <Loading />;
      }
  
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <Card className="text-black shadow-sm">
          <CardHeader 
              floated={false}
              shadow={false}
              className="font-bold text-xl text-black py-4">
            Login to your Account
          </CardHeader>
          <CardBody className="p-4 w-screen max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md rounded-lg bg-primary text-white">
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="flex flex-col gap-5"
              autoComplete="off"
            >
              
              <Input 
                required
                color="blue" 
                label="Enter Email"
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
                label="Enter Password"
                required
                type="password" 
                {...register("password",{
                  validate:{
                    value:true,
                    message:"password is required"
                  }
                })}
              />
              <Button className="bg-blue-700" type="submit">
                Login{" "}
              </Button>
            </form>
          </CardBody>
          <CardFooter className="py-4">
          Don&apos;t Have an Account?{" "}
              <Link to="/register" className="text-deep-orange-700 font-bold">Register Here</Link>
          </CardFooter>
        </Card>
      </div>
    );
  };
  export default Login;
  