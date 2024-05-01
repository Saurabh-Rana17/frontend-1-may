import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Search from "./Search.jsx";
import SignUp from "./SignUp.jsx";
import Details from "./Details.jsx";
import SignIn from "./SignIn.jsx";
import Category from "./Category.jsx";
import Explore from "./Explore.jsx";
import Layout from "./Layout.jsx";
import BookTour from "./BookTour.jsx";
import Hotel from "./Hotel.jsx";
import Cab from "./Cab.jsx";
import Inquiry from "./Inquiry.jsx";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index exact element={<Home />} />
        <Route path="/home" exact element={<Navigate to="/" />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/tour/:id" element={<Details />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/book/:tourId" element={<BookTour />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/cab" element={<Cab />} />
        <Route path="/contact" element={<Inquiry />} />
        <Route path="/explore" element={<Explore />} />
      </Route>
    </Routes>
  );
}
