import { useState } from "react";
import Button from "../components/Button";
import  arrowRight  from "../assets/icons/arrow-right.svg";
//import { statistics } from "../constants"
import {tax1} from "../assets/images"
import {FormattedMessage} from "react-intl";
import { useLocale } from '../LocaleContext';


const welcome = () => {
  const [bigReviewImg, setBigReviewImg] = useState(tax1);
  const { locale, messages, switchLocale } = useLocale() || {};    // Now you can safely use locale, messages, and switchLocale


  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col 
      min-h-screen justify-center max-container "
      >
      <div className="relative flex flex-1 justify-center items-center sm:mt-20 xl:min-h-screen max-xl:py-40
       bg-center">
        <img
          src={bigReviewImg}
          width={800}
          height={600}
          className="object-contain relative z-10"
        />
        
      </div>
      <div className="relative  z-5 xl:w-2/5 flex flex-col 
      justify-center items-end w-full max-xl:pt-28">
        <p className="font-semibold text-2xl font-montserrat text-blue-600 ">
        <FormattedMessage id="first_title" defaultMessage="خدمة العائدات الضريبية" />
        </p>
        <h1 className="my-10 mx-0 text-[72px] max-sm:text-[50px] text-blue-600 font-palanquin 
         font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
          <FormattedMessage id="big_title" defaultMessage="خدمة العائدات الضريبية" />
          </span>
        </h1>
        <p className="mt-4 mb-14 font-semibold text-2xl font-montserrat text-blue-400 sm:max-w-sm">
          <FormattedMessage id="second_title" defaultMessage="خدمة العائدات الضريبية" />
        </p>
        <Button label="השאר פרטים" iconURL={arrowRight}
        />
        <div className=" flex justify-end items-end flex-wrap w-full mt-20 gap-16">
          {messages.statistics.map((stat,index) => (
            <div>
              <p className="font-bold font-palanquin text-4xl">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default welcome