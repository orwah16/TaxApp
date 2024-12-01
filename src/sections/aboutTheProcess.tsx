import { useLocale } from '../LocaleContext';
import {FormattedMessage} from "react-intl";
import Step from '../components/Step'

const aboutTheProcess = () => { 
    const { locale, messages, switchLocale } = useLocale() || {};    // Now you can safely use locale, messages, and switchLocale

  return (

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
         
        <h1 className="xl:bg-white relative z-15 flex flex-col justify-center my-10 mx-0 text-4xl text-center text-black font-palanquin text-[72px] max-sm:text-[50px] font-bold px-2">
          <span className=" xl:whitespace-nowrap xl:bg-white relative z-10 ">
            <FormattedMessage id="leave_info" defaultMessage="خدمة العائدات الضريبية" />
          </span>
        </h1>

        <Step label='step1'></Step>
        <Step label='step2'></Step>
        <Step label='step3'></Step>
        <Step label='step4'></Step>

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



