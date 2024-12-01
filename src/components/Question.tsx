import {FormattedMessage} from "react-intl";


type QuestionProps = {
    label: string;
    setter: (value: string) => void; // Function prop
    mustfill: boolean;
};


const Question: React.FC<QuestionProps> = ({label,setter,mustfill}) => {
  return (
    <div>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            <FormattedMessage id={label} defaultMessage="خدمة العائدات الضريبية" />
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setter(event.target.value)}
        />
        <p className="animate-error-bounce text-red-500 text-xs italic">
            <FormattedMessage id="ي" defaultMessage="خطأ" />
        </p>
    </div>
  )
}

export default Question