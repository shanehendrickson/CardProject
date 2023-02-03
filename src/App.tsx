import { NewCard } from './components/newCard';

// function Foo() { return(<div></div>); }
// const Foo = () => { return(<div></div>); }
// const Foo = () => <div></div>

const App = () => {
    return (
        <div className="bg-emerald-800 w-screen h-screen flex flex-wrap grid-cols-4 p-12">
            <NewCard />
        </div>
    );
};

export default App;
