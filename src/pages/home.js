import React, { useRef } from "react"
import Body from "../components/body"
import MainHeader from "../components/global-components/headers/main-header/header"
import Wrapper from "../components/global-components/wrapper/wrapper"
import Col50 from "../components/global-components/containers/col-50/col50"
import Paragraph from "../components/global-components/texts/paragraph/paragraph"
import ContentWrapper from "../components/global-components/containers/content-wrapper/contentWrapper"
import { MainButton } from "../components/global-components/buttons/main/mainButton"
import Space from "../components/interactive-components/animations/home/space"
import "../styles/home.scss"
import ColWrapper from "../components/pages-components/home/front-col-wrapper/colWrapper"
import {
  HOME_BANNER_HEADER,
  HOME_BANNER_BTN_TEXT,
  HOME_BANNER_PARAGRAPH,
  HOME_CONTENT_PRICING_HEADER,
  HOME_PRICING_CARD_ONE_TITLE,
  HOME_PRICING_CARD_ONE_PRICE,
  HOME_PRICING_CARD_TWO_TITLE,
  HOME_PRICING_CARD_TWO_PRICE,
  HOME_PRICING_CARD_THREE_TITLE,
  HOME_PRICING_CARD_THREE_PRICE,
  HOME_PRICING_CARD_FOUR_TITLE,
  HOME_PRICING_CARD_FOUR_PRICE, HOME_CONTENT_QUESTION_HEADER, HOME_CONTENT_WHY_HEADER,
} from "../static/texts/home/homeTexts"
import Input from "../components/global-components/inputs/input"
import ContentHeader from "../components/global-components/headers/content-header/contentHeader"
import Card from "../components/pages-components/home/pricing-card/card"
import { HOME_BOX_SHADOW } from "../static/variables/home"
import WaveForm from "../components/pages-components/home/wave-form/waveForm"
import Container from "../components/global-components/containers/3-col-container/container"
import ArgumentCard from "../components/pages-components/home/argument-card/argumentCard"
import workImg from "../static/svg/illustrations/work-home.svg"
import creativityImg from "../static/svg/illustrations/creativity-home.svg"
import happinessImg from "../static/svg/illustrations/happiness-home.svg"
import cardArgumentBackground from "../static/svg/illustrations/card-argument-background.svg"
import CoopBanner from "../components/pages-components/home/coop-banner/coopBanner"
import Footer from "../components/global-components/footer/footer"
import Menu from "../components/global-components/menu/menu"
import Head from "../components/head"

const HomePage = (props) => {
  const numberRef = useRef();
  return (
    <>
      <Head title="App | Home" />
      <Body>
        <Menu pathname={props.location.pathname} />
        <Wrapper className="col-wrapper" noPadding fullPage>
          <Col50 className="left-col">
            <ContentWrapper className="content-wrapper" vertical>
              <ColWrapper>
                <MainHeader>
                  {HOME_BANNER_HEADER}
                </MainHeader>
                <Paragraph>
                  {HOME_BANNER_PARAGRAPH}
                </Paragraph>
                <Wrapper className="contact-wrapper" noPadding>
                  <Input ref={numberRef} label="Your number" />
                  <MainButton onClick={() => {
                    numberRef.current.setVal("")
                  }}><p>{HOME_BANNER_BTN_TEXT}</p></MainButton>
                </Wrapper>
              </ColWrapper>
            </ContentWrapper>
          </Col50>
          <Col50 className="right-col">
            <Space />
          </Col50>
        </Wrapper>
        <Wrapper className={"regular-wrapper"} vertical>
          <ContentHeader>{HOME_CONTENT_PRICING_HEADER}</ContentHeader>
          <Wrapper
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="pricing-container">
            <Card id="card-one" price={HOME_PRICING_CARD_ONE_PRICE} title={HOME_PRICING_CARD_ONE_TITLE} />
            <Card id="card-two" backgroundColor="#FCFCFC" price={HOME_PRICING_CARD_TWO_PRICE}
              title={HOME_PRICING_CARD_TWO_TITLE} />
            <Card id="card-three" isTheBest price={HOME_PRICING_CARD_THREE_PRICE} title={HOME_PRICING_CARD_THREE_TITLE} />
            <Card id="card-four" style={HOME_BOX_SHADOW} backgroundColor="#FCFCFC" price={HOME_PRICING_CARD_FOUR_PRICE}
              title={HOME_PRICING_CARD_FOUR_TITLE} />
          </Wrapper>
        </Wrapper>
        <Wrapper className={"regular-wrapper"} vertical>
          <ContentHeader>{HOME_CONTENT_QUESTION_HEADER}</ContentHeader>
          <WaveForm />
        </Wrapper>
        <Wrapper className={"regular-wrapper"} vertical>
          <ContentHeader>{HOME_CONTENT_WHY_HEADER}</ContentHeader>
          <Container>
            <ArgumentCard alt={"how-it-works"} linkTo="/about/#stages" src={workImg} btnText="CHECK IT">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</ArgumentCard>
            <ArgumentCard alt={"creativity"} linkTo="/about/#customers" src={creativityImg} btnText="CHECK IT"
              backgroundImage={cardArgumentBackground}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </ArgumentCard>
            <ArgumentCard alt={"fixed-problem"} linkTo="example.com" external src={happinessImg}
              btnText="CHECK IT">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </ArgumentCard>
          </Container>
        </Wrapper>
        <Wrapper className={"regular-wrapper"} vertical>
          <CoopBanner />
        </Wrapper>
        <Footer />
      </Body>
    </>
  )
}

export default HomePage  