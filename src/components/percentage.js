

function Perc(props){
    // document.getElementById(props.skill).style.width = props.per;
    console.log(`width:${+props.per}%`)
    return(
        <div className="skill-per">
            <p>{props.skill}</p> 
            <div>
                <span style={{width: props.per}} id={props.skill}></span>
            </div>
            <h3>{props.per}</h3>
        </div>
    )

}
export default Perc;