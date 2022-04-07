import React from 'react';

const Header = () => {
    return (
        <>
            <header style={{backgroundColor: 'grey'}}>
                <ul style={{listStyleType: 'none', margin: '0', padding: '0', overflow: 'hidden'}}>
                    <li id='nowShowing' style={{float: 'left', padding:'16px'}}>
                        Now Showing
                    </li>
                    <li id='comingSoon' style={{float: 'left', padding:'16px'}}>
                        Coming Soon
                    </li>
                    <li id='exclusive' style={{float: 'left', padding:'16px'}}>
                        Exclusive
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;
