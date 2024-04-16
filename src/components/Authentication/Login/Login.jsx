/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post(`http://localhost:5000/api/v1/user/email-login`, data)
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          
          localStorage.setItem("user", JSON.stringify(res.data));
          reset();
          navigate("/tags");
          toast.success("Login was Successful!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  text-center">
            Login
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
          >
            {/* email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email <span className="text-red-700">*</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="Write Your Email"
                className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 outline-none"
              />
              {errors.email?.type === "required" && (
                <p className="text-sm text-red-600">Email is Required!</p>
              )}
            </div>
            {/* name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name <span className="text-red-700">*</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="name"
                name="name"
                id="name"
                placeholder="Write Your Name"
                className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 outline-none"
              />
              {errors.name?.type === "required" && (
                <p className="text-sm text-red-600">Name is Required!</p>
              )}
            </div>
            {/* password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password <span className="text-red-700">*</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 outline-none"
              />
              {errors.password?.type === "required" && (
                <p className="text-sm text-red-600">Password is Required!</p>
              )}
            </div>
            {/* unique code */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone <span className="text-red-700">*</span>
              </label>
              <input
                {...register("phone", { required: true })}
                type="phone"
                name="phone"
                id="phone"
                placeholder="Write your Phone number"
                className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 outline-none"
              />
              {errors.code?.type === "required" && (
                <p className="text-sm text-red-600">Phone Number is Required!</p>
              )}
            </div>

            <input
              type="submit"
              className="w-full cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              value={"Login"}
            />

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              New Here?{" "}
              {/* <Link
                  to={"/signup"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  SignUp
                </Link> */}
              <Link to="/signup">SignUp</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
