import { useState } from "react";

export function CreateTodo(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                                                                        id="title"
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="title"
                onChange={function (e) {
                    setTitle(e.target.value);  // Correctly updating the title
                }}
            ></input> 
            <br></br>

            <input
                id="desc"
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="description"
                onChange={function (e) {
                    setDescription(e.target.value);  // Correctly updating the description
                }}
            ></input>
            <br></br>

            <button
                style={{
                    padding: 10,
                    margin: 10
                }}
                onClick={async () => {
                    const response = await fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });

                    if (response.ok) {
                        alert("Todo added successfully");
                    } else {
                        alert("Failed to add todo");
                    }
                }}
            >
                Add a todo
            </button>
        </div>
    );
}
