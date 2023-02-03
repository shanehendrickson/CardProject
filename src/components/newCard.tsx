import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const NewCard = () => {
    return (
        <div className="h-[450px] bg-white rounded flex-1 flex-col p-2 m-1 justify-center items-center hover:cursor-pointer hover:brightness-90">
            <FontAwesomeIcon icon={faPlus} />
            <p>Add a new card</p>
        </div>
    );
};
