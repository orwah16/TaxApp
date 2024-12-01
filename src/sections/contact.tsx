import { useLocale } from '../LocaleContext';
import {FormattedMessage} from "react-intl";
import Contact from '../components/Contact';
import {ReactComponent as location} from "../assets/icons/location.svg"


const contact = () => {
    const { locale, messages, switchLocale } = useLocale() || {};    // Now you can safely use locale, messages, and switchLocale

  return (
<div >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Location</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <FormattedMessage id="our_office" defaultMessage="خدمة العائدات الضريبية" />
            </p>
            <p className="mt-4 max-w-2xl text-xl  text-gray-500 lg:mx-auto">
                כמה דברים נחמדים
            </p>
        </div>

        <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
  
        <Contact label='location' message="123 Main St, Suite 100 Anytown, USA 12345" Icon={location}></Contact>

  <div className="flex flex-col sm:flex-row sm:justify-end  text-right">
    <div className="ml-4 sm:ml-0">
      <dt className="text-lg leading-6 font-medium text-gray-900">
        <FormattedMessage id="office_phone" defaultMessage="خدمة العائدات الضريبية" />
      </dt>
      <dd className="mt-2 text-base text-gray-500">
        (555) 555-5555
      </dd>
    </div>
    <div className="flex-shrink-0 sm:ml-4">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      </div>
    </div>
  </div>


  <div className="flex flex-col sm:flex-row sm:justify-end  text-right">
    <div className="ml-4 sm:ml-0">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                        <FormattedMessage id="office_email" defaultMessage="خدمة العائدات الضريبية" />
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            info@ourstore.com
                        </dd>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                        </div>
                    </div>

                </div>

                <div className="flex flex-col sm:flex-row sm:justify-end  text-right">
                <div className="ml-4 sm:ml-0">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                        <FormattedMessage id="working_hours" defaultMessage="خدمة العائدات الضريبية" />
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            Monday - Friday: 9am to 8pm
                            Saturday: 10am to 6pm
                            Sunday: 12pm to 4pm
                        </dd>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </div>
                    </div>
  
                </div>
            </dl>
        </div>
    </div>
</div>
  )
}

export default contact