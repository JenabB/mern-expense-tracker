/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';
import EditTransModal from '../components/EditTransModal';
import { FaArrowLeft, FaTrash, FaPen } from 'react-icons/fa';
import Swal from 'sweetalert2';
import minus from '../assets/images/transactionDetail.png';
import plus from '../assets/images/plus.png';

const Detail = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [transaction, setTransaction] = useState([]);
  let history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  let _id = props.match.params.id;
  const { deleteTransaction } = useContext(GlobalContext);

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTransaction(transaction._id);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        history.goBack();
      }
    });
  };

  useEffect(() => {
    try {
      axios
        .get(`/api/v1/transactions/${_id}`)
        .then((data) => setTransaction(data.data.data));
    } catch (err) {
      console.log(err.response.data);
    }
  }, []);

  return (
    <div className="" style={{ height: '100vh' }}>
      <div className="flex justify-between bg-indigo-800 p-4">
        <FaArrowLeft
          className="cursor-pointer"
          onClick={handleBack}
          style={{ color: 'white' }}
        />
        <div></div>
        <div></div>
      </div>
      {transaction.amount > 0 ? (
        <img
          src={plus}
          alt="header"
          className="w-full"
          style={{ height: '250px', objectFit: 'cover' }}
        />
      ) : (
        <img
          src={minus}
          alt="header"
          className="w-full"
          style={{ height: '250px', objectFit: 'cover' }}
        />
      )}
      {transaction ? (
        <div className="flex justify-between p-4 w-full lg:w-2/4 mx-auto">
          <div className="">
            <h1 className="text-4xl">{transaction.text}</h1>
            <h2>Rp {transaction.amount}</h2>
            <p className="text-gray-400">{transaction.description}</p>
          </div>
          <div className="flex">
            <FaPen
              className="cursor-pointer mx-2"
              style={{ color: 'blue' }}
              onClick={() => setIsOpen(true)}
            />

            <FaTrash
              className="cursor-pointer "
              onClick={handleDelete}
              style={{ color: 'blue' }}
            />
          </div>
        </div>
      ) : (
        <div>
          <h5>Loading...</h5>
        </div>
      )}
      {isOpen && <EditTransModal setIsOpen={setIsOpen} _id={_id} />}
    </div>
  );
};

export default Detail;
