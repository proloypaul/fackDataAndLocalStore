import React from 'react';
import { addTolocalStorage, removeFromDb } from '../FackDb/FackDb';

const FackData = (props) => {
    // console.log(props.fackdata)
    const {company, email, _id} = props.fackdata
    const handleClick = (id) => {
        // console.log(id);
        addTolocalStorage(id)
    }
    const handleRemove = (id) => {
        removeFromDb(id)
    }
    return (
        <div>
            <h3>company: {company}</h3>
            <h3>Email: {email}</h3>
            <button onClick={() => handleClick(_id)}>Purches</button>
            <button onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default FackData;