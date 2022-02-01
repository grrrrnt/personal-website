import "./Blog.css";
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <div className="blog">
            <div className="empty-space-for-navbar" />
            <div className="in-development">
                <h2>In development... Stay tuned!</h2>
                <Link to="/">Click here to return to homepage.</Link>
            </div>
            <div className="blog-wrapper">
            </div>
        </div>
        )
    }
 
export default Intro
 