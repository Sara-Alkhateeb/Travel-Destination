
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
function Footer() {
    return (
        <div id ='Footer'>
                <p>Author of the document: Sara alkhateeb</p>
                
                <p>&copy; Travel Destination App 2023</p>
        
        
            <a href="https://www.facebook.com/traveldestintion">
            <FontAwesomeIcon icon={faFacebookF} style={{ color: 'darkgreen' }}/>
          </a>
        <a href="https://twitter.com/traveldestintion">
            <FontAwesomeIcon icon={faTwitter} style={{ color: 'darkgreen' }}/>
          </a>
        <a href="https://www.instagram.com/traveldestintion">
            <FontAwesomeIcon icon={faInstagram} style={{ color: 'darkgreen' }}/>
          </a>
        </div>
    );
}
export default Footer;