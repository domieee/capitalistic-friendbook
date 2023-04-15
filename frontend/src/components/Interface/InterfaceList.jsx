import InterfaceItem from "./InterfaceItem"
import './interfaceList.scss'

const InterfaceList = ({ friends }) => {
    console.log(friends);

    return (
        <>
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