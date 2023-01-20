
export default function MenuCard(props){
    const {
        headerName,
        icon,
        description,
    } = props

    return(
        // Object.values(menu).map(i =>{
        <div className="menuCard">
            <div className="headerCard mt-3 mx-3">
                <h4>{headerName}</h4>
            </div>
            <div className="menuCardColumn leftBox">
                <div className="icons">
                    <i className={`bi-${icon}`}></i>
                </div>
            </div>
            <div className="menuCardColumn rightBox">
                <div className="desptionCard">
                    <p><small>{description}</small></p>
                </div>
            </div>
        </div>
        // })
    )
}