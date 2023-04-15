import { Link } from 'react-router-dom'

import './Aside.scss'
import Filter from './Filter.jsx'
import { useEffect, useState } from 'react'

const Aside = ({ filterData, page, setPage, loading, setLoading }) => {
    console.log(filterData);

    useEffect(() => {
        const openAI = async () => {
            const req = await fetch(`https://chatgpt-api.shn.hk/v1/`, {
                method: "POST",
                headers: {
                    "content-type": "text/html; charset=utf-8"
                },

                "model": "gpt-3.5-turbo",
                "messages": [{ "role": "user", "content": "Hello, how are you?" }],
            })
            console.log(req);
        }

        openAI()
    }, [])



    const [filter, setFilter] = useState(false)

    return (
        <aside className="aside">
            <p>Capitalistic Friendbook</p>
            <section>
                <Link to='/' onClick={() => { setPage('Dashboard') }}>Dashboard</Link>
                <Link to='/editor' onClick={() => { setPage('Editor') }}>Editor</Link>
            </section>

            {page === 'Dashboard' ?
                <Filter
                    filterData={filterData}
                    loading={loading} />
                : ''
            }

        </aside >
    )

}

export default Aside;