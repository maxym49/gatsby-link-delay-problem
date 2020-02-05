import React from 'react'
import {
    MAIN_STEP_ONE,
    MAIN_STEP_TWO,
    MAIN_CARD_ONE_TITLE,
    MAIN_CARD_TWO_TITLE,
    MAIN_CARD_THREE_TITLE
} from '../static/texts/main/mainTexts'
import Wrapper from '../components/global-components/wrapper/wrapper'
import Container from '../components/global-components/containers/3-col-container/container'
import MicroHeader from '../components/global-components/headers/micro-header/microHeader'
import Card from '../components/pages-components/main/card/card'
import developmentImage from '../static/svg/illustrations/dev-main.svg'
import distrImage from '../static/svg/illustrations/distr-main.svg'
import outsourcingImage from '../static/svg/illustrations/outsourcing-main.svg'
import Body from '../components/body'
import Arrow from '../components/pages-components/main/arrow/arrow'
import { MAIN_OUTSOURCING_URL, MAIN_DISTR_URL } from '../static/texts/main/mainLinks'
import Head from "../components/head"
import "../styles/index.scss"
import Banner from "../components/pages-components/main/banner/banner"

const MainPage = () => (
    <>
        <Head title="Main | Select target" />
        <Body>
            <Banner />
            <Wrapper className="main-body-wrapper main-wrapper">
                <MicroHeader className="select-header">
                    {MAIN_STEP_ONE}
                    <Arrow />
                </MicroHeader>
                <Container>
                    <Card isExternal linkTo={MAIN_OUTSOURCING_URL} src={distrImage} title={MAIN_CARD_ONE_TITLE} />
                    <Card linkTo="home" src={developmentImage} title={MAIN_CARD_TWO_TITLE} />
                    <Card isExternal linkTo={MAIN_DISTR_URL} src={outsourcingImage} title={MAIN_CARD_THREE_TITLE} />
                </Container>
                <MicroHeader className="select-header">
                    <Arrow />
                    {MAIN_STEP_TWO}
                </MicroHeader>
            </Wrapper>
        </Body>
    </>
)

export default MainPage