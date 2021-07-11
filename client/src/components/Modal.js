import { AddTransaction } from './AddTransaction';

const Modal = ({ setIsOpen }) => {
  return (
    <div className="modal absolute bg-white shadow-lg p-4 rounded-lg">
      <div className="text-right">
        <button
          className="bg-red-400 px-3 py-1 rounded-lg text-white"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
      </div>
      <AddTransaction />
    </div>
  );
};

export default Modal;
