import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface iModalProps {
    onCloseClick: () => void;
}

export const Modal = ({ onCloseClick }: iModalProps) => {
    return (
        <div className='absolute top-0 right-0 bottom-0 left-0 bg-black/40 flex items-center justify-center'>
            <div className='flex flex-col bg-white rounded-none w-80'>
                <ModalHeader onCloseClick={onCloseClick} />
                <div>
                    ... Add fields here
                </div>
            </div>
        </div>
    );
}

const ModalHeader = ({ onCloseClick } : {onCloseClick: () => void}) =>
    <div className='flex'>
        <div className='flex-1 p-1 text-center select-none'>Add a new card</div>
        <div onClick={onCloseClick} className='self-end bg-red-600 p-1 pl-3 pr-3 hover:cursor-pointer hover:brightness-90'>
            <FontAwesomeIcon icon={faClose} />
        </div>
    </div>
