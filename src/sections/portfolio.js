import Header from "../components/pageheader";


import img1 from '../imgs/temp1.png'
import img2 from '../imgs/temp2.png'
import img3 from '../imgs/temp3.png'
import img4 from '../imgs/temp4.png'

function Portfolio(){
    return(
        <div className="portfolio" id="portfolio">
            <Header head='Portfolio' />
            <div className="port-grid container">
                <div>
                    <div>
                        <h1>Dabbas Template</h1>
                        <a href="https://amrdabbas9.github.io/Template-3/">visit</a>
                    </div>
                    <img src={img1} />
                </div>
                <div>
                    <div>
                        <h1>Neon Template</h1>
                        <a href="https://amrdabbas9.github.io/Template-1/">visit</a>
                    </div>
                    <img src={img2} />
                </div>
                <div>
                    <div>
                        <h1>Dabbas Website</h1>
                        <a href="https://amrdabbas9.github.io/Template-4/">visit</a>
                    </div>
                    <img src={img3} />
                </div>
                <div>
                    <div>
                        <h1>Kasbar Template</h1>
                        <a href="https://amrdabbas9.github.io/Template-2/Kasbar">visit</a>
                    </div>
                    <img src={img4} />

                </div>
            </div>
        </div>
    )
}

export default Portfolio;