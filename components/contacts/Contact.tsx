import React from "react";
import Wrap from "../hoc/Wrap";

function Contact() {
  return (
    <div className="container my-24 px-6 mx-auto ">
      {/* Section: Design Block */}
      <section data-aos="fade-up" data-aos-duration="1000" className="mb-32  overflow-hidden rounded-xl text-gray-800">
       
     
        <div className="block rounded-xl shadow-lg bg-gray-200">
          <div className="flex flex-wrap items-center">
            <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
              <div className="map-container-2 h-96 w-full">
                <iframe
                  src="https://maps.google.com/maps?q=iran,kerman&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="flex flex-wrap pt-12 lg:pt-0">
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">ایمیل:</p>
                      <p className="text-gray-500">milad7212@gmail.com</p>
                      
                    </div>
                  </div>
                </div>
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">موبایل:</p>
                      <p className="text-gray-500">09139939426</p>
                      
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center p-4 w-full gap-4">
                  <a href="https://www.linkedin.com/in/milad-hasani-52b330176/" rel="noreferrer" target='_blank' className="">
                    <img className="w-8 h-8 hover:scale-125 transition-all duration-150 ease-out" src="/images/linkdin.png" alt="" />
                  </a>
                  <a href="https://github.com/milad7212" rel="noreferrer" target='_blank' className="">
                    <img className="w-8 h-8 hover:scale-125 transition-all duration-150 ease-out" src="/images/github.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
  );
}

export default Wrap(Contact);
