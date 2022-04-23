import React from "react";


function Maincomp() {
  return (
    <div>
      <div className=" h-96 w-full relative">
        <img src="https://www.fedex.com/content/dam/fedex/international/international/images/2019/Q1/20160620_dm_16_004_03_03_02_230_160134_403881552.jpg" className="w-full h-full bg-cover absolute mix-blend-overlay" alt="" />
        <div className="p-10">
        <h1 className=" text-white text-6xl font-bold px-40 py-16">
          Open an account</h1>
          <h2 className=" text-slate-300 text-2xl font-light mt-5 px-40 -mt-11 "> Take advantage of our services and solutions designed to meet all of your shipping requirements.</h2> 
          <h2 className=" text-slate-300 text-2xl font-light mt-5 px-40">Sign up for a FedEx shipping account now.</h2>
          </div>
      </div>
      <div>
        <p className="text-center py-10 text-2xl">Sign up a <b>business account</b> now to enjoy personalized rates and pay within our</p>
      </div>
      <div>
        <p className="text-center text-2xl -mt-9">standard 15-day credit term</p>
      </div>
    </div>

  );
}

export default Maincomp;
