function Plan(props) {
    return (
        <>
            <li className="shadow p-2 my-3 col-sm-9"><h4>{props.value}</h4></li>
            <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={() => { props.sendData(props.id) }}>
                x
            </button>
        </>
    )
}
export default Plan;