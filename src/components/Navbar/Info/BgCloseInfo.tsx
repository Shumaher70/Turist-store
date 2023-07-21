import { useDispatch } from 'react-redux';
import { hideInfo } from '../../../store/redusers/sideBarReduser';

const BgClose = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(hideInfo());
  };

  return (
    <div
      onClick={clickHandler}
      className={`absolute  w-full h-[100%] bg-gray-900 opacity-20  cursor-pointer`}
    ></div>
  );
};

export default BgClose;
