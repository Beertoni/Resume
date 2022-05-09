import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        <div className="p-8 md:mx-4 bg-white rounded-md shadow-md">
          <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
            Email:
          </h3>
          <p className="text-gray-400 text font-light leading-relaxed mb-2">
            gustavohenriquebertoni@hotmail.com
          </p>

          <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
            Telefone(celular):
          </h3>
          <p className="text-gray-400 text font-light leading-relaxed mb-2">
            +55 (15)99699-8820
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
