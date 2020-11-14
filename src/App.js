// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/style.scss";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/index";
import SignUp from "./components/signup/index";
import SignUp2 from "./components/signup2/index";
import Login2 from "./components/login2/index";
import Dashboard from "./container/dashboard";
import GymsNearMe from "./container/gymsNearMe";
import sub from "./container/subscription";
import tutorial from "./container/tutorial";
import AboutUs from "./container/about";
import ContactUs from "./container/contactUs";
import FeedBack from "./container/feedBack";
import BuildWorkOut from "./container/buildWorkOut";
import WorkOutBuddy from "./container/workOutBuddy";
import Excercise from "./container/excercise";
import Session from "./container/session";
import Transaction from "./container/transaction";
import Faqs from "./container/faqs";
import Product from "./container/products";
import Posts from "./container/posts";
import Notification from "./container/notification";
import Message from "./container/message";
import Invitation from "./container/invitation";
import BuddyList from "./container/buddyList";
import WorkOutList from "./container/workoutList";
import OrderList from "./container/orderList";
import PaymentMethod from "./container/paymentMethod";
import Profile from "./container/profile";
function App() {
  return (
    <BrowserRouter>
      <Route path={"/"} exact component={Login} />
      <Route path={"/signup"} exact component={SignUp} />
      <Route path={"/signup2"} exact component={SignUp2} />
      <Route path={"/login"} exact component={Login2} />
      <Route path={"/dashboard"} exact component={Dashboard} />
      <Route path={"/gyms"} exact component={GymsNearMe} />
      <Route path={"/tutorial"} exact component={tutorial} />
      <Route path={"/subscription"} exact component={sub} />
      <Route path={"/about"} exact component={AboutUs} />
      <Route path={"/contact"} exact component={ContactUs} />
      <Route path={"/feedback"} exact component={FeedBack} />
      <Route path={"/Build-workout"} exact component={BuildWorkOut} />
      <Route path={"/workout"} exact component={WorkOutBuddy} />
      <Route path={"/exercise"} exact component={Excercise} />
      <Route path={"/session"} exact component={Session} />
      <Route path={"/transaction"} exact component={Transaction} />
      <Route path={"/faqs"} exact component={Faqs} />
      <Route path={"/product"} exact component={Product} />
      <Route path={"/post"} exact component={Posts} />
      <Route path={"/notification"} exact component={Notification} />
      <Route path={"/message"} exact component={Message} />
      <Route path={"/invitation"} exact component={Invitation} />
      <Route path={"/buddy-list"} exact component={BuddyList} />
      <Route path={"/workout-list"} exact component={WorkOutList} />
      <Route path={"/order-list"} exact component={OrderList} />
      <Route path={"/payment"} exact component={PaymentMethod} />
      <Route path={"/profile"} exact component={Profile} />
    </BrowserRouter>
  );
}

export default App;
