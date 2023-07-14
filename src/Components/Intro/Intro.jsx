import "./Intro.css"
import img from "../../Assets/Assets/img/img.png"
import enter from "../../Assets/Assets/img/enter.png"

function Intro() {
    return (
        <div className="intro">
        <div className="container">
            <div className="intro__div">
                <div className="intro__text">

                    <p className="text">
                        Driving growth with personalization.
                    </p>

                    <h1 className="title">
                        Make ecommerce <span className="more">More personal.</span> 
                    </h1>

                    <p className="intro__text">
                        Hundreds of brands use <span className="qubit"> Qubit CommerceAI </span> to power the next generation of product recommendations, badging and insights to build exceptional customer experiences.
                    </p>

                    <form>
                        <div className="div">
                        <input className="input" type="email" placeholder="Enter Your Email" />
                        <button className="btn">Send</button>
                        </div>
                    </form>

                </div>

                    <img src={img} alt="img" width="520" />

            </div>
        </div>
    </div>
    )
}

export default Intro;