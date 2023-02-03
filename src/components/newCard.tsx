import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface iNewCardProps {
    onClick: () => void;
}

export const NewCard = ({ onClick } : iNewCardProps) =>
    <div onClick={onClick} className="h-[450px] w-64 max-w-[16rem] min-w-[16rem] bg-white rounded flex flex-col p-2 m-1 justify-center items-center hover:cursor-pointer hover:brightness-90 select-none">
        <FontAwesomeIcon icon={faPlus} />
        <p>Add a new card</p>
    </div>
