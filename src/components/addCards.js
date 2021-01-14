import React, { useState } from 'react';
import styles from '../App.css'; 

const AddCards = (props) => {

    const handleSubmit = (event, name, number, limit) => {
        event.preventDefault();
        fetch('http://localhost:8080/api/addCard', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                name: name,
                number: number,
                limit: limit
            }
            )
        })
        .then(res => res.json())
        .then((data) => {
                setResponseDescription(data.description);
            })
        .then(function (response) {
                console.log(response);
            });

    }

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [limit, setLimit] = useState("");
    const [responseDescription, setResponseDescription] = useState("");
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, name, number, limit)}>
           
                <table className="ReactTable" >
                    <tr>
                    <h4>
                    Add new Card Card
                    </h4>
                    </tr>
                    <tr>
                        <td>  <span className="Check">Card Holder Name</span></td>
                        <td>   <input className="Field" name="name" onChange={(e) => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>    <span className="Check">Card Number</span></td>
                        <td>    <input name="number" className="Field" type="number" onChange={(e) => setNumber(e.target.value)} /></td>

                    </tr>
                    <tr>
                        <td>     <span  className="Check">Card Limit</span></td>
                        <td>     <input name="limit" className="Field" type="number" onChange={(e) => setLimit(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <div class="align-right">
                            <button className="Button" type="submit" >Submit</button>
                        </div>
                    </tr>
                    <tr>

                        <span class="text">{responseDescription}</span>
                    </tr>
                </table>
            </form>
        </div>
    )
};

export default AddCards


