import React from "react";

const OrderDetailInfo = (props) => {
  const { order } = props
  return (
    <div className="row mb-5 order-info-wrap">
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-user"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Người dùng</h6>
            <p className="mb-1">
              {order.user.name} <br />
              <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-credit-card"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Phương thức thanh toán</h6>
            <p className="mb-1">
              {order.paymentMethod}
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-map-marker-alt"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Thông tin đặt hàng</h6>
            <p className="mb-1">
              <strong>Địa chỉ:{" "}</strong>
              {order.shippingAddress.city}, {" "}
              {order.shippingAddress.district}, {" "}
              {order.shippingAddress.village}, {" "}
              {order.shippingAddress.address}, {" "}
              <br />
              <strong>Số điện thoại:</strong> {order.shippingAddress.phoneNumber}
              <br />
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default OrderDetailInfo;
