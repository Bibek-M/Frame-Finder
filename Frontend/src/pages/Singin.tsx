import SignUpBody from '../components/SignupBody'
import SignInBodyRight from '../components/SignInBodyRight';
import SignUpNav from "../components/SignUpNav";
const Singin = () => {
  return (
      <div className="flex h-screen">
      <div className="bg-blue-200 w-1/2 p-5 pl-10 pt-10">
        <SignUpNav />
        <SignUpBody />
      </div>
      <SignInBodyRight/>
    </div>
  );
}

export default Singin