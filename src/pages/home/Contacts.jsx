import {MdEmail} from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";
import {FiGithub} from  "react-icons/fi";
export default function Contacts(){
    return(
    <div className="contacts">
        <a href="https://github.com/sakif04" >
            <FiGithub className="contact-link"/>
        </a>
        <a href="https://www.linkedin.com/in/sakif-rafid-7289a6206/">
            <BsLinkedin className="contact-link"/>
        </a>
        <a href="mailto:sakifrafid04@gmail.com">
        <MdEmail className="contact-link" />
        </a>
    </div>
    )
}