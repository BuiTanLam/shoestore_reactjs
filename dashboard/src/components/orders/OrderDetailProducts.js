import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';


const OrderDetailProducts = (props) => {
  const { order, loading } = props;

  if (!loading) {
    //calculate price
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(0);
    };
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Tên</th>
          <th style={{ width: "20%" }}>Đơn giá</th>
          <th style={{ width: "20%" }}>Số lượng</th>
          <th style={{ width: "20%" }} className="text-end">
            Tổng cộng
          </th>
        </tr>
      </thead>
      <tbody>
        {
          order.orderItems.map((item, index) => (
            <tr key={index}>
              <td>
                <Link className="itemside" to="#">
                  <div className="left">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "40px", height: "40px" }}
                      className="img-xs"
                    />
                  </div>
                  <div className="info">
                    {item.name}{" "}
                  </div>
                </Link>
              </td>
              <td><CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} /> VND</td>
              <td>{item.qty}</td>
              <td className="text-end"> <CurrencyFormat value={item.price * item.qty} displayType={'text'} thousandSeparator={true} /> VND</td>
            </tr>
          ))
        }


        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>Đơn giá:</dt> <dd><CurrencyFormat value={order.itemsPrice} displayType={'text'} thousandSeparator={true} /> VND</dd>
              </dl>
              <dl className="dlist">
                <dt>Tổng tiền</dt>
                <dd>
                  <b className="h5"><CurrencyFormat value={order.totalPrice} displayType={'text'} thousandSeparator={true} /> VND</b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">Trạng thái:</dt>
                <dd>
                  {
                    order.isPaid ? (
                      <span className="badge rounded-pill alert alert-success text-success">
                        Đã thanh toán
                      </span>
                    )
                    :
                    (
                      <span className="badge rounded-pill alert alert-danger text-danger">
                        Chưa thanh toán
                      </span>
                    )
                  }

                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
