import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import moment from 'moment';
import 'moment/locale/vi';

const Orders = (props) => {
  const { orders } = props
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Tên</th>
          <th scope="col">Email</th>
          <th scope="col">Tổng cộng</th>
          <th scope="col">Thanh toán</th>
          <th scope="col">Ngày mua</th>
          <th>Trạng thái</th>
          <th scope="col" className="text-end">
            Chi tiết
          </th>
        </tr>
      </thead>
      <tbody>

        {
          orders.map((order) => (
            <tr key={order._id}>
              <td>
                <b>{order.user.name}</b>
              </td>
              <td>{order.user.email}</td>
              <td>
                <CurrencyFormat value={order.totalPrice} displayType={'text'} thousandSeparator={true} /> VND
              </td>
              <td>
                {
                  order.isPaid ? (
                    <span className="badge rounded-pill alert-success">
                      Đã thanh toán: {moment(order.paidAt).locale("vi").format("Do MMMM YYYY")}
                    </span>
                  )
                  :
                  (
                    <span className="badge rounded-pill alert-warning">
                      Chưa thanh toán
                    </span>
                  )
                }

              </td>
              <td>{moment(order.createdAt).locale("vi").format("Do MMMM YYYY")}</td>
              <td>
              {
                  order.isDelivered ? (
                    <span className="badge btn-success">Giao thành công</span>
                  )
                  :
                  (
                    <span className="badge btn-dark">
                      Chưa giao hàng
                    </span>
                  )
                }
                
              </td>
              <td className="d-flex justify-content-end align-item-center">
                <Link to={`/order/${order._id}`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
          ))
        }


        {/* Not paid Not delivered */}
        {/* <tr>
          <td>
            <b>Velcro Sneakers For Boys & Girls (Blue)</b>
          </td>
          <td>user@example.com</td>
          <td>$45,789</td>
          <td>
            <span className="badge rounded-pill alert-danger">Not paid</span>
          </td>
          <td>Dec 12 2021</td>
          <td>
            <span className="badge btn-dark">Not Delivered</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Orders;
