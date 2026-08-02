import ServicesItStaffing from "./pages/services/ServicesItStaffing";
import Services from "./pages/services/Services.jsx";
import ServicesItStrategyConsulting from "./pages/services/ServicesItStrategyConsulting.jsx";
import IndustriesHealthcare from "./pages/industries/IndustriesHealthcare";
import Industries from "./pages/industries/Industries";
import Platforms from "./pages/platforms/Platforms";
import PlatformsMicrosoft365 from "./pages/platforms/PlatformsMicrosoft365";
import { Routes, Route } from "react-router-dom";
import Success from "./pages/success/Success";
import SuccessIndustryHealthcare from "./pages/success/SuccessIndustryHealthcare";
import Layout from "./components/Layout.jsx";
import SuccessStoryPatientOutreachThatPeopleActuallyRespondTo from "./pages/success/SuccessStoryPatientOutreachThatPeopleActuallyRespondTo";
import NotFound from "./pages/NotFound.jsx";
import CompanyAbout from "./pages/company/CompanyAbout";
import CompanyCareers from "./pages/company/CompanyCareers";
import CompanyLeadership from "./pages/company/CompanyLeadership";
import CompanyLocations from "./pages/company/CompanyLocations";
import CompanyPartners from "./pages/company/CompanyPartners";
import Home from "./pages/Home";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blog/BlogDetails";
import Contact from "./pages/Contact";
import ClientPortal from "./pages/ClientPortal";
import OurApproach from "./pages/why-us/OurApproach";
import OnboardingGuide from "./pages/why-us/OnboardingGuide";
import Faq from "./pages/why-us/Faq";
import OpenTicket from "./pages/why-us/OpenTicket";
import Resources from "./pages/resources/Resources";
import ResourceGuides from "./pages/resources/Guides";
import GuideDetail from "./pages/resources/GuidesDetail.jsx";
import ResourceChecklists from "./pages/resources/Checklists";
import ResourceWhitepapers from "./pages/resources/Whitepapers";
import ResourceEvents from "./pages/resources/Events";
import ResourceTopic from "./pages/resources/Topic";
import Loader from "./components/Loader.jsx";
import WhitepapersDetail from "./pages/resources/WhitepapersDetail.jsx";
import ChecklistsDetail from "./pages/resources/ChecklistsDetail.jsx";
import Partners from "./pages/company/partners.jsx";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/About" element={<CompanyAbout />} />
        {/* <Route path="/company/careers" element={<CompanyCareers />} /> */}
        <Route path="/company/leadership" element={<CompanyLeadership />} />
        <Route path="/company/locations" element={<CompanyLocations />} />
        {/* <Route path="/company/partners" element={<CompanyPartners />} /> */}
        <Route path="/" element={<Home />} />

        {/* <Route path="/services/it-staffing" element={<ServicesItStaffing />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicesItStrategyConsulting />} />

        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<IndustriesHealthcare />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/platforms/:slug" element={<PlatformsMicrosoft365 />} />

        <Route path="/success/:slug" element={<SuccessIndustryHealthcare />} />
        <Route path="/success/story/:slug" element={<SuccessStoryPatientOutreachThatPeopleActuallyRespondTo />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

        {/* Client Success (mega menu uses /case-studies for the hub + featured story slugs) */}
        <Route path="/case-studies" element={<Success />} />
        <Route path="/case-studies/:slug" element={<SuccessStoryPatientOutreachThatPeopleActuallyRespondTo />} />

        {/* Contact Us */}
        <Route path="/contact" element={<Contact />} />

        {/* Why Us */}
        <Route path="/why-us/team" element={<CompanyLeadership />} />
        <Route path="/why-us/partners" element={<CompanyPartners />} />
        <Route path="/why-us/careers" element={<CompanyCareers />} />
        <Route path="/why-us/locations" element={<CompanyLocations />} />
        <Route path="/why-us/our-approach" element={<OurApproach />} />
        <Route path="/why-us/onboarding-guide" element={<OnboardingGuide />} />
        {/* <Route path="/resources/guide/:slug" element={<GuidesDetail />} /> */}
        <Route path="/why-us/faq" element={<Faq />} />
        <Route path="/why-us/open-a-ticket" element={<OpenTicket />} />
        <Route path="/client-portal" element={<ClientPortal />} />

        {/* Insights / Resources */}

        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/guides" element={<ResourceGuides />} />
        <Route path="/resources/guide/:slug" element={<GuideDetail />} />


        <Route path="/resources/checklists" element={<ResourceChecklists />} />
        <Route path="/resources/checklists/:slug" element={<ChecklistsDetail />} />

        <Route path="/resources/whitepapers" element={<ResourceWhitepapers />} />
        <Route path="/resources/whitepapers/:slug" element={<WhitepapersDetail />} />

        <Route path="/resources/events" element={<ResourceEvents />} />
        <Route path="/resources/topics/:topic" element={<ResourceTopic />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
