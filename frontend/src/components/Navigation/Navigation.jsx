import './Navigation.scss'

const Navigation = ({ page, setPage }) => {


    return (
        <nav className="navigation">
            {page}
        </nav>
    );
}

export default Navigation;