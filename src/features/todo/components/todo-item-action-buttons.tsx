import { FaRegTrashCan } from 'react-icons/fa6';
import { FaPencil } from 'react-icons/fa6';

interface Props {
  onClickEdit: () => void;
  onClickDelete: () => void;
}

const TodoItemActionButtons = ({ onClickEdit, onClickDelete }: Props) => {
  return (
    <div className='flex gap-3 text-gray-500'>
      <button
        type='button'
        aria-label='수정'
        onClick={onClickEdit}
        className='hover:text-primary'
      >
        <FaPencil />
      </button>
      <button
        type='button'
        aria-label='삭제'
        onClick={onClickDelete}
        className='hover:text-primary'
      >
        <FaRegTrashCan />
      </button>
    </div>
  );
};

export default TodoItemActionButtons;
