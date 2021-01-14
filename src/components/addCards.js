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


                <h4>
                    Add
                    </h4>
                <span className="Check">Name</span>
                <br/>
                <input className="Field" name="name" onChange={(e) => setName(e.target.value)} />
                <br/><br/>
                <span className="Check">Card Number</span>
                <br/>
                <input name="number" className="Field" type="number" onChange={(e) => setNumber(e.target.value)} />
                <br/>
                <br/>
                <span className="Check"> Limit</span>
                <br/>
                <input name="limit" className="Field" type="number" onChange={(e) => setLimit(e.target.value)} />
                <br/>
                <br/>
                <div class="align-right">
                    <button className="Button" type="submit" >Add</button>
                </div>

                <br/>
                <span class="text">{responseDescription}</span>

            </form>
        </div>
    )
};

export default AddCards


