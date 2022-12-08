
export default function InputVertical(props){
    const {
        reactHookForm,
        formName,
        rule,
        type="input",
        label,
        col = 9,
    } = props

    const {register} = reactHookForm
    return(
        <div className={`col col-md-${col} p-2`}>
            <label className="p-0">{label}</label><br/>
            <input className={`col col-${col}`}
                name={formName}
                // ref={register(rule)}
                type={type}
            >
            </input>
        </div>
    )
}