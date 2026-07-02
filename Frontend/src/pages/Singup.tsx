
import SignUpBody from '../components/SignupBody'
import SignUpBodyRight from '../components/SignUpBodyRight';
import SignUpNav from "../components/SignUpNav";

const Singup = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-blue-200 w-1/2 p-5 pl-10 pt-10">
        <SignUpNav />
        <SignUpBody />
      </div>
      <SignUpBodyRight/>
    </div>
  );
}

export default Singup