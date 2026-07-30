import ServicesItStaffing from "./pages/services/ServicesItStaffing";
import ServicesItStrategyConsulting from "./pages/services/ServicesItStrategyConsulting";
import IndustriesHealthcare from "./pages/industries/IndustriesHealthcare";
import PlatformsMicrosoft365 from "./pages/platforms/PlatformsMicrosoft365";
import { Routes, Route } from "react-router-dom";
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


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/About" element={<CompanyAbout />} />
        <Route path="/company/careers" element={<CompanyCareers />} />
        <Route path="/company/leadership" element={<CompanyLeadership />} />
        <Route path="/company/locations" element={<CompanyLocations />} />
        <Route path="/company/partners" element={<CompanyPartners />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/industries/construction-field-services" element={<IndustriesConstructionFieldServices />} />
        <Route path="/industries/education" element={<IndustriesEducation />} />
        <Route path="/industries/financial-services" element={<IndustriesFinancialServices />} />
        <Route path="/industries/healthcare" element={<IndustriesHealthcare />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/legal" element={<IndustriesLegal />} />
        <Route path="/industries/manufacturing" element={<IndustriesManufacturing />} />
        <Route path="/industries/nonprofits-associations" element={<IndustriesNonprofitsAssociations />} />
        <Route path="/industries/professional-services" element={<IndustriesProfessionalServices />} />
        <Route path="/industries/public-sector" element={<IndustriesPublicSector />} />
        <Route path="/industries/retail-distribution" element={<IndustriesRetailDistribution />} />
        <Route path="/industries/small-mid-market" element={<IndustriesSmallMidMarket />} /> */}
        {/* <Route path="/platforms/azure-cloud" element={<PlatformsAzureCloud />} />
        <Route path="/platforms/azure-virtual-desktop" element={<PlatformsAzureVirtualDesktop />} />
        <Route path="/platforms/business-central" element={<PlatformsBusinessCentral />} />
        <Route path="/platforms/d365-contact-center" element={<PlatformsD365ContactCenter />} />
        <Route path="/platforms/d365-customer-insights" element={<PlatformsD365CustomerInsights />} />
        <Route path="/platforms/d365-customer-service" element={<PlatformsD365CustomerService />} />
        <Route path="/platforms/d365-field-service" element={<PlatformsD365FieldService />} />
        <Route path="/platforms/d365-finance" element={<PlatformsD365Finance />} />
        <Route path="/platforms/d365-project-operations" element={<PlatformsD365ProjectOperations />} />
        <Route path="/platforms/d365-sales" element={<PlatformsD365Sales />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/platforms/microsoft-365" element={<PlatformsMicrosoft365 />} />
        <Route path="/platforms/microsoft-copilot" element={<PlatformsMicrosoftCopilot />} />
        <Route path="/platforms/microsoft-defender" element={<PlatformsMicrosoftDefender />} />
        <Route path="/platforms/microsoft-fabric" element={<PlatformsMicrosoftFabric />} />
        <Route path="/platforms/microsoft-intune" element={<PlatformsMicrosoftIntune />} />
        <Route path="/platforms/microsoft-purview" element={<PlatformsMicrosoftPurview />} />
        <Route path="/platforms/power-platform" element={<PlatformsPowerPlatform />} /> */}
        {/* <Route path="/services/ai-readiness-copilot-enablement" element={<ServicesAiReadinessCopilotEnablement />} />
        <Route path="/services/business-intelligence-reporting" element={<ServicesBusinessIntelligenceReporting />} />
        <Route path="/services/business-process-automation" element={<ServicesBusinessProcessAutomation />} />
        <Route path="/services/cloud-infrastructure" element={<ServicesCloudInfrastructure />} />
        <Route path="/services/contact-center" element={<ServicesContactCenter />} />
        <Route path="/services/customer-insights" element={<ServicesCustomerInsights />} />
        <Route path="/services/customer-service" element={<ServicesCustomerService />} />
        <Route path="/services/cybersecurity-identity-compliance" element={<ServicesCybersecurityIdentityCompliance />} />
        <Route path="/services/data-center-hosting" element={<ServicesDataCenterHosting />} />
        <Route path="/services/endpoint-device-management" element={<ServicesEndpointDeviceManagement />} />
        <Route path="/services/enterprise-modernization" element={<ServicesEnterpriseModernization />} />
        <Route path="/services/enterprise-resource-platform" element={<ServicesEnterpriseResourcePlatform />} />
        <Route path="/services/enterprise-system-integration" element={<ServicesEnterpriseSystemIntegration />} />
        <Route path="/services/field-service" element={<ServicesFieldService />} />
        <Route path="/services/finance" element={<ServicesFinance />} /> */}
        {/* <Route path="/services" element={<Services />} />
        <Route path="/services/intranet-portals-document-management" element={<ServicesIntranetPortalsDocumentManagement />} />

        <Route path="/services/managed-it" element={<ServicesManagedIt />} />
        <Route path="/services/microsoft-licensing-optimization" element={<ServicesMicrosoftLicensingOptimization />} />
        <Route path="/services/modern-workplace" element={<ServicesModernWorkplace />} />
        <Route path="/services/organizational-change-management" element={<ServicesOrganizationalChangeManagement />} />
        <Route path="/services/project-operations" element={<ServicesProjectOperations />} />
        <Route path="/services/sales-crm" element={<ServicesSalesCrm />} />
        <Route path="/services/teams-calling-business-voice" element={<ServicesTeamsCallingBusinessVoice />} /> */}
        {/* <Route path="/success/capability-business-applications" element={<SuccessCapabilityBusinessApplications />} />
        <Route path="/success/capability-data-ai-integration" element={<SuccessCapabilityDataAiIntegration />} />
        <Route path="/success/capability-managed-it-security" element={<SuccessCapabilityManagedItSecurity />} />
        <Route path="/success/capability-modern-work-automation" element={<SuccessCapabilityModernWorkAutomation />} />
        <Route path="/success/capability-strategy-transformation" element={<SuccessCapabilityStrategyTransformation />} />
        <Route path="/success/capability-talent" element={<SuccessCapabilityTalent />} />
        <Route path="/success/featured" element={<SuccessFeatured />} />
        <Route path="/success" element={<Success />} /> */}
        {/* <Route path="/success/industry-construction-field-services" element={<SuccessIndustryConstructionFieldServices />} />
        <Route path="/success/industry-education" element={<SuccessIndustryEducation />} />
        <Route path="/success/industry-financial-services" element={<SuccessIndustryFinancialServices />} />
        <Route path="/success/industry-healthcare" element={<SuccessIndustryHealthcare />} />
        <Route path="/success/industry-legal" element={<SuccessIndustryLegal />} />
        <Route path="/success/industry-manufacturing" element={<SuccessIndustryManufacturing />} />
        <Route path="/success/industry-nonprofits-associations" element={<SuccessIndustryNonprofitsAssociations />} />
        <Route path="/success/industry-professional-services" element={<SuccessIndustryProfessionalServices />} />
        <Route path="/success/industry-public-sector" element={<SuccessIndustryPublicSector />} />
        <Route path="/success/industry-retail-distribution" element={<SuccessIndustryRetailDistribution />} />
        <Route path="/success/industry-small-mid-market" element={<SuccessIndustrySmallMidMarket />} /> */}
        {/* <Route path="/success/story-a-customer-experience-rebuilt-on-a-low-code-portal" element={<SuccessStoryACustomerExperienceRebuiltOnALowCodePortal />} />
        <Route path="/success/story-a-dealership-network-brought-into-one-erp-and-crm" element={<SuccessStoryADealershipNetworkBroughtIntoOneErpAndCrm />} />
        <Route path="/success/story-a-forecast-horizon-extended-from-three-months-to" element={<SuccessStoryAForecastHorizonExtendedFromThreeMonthsTo />} />
        <Route path="/success/story-a-heavily-customised-erp-retired-across-twenty-four" element={<SuccessStoryAHeavilyCustomisedErpRetiredAcrossTwentyFour />} />
        <Route path="/success/story-a-meat-producer-that-decided-to-become-a-technology" element={<SuccessStoryAMeatProducerThatDecidedToBecomeATechnology />} />
        <Route path="/success/story-a-member-programme-portal-for-two-thousand" element={<SuccessStoryAMemberProgrammePortalForTwoThousand />} />
        <Route path="/success/story-ai-adopted-without-exposing-a-single-client-matter" element={<SuccessStoryAiAdoptedWithoutExposingASingleClientMatter />} />
        <Route path="/success/story-drone-line-inspection-from-three-days-to-overnight" element={<SuccessStoryDroneLineInspectionFromThreeDaysToOvernight />} />
        <Route path="/success/story-fifteen-data-sources-into-one-lakehouse-and-models" element={<SuccessStoryFifteenDataSourcesIntoOneLakehouseAndModels />} />
        <Route path="/success/story-five-hundred-officer-hours-a-month-returned-to-the" element={<SuccessStoryFiveHundredOfficerHoursAMonthReturnedToThe />} />
        <Route path="/success/story-forty-hours-a-month-recovered-from-reporting" element={<SuccessStoryFortyHoursAMonthRecoveredFromReporting />} />
        <Route path="/success/story-forty-siloed-systems-into-one-citizen-record" element={<SuccessStoryFortySiloedSystemsIntoOneCitizenRecord />} />
        <Route path="/success/story-forty-thousand-web-pages-answered-in-seconds" element={<SuccessStoryFortyThousandWebPagesAnsweredInSeconds />} />
        <Route path="/success/story-four-thousand-licences-and-a-centre-of-excellence" element={<SuccessStoryFourThousandLicencesAndACentreOfExcellence />} />
        <Route path="/success/story-from-180-000-cases-to-370-000-because-staff-finally" element={<SuccessStoryFrom180000CasesTo370000BecauseStaffFinally />} />
        <Route path="/success/story-incident-volume-halved-triage-time-cut-by-four" element={<SuccessStoryIncidentVolumeHalvedTriageTimeCutByFour />} />
        <Route path="/success/story-modernizing-forty-year-old-banking-systems-without" element={<SuccessStoryModernizingFortyYearOldBankingSystemsWithout />} />
        <Route path="/success/story-month-end-close-cut-by-a-quarter-across-sixteen" element={<SuccessStoryMonthEndCloseCutByAQuarterAcrossSixteen />} />
        <Route path="/success/story-municipal-finance-modernized-and-the-savings" element={<SuccessStoryMunicipalFinanceModernizedAndTheSavings />} />
        <Route path="/success/story-ninety-six-per-cent-of-students-on-track-to-graduate" element={<SuccessStoryNinetySixPerCentOfStudentsOnTrackToGraduate />} />
        <Route path="/success/story-one-record-for-the-whole-student-journey" element={<SuccessStoryOneRecordForTheWholeStudentJourney />} />
        <Route path="/success/story-one-view-of-the-member-on-every-channel" element={<SuccessStoryOneViewOfTheMemberOnEveryChannel />} />
        <Route path="/success/story-order-to-invoice-scaled-to-two-hundred-thousand" element={<SuccessStoryOrderToInvoiceScaledToTwoHundredThousand />} />

        <Route path="/success/story-roadside-support-resolved-fifteen-per-cent-faster" element={<SuccessStoryRoadsideSupportResolvedFifteenPerCentFaster />} />
        <Route path="/success/story-robotic-process-automation-for-repetitive-field" element={<SuccessStoryRoboticProcessAutomationForRepetitiveField />} />
        <Route path="/success/story-scaling-scarce-expertise-instead-of-hiring-it" element={<SuccessStoryScalingScarceExpertiseInsteadOfHiringIt />} />
        <Route path="/success/story-secure-score-improved-and-the-tooling-bill-reduced" element={<SuccessStorySecureScoreImprovedAndTheToolingBillReduced />} />
        <Route path="/success/story-seventy-five-hundred-technicians-one-service" element={<SuccessStorySeventyFiveHundredTechniciansOneService />} />
        <Route path="/success/story-sixteen-hundred-people-live-in-two-months" element={<SuccessStorySixteenHundredPeopleLiveInTwoMonths />} />
        <Route path="/success/story-sixty-acquired-companies-onto-one-value-chain" element={<SuccessStorySixtyAcquiredCompaniesOntoOneValueChain />} />
        <Route path="/success/story-student-communication-personalised-from-a-unified" element={<SuccessStoryStudentCommunicationPersonalisedFromAUnified />} />
        <Route path="/success/story-student-enquiries-answered-faster-with-less-staff" element={<SuccessStoryStudentEnquiriesAnsweredFasterWithLessStaff />} />
        <Route path="/success/story-students-trained-as-ambassadors-to-drive-adoption" element={<SuccessStoryStudentsTrainedAsAmbassadorsToDriveAdoption />} />
        <Route path="/success/story-thirty-hours-a-month-of-finance-admin-automated-away" element={<SuccessStoryThirtyHoursAMonthOfFinanceAdminAutomatedAway />} />
        <Route path="/success/story-thirty-six-hours-a-week-returned-to-the-business" element={<SuccessStoryThirtySixHoursAWeekReturnedToTheBusiness />} />
        <Route path="/success/story-thirty-thousand-hours-a-year-automated-by-the-staff" element={<SuccessStoryThirtyThousandHoursAYearAutomatedByTheStaff />} />
        <Route path="/success/story-thousands-of-service-interactions-a-day-forty-per" element={<SuccessStoryThousandsOfServiceInteractionsADayFortyPer />} />
        <Route path="/success/story-threat-detection-and-data-governance-across-a-hybrid" element={<SuccessStoryThreatDetectionAndDataGovernanceAcrossAHybrid />} />
        <Route path="/success/story-three-thousand-makers-guided-by-an-agent" element={<SuccessStoryThreeThousandMakersGuidedByAnAgent />} />
        <Route path="/success/story-twenty-million-records-a-year-processed-without-new" element={<SuccessStoryTwentyMillionRecordsAYearProcessedWithoutNew />} />
        <Route path="/success/story-twenty-six-thousand-hours-recovered-during-rapid" element={<SuccessStoryTwentySixThousandHoursRecoveredDuringRapid />} />
        <Route path="/success/story-underwriting-administration-cut-by-hundreds-of-hours" element={<SuccessStoryUnderwritingAdministrationCutByHundredsOfHours />} /> */}

        <Route path="/services/it-staffing" element={<ServicesItStaffing />} />
        <Route path="/services/:slug" element={<ServicesItStrategyConsulting />} />

        <Route path="/industries/:slug" element={<IndustriesHealthcare />} />
        <Route path="/platforms/:slug" element={<PlatformsMicrosoft365 />} />

        <Route path="/success/:slug" element={<SuccessIndustryHealthcare />} />
        <Route path="/success/story/:slug" element={<SuccessStoryPatientOutreachThatPeopleActuallyRespondTo />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
