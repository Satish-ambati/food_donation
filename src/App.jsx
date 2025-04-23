import { Route, Routes } from "react-router-dom"
import LandingPage from "./Homepages/landingpage"
import LiveChatUI from "./chatting/liveChat"
import RewardsPage from "./rewards/reward"
import About from "./About/about"
import FeedbackForm from "./feedback/feedbackform"
import AwarenessBlog from "./awareness/awareness"
import DonorDashboard from "./Donation/Donardashboard/donarDashBoard"
import DonationForm from "./Donation/donationform/Donation"
import AuthPage from "./Authentication/authentication"
import Forget from "./Authentication/forget"
import DonationHistory from "./Donation/Donardashboard/history"
import PartnerDirectory from "./partnerDirectory/partnerdirectory"
import AdminPanel from "./AdminPanel/admin"
import NGODashboard from "./NgoPanel/ndopanel"
import Receipts from "./receipts/receiptgenerator"
import DonorPage from "./Homepages/donorhome"
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/donorhome" element={<DonorPage/>}/>
      <Route path="/authentication" element={<AuthPage/>}/>
      <Route path="/forget" element={<Forget/>}/> 
      <Route path="/admin" element={<AdminPanel/>}/> 
      <Route path="/chat" element={<LiveChatUI/>}/>
      <Route path="/receipt" element={<Receipts/>}/>
      <Route path="/reward" element={<RewardsPage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/feedback" element={<FeedbackForm/>}/>
      <Route path="/awareness" element={<AwarenessBlog/>}/>
      <Route path="/donardashboard" element={<DonorDashboard/>}/>
      <Route path="/ngopanel" element={<NGODashboard/>}/>
      <Route path="/donateform" element={<DonationForm/>}/>
      <Route path="/donatehistory" element={<DonationHistory/>}/>
      <Route path="/partnerdirectory" element={<PartnerDirectory/>}/>
    </Routes>
  )
}

export default App
