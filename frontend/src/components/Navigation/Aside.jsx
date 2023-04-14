import { Link } from 'react-router-dom'

import './Aside.scss'
import Filter from './Filter.jsx'
import { useState } from 'react'

const Aside = ({ filterData, page, setPage }) => {
    console.log(filterData);

    const [filter, setFilter] = useState(false)



    return (
        <aside className="aside">
            <p>Capitalistic Friendbook</p>
            <section>
                <Link to='/' onClick={() => { setPage('dashboard') }}>Dashboard</Link>
                <Link to='/editor' onClick={() => { setPage('editor') }}>Editor</Link>
            </section>

            {page === 'dashboard' ?
                <Filter
                    filterData={filterData} /> :
                ''
            }
        </aside >
    )
}

export default Aside;