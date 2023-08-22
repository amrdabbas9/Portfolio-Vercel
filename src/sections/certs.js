import Header from '../components/pageheader.js'
import cert from '../imgs/IBM.png'

function Cert(){
    return(
        <div className="certs" id="certs">
            <Header head='Certifications' />
            <div className='contianer'>
                <div className='cert'>
                    <img src={cert} />
                </div>

            </div>

        </div>
    )
}

export default Cert;