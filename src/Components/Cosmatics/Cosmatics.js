import React, { useEffect, useState } from 'react';
import FackData from '../FackData/FackData';
import { queb } from '../Utilities/Utilities';

const Cosmatics = () => {
    const [fackData, setFackdata] = useState([])
    useEffect(() => {
        fetch('./fackdata.json')
            .then(res => res.json())
            .then(data => setFackdata(data))
    },[]); 
    const quebNum = 7;
    const showAns = queb(quebNum);

    return (
        <div>
            <h1>this is queb of {quebNum}: {showAns}</h1>
            {
                fackData.map(fack => <FackData key={fack._id} fackdata={fack}></FackData>)
            }
        </div>
    );
};

export default Cosmatics;