import { Link } from "react-router-dom";
import Header from "../Components/Header";
import logo from "../Assets/logo.svg";
import RequestForm from "../Components/RequestForm";
import "../ComopnentsCss/submitRequestPage.css";
function SubmitRequestPage() {
  return (
    <>
      <Header className={"ResponsiveHeader"} />
      <div className="grid-container">
        <div className="left2">
          <RequestForm />
        </div>

        <div className="right2">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default SubmitRequestPage;
