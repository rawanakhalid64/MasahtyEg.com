'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const INPUT = 'INPUT';
const TEXTAREA = 'TEXTAREA';

const initialFields = [
  {
    label: 'الأسم',
    component: INPUT,
    type: 'text',
    name: 'your-name',
    id: 'full_name',
    validation_error: false,
    validation_message: ''
  },
  {
    label: 'البريد الإلكتروني',
    component: INPUT,
    type: 'email',
    name: 'your-email',
    id: 'email',
    validation_error: false,
    validation_message: ''
  },
  {
    label: 'رقم الهاتف',
    component: INPUT,
    type: 'number',
    name: 'your-phone',
    id: 'phone',
    validation_error: false,
    validation_message: ''
  },
  {
    label: 'الموضوع',
    component: INPUT,
    type: 'text',
    name: 'your-subject',
    id: 'subject',
    validation_error: false,
    validation_message: ''
  },
  {
    label: 'الرسالة',
    component: TEXTAREA,
    type: 'text',
    name: 'your-message',
    id: 'message',
    validation_error: false,
    validation_message: ''
  }
];

const BookConsultationForm = () => {
  const [fields, setFields] = useState<any>(initialFields);
  const [message, setMessage] = useState<any>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setFields(fields.map((field: { name: any; }) => ({
      ...field,
      validation_error: false,
      validation_message: ''
    })));

    const formData = new FormData(event.target);
    formData.append('_wpcf7_unit_tag', 'ef783e4');

    const reqOptions = {
      method: 'POST',
      body: formData,
    };

    const req = await fetch(`https://admin.toggle-eg.com/wp-json/contact-form-7/v1/contact-forms/135/feedback`, reqOptions);
    const res: any = await req.json();

    if (!res) return alert('An unexpected error occurred');

    if (res.invalid_fields && res.invalid_fields.length > 0) {
      return setFields(fields.map((field: { name: any; }) => {
        const error = res.invalid_fields.find((x: { field: any; }) => x.field === field.name);

        return {
          ...field,
          validation_error: error ? true : false,
          validation_message: error ? error.message : '',
        };
      }));
    }

    setMessage(res.message);
  };

  // Clear the message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(''); // Clear message
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timeout if the component is unmounted or updated
    }
  }, [message]);

  return (
    <div className="mx-auto px-4 gap-8 flex justify-center dark:bg-black">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:max-w-7xl max-w-5xl">

        <div className="w-full lg:w-1/2 md:w-7/12">
          <div className="form-area  dark:bg-black p-6 rounded-lg">
            {/* Booking Info */}
            <div className="form-top mb-3">
              <div className="common-title">
                <h2 className="heading inline-block border-b-4 pb-1 border-[#198754] pr-2 text-2xl font-bold">
                  احجز استشارة
                </h2>
                <h5> نحن هنا لمساعدتك في كل خطوة على طريق التعافي. تواصل معنا للحجز واستشارة خبرائنا حول أفضل خيارات العلاج المتاحة لك</h5>
              </div>

              <ul className="mt-4 space-y-2">
                <li>
                  <span className="font-bold text-[#198754]">الايميل: </span>
                  masahtyeg@gmail.com
                </li>
                <li>
                  <span className="font-bold text-[#198754]">رقم المركز: </span>
                  +01090731111
                </li>
                <li>
                  <span className="font-bold text-[#198754]">عنوانا: </span>
                  81 شارع حوض الروض - فيلا بالحديقة - قسم تان شبرانيت - الجيزة
                </li>
              </ul>
            </div>

            {/* Message Form */}
            <div className="form-bottom pt-2">
              <div className="common-title">
                <h2 className="heading inline-block border-b-4 pb-1 border-[#198754] pr-2 text-2xl font-bold">
                  احجز الآن
                </h2>
              </div>
              <div className="form mt-4">
                <form onSubmit={handleSubmit}>
                <select
                    name="your-program"
                    id="program"
                    className="dark:!text-black form-control mt-1 block w-full px-4 py-2 border rounded-3xl bg-slate-100 border-gray-300 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="برنامج الساعة">برنامج الساعة</option>
                    <option value="برنامج الفرحة">برنامج الفرحة</option>
                    <option value="برنامج الحصة">برنامج الحصة</option>
                  </select>
                  {fields.map((field: any) => (
                    <div key={field.id} className="form-group mb-4">
                      <label
                        htmlFor={field.id}
                        className=" block font-bold text-[#198754]"
                      >
                        {field.label}
                      </label>
                      {field.component === INPUT && <input
                        type={field.type}
                        name={field.name}
                        id={field.id}
                        className=" dark:!text-black form-control mt-1 block w-full pr-4 py-2 border rounded-3xl bg-slate-100 border-gray-300 focus:ring-green-500 focus:border-green-500"
                      />}
                      {field.component === TEXTAREA && <textarea
                        name={field.name}
                        id={field.id}
                        rows={4}
                        className="dark:!text-black form-control mt-1 block w-full px-4 py-2 rounded-3xl bg-slate-100 border border-gray-300 focus:ring-green-500 focus:border-green-500"
                      ></textarea>}
                      {field.validation_error && <div className='text-base text-red-600'>
                        {field.validation_message}
                      </div>}
                    </div>
                  ))}

                  <div className="main-btn-wrap mt-6">
                    <input
                      type="submit"
                      value="ارسل الرسالة"
                      className="main-btn px-6 py-2 bg-[#198754] cursor-pointer text-white font-semibold rounded-3xl hover:bg-green-600 transition-colors duration-300"
                    />
                  </div>
                  {message && (
                    <div className='mt-4 p-3 rounded-md text-green-600'>
                      {message}
                    </div>
                  )}
                </form> 
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 md:w-7/12 gap-8">
          <Image
          src="https://res.cloudinary.com/dvgqyejfc/image/upload/v1726817677/19913525_6164418-removebg-preview_s9yjmq.webp"
            alt="Consultation Image"
            width={600} // Specify a width
            height={500} // Specify a height
            className="rounded-lg mt-4 hidden lg:block"
            layout="responsive" // Optionally make it responsive
          />
          {/* Optionally, include a map or other component here */}
        </div>
      </div>
    </div>
  );
};

export default BookConsultationForm;
