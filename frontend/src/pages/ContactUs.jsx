import React from "react";

function ContactUs() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-meno  text-gray-900 mb-4">Contact Us</h2>
          <p className="mt-2 text-sm text-gray-500 mb-4">
            Our dedicated customer service team is committed to providing you
            with the highest level of support possible. Whether you need help
            with placing an order, have a question about a product, or need
            assistance with a resize exchange. Contact us and we'll be happy to
            help!
          </p>
          <div className="text-gray-600">
            <p>Phone number:+961 76 880 217</p>
            <p>Email: Siwar.lebanon@gmail.com</p>
            <p> Instagram: siwar.bracelet </p>
            <p>Facebook: Siwar Bracelet</p>
          </div>
        </div>
        <div className="mt-10">
          <form>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 ">
              <div>
               
                <div className="mt-1">
                  <input
                    placeholder="Name"
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="name"
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-2  border-gray-500 px-2 py-4"
                  />
                </div>
              </div>
              <div>
                
                <div className="mt-1">
                  <input
                   placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-2 border-gray-500 px-2 py-4"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
              
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  border-2 border-gray-500 px-2 py-4"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
              
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  border-2 border-gray-500 px-2 py-4"
                    placeholder="Write your message..."
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center  text-base font-medium px-8 py-2 shadow-sm text-white  bg-blue translate-transform transform hover:scale-105"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
