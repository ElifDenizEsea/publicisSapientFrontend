import React, { useState } from 'react';

const handleSubmit = (event, name, number,limit) => {
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
    }).then(function (response) {
        console.log(response)
        return response.json();
    });

}

const AddCards = (props) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [limit, setLimit] = useState("");
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, name, number,limit)}>
                <h2>
                    Save Card
                    </h2>
                <label>
                    <span class="text">Card Holder Name</span>
                    <input name="name" onChange={(e) => setName(e.target.value)} /><br />
                </label>
                <br />
                <label>
                    <span class="text">Card Number</span>
                    <input name="number" type="number" onChange={(e) => setNumber(e.target.value)} /><br />
                </label><br />
                <label>
                    <span class="text">Card Limit</span>
                    <input name="limit" type="number" onChange={(e) => setLimit(e.target.value)} /><br />
                </label><br />
                <div class="align-right">
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </div>
    )
};

export default AddCards


