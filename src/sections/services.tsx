import { useLocale } from '../LocaleContext';
import {FormattedMessage} from "react-intl";
import Service from '../components/Service';

function services() {
	const { locale, messages, switchLocale } = useLocale() || {};    // Now you can safely use locale, messages, and switchLocale

  return (
    <section>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-white dark:text-gray-800">
	<h2 className="mb-8 text-4xl font-bold leading-none text-center">  
		<FormattedMessage id="services" defaultMessage="خدمة العائدات الضريبية" />
	</h2>
	<ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 justify-center text-right">
		<Service label="ניהול חשבונות"/>
		<Service label="החזרי מס"/>
		<Service label="ייעוץ כלכלי ועסקי"/>
		<Service label="עריכת דוחות כספיים"/>
		<Service label="ביקורת"/>
		<Service label="ייצוג משפטי"/>

	</ul>
</div>
</section>
  )
}

export default services