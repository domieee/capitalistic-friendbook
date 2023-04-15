import InterfaceList from '../components/Interface/InterfaceList.jsx'
import './Interface.scss'

const Interface = ({ friends }) => {
    return (
        <section className='interface'>
            <InterfaceList friends={friends} />
        </section>
    );
}

export default Interface;