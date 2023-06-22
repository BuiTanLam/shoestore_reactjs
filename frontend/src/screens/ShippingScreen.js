import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { saveShippingAddress } from './../Redux/Actions/cartActions';

const ShippingScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart;

  const [city, setCity] = useState(shippingAddress.city);
  const [district, setDistrict] = useState(shippingAddress.district);
  const [village, setVillage] = useState(shippingAddress.village);
  const [address, setAddress] = useState(shippingAddress.address);
  const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ city, district, village, address, phoneNumber }));
    history.push("/payment");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>ĐỊA CHỈ NHẬN HÀNG</h6>
          <input type="text" placeholder="Tên Thành Phố/Tỉnh" value={city} required onChange={(e) => setCity(e.target.value)} />
          <input type="text" placeholder="Tên Quận/Huyện" value={district} required onChange={(e) => setDistrict(e.target.value)} />
          <input type="text" placeholder="Tên Phường/Xã" value={village} required onChange={(e) => setVillage(e.target.value)} />
          <input type="text" placeholder="Địa chỉ cụ thể" value={address} required onChange={(e) => setAddress(e.target.value)} />
          <input type="text" placeholder="Số điện thoại" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)} />
          <button type="submit">
            Tiếp Tục
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
