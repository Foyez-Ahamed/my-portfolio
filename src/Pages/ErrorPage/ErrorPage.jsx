import { Link } from "react-router-dom";
import errorPic from "../../assets/errorPic/404.gif";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Page</title>
      </Helmet>
      <div className="flex justify-center items-center">
        <div>
          <img
            src={errorPic}
            className="h-[450px] object-cover"
            alt="errorPic"
          />

          <div className="flex justify-center items-center">
            <Link to="/">
              <button className="px-5 py-2 bg-gray-200 border-b-4 rounded-md text-[#006566] border-[#006566] hover:bg-zinc-900 uppercase">
                Go home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
