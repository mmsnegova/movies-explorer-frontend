import React from 'react';
import HeaderLogon from '../HeaderLogon/HeaderLogon';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import './Main.css';

function Main(props) {
    const isLoggedIn = props.loggedIn;
    if (isLoggedIn) {
        return (
            <>
                <HeaderLogin
                    activeLinkMain="active"
                    onNavMenu={props.onNavMenu}
                    isOpenNavMenu={props.isOpenNavMenu}
                    type="main"
                />
                <main className="content">
                    <Promo />
                    <AboutProject />
                    <Techs />
                    <AboutMe />
                    <Portfolio />
                </main>
                <Footer />
            </>
        );
    }
    return (
        <>
            <HeaderLogon type="main" />
            <main className="content">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}

export default Main;
