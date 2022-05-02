import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__inner'>
                    <div className='header__logo'>
                        LOGO
                    </div>
                    <nav className='header__nav'>
                        <input className='header__input' placeholder='search' />
                        <ul className='header__icons'>
                            <li className='header__icon'>1</li>
                            <li className='header__icon'>2</li>
                            <li className='header__icon'>3</li>
                            <li className='header__icon'>4</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header