import { MDBBtn, MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Header from "./Header";
import { useContext } from "react";
import { LanguageContext } from "../Contexts/LanguageContext";
function RequestForm() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "Ar";
  return (
    <>
      <div
        className={
          isArabic ? "SubmitRequestSection-Ar" : "SubmitRequestSection"
        }
      >
        <h1 style={{ marginBottom: "2rem" }}>
          {isArabic ? "نموذج الطلب" : "Request Form"}
        </h1>
        <div className={isArabic ? "SubmitRequestForm" : "SubmitRequestForm"}>
          <div className="firstLine">
            <MDBInput
              label={isArabic ? "نموذج الطلب" : "Request Form"}
              id="typeText"
              type="text"
            />
            <MDBInput
              label={isArabic ? "الميزانية" : "Budget"}
              id="typeText"
              type="number"
            />
          </div>
          <DatePicker
            appearance="Defauls"
            placeholder={isArabic ? "تحديد الموعد النهائي" : "Select Deadline"}
          />
          <MDBInput
            label={isArabic ? "الاسم الكامل" : "Full Name"}
            id="typeText"
            type="text"
          />
          <MDBTextArea
            label={isArabic ? "وصف المشكلة" : "Description of problem"}
            id="textAreaExample"
            rows="{4}"
          />
          <MDBBtn type="submit" className="mb-4" block color="dark">
            {isArabic ? "ارسال" : "Submit"}
          </MDBBtn>
        </div>
      </div>
    </>
  );
}

export default RequestForm;
