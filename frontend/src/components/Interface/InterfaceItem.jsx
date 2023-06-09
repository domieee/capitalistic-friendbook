import { useState } from 'react';
import './interfaceItem.scss'
import { Link } from 'react-router-dom';

const InterfaceItem = ({ friend, index }) => {

    const [hovered, setHovered] = useState()

    console.log(friend);

    return (
        <Link to={`/profile/${friend._id}`} >
            <article
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={'interfaceItem'}>
                <div>
                    <img src={friend.profile.avatar} alt="" />
                    <div>
                        <p>{`${friend.profile.firstName} ${friend.profile.lastName}`}</p>
                        <p>{friend.profile.jobTitle} @ </p>
                        <p>{friend.profile.company}</p>
                    </div>
                </div>
                <p>{friend.gender}</p>
            </article >
        </Link >
    );
}

export default InterfaceItem;