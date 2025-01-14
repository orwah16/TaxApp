import {FormattedMessage} from "react-intl";

type StepProps = {
    label: string;
};


const Step: React.FC<StepProps> = ({label}) => {
  return (
    <div className="flex flex-col">      
    <div className="flex flex-row justify-end items-center mr-4">
    <div className="delay-[300ms] duration-[600ms] taos:translate-x-[100%] taos:opacity-0" data-taos-offset="400">

      <div className="ml-2 text-lg font-bold">
        <FormattedMessage id={label} defaultMessage="خدمة العائدات الضريبية" />
        </div>

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
        <FormattedMessage id={`${label}_text`} defaultMessage="خدمة العائدات الضريبية" />
      </p>
    </div>
  </div>
  )
}

export default Step