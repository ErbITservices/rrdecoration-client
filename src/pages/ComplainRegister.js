import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { publicRequest, userRequest } from "../axiosReqMethods";
import HashLoader from "react-spinners"
import { CircularProgress } from "@material-ui/core";

function ComplainRegister() {
  
  const [user, setuser] = useState({
    name: "",
    mobilenumber: "",
    email: "",
    message: "",
    address: "",
  });
  const [loading, setloading] = useState(false);


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuser({
      ...user,
      [name]: value,
    });
   
  };

  const handleSubmit = async () => {
    setloading(true);
    try {
      const res = await publicRequest.post("api/request", user);
      console.log(res);
      setloading(false)
    }
    catch (e) {
      console.log(e);
      setloading(false);
    }

  };
  
  return (
    <>
      <Navbar />
      {loading && (
        <div className="loader">
          <CircularProgress color="inherit" />
          <h1> Loading</h1>
        </div>
      )}
      {!loading && (
        <form className="complain-container">
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
      )}

      <Footer />
    </>
  );
}
export default ComplainRegister;
