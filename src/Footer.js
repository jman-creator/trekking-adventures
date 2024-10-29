import facebookIcon from "./Assets/facebook-icon.svg"
import twitterIcon from "./Assets/twitter-icon.svg"
import instagramIcon from "./Assets/instagram-icon.svg"
import youtubeIcon from "./Assets/youtube-icon.svg"

export default function Footer() {
    return (
        <div className="footer">
            <div className="social">
                <img className="social-icon clickable" src={facebookIcon} alt="facebook icon" />
                <img className="social-icon clickable" src={twitterIcon} alt="twitter icon" />
                <img className="social-icon clickable" src={instagramIcon} alt="instagram icon" />
                <img className="social-icon clickable" src={youtubeIcon} alt="youtube icon" />
            </div>
            <div className="credit">
                Design by <a href="https://www.freepik.com">Freepik</a><br/>(Minor and responsiveness alterations by developer)
            </div>
        </div>
    );
}