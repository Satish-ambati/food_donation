import { Route, Routes } from "react-router-dom"
import LandingPage from "./Home pages/landingpage"
import LiveChatUI from "./chatting/liveChat"
import Trail from "./receipts/trail"
import RewardsPage from "./rewards/reward"
import About from "./About/about"
import FeedbackForm from "./feedback/feedbackform"
import AwarenessBlog from "./awareness/awareness"
import DonorDashboard from "./Donation/Donardashboard/donarDashBoard"
import DonationForm from "./Donation/donationform/Donation"
import AuthPage from "./Authentication/authentication"
import Forget from "./Authentication/forget"
import DonationHistory from "./Donation/Donardashboard/history"
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/authentication" element={<AuthPage/>}/>
      <Route path="/forget" element={<Forget/>}/> 
      <Route path="/chat" element={<LiveChatUI/>}/>
      <Route path="/receipt" element={<Trail/>}/>
      <Route path="/reward" element={<RewardsPage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/feedback" element={<FeedbackForm/>}/>
      <Route path="/awareness" element={<AwarenessBlog/>}/>
      <Route path="/donardashboard" element={<DonorDashboard/>}/>
      <Route path="/donateform" element={<DonationForm/>}/>
      <Route path="/donatehistory" element={<DonationHistory/>}/>
    </Routes>
  )
}

export default App
