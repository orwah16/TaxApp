const Button = ({label, iconURL} : {label:string,iconURL:string}) => {
  return (
    <button className="">
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