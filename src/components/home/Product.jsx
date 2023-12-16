import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`products/${product?.id}`)} className='w-[445px] p-3 mb-5 mx-4 border rounded-md cursor-pointer'>
      <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} alt="" />
      <div className="text-lg mt-3 font-bold text-center">{product?.title}</div>
      <div className=" text-center mt-2 font-bold text-lg">{product?.price}<span> TL</span></div>
    </div>
  );
};

export default Product;
