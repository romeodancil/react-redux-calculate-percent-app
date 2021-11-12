import './history.css'

function renderSummary(history, onRemove) {
    return history.map((value) => {
        return (
            <ul>
                <li>
                    Price: ${value.price}, Tip: ${value.tip}, Value: ${value.total} 
                    &nbsp;&nbsp;<button onClick={onRemove} data-id={value.id}>Remove</button>
                </li>
            </ul>
        )
    })
}

function Summary(props) {
    return (
        <div className="history">
            <fieldset className="history-container">
            <legend>History</legend>
                {renderSummary(props.history, props.onRemove)}
            </fieldset>
        </div>
    )
}

export default Summary