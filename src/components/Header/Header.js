import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../Sidebar';
import images from '../../assets/svg';
import HeaderItem from './HeaderItem';
import Login from './Login';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleExclamation, faGlobe, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect, Fragment } from 'react';

const cx = classNames.bind(styles);

const languages = [
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
];

function Header() {
    const [searchInput, setSearchInput] = useState('');

    const [language, setLanguage] = useState(0);

    const [showSearchInput, setShowSearchInput] = useState(false);

    const searchInputRef = useRef();
    const closeInputRef = useRef();

    useEffect(() => {
        if (showSearchInput) {
            searchInputRef.current.style.width = '150px';
            closeInputRef.current.style.display = 'block';
        } else {
            searchInputRef.current.style.width = '0';
            closeInputRef.current.style.display = 'none';
        }
    }, [showSearchInput]);

    return (
        <Fragment>
            <div className={cx('wrapper')}>
                <Link to="/" className={cx('logo')}>
                    <img src={images.logo} alt="LeagueOfLegend" />
                </Link>
                <Link to="/" className={cx('logoLOL')}>
                    <img src={images.logoLOL} alt="LeagueOfLegend" />
                </Link>
                <div className={cx('items')}>
                    <HeaderItem path={'/'}>Game</HeaderItem>
                    <HeaderItem path={'/champions'}>Champions</HeaderItem>
                    <HeaderItem
                        popupItems={[
                            { title: 'All', path: '/', icon: false },
                            { title: 'Game Updates', path: '/', icon: false },
                            { title: 'Esports', path: '/', icon: false },
                            { title: 'Dev', path: '/', icon: false },
                            { title: 'Lore', path: '/', icon: false },
                            { title: 'Media', path: '/', icon: false },
                            { title: 'Merch', path: '/', icon: false },
                            { title: 'Community', path: '/', icon: false },
                            { title: 'Riot Games', path: '/', icon: false },
                        ]}
                    >
                        News
                    </HeaderItem>
                    <HeaderItem path={'/patchnotes'} tabletResponsive>
                        Patch Notes
                    </HeaderItem>
                    <HeaderItem
                        tabletResponsive
                        popupItems={[
                            { title: 'Community', path: '/', icon: false },
                            { title: 'League Displays', path: '/', icon: false },
                            { title: 'Riot Mobile', path: '/', icon: false },
                            { title: 'Avatar Creator', path: '/', icon: false },
                        ]}
                    >
                        Discover
                    </HeaderItem>
                    <HeaderItem link path={'/'} hideOnSearch={showSearchInput}>
                        Esports
                    </HeaderItem>
                    <HeaderItem link path={'/'} hideOnSearch={showSearchInput}>
                        Universe
                    </HeaderItem>
                    <HeaderItem
                        popupItems={[
                            { title: 'Shop', path: '/', icon: true },
                            { title: 'Support', path: '/', icon: true },
                            {
                                title: 'Esports',
                                path: '/',
                                icon: true,
                                hideOnSmallPC: true,
                                showOnSearch: showSearchInput,
                            },
                            {
                                title: 'Universe',
                                path: '/',
                                icon: true,
                                hideOnSmallPC: true,
                                showOnSearch: showSearchInput,
                            },
                            { title: 'Patch Notes', path: '/', icon: true, hideOnTablet: true },
                            { title: 'Discover', path: '/', icon: true, hideOnTablet: true },
                        ]}
                    >
                        More
                    </HeaderItem>
                </div>
                <div className={cx('functions')}>
                    <div className={cx('search')}>
                        <button
                            className={cx('search-btn')}
                            onClick={() => {
                                if (searchInput) {
                                    window.location.href = `/${searchInput}`;
                                } else setShowSearchInput(!showSearchInput);
                            }}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <input
                            ref={searchInputRef}
                            value={searchInput}
                            className={cx('search-input')}
                            type="text"
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') window.location.href = `/${searchInput}`;
                            }}
                        ></input>
                        <button
                            ref={closeInputRef}
                            className={cx('search-close-btn')}
                            onClick={() => {
                                if (searchInput) setSearchInput('');
                                else setShowSearchInput(false);
                            }}
                        >
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </div>
                    <Tippy
                        interactive
                        trigger="click"
                        placement="bottom"
                        render={() => (
                            <div className={cx('warning-popup')}>
                                <div className={cx('warning-items')} tabIndex="-1">
                                    <div className={cx('warning-item')}>
                                        <p className={cx('warning-item-label')}>
                                            <FontAwesomeIcon
                                                className={cx('warning-item-label-icon')}
                                                icon={faCircleExclamation}
                                            />
                                            Warning
                                        </p>
                                        <h3 className={cx('warning-item-title')}>Soul Fighter Hub issues</h3>
                                        <p className={cx('warning-item-date')}>JULY 27, 2023 AT 3:47 PM PDT</p>
                                        <p className={cx('warning-item-content')}>
                                            We're aware of issues loading the Soul Fighter Hub while patching, please
                                            complete the patch and restart the client to resolve this issue.
                                        </p>
                                        <button className={cx('warning-item-btn')}>MORE DETAILS</button>
                                    </div>
                                    <div className={cx('warning-item')}>
                                        <p className={cx('warning-item-label')}>
                                            <FontAwesomeIcon
                                                className={cx('warning-item-label-icon')}
                                                icon={faCircleExclamation}
                                            />
                                            Warning
                                        </p>
                                        <h3 className={cx('warning-item-title')}>Soul Fighter Hub issues</h3>
                                        <p className={cx('warning-item-date')}>JULY 27, 2023 AT 3:47 PM PDT</p>
                                        <p className={cx('warning-item-content')}>
                                            We're aware of issues loading the Soul Fighter Hub while patching, please
                                            complete the patch and restart the client to resolve this issue.
                                        </p>
                                        <button className={cx('warning-item-btn')}>MORE DETAILS</button>
                                    </div>
                                    <a href="/" className={cx('warning-btn')}>
                                        VIEW ALL 4 SERVICE STATUES
                                    </a>
                                </div>
                            </div>
                        )}
                    >
                        <div className={cx('warning')}>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </Tippy>
                    <Tippy
                        interactive
                        trigger="click"
                        placement="bottom"
                        render={() => (
                            <div className={cx('languages-popup')}>
                                <div className={cx('languages-items')}>
                                    {languages.map((item, index) => {
                                        const str =
                                            index === language ? cx('languages-item', 'active') : cx('languages-item');
                                        return (
                                            <Link
                                                key={index}
                                                onClick={() => setLanguage(index)}
                                                href="/"
                                                className={str}
                                            >
                                                {<span>{`${item.language} (${item.code})`}</span>}
                                                {index === language && <FontAwesomeIcon icon={faCheck} />}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    >
                        <div className={cx('languages')}>
                            <FontAwesomeIcon icon={faGlobe} />
                        </div>
                    </Tippy>
                    <Login />
                    <Sidebar />
                </div>
            </div>
        </Fragment>
    );
}

export default Header;
