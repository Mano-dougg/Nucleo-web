import twitterLight from '../../assets-light-theme/twitter-icon.png';
import figmaLight from '../../assets-light-theme/figma-icon.png';
import instagramLight from '../../assets-light-theme/instagram-icon.png';

import twitterDark from '../../assets-dark-theme/twitter-icon.png';
import figmaDark from '../../assets-dark-theme/figma-icon.png';
import instagramDark from '../../assets-dark-theme/instagram-icon.png';

function SocialIcons ({isNightMode}){
    return (
            <ul>
                <li><img src={isNightMode ? twitterDark : twitterLight}/></li>
                <li><img src={isNightMode ? figmaDark : figmaLight}/></li>
                <li><img src={isNightMode ? instagramDark : instagramLight}/></li>
            </ul>
    );
}

export default SocialIcons;