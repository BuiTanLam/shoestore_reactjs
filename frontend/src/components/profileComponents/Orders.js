import moment from "moment";
import 'moment/locale/vi';
import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
const Orders = (props) => {
  const { loading, error, orders } = props;
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">

      {
        loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        )
          : (
            <>
              {
                orders.length === 0 ? (
                  <div className="col-12 alert alert-info text-center mt-3">
                    Bạn không có đơn hàng
                    <Link
                      className="btn btn-success mx-2 px-3 py-2"
                      to="/"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      BẮT ĐẦU MUA SẮM
                    </Link>
                  </div>
                )
                  :
                  (
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>TRẠNG THÁI</th>
                            <th>NGÀY MUA</th>
                            <th>TỔNG TIỀN</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            orders.map((order) => (
                              <tr className={`${order.idPaid ? "alert-success" : "alert-warning"}`} key={order._id}>
                                <td>
                                  <a href={`/order/${order._id}`} className="link">
                                    {order._id}
                                  </a>
                                </td>
                                <td>{order.isPaid ? <>Đã thanh toán</> : <>Chưa thanh toán</>}</td>
                                <td>{order.isPaid ? moment(order.paidAt).locale("vi").calendar() : moment(order.createdAt).locale("vi").calendar()}</td>
                                <td>
                                  <CurrencyFormat value={order.totalPrice} displayType={'text'} thousandSeparator={true} /> VND
                                </td>
                              </tr>
                            ))
                          }

                        </tbody>
                      </table>
                    </div>
                  )
              }
            </>
          )
      }



    </div>
  );
};

export default Orders;
