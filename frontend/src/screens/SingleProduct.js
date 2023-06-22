// import React, { useEffect, useState } from "react";
// import Header from "./../components/Header";
// import Rating from "../components/homeComponents/Rating";
// import { Link } from "react-router-dom";
// import Message from "./../components/LoadingError/Error";
// import { axios } from 'axios';


// const SingleProduct = ({ match }) => {
//   const [product, setProduct] = useState({});
//   console.log(match.params.id)

//   useEffect(() => {
//     fetchProduct();
//   }, []);
  
//   const fetchProduct = async() => {
//     try {
//       const {data} = await axios.get("/api/products/2");
//     } catch {
//       console.log('Error when call products API')
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="container single-product">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="single-image">
//               <img src={product.image} alt={product.name} />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="product-dtl">
//               <div className="product-info">
//                 <div className="product-name">{product.name}</div>
//               </div>
//               <p>{product.description}</p>

//               <div className="product-count col-lg-7 ">
//                 <div className="flex-box d-flex justify-content-between align-items-center">
//                   <h6>Hãng</h6>
//                   <span>{product.brand}</span>
//                 </div>
//                 <div className="flex-box d-flex justify-content-between align-items-center">
//                   <h6>Giá</h6>
//                   <span>{product.price} VND</span>
//                 </div>
//                 <div className="flex-box d-flex justify-content-between align-items-center">
//                   <h6>Tình trạng</h6>
//                   {product.countInStock > 0 ? (
//                     <span>Còn hàng</span>
//                   ) : (
//                     <span>Hết hàng</span>
//                   )}
//                 </div>
//                 <div className="flex-box d-flex justify-content-between align-items-center">
//                   <h6>Đánh giá</h6>
//                   <Rating
//                     value={product.rating}
//                     text={`${product.numReviews} reviews`}
//                   />
//                 </div>
//                 {product.countInStock > 0 ? (
//                   <>
//                     <div className="flex-box d-flex justify-content-between align-items-center">
//                       <h6>Số lượng</h6>
//                       <select>
//                         {[...Array(product.countInStock).keys()].map((x) => (
//                           <option key={x + 1} value={x + 1}>
//                             {x + 1}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <div className="flex-box d-flex justify-content-between align-items-center">
//                       <h6>Size</h6>
//                       <select>
//                           <option>
//                            39
//                           </option>
//                           <option>
//                            40
//                           </option>
//                           <option>
//                            41
//                           </option>
//                       </select>
//                     </div>
//                     <button className="round-black-btn">Thêm vào giỏ hàng</button>
//                   </>
//                 ) : null}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RATING */}
//         <div className="row my-5">
//           <div className="col-md-6">
//             <h6 className="mb-3">ĐÁNH GIÁ</h6>
//             <Message variant={"alert-info mt-3"}>Không có đánh giá</Message>
//             <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
//               <strong>Lam bui</strong>
//               <Rating />
//               <span>20 12 2022</span>
//               <div className="alert alert-info mt-3">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <h6>VIẾT ĐÁNH GIÁ CỦA BẠN</h6>
//             <div className="my-4"></div>

//             <form>
//               <div className="my-4">
//                 <strong>Chọn số sao</strong>
//                 <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
//                   <option value="">Chọn số sao</option>
//                   <option value="1">1 - Không hài lòng</option>
//                   <option value="2">2 - Bình thường</option>
//                   <option value="3">3 - Tương đối hài lòng</option>
//                   <option value="4">4 - Hài lòng</option>
//                   <option value="5">5 - Rất hài lòng</option>
//                 </select>
//               </div>
//               <div className="my-4">
//                 <strong>Bình luận</strong>
//                 <textarea
//                   row="3"
//                   className="col-12 bg-light p-3 mt-2 border-0 rounded"
//                 ></textarea>
//               </div>
//               <div className="my-3">
//                 <button className="col-12 bg-black border-0 p-3 rounded text-white">
//                   Gửi
//                 </button>
//               </div>
//             </form>
//             <div className="my-3">
//               <Message variant={"alert-warning"}>
//                 Vui lòng{" "}
//                 <Link to="/login">
//                   " <strong>Đăng nhập</strong> "
//                 </Link>{" "}
//                 để viết đánh giá{" "}
//               </Message>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// function SingleProduct() {
//   useEffect(() => {
//     fetchProduct();
//   }, []);
  
//   const fetchProduct = async() => {
//     try {
//       const {data} = await axios.get("/api/products/2");
//       console.log(data)
//     } catch {
//       console.log('Error when call products API')
//     }
//   };

//   return (
//     <p>Test API</p>
//   )
// }

// export default SingleProduct;
