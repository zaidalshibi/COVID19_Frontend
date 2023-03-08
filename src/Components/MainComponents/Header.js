import headerImage from './header.png';

function Header () {
    return (
        <div className='header'>
            <img src={headerImage} alt='header' />
        </div>
    );
}

export default Header;