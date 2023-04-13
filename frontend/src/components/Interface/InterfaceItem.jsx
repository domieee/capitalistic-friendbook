const InterfaceItem = ({ friend, index }) => {

    return (
        <article className="interfaceItem">
            {`${index + 1}.`}
            <p>{friend.name}</p>
            <p>{friend.age}</p>
        </article>

    );
}

export default InterfaceItem;