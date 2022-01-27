import "./Intro.css";
import intro_photo from "../../img/intro_photo.jpg";

const Intro = () => {
    return (
        <div className="intro">
            <div className="empty-space-for-navbar" />
            <div className="intro-wrapper">
                <div className="intro-left">
                    <div className="intro-left-wrapper">
                        <div className="intro-left-name">
                            <h3 className="intro-left-name-hi">Hi there, I'm...</h3>
                            <h1 className="intro-left-name-grant">Grant Lee</h1>
                        </div>
                        <div className="intro-left-roles-wrapper">
                            <p className="intro-left-im">I'm</p> 
                            <div className="intro-left-roles-marquee">
                                <p className="intro-left-role">a software engineer.</p>
                                <p className="intro-left-role">an aspiring entrepreneur.</p>
                                <p className="intro-left-role">(sometimes) a musician.</p>
                            </div>
                        </div>
                        <p className="intro-left-description">
                            I enjoy working towards a goal and being motivated by the creative process along the way.
                            I excel in collaborative settings, and always find it rewarding to be able to contribute to a project, or even to begin one!
                        </p>
                    </div>
                </div>
                <div className="intro-right">
                    <div className="intro-right-photo" />
                    <div className="intro-right-padding" />
                </div>
            </div>
        </div>
        )
    }
 
export default Intro
 