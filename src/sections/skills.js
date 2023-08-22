import Header from '../components/pageheader.js'
import Perc from '../components/percentage.js'

function Skills(){
    return(
        <div className="skills" id='skills'>
            <Header head='Skills' />
            <div className='skill container'>
                <div>
                    <h1>Languages : </h1>
                    <Perc skill='HTML' per="98%" />
                    <Perc skill='CSS' per="90%" />
                    <Perc skill='Javascript' per="70%" />
                    <Perc skill='Python' per="85%" />
                </div>
                <div>
                    <h1>Frameworks : </h1>
                    <Perc skill='Django' per="80%" />
                    <Perc skill='React' per="50%" />
                    <Perc skill='Bootstrap' per="70%" />
                </div>
            </div>
        </div>
    )

}
export default Skills;