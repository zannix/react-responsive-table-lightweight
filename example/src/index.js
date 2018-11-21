import React from 'react'
import ReactDOM from 'react-dom'

import LTable from './App'

let columns = {
    name: "Name",
    surname: "Surname",
    address: "Street address"
};

let rows = [
    {
        name : "John",
        surname: "Doe",
        address: "Dover Street 18"
    },
    {
        name : "Mark",
        surname: "Wilton",
        address: "Williams St. 2"
    }

];

ReactDOM.render(<LTable styles={{"fontSize": "1.1em"}} columns={columns} rows={rows} />, document.getElementById('root'));
