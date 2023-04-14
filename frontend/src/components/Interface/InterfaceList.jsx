import InterfaceItem from "./InterfaceItem"
import './interfaceList.scss'

const InterfaceList = ({ friends }) => {
    console.log(friends);

    return (
        <>
            <h2>Interface List</h2>
            <article className="interfaceList">
                {
                    friends.map((friend, index) => {
                        return <InterfaceItem
                            friend={friend}
                            index={index} />
                    })
                }
            </article>
        </>
    )
}

export default InterfaceList;