import React from "react";
import { MerchData } from "../../context/MerchContext";
import MerchandiseCard from "../../components/MerchandiseCard";

const Merchandise = () => {
  const { merchs } = MerchData();
  return (
    <div className="merchs p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center">
        {merchs && merchs.length > 0 ? (
          merchs.map((e) => <MerchandiseCard key={e._id} merch={e} />)
        ) : (
          <p>No Merchandise Yet</p>
        )}
      </div>
    </div>
  );
};

export default Merchandise;
