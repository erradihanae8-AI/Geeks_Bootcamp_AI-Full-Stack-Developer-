
import React from "react";

function FormComponent(props) {
    return (
        <main>
            {/* TOP PART - THE FORM */}
            <div className="form-container">
                <h1>Sample Form </h1>

                <form method="GET" action="/">
                    {/* First Name */}
                    <label>First Name:</label>
                    <br />
                    <input
                        type="text"
                        name="firstName"
                        value={props.data.firstName}
                        onChange={props.handleChange}
                        placeholder="First Name"
                    />

                    <br /><br />

                    {/* Last Name */}
                    <label>Last Name:</label>
                    <br />
                    <input
                        type="text"
                        name="lastName"
                        value={props.data.lastName}
                        onChange={props.handleChange}
                        placeholder="Last Name"
                    />

                    <br /><br />

                    {/* Age */}
                    <label>Age:</label>
                    <br />
                    <input
                        type="number"
                        name="age"
                        value={props.data.age}
                        onChange={props.handleChange}
                        placeholder="Age"
                    />

                    <br /><br />

                    {/* Gender */}
                    <label>Gender:</label>
                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={props.data.gender === "male"}
                            onChange={props.handleChange}
                        />
                        Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={props.data.gender === "female"}
                            onChange={props.handleChange}
                        />
                        Female
                    </label>

                    <br /><br />

                    {/* Destination */}
                    <label>Select your Destination:</label>
                    <br />

                    <select
                        name="destination"
                        value={props.data.destination}
                        onChange={props.handleChange}
                    >
                        <option value="">-- Choose a destination --</option>
                        <option value="Japan">Japan</option>
                        <option value="Morocco">Morocco</option>
                        <option value="France">France</option>
                        <option value="USA">USA</option>
                    </select>

                    <br /><br />

                    {/* Dietary restrictions */}
                    <label>Dietary restrictions:</label>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="nutsFree"
                            value="on"
                            checked={props.data.nutsFree}
                            onChange={props.handleChange}
                        />
                        Nuts free
                    </label>

                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="lactoseFree"
                            value="on"
                            checked={props.data.lactoseFree}
                            onChange={props.handleChange}
                        />
                        Lactose free
                    </label>

                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="vegan"
                            value="on"
                            checked={props.data.vegan}
                            onChange={props.handleChange}
                        />
                        Vegan
                    </label>

                    <br /><br />

                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* BOTTOM PART - ENTERED INFORMATION */}
            <div className="entered-info">
                <h2>Entered information:</h2>

                <p>
                    Your name: {props.data.firstName} {props.data.lastName}
                </p>

                <p>Your age: {props.data.age}</p>

                <p>Your gender: {props.data.gender}</p>

                <p>Your destination: {props.data.destination}</p>

                <h3>Your dietary restrictions:</h3>

                <p>**Nuts free: {props.data.nutsFree ? "Yes" : "No"}</p>

                <p>**Lactose free: {props.data.lactoseFree ? "Yes" : "No"}</p>

                <p>**Vegan: {props.data.vegan ? "Yes" : "No"}</p>
            </div>
        </main>
    );
}

export default FormComponent;
