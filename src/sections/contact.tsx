import { useLocale } from '../LocaleContext';
import {FormattedMessage} from "react-intl";
import Contact from '../components/Contact';
import location from "../assets/icons/location.svg?react"
import hours from "../assets/icons/hours.svg?react"
import email from "../assets/icons/email.svg?react"
import phone from "../assets/icons/phone.svg?react"


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
                <Contact label='phone' message="(555) 555-5555" Icon={phone}></Contact>
                <Contact label='email' message="info@ourstore.com" Icon={email}></Contact>
                <Contact label='hours' message="Monday - Friday: 9am to 8pm
                                    Saturday: 10am to 6pm
                                    Sunday: 12pm to 4pm" Icon={hours}></Contact>
            </dl>
        </div>
    </div>
</div>
  )
}

export default contact