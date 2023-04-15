import './Navigation.scss'

const Navigation = ({ page, setPage }) => {


    return (
        <nav className="navigation">
            <div className='headingContainer'>
                <h1>{page}</h1>
            </div>
        </nav>
    );
}

export default Navigation;