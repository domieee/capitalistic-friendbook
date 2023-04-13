import InterfaceList from '../components/Interface/InterfaceList.jsx'

const Interface = ({ friends }) => {
    return (
        <section className='interface'>
            <h1>Interface</h1>
            <InterfaceList friends={friends} />
        </section>
    );
}

export default Interface;