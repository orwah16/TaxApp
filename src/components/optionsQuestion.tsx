import {FormattedMessage} from "react-intl";


const optionsQuestion = ({question, answers} : {question:string,answers:string[]}) => 
{

    return (
        <div className="bg-white px-5 py-3 text-sm font-light">
            <div className="flex flex-wrap flex-row relative w-full">
                <div className='flex-1 flex-row relative w-3/4 '>
                    <select className=" block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        {answers.map((optionValue, index) => ( 
                            <option key={index} value={optionValue}> 
                                {optionValue} 
                            </option> 
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                <label className="relative w-1/4 px-5 block uppercase tracking-wide text-gray-700 text-right text-base font-bold mb-2" >
                    <FormattedMessage id="ככ" defaultMessage={question} />
                </label>
            </div>
        </div>
    )
}

export default optionsQuestion