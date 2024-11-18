type ButtonProps = { label: string;
   iconURL: string; 
   onClick: () => void; // Function prop
 };

const Button: React.FC<ButtonProps> = ({ label, iconURL, onClick }) => {
  return (
    <button 
    onClick={onClick}
    className="flex justify-center items-center 
    gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-blue-500
    rounded-full text-white border-blue-500">
        {label}
        <img
            src = {iconURL}
            alt="place holder text"
            className="ml-2 rounded-full w-5 h-5"
        />
    </button>
  )
}

export default Button