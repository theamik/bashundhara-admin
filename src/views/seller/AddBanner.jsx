import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdCloudUpload } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import {
  bannerAdd,
  get_banner,
  messageClear,
} from "../../store/reducers/bannerReducer";
const AddBanner = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { loader, successMessage, errorMessage, banner,banners } = useSelector(
    (state) => state.banner
  );
  const [imageShow, setImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const imageHandle = (e) => {
    let files = e.target.files;
    if (files.length > 0) {
      setBannerImage(files[0]);
      setImage(URL.createObjectURL(files[0]));
    }
  };
  const add_banner = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("bannerImage", bannerImage);
    dispatch(bannerAdd(formData));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      setImage("");
      setBannerImage("");
    }
  }, [successMessage, errorMessage]);

  useEffect(() => {
    dispatch(get_banner(productId));
  }, [productId]);

  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4  bg-[#283046] rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-[#d0d2d6] text-xl font-semibold">Add Banner</h1>
          <Link
            className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2 "
            to="/seller/dashboard/banners"
          >
            Banners
          </Link>
        </div>
        { banner.length===0 ?(
          <div>
            <form onSubmit={add_banner}>
              <div className="mb-4">
                <label
                  className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 w-full text-[#d0d2d6]"
                  htmlFor="image"
                >
                  <span className="text-4xl">
                    <IoMdCloudUpload />
                  </span>
                  <span>Select banner image</span>
                </label>
                <input
                  multiple
                  onChange={imageHandle}
                  className="hidden"
                  type="file"
                  id="image"
                  required
                />
              </div>

              {imageShow && (
                <div className="mb-0">
                  <img className="w-full h-auto" src={imageShow} alt="" />
                </div>
              )}
              <div className="flex">
                <button
                  disabled={loader ? true : false}
                  className="bg-blue-500 w-[190px] hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
                >
                  {loader ? (
                    <PropagateLoader color="#fff" cssOverride={overrideStyle} />
                  ) : (
                    "Add Banner"
                  )}
                </button>
              </div>
            </form>
          </div>
        ):(
          <div>
            {
              <div className="mb-0">
                <img className="w-full h-auto" src={banners.length !==0 ? banners.banner:banner[0].banner} alt="" />
              </div>
            }
            <form onSubmit={add_banner}>
              <div className="mb-4">
                <label
                  className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 w-full text-[#d0d2d6]"
                  htmlFor="image"
                >
                  <span className="text-4xl">
                    <IoMdCloudUpload />
                  </span>
                  <span>Select banner image</span>
                </label>
                <input
                  multiple
                  onChange={imageHandle}
                  className="hidden"
                  type="file"
                  id="image"
                  required
                />
              </div>

              {imageShow && (
                <div className="mb-0">
                  <img className="w-full h-auto" src={imageShow} alt="" />
                </div>
              )}
              <div className="flex">
                <button
                  disabled={loader ? true : false}
                  className="bg-blue-500 w-[190px] hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
                >
                  {loader ? (
                    <PropagateLoader color="#fff" cssOverride={overrideStyle} />
                  ) : (
                    "Update Banner"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBanner;
