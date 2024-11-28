type ModalProps = {
    visible: boolean;
    result: string;
    handleClose: () => void;
};

export const ResultModal: React.FC<ModalProps>  = ({visible, result, handleClose}) => {
  return (
    <div className="flex-1 justify-center items-center bg-opacity-50">
      <div className={result!=="-1"?"w-full bg-red-600 rounded-lg p-5 justify-center flex-row items-center":
        "w-full bg-green-500 rounded-lg p-5 justify-center flex-row items-center"}>
        {result!=="-1"?  
          <svg>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=check" />
          </svg>
        :          
          <svg>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=priority_high" />          
          </svg>
        }
        <p className="text-3xl text-black">
          {result!=="-1"? "ההזמנה הצליחה": "ההזמנה נכשלה"}      
        </p>     
      </div>
    </div> 
  )
}
