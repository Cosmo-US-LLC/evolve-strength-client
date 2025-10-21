import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/styles/styles.css";
import ScrollToTop from "./components/ScrollToTop";
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
import NotFoundPage from "./pages/PageNotFound";
import Loader from "./pages/Loader";
import EvolveSpacesForm from "./components/Form/EvolveSpacesForm";
import YourFitnessFutureForm from "./components/Form/YourFitnessFutureForm";
import CorporateMembershipWizard from "./components/Form/CorporateMembershipWizard";
import CompanyNotRegistered from "./components/Form/CompanyNotRegistered";
import ApplyCorporateMembershipForm from "./components/Form/ApplyCorporateMembershipForm";
import CompanyAlreadyRegistered from "./components/Form/CompanyAlreadyRegistered";
import CheckMembershipForm from "./components/Form/CheckMembershipForm";
import ApplicationSubmitted from "./components/Form/ApplicationSubmitted";
import CalgarySeton from "./pages/LocationsPage/CalgarySeton";
import EdmontonSouth from "./pages/LocationsPage/EdmontonSouth";
import EdmontonNorth from "./pages/LocationsPage/EdmontonNorth";
import EdmontonDowntown from "./pages/LocationsPage/EdmontonDowntown";
import CalgarySunridge from "./pages/LocationsPage/CalgarySunridge";
import CalgaryRoyalOak from "./pages/LocationsPage/CalgaryRoyalOak";
import BurnabyBrentwood from "./pages/LocationsPage/BurnabyBrentwood";
import VancouverPost from "./pages/LocationsPage/VancouverPost";
import TrainerForm from "./components/Form/TrainersForm";
import AllLocations from "./pages/LocationsPage/AllLocations";
import EdmontonSouthCommon from "./pages/LocationsPage/EdmontonSouthCommon";
import WellnessInquiryForm from "./components/Form/WellnessInquiryForm";
import MatchMeWithTrainer from "./components/Form/MatchMeWithTrainer";
import Careers from "./pages/Careers";
import ApplyForWorkSpaceForm from "./components/Form/ApplyForWorkSpaceForm";
import Intake from "./components/Form/Intake";
import Gym from "./pages/Gym";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/membership-benefits" element={<MembershipBenefits />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/work-spaces" element={<Spaces />} />
          <Route path="/careers" element={<Careers />} />
          <Route
            path="/corporate-membership"
            element={<CorporateMembership />}
          />

          <Route path="/join-the-Movement" element={<JoinTheMovement />} />
          <Route path="/join-as-trainer" element={<JoinAsTrainer />} />

          <Route path="/gym" element={<Gym />} />

          <Route path="/locations" element={<AllLocations />} />
          <Route path="/locations/calgary-seton" element={<CalgarySeton />} />
          <Route path="/locations/edmonton-south" element={<EdmontonSouth />} />
          <Route path="/locations/edmonton-north" element={<EdmontonNorth />} />
          <Route
            path="/locations/edmonton-downtown"
            element={<EdmontonDowntown />}
          />
          {/* <Route
            path="/locations/calgary-sunridge"
            element={<CalgarySunridge />}
          /> */}
          <Route
            path="/locations/calgary-royal-oak"
            element={<CalgaryRoyalOak />}
          />
          <Route
            path="/locations/burnaby-brentwood"
            element={<BurnabyBrentwood />}
          />
          <Route path="/locations/vancouver-post" element={<VancouverPost />} />

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
          path="/apply-for-work-space"
          element={<ApplyForWorkSpaceForm />}
        />
        <Route
          path="/your-fitness-future"
          element={<YourFitnessFutureForm />}
        />
        <Route
          path="/match-me-with-a-wellness-expert"
          element={<WellnessInquiryForm />}
        />
        <Route
          path="/match-me-with-a-trainer"
          element={<MatchMeWithTrainer />}
        />
        <Route
          path="/corporate-membership-wizard"
          element={<CorporateMembershipWizard />}
        />

        <Route
          path="/locations/edmonton-south-common-waitlist"
          element={<EdmontonSouthCommon />}
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
        <Route
          path="/company-not-registered"
          element={<CompanyNotRegistered />}
        />

        <Route path="/loader" element={<Loader />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/trainer-form" element={<TrainerForm />} />
        <Route path="/intake" element={<Intake />} />
      </Routes>
    </>
  );
}

export default App;
