import { EditTransaction } from './EditTransaction';
import { FaTimesCircle } from 'react-icons/fa';

const EditTransModal = ({ setIsOpen, _id }) => {
  return (
    <div className="modal absolute bg-white p-4 rounded-lg">
      <div className="flex justify-between">
        <div></div>
        <div></div>
        <FaTimesCircle
          size="25px"
          onClick={() => setIsOpen(false)}
          style={{ color: 'red' }}
        />
      </div>
      <EditTransaction _id={_id} />
    </div>
  );
};

export default EditTransModal;
