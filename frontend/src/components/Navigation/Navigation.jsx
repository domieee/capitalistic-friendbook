import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="navigation">
            <p>Capitalistic Friendbook</p>
            <section>
                <Link to='/' >Dashboard</Link>
                <Link to='/editor' >Editor</Link>
            </section>
        </nav>
    )
}

export default Navigation;