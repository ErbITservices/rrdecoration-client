import { useState } from "react";
import mainbackground from "../assets/download.jpeg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
import { userRequest } from "../axiosReqMethods";
import axios from "axios";
import ProductNotFound from "../components/ProductNotFound";
import styled from "styled-components";
import SingleComplainSection from "../components/SingleComplainSection";

const TopSection = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  margin-left: 10px;
`;
const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;
function ComplainRegister() {
  
  const [user, setuser] = useState({
    name: "",
    mobilenumber: "",
    email: "",
    message: "",
    address: "",
  });


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuser({
      ...user,
      [name]: value,
    });
   
  };

  const handleSubmit = async () => {
    
  };
  
  return (
    <>
      <Navbar />
      <form className="container">
        <div className="enquiry-container">
          <h1>Send Enquiry</h1>
          <div className="inputfield">
            <label>Name </label>
            <input
              name="name"
              onChange={handleInput}
              value={user.name}
              required
              type="text"
            />
          </div>
          <div className="inputfield">
            <label>Email </label>
            <input
              name="email"
              onChange={handleInput}
              value={user.email}
              required
              type="text"
            />
          </div>
          <div className="inputfield">
            <label>Mobile Number </label>
            <input
              name="mobilenumber"
              onChange={handleInput}
              value={user.mobilenumber}
              required
              type="number"
            />
          </div>
          <div className="inputfield">
            <label> Address </label>
            <input
              name="address"
              onChange={handleInput}
              value={user.address}
              required
              type="text"
            />
          </div>
          <div className="inputfield">
            <label> Message </label>
            <input
              name="message"
              onChange={handleInput}
              value={user.message}
              required
              type="text"
            />
          </div>

          <div className="inputfield">
            <button type="button" onClick={handleSubmit} className="btn ">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}
export default ComplainRegister;
