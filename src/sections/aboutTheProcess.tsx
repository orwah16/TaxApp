import { useLocale } from '../LocaleContext';
import {FormattedMessage} from "react-intl";

const aboutTheProcess = () => { 
    const { locale, messages, switchLocale } = useLocale() || {};    // Now you can safely use locale, messages, and switchLocale

  return (

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
         
          <h1 className="flex flex-col justify-center my-10 mx-0 text-4xl text-black font-palanquin text-[72px] max-sm:text-[50px]
           font-bold">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10">
            <FormattedMessage id="leave_info" defaultMessage="خدمة العائدات الضريبية" />

          </span>
        </h1>
      <div className="flex flex-col">      
        <div className="flex flex-row justify-end items-center mr-4">
          <div className="ml-2 text-lg font-bold">
            <FormattedMessage id="step1" defaultMessage="خدمة العائدات الضريبية" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 border rounded-full">
            <svg
              className="w-4 text-gray-600"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="12"
                y1="2"
                x2="12"
                y2="22"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="19,15 12,22 5,15"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-center pt-1 pb-8">
          <p className="text-gray-700">
            <FormattedMessage id="step1_text" defaultMessage="خدمة العائدات الضريبية" />
          </p>
        </div>
      </div>
      <div className="flex flex-col">      
        <div className="flex flex-row justify-end items-center mr-4">
          <div className="ml-2 text-lg font-bold">
          <FormattedMessage id="step2" defaultMessage="خدمة العائدات الضريبية" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 border rounded-full">
            <svg
              className="w-4 text-gray-600"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="12"
                y1="2"
                x2="12"
                y2="22"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="19,15 12,22 5,15"
              />
            </svg>
          </div>
        </div>
        <div className="pt-1 pb-8">
          <p className="flex justify-center text-gray-700">
            <FormattedMessage id="step2_text" defaultMessage="خدمة العائدات الضريبية" />
          </p>
        </div>
      </div>
      <div className="flex flex-col">      
        <div className="flex flex-row justify-end items-center mr-4">
          <div className="ml-2 text-lg font-bold">
            <FormattedMessage id="step3" defaultMessage="خدمة العائدات الضريبية" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 border rounded-full">
            <svg
              className="w-4 text-gray-600"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="12"
                y1="2"
                x2="12"
                y2="22"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="19,15 12,22 5,15"
              />
            </svg>
          </div>
        </div>
        <div className="pt-1 pb-8">
          <p className="flex justify-center text-gray-700">
            <FormattedMessage id="step3_text" defaultMessage="خدمة العائدات الضريبية" />
          </p>
        </div>
      </div>
      <div className="flex flex-col">      
        <div className="flex flex-row justify-end items-center mr-4">
          <div className="ml-2 text-lg font-bold">
            <FormattedMessage id="step4" defaultMessage="خدمة العائدات الضريبية" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 border rounded-full">
            <svg
              className="w-4 text-gray-600"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="12"
                y1="2"
                x2="12"
                y2="22"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="19,15 12,22 5,15"
              />
            </svg>
          </div>
        </div>
        <div className="pt-1 pb-8">
          <p className="flex justify-center text-gray-700">
            <FormattedMessage id="step4_text" defaultMessage="خدمة العائدات الضريبية" />
          </p>
        </div>
      </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-end items-center mr-4">
            <div className="pt-1">
              <p className="mb-2 text-lg font-bold">
                <FormattedMessage id="success" defaultMessage="خدمة العائدات الضريبية" />
              </p>
              <p className="text-gray-700" />
            </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-6 text-gray-600"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
            

            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};


export default aboutTheProcess;



    // <section className='w-full flex xl:flex-row flex-col justify-center '>
    //     <div className="relative  xl:w-2/5 flex flex-col 
    //     justify-center items-end w-full max-xl:padding-x pt-5">
    //         <h1 className="flex justify-center my-10 text-4xl text-black font-palanquin max-sm:text-[72px]
    //         max-sm:leading-[82] font-bold">
    //         <span className=" xl:whitespace-nowrap relative z-10 pr-10">
    //             <FormattedMessage id="the_process" defaultMessage="خدمة العائدات الضريبية" />
    //         </span>
    //         </h1>
    //         <p className="mt-4  font-semibold text-2xl font-montserrat text-blue-400 sm:max-w-sm">
    //             <FormattedMessage id="steps" defaultMessage="خدمة العائدات الضريبية" />
    //         </p>
    //         <p className="mt-4 font-semibold text-xl font-montserrat text-blue-400 sm:max-w-sm">
    //             <FormattedMessage id="step1" defaultMessage="خدمة العائدات الضريبية" />
    //         </p>
    //         <p className="mt-4 font-semibold text-xl font-montserrat text-blue-400 sm:max-w-sm">
    //             <FormattedMessage id="step2" defaultMessage="خدمة العائدات الضريبية" />
    //         </p>
    //         <p className="mt-4 font-semibold text-xl font-montserrat text-blue-400 sm:max-w-sm">
    //             <FormattedMessage id="step3" defaultMessage="خدمة العائدات الضريبية" />
    //         </p>
    //         <p className="mt-4 mb-14 font-semibold text-xl font-montserrat text-blue-400 sm:max-w-sm">
    //             <FormattedMessage id="step4" defaultMessage="خدمة العائدات الضريبية" />
    //         </p>
    //     </div>
    // </section>