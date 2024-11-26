import { useLocale } from '../LocaleContext';
import {FormattedMessage} from "react-intl";
import { useState } from 'react';
import  arrowRight  from "../assets/icons/arrow-right.svg";
import Button from "../components/Button";
import {ClientInfo} from "../../types"
import { updateUsers } from "../../API"


function userInfo() {
  const { locale, messages, switchLocale } = useLocale() || {};    // Now you can safely use locale, messages, and switchLocale
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ phoneNumber, setPhoneNumber ] = useState("")
  const [ typeOfEmployment, setTypeOfEmployment ] = useState("")
  const [ taxPayer, setTaxPayer ] = useState("")
  const [ income, setIncome ] = useState("")

  const saveUser = () => {
    console.log("saveUser function")
    const data:ClientInfo = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      typeOfEmployment: typeOfEmployment,
      income: income
    }
    updateUsers(data)
  }

  return (
    <section className="flex justify-center">
      <div className="flex-col">
      <h1 className="flex justify-center my-10 mx-0 text-4xl text-black font-palanquin text-[72px] max-sm:text-[50px]
       font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            <FormattedMessage id="leave_info" defaultMessage="خدمة العائدات الضريبية" />

          </span>
        </h1>
  <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        <FormattedMessage id="name" defaultMessage="خدمة العائدات الضريبية" />
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <p className="text-red-500 text-xs italic">
        <FormattedMessage id="ي" defaultMessage="خطأ" />
      </p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        <FormattedMessage id="last_name" defaultMessage="خدمة العائدات الضريبية" />
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"
                onChange={(event) => setLastName(event.target.value)}
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        <FormattedMessage id="mobile" defaultMessage="خدمة العائدات الضريبية" />
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-number" type="text" placeholder="0501122233"
              onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <p className="text-gray-600 text-xs italic"></p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        <FormattedMessage id="leave_info" defaultMessage="خدمة العائدات الضريبية" />
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
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
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        <FormattedMessage id="leave_info" defaultMessage="خدمة العائدات الضريبية" />
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
  <details className="bg-white duration-300 w-full align-bottom justify-items-end">
      <summary className="bg-inherit px-5 py-3 text-lg">תמשיך לשאר השאלות</summary>

      <div className="bg-white px-5 py-3 text-sm font-light">
        <div className="flex flex-wrap flex-row relative w-full">
          <div className='flex-1 flex-row relative w-3/4 '>
            <select className=" block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
              onChange={(event) => setTaxPayer( event.target.value )}
            >
              <option>כן</option>
              <option>לא</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <label className="relative w-1/4 px-5 block uppercase tracking-wide text-gray-700 text-right text-base font-bold mb-2" >
            {/* <FormattedMessage id="ככ" defaultMessage=" האם אתה משלם מס הכנסה?" /> */}
          </label>
        </div>
      </div>
      
      <div className="bg-white px-5 py-3 text-sm font-light">
        <div className="flex flex-wrap flex-row relative w-full">
          <div className='flex-1 flex-row relative w-3/4 '>
            <select className=" block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                  onChange={(event) => setIncome( event.target.value )}
            >
              <option>7000 עד</option>
              <option>7000-9000</option>
              <option>מעל 9000</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <label className="relative w-1/4 px-5 block uppercase tracking-wide text-gray-700 text-right text-base font-bold mb-2" >
            {/* <FormattedMessage id="ככ" defaultMessage="שכר חודשי ברוטו" /> */}
          </label>
        </div>
      </div>

      <Button label="השאר פרטים" iconURL={arrowRight} onClick={saveUser}/>

      
    </details>
</form>

  </div>
</section>
  )
}

export default userInfo