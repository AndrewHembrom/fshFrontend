import React, { useEffect, useState } from "react";
import "./merchdescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { MerchData } from "../../context/MerchContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/Loading/Loading.jsx";

const MerchDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [bought, setBought] = useState(false);

  const { fetchUser } = UserData();

  const { fetchMerch, merch } = MerchData();

  useEffect(() => {
    fetchMerch(params.id);
  });

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    try {
      const data = await axios.get(
        `${server}/api/merch/checkout/${params.id}`,
        {
          headers: {
            token,
          },
        }
      );
      console.log(data);
      setLoading(false);
      setBought(true);
      toast.success("Merch Bought!");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {merch && (
            <div className="merch-description">
              <div className="merch-header">
                <img
                  src={`${server}/${merch.image}`}
                  alt=""
                  className="merch-image"
                />
                <div className="merch-info">
                  <h2>{merch.name}</h2>
                </div>
              </div>

              <div className="description">
                <p>Price - ₹{merch.price}</p>
              </div>

              {user && user.merch.includes(merch._id) ? (
                <button
                  // onClick={() => navigate(/merch/study/${merch._id})}
                  className="common-btn"
                >
                  Already Bought
                </button>
              ) : bought ? (
                <p>Already Bought</p>
              ) : (
                <button onClick={checkoutHandler} className="common-btn">
                  Buy Now
                </button>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MerchDescription;
