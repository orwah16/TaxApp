

import { FormattedMessage } from "react-intl";
import { useState, useEffect } from 'react';

type QuestionProps = {
    label: string;
    setter: (value: string) => void; // Function prop
    isValid?: boolean;
    pattern?: string;
};

const Question: React.FC<QuestionProps> = ({ label, setter, isValid, pattern }) => {
    const [matchesPattern, setMatchesPattern] = useState(true);

    // Check if the pattern contains Unicode property escapes
    const unicodePattern = pattern && pattern.includes("\\");
    const reg = new RegExp(pattern || ".*", unicodePattern ? "u" : undefined);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setter(value);
        console.log("pattern: ",reg)
        console.log("value: ",value)
        console.log("matches: ",matchesPattern)
        if (reg && !reg.test(String(value).toLowerCase())) {
            setMatchesPattern(false);
        } else {
            setMatchesPattern(true);
        }
    };


    return (
        <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                <FormattedMessage id={label} defaultMessage="خدمة العائدات الضريبية" />
            </label>
            <input
                className={`appearance-none block w-full ${matchesPattern ? 'bg-gray-200 border-gray-300' : 'bg-red-200 border-red-500'} text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                onChange={handleChange}
            />
            {!matchesPattern && (
                <p className="animate-error-bounce text-red-500 text-xs italic">
                    <FormattedMessage id="error" defaultMessage="خطأ" />
                </p>
            )}
        </div>
    );
};

export default Question;




// import {FormattedMessage} from "react-intl";
// import { useState,useEffect } from 'react';


// type QuestionProps = {
//     label: string;
//     setter: (value: string) => void; // Function prop
//     isValid?: boolean;
//     pattern?: string;
// };


// const Question: React.FC<QuestionProps> = ({label,setter,isValid,pattern="*"}) => {
//     const [ matchesPattern, setMatchesPattern ] = useState(true)
//     const [ change, setChange ] = useState(false)
//     // Check if the pattern contains Unicode property escapes 
//     const unicodePattern = pattern.includes("\\"); 
//     var reg = new RegExp(pattern, unicodePattern ? "u" : undefined);
//     useEffect(() => {
//     return (
//         <div>
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
//                 <FormattedMessage id={label} defaultMessage="خدمة العائدات الضريبية" />
//             </label>
//             <input className={`appearance-none block w-full ${ matchesPattern ? 'bg-gray-200 border-gray-300' : 'bg-red-200 border-red-500' } text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} 
//             id="grid-first-name" type="text" placeholder="Jane" 
//             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                 setter(event.target.value)
//                 setChange(!change)
//                 if (!reg.test(String(event.target.value).toLowerCase())) {
//                     setMatchesPattern(false)
//                     return 'Invalid format.';
//                 }else { 
//                     setMatchesPattern(true);
//                 }
//             }} 
//             />
//             {!matchesPattern && (
//                 <p className="animate-error-bounce text-red-500 text-xs italic">
//                     <FormattedMessage id="ي" defaultMessage="خطأ" />
//                 </p>
//             )}
//         </div>
//     )

//     }, [change]);
// }
// export default Question

