import React from 'react';
import './header.scss';
import Button from '@/components/button/button';

const Header: React.FC = () => {
    return (
        <header className="publicHeader">
            <div className="publicHeader__content">
                <div className="publicHeader__logoImage">
                    <img  src="/images/greenicon.png" alt="Green Disc"   />
                </div>
                <div className="publicHeader__text">
                    <span className="publicHeader__logo">almà</span>
                    <h1 className="publicHeader__title">
                        Get An Assessment <br />
                        Of Your Immigration Case
                    </h1>
                </div>
                <div className="publicHeader__button">
                    <Button
                    title="Login"
                    />
                </div>

            </div>
        </header>
    );
};

export default Header;