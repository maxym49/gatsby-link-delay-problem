import React, { useRef } from "react"
import Input from "../../../global-components/inputs/input"
import { MainButton } from "../../../global-components/buttons/main/mainButton"
import "./banner.scss"
import Wrapper from "../../../global-components/wrapper/wrapper"
import Col50 from "../../../global-components/containers/col-50/col50"
import Paragraph from "../../../global-components/texts/paragraph/paragraph"
import MainHeader from "../../../global-components/headers/main-header/header"
import { HOME_BANNER_BTN_TEXT } from "../../../../static/texts/home/homeTexts"

const CoopBanner = () => {
  const numberRef = useRef()
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-offset="20"
        data-aos-delay="0"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="coop-banner-wrapper"
      >
        <Wrapper className="column-wrapper">
          <Col50 className="column" vertical>
            <MainHeader>
              How about
              <br />
              working together?
            </MainHeader>
            <Paragraph>
              Leave your number and we will contact you as soon as possible.
            </Paragraph>
            <Wrapper className="contact-wrapper" noPadding>
              <Input ref={numberRef} label="602 821 321" />
              <MainButton
                onClick={async () => {
                  numberRef.current.setVal("")
                }}
              >
                <p>{HOME_BANNER_BTN_TEXT}</p>
              </MainButton>
            </Wrapper>
          </Col50>
          <Col50 className="column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="689.134"
              height="395.962"
              viewBox="0 0 689.134 395.962"
            >
              <g className="comp-phone-home" transform="translate(0 0)">
                <circle
                  className="Ellipse_100"
                  data-name="Ellipse 100"
                  cx="35.839"
                  cy="35.839"
                  r="35.839"
                  transform="translate(113.477 279.799)"
                  fill="#f2f2f2"
                />
                <circle
                  className="Ellipse_101"
                  data-name="Ellipse 101"
                  cx="35.839"
                  cy="35.839"
                  r="35.839"
                  transform="translate(119.305 274.554)"
                  fill="#cf2e3b"
                />
                <rect
                  className="Rectangle_129"
                  data-name="Rectangle 129"
                  width="443.423"
                  height="1.21"
                  transform="translate(184.006 270.738)"
                  fill="#3f3d56"
                />
                <path
                  className="Path_605"
                  data-name="Path 605"
                  d="M454.662,139.263H297.275v-3.244H225.909v3.244H67.872a10.646,10.646,0,0,0-10.646,10.646V365.421a10.646,10.646,0,0,0,10.646,10.646h386.79a10.646,10.646,0,0,0,10.646-10.646V149.908a10.646,10.646,0,0,0-10.646-10.646Z"
                  transform="translate(-41.007 -127.979)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_130"
                  data-name="Rectangle 130"
                  width="379.536"
                  height="214.097"
                  transform="translate(30.493 30.098)"
                  fill="#cf2e3b"
                />
                <circle
                  className="Ellipse_102"
                  data-name="Ellipse 102"
                  cx="3.893"
                  cy="3.893"
                  r="3.893"
                  transform="translate(216.043 16.474)"
                  fill="#cf2e3b"
                />
                <path
                  className="Path_606"
                  data-name="Path 606"
                  d="M321.4,263.851h-271V49.754Z"
                  transform="translate(-19.913 -19.656)"
                  opacity="0.1"
                />
                <circle
                  className="Ellipse_103"
                  data-name="Ellipse 103"
                  cx="36.482"
                  cy="36.482"
                  r="36.482"
                  transform="translate(53.397 155.21)"
                  fill="#f2f2f2"
                />
                <rect
                  className="Rectangle_131"
                  data-name="Rectangle 131"
                  width="35.453"
                  height="7.408"
                  transform="translate(308.492 145.562)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_132"
                  data-name="Rectangle 132"
                  width="121.174"
                  height="3.175"
                  transform="translate(265.632 87.885)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_133"
                  data-name="Rectangle 133"
                  width="121.174"
                  height="3.175"
                  transform="translate(265.632 97.939)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_134"
                  data-name="Rectangle 134"
                  width="121.174"
                  height="3.175"
                  transform="translate(265.632 107.993)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_135"
                  data-name="Rectangle 135"
                  width="121.174"
                  height="3.175"
                  transform="translate(265.632 118.047)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_136"
                  data-name="Rectangle 136"
                  width="121.174"
                  height="3.175"
                  transform="translate(265.632 128.101)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_137"
                  data-name="Rectangle 137"
                  width="14.816"
                  height="14.816"
                  transform="translate(371.99 34.442)"
                  fill="#f2f2f2"
                />
                <path
                  className="Path_607"
                  data-name="Path 607"
                  d="M669.446,203.776H651.455V185.785h17.991Zm-17.209-.782h16.427V186.567H652.237Z"
                  transform="translate(-275.761 -147.639)"
                  fill="#3f3d56"
                />
                <path
                  className="Path_608"
                  data-name="Path 608"
                  d="M465.373,517.872H428.332V515.2a.529.529,0,0,0-.529-.529H415.1a.529.529,0,0,0-.529.529v2.669h-7.937V515.2a.529.529,0,0,0-.529-.529h-12.7a.529.529,0,0,0-.529.529v2.669h-7.937V515.2a.529.529,0,0,0-.529-.529h-12.7a.529.529,0,0,0-.529.529v2.669h-7.937V515.2a.529.529,0,0,0-.529-.529h-12.7a.529.529,0,0,0-.529.529v2.669h-7.937V515.2a.529.529,0,0,0-.529-.529h-12.7a.529.529,0,0,0-.529.529v2.669h-7.937V515.2a.529.529,0,0,0-.529-.529h-12.7a.529.529,0,0,0-.529.529v2.669h-7.937V515.2a.529.529,0,0,0-.529-.529H198.154a.529.529,0,0,0-.529.529v2.669h-7.937V515.2a.529.529,0,0,0-.529-.529h-12.7a.529.529,0,0,0-.529.529v2.669h-7.937V515.2a.529.529,0,0,0-.529-.529h-12.7a.529.529,0,0,0-.529.529v2.669H146.3V515.2a.529.529,0,0,0-.529-.529h-12.7a.529.529,0,0,0-.529.529v2.669H124.6V515.2a.529.529,0,0,0-.529-.529h-12.7a.529.529,0,0,0-.529.529v2.669h-7.937V515.2a.529.529,0,0,0-.529-.529h-12.7a.529.529,0,0,0-.529.529v2.669H81.213V515.2a.529.529,0,0,0-.529-.529h-12.7a.529.529,0,0,0-.529.529v2.669H43.114a12.7,12.7,0,0,0-12.7,12.7v5.742a12.7,12.7,0,0,0,12.7,12.7H465.373a12.7,12.7,0,0,0,12.7-12.7v-5.742a12.7,12.7,0,0,0-12.7-12.7Z"
                  transform="translate(-30.415 -277.569)"
                  fill="#3f3d56"
                />
                <path
                  className="Path_609"
                  data-name="Path 609"
                  d="M163.562,417.223a45.976,45.976,0,1,1,45.976-45.976,45.976,45.976,0,0,1-45.976,45.976Zm0-90.741a44.766,44.766,0,1,0,44.766,44.766,44.766,44.766,0,0,0-44.766-44.766Z"
                  transform="translate(-64.852 -202.745)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_138"
                  data-name="Rectangle 138"
                  width="154.26"
                  height="1.21"
                  transform="translate(354.6 19.687)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_139"
                  data-name="Rectangle 139"
                  width="443.423"
                  height="1.21"
                  transform="translate(245.71 339.096)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_140"
                  data-name="Rectangle 140"
                  width="154.26"
                  height="1.21"
                  transform="translate(116.556 394.751)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_141"
                  data-name="Rectangle 141"
                  width="16.938"
                  height="16.938"
                  transform="translate(284.928 332.718)"
                  fill="#cf2e3b"
                />
                <path
                  className="Path_610"
                  data-name="Path 610"
                  d="M532.983,671.3H512.415V650.728h20.568Zm-19.674-.894h18.779V651.623H513.309Z"
                  transform="translate(-220.832 -331.319)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_142"
                  data-name="Rectangle 142"
                  width="16.938"
                  height="16.938"
                  transform="translate(481.535 13.309)"
                  fill="#cf2e3b"
                />
                <path
                  className="Path_611"
                  data-name="Path 611"
                  d="M857.983,143.3H837.415V122.728h20.568Zm-19.674-.894h18.779V123.623H838.309Z"
                  transform="translate(-349.226 -122.728)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_143"
                  data-name="Rectangle 143"
                  width="16.938"
                  height="16.938"
                  transform="translate(652.129 332.718)"
                  fill="#cf2e3b"
                />
                <path
                  className="Path_612"
                  data-name="Path 612"
                  d="M1139.978,671.3H1119.41V650.728h20.568ZM1120.3,670.4h18.78V651.623H1120.3Z"
                  transform="translate(-460.63 -331.319)"
                  fill="#3f3d56"
                />
                <path
                  className="Path_613"
                  data-name="Path 613"
                  d="M1002.311,314.045h-1.439V274.626a22.815,22.815,0,0,0-22.815-22.815H894.541a22.815,22.815,0,0,0-22.815,22.815V490.882A22.815,22.815,0,0,0,894.541,513.7h83.514a22.815,22.815,0,0,0,22.815-22.815V342.1h1.439Z"
                  transform="translate(-362.781 -173.724)"
                  fill="#3f3d56"
                />
                <path
                  className="Path_614"
                  data-name="Path 614"
                  d="M1000.127,280.617v215.94A17.039,17.039,0,0,1,983.088,513.6H899.171a17.037,17.037,0,0,1-17.035-17.038V280.617a17.037,17.037,0,0,1,17.033-17.035h10.183a8.094,8.094,0,0,0,7.5,11.149h47.845a8.094,8.094,0,0,0,7.5-11.149h10.9a17.037,17.037,0,0,1,17.038,17.036Z"
                  transform="translate(-366.893 -178.374)"
                  fill="#cf2e3b"
                />
                <rect
                  className="Rectangle_144"
                  data-name="Rectangle 144"
                  width="24.998"
                  height="7.408"
                  transform="translate(561.738 227.59)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_145"
                  data-name="Rectangle 145"
                  width="85.442"
                  height="3.175"
                  transform="translate(531.516 169.913)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_146"
                  data-name="Rectangle 146"
                  width="85.442"
                  height="3.175"
                  transform="translate(531.516 179.967)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_147"
                  data-name="Rectangle 147"
                  width="85.442"
                  height="3.175"
                  transform="translate(531.516 190.021)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_148"
                  data-name="Rectangle 148"
                  width="85.442"
                  height="3.175"
                  transform="translate(531.516 200.074)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_149"
                  data-name="Rectangle 149"
                  width="85.442"
                  height="3.175"
                  transform="translate(531.516 210.128)"
                  fill="#3f3d56"
                />
                <rect
                  className="Rectangle_150"
                  data-name="Rectangle 150"
                  width="14.816"
                  height="14.816"
                  transform="translate(562.406 127.751)"
                  fill="#f2f2f2"
                />
                <path
                  className="Path_615"
                  data-name="Path 615"
                  d="M969.474,340.032v17.991h17.991V340.032Zm17.211,17.211h-16.43v-16.43h16.43Z"
                  transform="translate(-401.397 -208.576)"
                  fill="#3f3d56"
                />
                <path
                  className="Path_616"
                  data-name="Path 616"
                  d="M1000.127,549.708v23.06a17.039,17.039,0,0,1-17.038,17.041H899.171a17.037,17.037,0,0,1-17.035-17.038V456.492l70.7,55.854,1.21.956L967.2,523.689l1.228.974Z"
                  transform="translate(-366.893 -254.584)"
                  opacity="0.1"
                />
                <circle
                  className="Ellipse_104"
                  data-name="Ellipse 104"
                  cx="26.538"
                  cy="26.538"
                  r="26.538"
                  transform="translate(540.44 275.152)"
                  fill="#f2f2f2"
                />
                <path
                  className="Path_617"
                  data-name="Path 617"
                  d="M316.216,708.532a52.63,52.63,0,1,1,52.63-52.63A52.63,52.63,0,0,1,316.216,708.532Zm0-104.05a51.42,51.42,0,1,0,51.42,51.42,51.42,51.42,0,0,0-51.42-51.42Z"
                  transform="translate(-122.531 -312.571)"
                  fill="#3f3d56"
                />
                <path
                  className="Path_618"
                  data-name="Path 618"
                  d="M958.858,611.816a33.272,33.272,0,1,1,33.272-33.272A33.272,33.272,0,0,1,958.858,611.816Zm0-65.334a32.062,32.062,0,1,0,32.062,32.062,32.062,32.062,0,0,0-32.062-32.062Z"
                  transform="translate(-384.058 -289.657)"
                  fill="#3f3d56"
                />
              </g>
            </svg>
          </Col50>
        </Wrapper>
      </div>
    </>
  )
}
export default CoopBanner
