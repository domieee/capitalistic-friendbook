import InterfaceItem from "./InterfaceItem";

const InterfaceList = ({ friends }) => {
    console.log(friends);

    return (
        <article className="interfaceList">
            <h2>Interface List</h2>
            {
                friends.map((friend, index) => {
                    return <InterfaceItem
                        friend={friend}
                        index={index} />
                })
            }
        </article>
    )
}

export default InterfaceList;