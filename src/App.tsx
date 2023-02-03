import { NewCard } from './components/newCard';
import { Modal } from './components/modal';
import { useState } from 'react';

// function Foo() { return(<div></div>); }
// const Foo = () => { return(<div></div>); }
// const Foo = () => <div></div>

// const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
// const modalState = useState<boolean>(false);
// const isModalOpen = modalState[0]
// const setIsModalOpen = modalState[1]
// isModalOpen // false
// setIsModalOpen(true)
// isModalOpen // true

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const onNewCardClick = () => {
        console.log("I got clicked, yay");
        setIsModalOpen(true);
    };

    const onModalCloseClick = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="bg-emerald-800 w-screen h-screen flex flex-wrap p-4 overflow-auto">
            <NewCard onClick={onNewCardClick} />
            {isModalOpen && <Modal onCloseClick={onModalCloseClick} />}
        </div>
    );
};

export default App;
