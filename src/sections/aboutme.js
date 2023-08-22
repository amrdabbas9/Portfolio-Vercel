import Header from '../components/pageheader.js'

function About(){

    return(
        <div className="about" id='aboutme'>
            <Header head='About Me'/>
            <div  className='bubble container'>
                <div>
                    <h1>About My Self</h1>
                    <p>My name is Amr Dabbas. I’m 20 years old from Syria, Aleppo. I study Medecine at Aleppo University.
                        I work as a web Developer. I love raeding books, playing video games , playing football and Listening 
                        to music. I am fluent in Arabic and Upperintermediate in English. </p>
                </div>
                <div>
                    <h1>Why Hire Me ?</h1>
                    <p>I am a passionate and creative web developer with over 2 years of experience in building responsive 
                        and user-friendly websites and applications. I have successfully completed projects for clients from 
                        various industries, using the latest technologies and best practices. I am always eager to learn new 
                        skills and take on new challenges.</p>
                </div>
            </div>
        </div>
    )

}

export default About;