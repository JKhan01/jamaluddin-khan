
// import phoneIcon from '../static/phone-call-svgrepo-com';
import "./ContactInfo.css"

import 'bootstrap/dist/css/bootstrap.min.css';

function ContactInfo() {
    // const phoneIcon = window.location.origin + "/logos/phone-call-svgrepo-com.svg";
    const phoneIcon = window.location.origin + "/logos/phone-call-svgrepo-com.svg";
    const mailIcon = window.location.origin + "/logos/email-svgrepo-com.svg";
    const githubIcon = window.location.origin + "/logos/github-color-svgrepo-com.svg";
    const linkedInIcon = window.location.origin + "/logos/linkedin-svgrepo-color-com.svg";
    const discordIcon = window.location.origin + "/logos/discord-v2-svgrepo-com.svg";

    const profilePhoto = window.location.origin + "/ProfilePic.png";
    // const profilePhoto = window.location.origin + "/Photo-Grayscale-Main.jpg";
    return (
            <div className="landing-container">
                <div className="image-container">
                    <img src={profilePhoto} alt="Profile Pic"></img>
                </div>
                <header className="App-header">
                    <span>Mohammed J Khan</span><br></br>
                </header>

                <div className="contact-info-container">
                    <div className="contact-options row">
                        <div className="col-sm-12 description">Software Engineer</div>
                        <div className="col-md-6"><img src={phoneIcon} alt='Contact' as="a" ></img><span>+1 (626) 723-8346</span> /<span>+91 9619827767</span></div>
                        <div className="col-md-6"><img src={mailIcon} alt='Email' ></img><span><a href="mailto:jkhan266work@gmail.com">jkhan266work@gmail.com</a></span></div>
                        <div className="col-sm-12">
                            <a href="https://github.com/JKhan01"><img src={githubIcon} alt='Github' ></img></a>
                            {/* </div> */}
                        {/* <span><a href="https://github.com/JKhan01">JKhan01</a></span> */}
                        {/* <div className="col-sm-3 linkedin"> */}
                            <a href="https://www.linkedin.com/in/mohammed-jamaluddin-khan/"><img src={linkedInIcon} alt='LinkedIn Profile' ></img></a>
                            <a href="https://discord.gg/Uh7amppb"><img src={discordIcon} alt='Discord Profile' ></img></a>
                        </div>
                    </div>
                    {/* <div className="col-sm-12">
                        <Button variant="outline-info">Projects</Button>
                    </div> */}
                </div>
                {/* <div className="container">
                <div className="row"> */}
                    
                    {/* <div className="col-sm-2"><Button variant="outline-info" size="lg">Experience</Button></div>
                    <div className="col-sm-2"><Button variant="outline-info" size="lg">Projects</Button></div>
                    <div className="col-sm-2"><Button variant="outline-info" size="lg">Blogs</Button></div>
                    <div className="col-sm-2"><Button variant="outline-info" size="lg"> Me</Button></div>
                    <div className="col-sm-2"><Button variant="outline-info" size="lg">About Me</Button></div> */}
                    {/* <div className="col-sm-6"><Button variant="outline-info" size="lg">Contact Me</Button></div> */}
                    
                {/* </div> */}
                {/* </div> */}
            </div>
    );
}

export default ContactInfo;
