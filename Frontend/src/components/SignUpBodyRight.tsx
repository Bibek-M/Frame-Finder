import { Link } from "react-router-dom";
import { Mail, Lock, ShieldCheck } from "lucide-react";
const SignUpBodyRight = () => {
  return (
    <div className="bg-blue-200 w-1/2 ">
      <div className="bg-white mx-10 my-10 w-8/9 h-8/9 rounded-2xl shadow-2xl justify-items-center py-15">
        <div>
          <div className="flex gap-2.5">
            <p className="font-bold text-3xl">Create your account</p>
            <p className="text-3xl">&#x1F389;</p>
          </div>
          <div className="mt-2">Sign up to start finding movies and series</div>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <div>
            <p className="mb-2">Email</p>
            <div className="flex items-center gap-2 border rounded p-3 w-120 focus-within:ring-2 focus-within:ring-blue-500">
              <Mail className="text-gray-400 w-5 h-5 shrink" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
          <div>
            <p className="mb-2">Password</p>
            <div className="flex items-center gap-2 border rounded p-3 w-120 focus-within:ring-2 focus-within:ring-blue-500">
              <Lock className="text-gray-400 w-5 h-5 shrink" />
              <input
                type="email"
                placeholder="Create password"
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue-700 text-white text-2xl cursor-pointer mt-20 rounded-2xl px-10 py-3 w-120 justify-items-center active:scale-95">
          <p>Create Account</p>
        </div>
        <div className="flex items-center my-10">
          <div className="flex gap-3.5">
            Already have an account ?
            <div className="text-blue-800 font-bold">
              <Link to="/signin"> Sign in</Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="rounded-full bg-blue-200 p-2 h-10 w-10">
            <ShieldCheck color="blue" />
          </div>
          <div className="w-50">
            Your data is secure and will never be shared
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpBodyRight;
