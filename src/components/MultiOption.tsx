import {FormattedMessage} from "react-intl";

type MultiOptionProps = {
    label: string;
    options: string[];
    setter: (value: string) => void; // Function prop
};

const MultiOption: React.FC<MultiOptionProps> = ({label,options,setter}) => {
  return (

    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                <FormattedMessage id={label} defaultMessage="خدمة العائدات الضريبية" />
            </label>
            <div className='flex flex-row relative '>
                <select className=" block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                    onChange={(event) => setter(event.target.value)}              
                >
                    {    
                    options.map( (option) => 
                        <option>{option}</option> )
                    }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>
        <label className="relative w-1/4 px-5 block uppercase tracking-wide text-gray-700 text-right text-base font-bold mb-2" >
            {/* <FormattedMessage id="ככ" defaultMessage=" האם אתה משלם מס הכנסה?" /> */}
        </label>
    </div>
  )
}

export default MultiOption