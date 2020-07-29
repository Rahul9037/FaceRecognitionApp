import React from 'react';
import './rank.css';

const Rank = ({user}) => {
    return (
        <div className="rank">
            <div className="f3 white">
                {`Hi ${user.name} , your rank is :`}
            </div>
            <br/>
            <div className="f1 white">
                {user.entries}
            </div>
        </div>
    )
}

export default Rank;