import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css"
import man from "./Man.png"

const CheckoutPage = () => {
  const [shippingData, setData] = useState({
    fullname: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "",
    street: "",
  });

  const [isPaid, setIsPaid] = useState(false);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  const handleToken = (token) => {
    // Send the token to your server to process the payment
    console.log(token);
    setIsPaid(true);
  };

  if (isPaid) {
    // Redirect the user to the thank you page after payment is completed
    navigate("/ThankYouPage");
    return null;
  }

  const handleCOD = () => {
    // Perform the necessary actions for COD
    setIsPaid(true);
  };

  if (isPaid) {
    // Redirect the user to the thank you page after payment is completed
    navigate("/ThankYouPage");
    return null;
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...shippingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(shippingData);
    setToggle(!toggle);
  };

  const getPincodeData = async (e) => {
    if (e.target.value.length === 6) {
      const resp = await fetch(
        `https://api.postalpincode.in/pincode/${e.target.value}`
      );
      const pinData = await resp.json();

      if (pinData[0].Status === "Success") {
        setData({
          ...shippingData,
          state: pinData[0].PostOffice[0].State,
          city: pinData[0].PostOffice[0].District,
          pincode: e.target.value,
        });
      } else if (pinData[0].Status !== "Success") {
        alert("Enter Correct PinCode");
        setData({
          ...shippingData,
          state: "",
          city: "",
          pincode: "",
        });
      }
    }
  };

  return (
    <>
    <div className="maincheckdiv"></div>
    <div style={{alignItems: "center",
  display: "flex",
  justifyContent: "center"}}>
      <Box
        padding={"15px"}
        width={"70%"}
        marginTop={{ base: "60px", md: "90px", lg: "56px" }}
      >
        <Box >
        <Heading style={{marginBottom:"50px"}} fontSize={{ base: '22px', md: '40px', lg: '30px' }}>
      {toggle ? '' : 'Payment'}
    </Heading>
    <Text
     // borderBottom="1px solid green"
      width="fit-content"
      fontSize={{ base: '22px', md: '40px', lg: '30px' }}
      fontWeight={{ base: '600', md: '40px', lg: '56px' }}
      onClick={handleSubmit}
      cursor="pointer"
    >
      {toggle ? '' : 'Edit Address'}
    </Text>
  </Box>
        <Box
          fontWeight={{ base: "600", md: "40px", lg: "56px" }}
          fontSize={{ base: "16", md: "26", lg: "26px" }}
        >
          {/* <Text>
            {toggle
              ? "Home Delivery"
              : `${shippingData.fullname},${shippingData.street} ${shippingData.city},${shippingData.state},${shippingData.pincode}`}
          </Text>
          <Text>
            {toggle
              ? "Get your product delivered to your Home"
              : `Mobile Number: +91${shippingData.mobile}`}
          </Text> */}
        </Box>
        <Box
    fontWeight={{ base: '600', md: '40px', lg: '56px' }}
    fontSize={{ base: '16', md: '26', lg: '26px' }}
  >
    <Text>
      {toggle ? '' : `${shippingData.fullname}, ${shippingData.street}, ${shippingData.city}, ${shippingData.state}, ${shippingData.pincode}`}
    </Text>
    <Text style={{marginBottom:"50px"}}>
      {toggle ? '' : `Mobile Number: +91${shippingData.mobile}`}
    </Text>
  </Box>
  <Box display={{ base: 'block', md: 'flex', lg: 'flex' }} width={'95%'} justifyContent={'space-between'} margin={'auto'}>
    {toggle ? (
      <Box width={{ base: '95%', md: '50%', lg: '60%' }}>
        {/* <Text
          textAlign={'center'}
                fontSize={{ base: "16", md: "26", lg: "25" }}
                //borderBottom="1px solid green"
                fontWeight={700}
              >
                Add new address
              </Text> */}
              
              <div className="Parent">
             
                <div className="ImageDiv">
                  <img src={man}></img>
                </div>
              <div className="form-container">

                

              <form
      onSubmit={handleSubmit}
      
    >
      <div className="form-group">
        <div className="form-field">
          
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter Your Name"
            value={shippingData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          
          <input
            type="number"
            id="mobile"
            name="mobile"
            placeholder="Enter mobile Number"
            value={shippingData.mobile}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-field">
          
          <input
            type="number"
            id="pincode"
            name="pincode"
            placeholder="Enter Your Pincode"
            disabled={false}
            onChange={getPincodeData}
            required
          />
        </div>
        <div className="form-field">
          
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            readOnly
            value={shippingData.city}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-field">
        
          <input
            type="text"
            id="state"
            name="state"
            placeholder="State"
            readOnly
            value={shippingData.state}
            required
          />
        </div>
        <div className="form-field">
          
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Enter your Street Details"
            onChange={handleChange}
            value={shippingData.street}
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="Continue"
          className="submit-btn"
        />
      </div>
    </form>
              </div>
 
              </div>

            </Box>
          ) : (
            <Box>
  <Button
    variant="solid"
    backgroundColor="#f59e0b"
    color="#fff"
    onClick={handleCOD}
    _hover={{ bg: "#d97706" }}
    mr={4}
  >
    Cash on Delivery
  </Button>
  <StripeCheckout
    style={{ marginBottom: "60px", marginTop: "50px" }}
    token={handleToken}
    stripeKey="pk_test_51N1RdtSGJ3QNgFBVKw8PfVmT7bo6wOWPKZIOONpNrO776IhcPLOYJFsu5qmtYo9x2fL3wtFlAG17V5lY7ZBM4AaK00QicENFJI"
    amount={1000}
  />
</Box>

          ) }
        </Box>
      </Box>
      </div>
    </>

  );
};

export default CheckoutPage;
