import PrivacyPolicyContant from "@/components/PageComponents/PrivacyPolicy/Desktop/PrivacyPolicyContent";
import { privacyMain } from "@/constants/PrivacyPolicyData";


function PrivacyPolicy() {

  console.log({privacyMain})

  return (
    <div>
      <div className="">
       <PrivacyPolicyContant privacyMain={privacyMain}/>
      </div>
      
    </div>
  );
}

export default PrivacyPolicy;
