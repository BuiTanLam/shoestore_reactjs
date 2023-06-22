import React, { useEffect, useState } from "react";
import Toast from "./../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, updateProduct } from "../../Redux/Actions/ProductActions";
import { PRODUCT_UPDATE_RESET } from "../../Redux/Constants/ProductConstants";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000, //mean 2s
}

const EditProductMain = (props) => {
  const { productId } = props;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [brand, setBrand] = useState("");

  const dispatch = useDispatch();

  const productEdit = useSelector((state) => state.productEdit);
  const { loading, error, product } = productEdit;

  const productUpdate = useSelector((state) => state.productUpdate);
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = productUpdate;

  useEffect(() => {

    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      toast.success("Đã cập nhật thông tin sản phẩm", ToastObjects);
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(editProduct(productId));
      }
      else {
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
        setCountInStock(product.countInStock);
        setBrand(product.brand);
      }
    }
  }, [product, dispatch, productId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateProduct({
      _id: productId,
      name,
      price,
      description,
      image,
      countInStock,
      brand
    }))
  }

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Danh sách sản phẩm
            </Link>
            <h2 className="content-title">Cập nhật thông tin sản phẩm</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Cập nhật
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && <Message variant="alert-danger">{errorUpdate}</Message>}
                  {loadingUpdate && <Loading />}
                  {
                    loading ? <Loading /> : error ? <Message variant="alert-danger">{error}</Message>
                      : (
                        <>
                          <div className="mb-4">
                            <label htmlFor="product_title" className="form-label">
                              Tên sản phẩm
                            </label>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="form-control"
                              id="product_title"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="product_price" className="form-label">
                              Giá sản phẩm
                            </label>
                            <input
                              type="number"
                              placeholder="Nhập giá sản phẩm"
                              className="form-control"
                              id="product_price"
                              required
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="product_price" className="form-label">
                              Số lượng trong kho
                            </label>
                            <input
                              type="number"
                              placeholder="Nhập số lượng"
                              className="form-control"
                              id="product_price"
                              required
                              value={countInStock}
                              onChange={(e) => setCountInStock(e.target.value)}
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="product_title" className="form-label">
                              Tên Hãng
                            </label>
                            <input
                              type="text"
                              placeholder="Nhập tên nhãn hàng"
                              className="form-control"
                              id="product_title"
                              required
                              value={brand}
                              onChange={(e) => setBrand(e.target.value)}
                            />
                          </div>
                          <div className="mb-4">
                            <label className="form-label">Mô tả sản phẩm</label>
                            <textarea
                              placeholder="Nhập mô tả"
                              className="form-control"
                              rows="7"
                              required
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                          </div>
                          <div className="mb-4">
                            <label className="form-label">Ảnh sản phẩm</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Link ảnh"
                              required
                              value={image}
                              onChange={(e) => setImage(e.target.value)}
                            />
                          </div>
                        </>
                      )
                  }

                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProductMain;
