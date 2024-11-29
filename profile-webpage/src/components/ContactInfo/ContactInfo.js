
// import phoneIcon from '../static/phone-call-svgrepo-com';
import "./ContactInfo.css"

function ContactInfo() {
    // const phoneIcon = window.location.origin + "/logos/phone-call-svgrepo-com.svg";
    const phoneIcon = window.location.origin + "/logos/phone-call-svgrepo-com.svg";
    const mailIcon = window.location.origin + "/logos/email-svgrepo-com.svg";
    const githubIcon = window.location.origin + "/logos/github-color-svgrepo-com.svg";
    const linkedInIcon = window.location.origin + "/logos/linkedin-svgrepo-color-com.svg";
    return (
        <div className="base-container">
            <header className="App-header">
                <span>Mohammed J Khan</span><br></br>
            </header>
            <div className="contact-info-container">
                <div className="contact-options">
                    <img src={phoneIcon} alt='Contact' ></img><span>+1 (626) 723-8346</span>
                    <img src={mailIcon} alt='Email' ></img><span><a href="mailto:jkhan266work@gmail.com">jkhan266work@gmail.com</a></span>
                    <img src={githubIcon} alt='Github' ></img><span><a href="https://github.com/JKhan01">JKhan01</a></span>
                    <img src={linkedInIcon} alt='LinkedIn Profile' ></img><span><a href="https://www.linkedin.com/in/mohammed-jamaluddin-khan/">in/mohammed-jamaluddin-khan</a></span>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
