import PrivacyPolicyContant from "@/components/PageComponents/PrivacyPolicy/Desktop/PrivacyPolicyContent";
import { privacyMain } from "@/constants/PrivacyPolicyData";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";


function PrivacyPolicy() {

  console.log({privacyMain})

  return (
    <>
    <MetaTags
        title="Evolve Strength Privacy Policy"
        description="See how Evolve Strength collects, uses, and protects your personal data. We value your privacy and never sell your information. Read our full policy."
      />
      <div className="">
       <PrivacyPolicyContant privacyMain={privacyMain}/>
      </div>
      
    </>
  );
}

export default PrivacyPolicy;
