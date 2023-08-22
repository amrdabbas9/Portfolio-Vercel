import Navbar from '../components/nav.js'
import pic from '../imgs/main.png'
const Landing = () => {

    return (
        <div className="landing">
            <Navbar />
            <div className='main container'>
                <div className='wai'>
                    <p>Hello, <span>I'm</span></p>
                    <h2>Amr Dabbas</h2>
                    <h3>Full-Stack Developer</h3>
                    <a href='hire me' className='hirebutton'>Hire Me</a>
                </div>
                <div className='mpic'>
                    <div>
                        <img src={pic} alt=''/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing;