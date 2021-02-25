import React from 'react'


const Problems = () => {
    return (

        <div className="d-flex p-2 problemContainer flex-column">
        <h1><u>Title of Problem</u></h1>
        <h5>Date of Problem</h5>
        <h5>Problem:</h5>
        <p className="text-monospace text-muted">This is where the main problem/question goes</p>
        <pre>
        <code>This &lt;h1&gt; is a code block</code>
        </pre>
        </div>

    )
}

export default Problems