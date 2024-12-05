import { useLocale } from '../LocaleContext';
import {FormattedMessage} from "react-intl";
import { useState,useEffect } from 'react';
import  arrowRight  from "../assets/icons/arrow-right.svg";
import Button from "../components/Button";
import {ClientInfo} from "../../types"
import { updateUsers } from "../../API"
import Question from '../components/Question';
import MultiOption from '../components/MultiOption';
import { ResultModal } from '../components/ResultModal';
import patterns from '../assets/patterns.json';
function userInfo() {
  const { locale, messages, switchLocale } = useLocale() || {};    // Now you can safely use locale, messages, and switchLocale
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ phoneNumber, setPhoneNumber ] = useState("")
  const [ typeOfEmployment, setTypeOfEmployment ] = useState("")
  const [ taxPayer, setTaxPayer ] = useState("")
  const [ income, setIncome ] = useState("")
  const [ visible, setVisibility] = useState(false)
  const [ result, setResult] = useState("")
  const [ isValidNumbers, setIsValidNumbers ] = useState(true)
  const [ isValidWords, setIsValidWords ] = useState(true)
  const [ isValidBool, setIsValidBool ] = useState(true)

  type patternDictionary = {
    patterns: {
        word: string;
        email: string;
        phone: string;
        num: string;
    }
}

var dic:patternDictionary = patterns;

const saveUser = () => {
  console.log("saveUser function");
  const data: ClientInfo = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    typeOfEmployment: typeOfEmployment,
    income: income
  };

  updateUsers(data).then((response) => {
    console.log("forum response: ", response);
    if (response !== undefined && response === "Valid") {
      setVisibility(true);
      setResult("1");
    } else {
      setVisibility(true);
      setResult("-1");
    }
  }).catch((error) => {
    console.error("An error occurred:", error);
    setVisibility(true);
    setResult("-1");
  });
};

  
  useEffect(() => {
    console.log("modal open")
  }, [visible]);

  const handle_close = () => {
    setVisibility(false)
  } 
  return (

    <section className="flex justify-center items-center text-right">
  <ResultModal isVisible={visible} result={result} handleClose={handle_close}></ResultModal>

      <div className="flex flex-col items-center">
      <h1 className="flex justify-center my-10 mx-0 text-4xl text-black text-center font-palanquin text-[72px] max-sm:text-[50px]
       font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            <FormattedMessage id="leave_info" defaultMessage="خدمة العائدات الضريبية" />

          </span>
        </h1>



  <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-lg">

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <Question label='last_name' setter={setLastName} pattern={dic.patterns.word}/>

    </div>
    <div className="w-full md:w-1/2 px-3">
    <Question label='name' setter={setFirstName} pattern={dic.patterns.word}/>

    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
    <Question label='mobile' setter={setPhoneNumber} pattern={dic.patterns.phone}/>

    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <Question label='leave_info' setter={setPhoneNumber}/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        <FormattedMessage id="leave_info" defaultMessage="خدمة العائدات الضريبية" />
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
          onChange={(event) => setTypeOfEmployment( event.target.value )}
        >
          <option>סכיר</option>
          <option>עצמאי</option>
          <option>שניהם</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <Question label='leave_info' setter={setPhoneNumber}/>
    </div>
  </div>

  <details className="bg-white duration-300 w-full align-bottom justify-items-end">
      <summary className="bg-inherit px-5 py-3 text-lg">תמשיך לשאר השאלות</summary>
        <MultiOption label='name' setter={setTaxPayer} options={["כן","לא"]}/>
        <MultiOption label='name' setter={setTaxPayer} options={["7000","7000-9000","מעל 9000"]}/>
        <Button label="השאר פרטים" iconURL={arrowRight} onClick={saveUser}/>

      
    </details>
</form>

  </div>
</section>

  )
}

export default userInfo




