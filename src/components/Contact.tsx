import { FormattedMessage } from "react-intl";

type ContactProps = {
  label: string;
  message: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; // Update the type definition
};

const Contact: React.FC<ContactProps> = ({ label, message, Icon }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-end text-right">
        <div className="ml-4 sm:ml-0">
            <dt className="text-lg leading-6 font-medium text-gray-900">
              <FormattedMessage id={label} defaultMessage="خدمة العائدات الضريبية" />
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              {message}
            </dd>
        </div>
        <div className="flex-shrink-0 sm:ml-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Icon className="text-white p-2" />
            </div>
        </div>
    </div>
  );
};

export default Contact;
