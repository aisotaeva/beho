import React, { useState, useEffect } from 'react';
import { ReactComponent as LogoSVG } from "../../assets/svg/logo.svg"; // Rename to LogoSVG to avoid conflict
import CatalogBtn from "../ui/Buttons/CatalogBtn/CatalogBtn";
import InputSearch from "../ui/inputs/SearchInput/InputSearch";
import { showToast } from "../../utils/toast";
import { Link } from "react-router-dom";
import { IconButtonUser, IconButtonWithChart, IconChek } from '../ui/Buttons/IconButton/IconButtons';
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const orders = useSelector(store => store.orders.orders);
    const dispatch = useDispatch();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="container">
                <div className="header-wrapper">
                    <div className="header__logo">
                        <span>
                            <LogoSVG /> {/* Use LogoSVG instead of Logo */}
                        </span>
                    </div>
                    <div className="header__text">
                        <p>
                            Лучшие цены <br /> в интернет-магазинах{" "}
                        </p>
                    </div>
                    <div className="header__catalog">
                        <CatalogBtn />
                    </div>
                    <div className="header__search">
                        <InputSearch className="input_" />
                    </div>
                    <div className="header__right">
                        <div className="flex__icon__header">
                            <IconButtonWithChart />
                            <Link to="/favorite">
                                <IconChek />
                            </Link>
                            <div onClick={() => {
                                showToast("Error", "error", "dark")
                            }}>
                                <IconButtonUser />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
