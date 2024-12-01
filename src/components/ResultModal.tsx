

type ModalProps = {
  isVisible: boolean;
  result: string;
  handleClose: () => void;
};

export const ResultModal: React.FC<ModalProps> = ({ isVisible, result, handleClose }) => {
  return (
    
    <div
      className={`${
        isVisible ? 'fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-30' : 'hidden'
      }`}
    >
      <div
        className={`${
          result !== "-1" ? "w-screen bg-green-500 rounded-lg p-5 flex flex-col items-center justify-center opacity-50 pb-1" : "w-screen bg-red-600 rounded-lg p-5 flex flex-col items-center justify-center"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-black"
        >
          &times;
        </button>
        {result !== "-1" ? (
            <span className="material-symbols-outlined text-4xl text-white"> check </span>
        ) : (
            <span className="material-symbols-outlined text-4xl text-white"> priority_high </span>
        )}
        <p className="text-3xl text-white flex justify-center items-center text-center">
          {result !== "-1" ? "ההזמנה הצליחה" : "ההזמנה נכשלה"}
        </p>
      </div>
    </div>
  );
};
