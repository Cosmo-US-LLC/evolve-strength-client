import PrivacyPolicyContant from "@/components/PageComponents/PrivacyPolicy/Desktop/PrivacyPolicyContent";
import { privacyMain } from "@/constants/PrivacyPolicyData";


function PrivacyPolicy() {

  console.log({privacyMain})

  return (
    <div>
      <div className="max-md:hidden">
       <PrivacyPolicyContant privacyMain={privacyMain}/>
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default PrivacyPolicy;
