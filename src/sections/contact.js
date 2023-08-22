import Header from '../components/pageheader.js'

function Contact(){
    return(
        <div className="contactme" id="contactme">
            <Header head='Contact Me' />
            <div className='container'>
                <div className='lets'>
                    <h1>Lets Talk</h1>
                    <input placeholder='Enter Your Full Name'/>
                    <input placeholder='Enter Your Email Address'/>
                    <textarea placeholder='Write Your Message'/>
                </div>
                <div className='social'>
                    <h1>Social Media</h1>
                    <div>
                        <h3>Email :</h3>
                        <p>amrdabbas9@gmail.com</p>
                    </div>
                    <div>
                        <h3>Phone :</h3>
                        <p>+963 935 924 071</p>
                    </div>
                    <div>
                        <h3>Follow On :</h3>
                        <div>
                            <a href=''></a>
                            <a href=''></a>
                            <a href=''></a>
                            <a href='https://github.com/amrdabbas9'></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )

}
export default Contact;