
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200 text-center">
        <div className="hero-content flex-col lg:flex-col">

          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-serif">Email</span>
                </label>
                <input type="email" placeholder="enter email" className="input  btn   input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-serif ">Password</span>
                </label>
                <input type="password" placeholder="enter password" className="input btn  input-bordered" />
                 <div className="flex gap-10">
                <label className="label">
                  <a href="#" className="label-text-alt text-lg font-serif link link-hover">Forgot password?</a>
                </label>
                <Link to="/signup">
                  <button className=" mt-4 btn  font-serif h-3 w-32 ">Sign Up</button>
                  </Link>
                 </div>

              </div>
              <hr />
              <div className=" mt-6">
                  <Link>
                  <button className="btn btn-outline btn-info">Login</button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


//  <div>
    
// <form>
//   <div class="mb-6">
//     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//     <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
//   </div>
//   <div class="mb-6">
//     <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//     <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
//   </div>
//   <div class="flex items-start mb-6">
//     <div class="flex items-center h-5">
//       <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
//     </div>
//     <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
//   </div>
//   <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
// </form>

// //  </div>

    );
};

export default Login;