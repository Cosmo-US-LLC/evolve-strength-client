import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/styles/styles.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import PersonalTraining from "./pages/PersonalTraining";
import Wellness from "./pages/Wellness";
import TermsAndConditions from "./pages/TermsAndConditions";
import Franchise from "./pages/Franchise";
import Explore from "./pages/Explore";
import Spaces from "./pages/Spaces";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MembershipBenefits from "./pages/MembershipBenefits";
import FAQs from "./pages/FrequentlyAskedQuestions";
import AboutUs from "./pages/AboutUs";
import JoinAsTrainer from "./pages/JoinAsTrainer";
import CorporateMembership from "./pages/CorporateMembership";
import JoinTheMovement from "./pages/JoinTheMovement";
import Locations from "./pages/Locations";
import NotFoundPage from "./pages/PageNotFound";
import Loader from "./pages/Loader";
import EvolveSpacesForm from "./components/Form/EvolveSpacesForm";
import YourFitnessFutureForm from "./components/Form/YourFitnessFutureForm";
import CorporateMembershipWizard from "./components/Form/CorporateMembershipWizard";
import ApplyCorporateMembershipForm from "./components/Form/ApplyCorporateMembershipForm";
import CompanyAlreadyRegistered from "./components/Form/CompanyAlreadyRegistered";
import CheckMembershipForm from "./components/Form/CheckMembershipForm";
import ApplicationSubmitted from "./components/Form/ApplicationSubmitted";
import South from "./pages/South";
import North from "./pages/North";
import RoyalOak from "./pages/RoyalOak";
import Brentwood from "./pages/Brentwood";
import Downtown from "./pages/Downtown";
import Post from "./pages/Post";
import Sunridge from "./pages/Sunridge";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/membership-benefits" element={<MembershipBenefits />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route
            path="/corporate-membership"
            element={<CorporateMembership />}
          />

          <Route path="/join-the-Movement" element={<JoinTheMovement />} />
          <Route path="/join-as-trainer" element={<JoinAsTrainer />} />

          <Route path="/locations/calgary-seton" element={<Locations />} />
          <Route path="/locations/edmonton-south" element={<South />} />
          <Route path="/locations/edmonton-north" element={<North />} />
          <Route path="/locations/edmonton-downtown" element={<Downtown />} />
          <Route path="/locations/calgary-sunridge" element={<Sunridge />} />
          <Route path="/locations/calgary-royal-oak" element={<RoyalOak />} />
          <Route path="/locations/burnaby-brentwood" element={<Brentwood />} />
          <Route path="/locations/vancouver-post" element={<Post />} />

          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>


        <Route path="/join-the-wait-list" element={<EvolveSpacesForm />} />
        <Route
          path="/your-fitness-future"
          element={<YourFitnessFutureForm />}
        />
        <Route
          path="/corporate-membership-wizard"
          element={<CorporateMembershipWizard />}
        />

         <Route
          path="/check-membership-form"
          element={<CheckMembershipForm />}
        />

        <Route
          path="/company-already-registered"
          element={<CompanyAlreadyRegistered />}
        />
        <Route
          path="/apply-membership-form"
          element={<ApplyCorporateMembershipForm />}
        />
        <Route
          path="/application-submitted"
          element={<ApplicationSubmitted />}
        />
       
        <Route path="/loader" element={<Loader />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
