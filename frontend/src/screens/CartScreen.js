import React, { useEffect } from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from 'react-currency-format';
import { addToCart, removefromcart } from './../Redux/Actions/cartActions';

const CartScreen = ({ match, location, history }) => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart;

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(0);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);


  const checkOutHandler = (e) => {
    history.push("/login?redirect=shipping");
  };


  const removeFromCartHandle = (id) => {
    dispatch(removefromcart(id))
  };



  return (
    <>
      <Header />
      {/* Cart */}
      <div className="container">
        {
          cartItems.length === 0 ? (
            <div className=" alert alert-info text-center mt-3">
              Giỏ hàng trống
              <Link
                className="btn btn-success mx-5 px-5 py-3"
                to="/"
                style={{
                  fontSize: "12px",
                }}
              >
                MUA SẮM NGAY!
              </Link>
            </div>
          )
            :
            (
              <>
                <div className=" alert alert-info text-center mt-3">
                  Giỏ hàng của tôi
                  <Link className="text-success mx-2" to="/cart">
                    ({cartItems.length})
                  </Link>
                </div>
                {/* cartiterm */}
                {
                  cartItems.map((item, i) => (

                    <div className="cart-iterm row" key={i}>
                      <div className="cart-image col-md-3">
                        <Link to={`/products/${item.product}`}>
                          <img src={item.image} alt={item.name} />
                        </Link>
                      </div>
                      <div className="cart-text col-md-3 d-flex flex-column justify-content-center">
                        <h6 className="cart-product-name align-items-start pb-1">Tên</h6>
                        <Link to={`/products/${item.product}`}>
                          <h4 className="align-items-center">{item.name}</h4>
                        </Link>
                      </div>
                      <div className="cart-qty col-md-2 col-sm-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                        <h6>Số lượng</h6>
                        <select
                          value={item.qty}
                          onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                    <h6>Size</h6>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div> */}
                      <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start d-flex flex-column justify-content-center col-sm-7">
                        <h6>Giá</h6>
                        <h4><CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} /> VND</h4>
                      </div>

                      <div onClick={() => removeFromCartHandle(item.product)}
                        type="button" className=" mt-3 mt-md-0 my-sm-5 px-3 my-md-0 col-md-2 align-self-center btn btn-outline-danger ">Xóa</div>

                    </div>

                  ))
                };

                {/* End of cart iterms */}
                <div className="total">
                  <span className="sub">Tổng:</span>
                  <span className="total-price"><CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} /> VND</span>
                </div>
                <hr />
                <div className="cart-buttons d-flex align-items-center row">
                  <Link to="/" className="col-md-6 ">
                    <button>Tiếp tục mua sắm</button>
                  </Link>
                  {
                    total > 0 && (
                      <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                        <button onClick={checkOutHandler}>
                          Xác Nhận
                        </button>
                      </div>
                    )
                  }
                </div>
              </>
            )
        }

      </div>
    </>
  );
};

export default CartScreen;
