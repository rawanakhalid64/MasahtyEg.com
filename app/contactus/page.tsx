import Image from 'next/image';
const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 gap-8">
      <div className="flex lg:mr-[200px] ">
      
        <div className="w-full lg:w-5/12 md:w-7/12">
          <div className="form-area bg-white p-6 shadow-lg rounded-lg">
            {/* Contact Info */}
            <div className="form-top mb-3">
              <div className="common-title">
                <h2 className="heading inline-block border-b-4 pb-1 border-[#198754] pr-2 text-2xl font-bold">
                  تواصل معنا
                </h2>
                <h5>اتصل بنا بثقة وخصوصية تامة، نحن هنا لدعمك بسرية كاملة في كل خطوة على طريق التعافي. دعنا نكون شريكك في رحلة استعادة التوازن بأمان وسرية.
                </h5>
              </div>

              <ul className="mt-4 space-y-2">
                <li>
                  <span className="font-bold text-[#198754]">الايميل: </span>
                  Info@fortis.com
                </li>
                <li>
                  <span className="font-bold text-[#198754]">رقم المركز: </span>
                  +230 5674 2343
                </li>
                <li>
                  <span className="font-bold text-[#198754]">عنوانا: </span>
                  Gladstone, Rose Hill
                </li>
              </ul>
            </div>

            {/* Message Form */}
            <div className="form-bottom pt-2">
              <div className="common-title">
                <h2 className="heading inline-block border-b-4 pb-1 border-[#198754] pr-2 text-2xl font-bold">
                  راسلنا
                </h2>
              </div>
              <div className="form mt-4">
                <form>
                  {/* Email Input */}
                  <div className="form-group mb-4">
                    <label
                      htmlFor="Email"
                      className="block font-bold text-[#198754]"
                    >
                      الايميل
                    </label>
                    <input
                      type="email"
                      id="Email"
                      className="form-control mt-1 block w-full pr-4 py-2 border rounded-3xl bg-slate-100 border-gray-300  focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="form-group mb-4">
                    <label
                      htmlFor="Message"
                      className="block font-bold text-[#198754]"
                    >
                      اترك رسالتك
                    </label>
                    <textarea
                      id="Message"
                      rows={4}
                      className="form-control mt-1 block w-full px-4 py-2 rounded-3xl bg-slate-100 border border-gray-300  focus:ring-green-500 focus:border-green-500"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="main-btn-wrap mt-6">
                    <input
                      type="submit"
                      value="ارسل الرسالة"
                      className="main-btn px-6 py-2 bg-[#198754] text-white font-semibold rounded-3xl hover:bg-green-600 transition-colors duration-300"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-5/12 md:w-5/12">
        <Image
            src="https://res.cloudinary.com/dvgqyejfc/image/upload/v1725806694/depositphotos_3264465-stock-photo-telephone_zxb2is.webp"
            alt="Contact Us Image"
            width={600} // Specify a width
            height={500} // Specify a height
            className="rounded-lg mt-4 "
            layout="responsive" // Optionally make it responsive
          />
    </div>
      </div>
    </div>
  );
};

export default ContactForm;
