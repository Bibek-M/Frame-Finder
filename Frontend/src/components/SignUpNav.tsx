import LogoImg from "../assets/LogoImg.png";
const SignUpNav = () => {
  return (
    <div>
      <div className="flex">
        <img src={LogoImg} alt="logo" className="h-15" />
        <div className="ml-5">
          <div className="flex">
            <p className="text-3xl font-bold">Frame</p>
            <p className="text-3xl font-bold text-purple-600">Finder</p>
          </div>
          <div className="w-50 text-gray-600">
            Find any movie or series from a screenshot
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpNav;
