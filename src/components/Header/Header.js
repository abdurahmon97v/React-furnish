import { StyleHeader, HeaderInner} from './StyleHeader';
import React from 'react';
import images from '../../assets/images';

const Header = () => {
    return (
        <StyleHeader>
            <h2>red</h2>

            <HeaderInner>
                <h2>green <img src={images.user} alt="user" /> </h2>
            </HeaderInner>

        </StyleHeader>
    );
};

export default Header;