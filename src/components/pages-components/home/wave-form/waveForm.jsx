import React, { useEffect, useRef } from "react"
import Input from "../../../global-components/inputs/input"
import TextArea from "../../../global-components/text-area/textArea"
import "./wave-form.scss"
import { MainButton } from "../../../global-components/buttons/main/mainButton"
import Wrapper from "../../../global-components/wrapper/wrapper"
import Col50 from "../../../global-components/containers/col-50/col50"
import Paragraph from "../../../global-components/texts/paragraph/paragraph"
import anime from "animejs/lib/anime.es.js"

const WaveForm = () => {
  const msgRef = useRef()
  const emailRef = useRef()
  useEffect(() => {
    const lines = document.querySelectorAll(".wave-human-home-line")
    if (window.innerWidth > 1000) {
      anime({
        targets: lines,
        loop: true,
        direction: "alternate",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: (el, i) => {
          return i * 500
        },
      })
    }
  })

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
        className="wave-form-wrapper"
      >
        <Wrapper className="column-wrapper">
          <Col50 className="column" vertical>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Paragraph>
            <div className="wave-form">
              <Input ref={emailRef} label={"e-mail"} />
              <TextArea ref={msgRef} label={"message"} />
              <MainButton
                onClick={() => {
                  emailRef.current.setVal("")
                  msgRef.current.setVal("")
                }}
                style={{ alignSelf: "flex-end" }}
              >
                <p>Contact</p>
              </MainButton>
            </div>
          </Col50>
          <Col50 className="column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="729.916"
              height="851.371"
              viewBox="0 0 729.916 851.371"
            >
              <g
                className="wave-human-home"
                transform="translate(-1139.083 -1855.629)"
              >
                <path
                  className="Path_554"
                  data-name="Path 554"
                  d="M-303.391,3371.176c44.916-59.888,95.614-72.787,246.717-32.247S143.26,3479.9,64.024,3516.75s16.584,229.418-93.978,153.866S-170,3553.6-236.338,3578.481-348.307,3431.063-303.391,3371.176Z"
                  transform="translate(706.38 -1352.039) rotate(-13)"
                  fill="#fbfbfb"
                />
                <text
                  className="_2sa"
                  data-name="?"
                  transform="translate(1460.67 2083.002)"
                  fill="#2d2d2d"
                  fontSize="107"
                  fontFamily="Lato-Bold, Lato"
                  fontWeight="700"
                >
                  <tspan x="-24.61" y="0">
                    ?
                  </tspan>
                </text>
                <text
                  className="_2"
                  data-name="?"
                  transform="translate(1426 2056)"
                  fill="#2d2d2d"
                  fontSize="40"
                  fontFamily="Lato-Bold, Lato"
                  fontWeight="700"
                  opacity="0.39"
                >
                  <tspan x="-9.2" y="0">
                    ?
                  </tspan>
                </text>
                <text
                  className="_3"
                  data-name="?"
                  transform="translate(1503 2078)"
                  fill="#2d2d2d"
                  fontSize="75"
                  fontFamily="Lato-Bold, Lato"
                  fontWeight="700"
                  opacity="0.39"
                >
                  <tspan x="-17.25" y="0">
                    ?
                  </tspan>
                </text>
                <line
                  className="wave-human-home-line Line_69"
                  data-name="Line 69"
                  x2="175.803"
                  transform="translate(1211.5 2014.5)"
                  fill="none"
                  stroke="#b5b5b5"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <line
                  className="wave-human-home-line Line_70"
                  data-name="Line 70"
                  x2="175.803"
                  transform="translate(1211.5 2029.5)"
                  fill="none"
                  stroke="#b5b5b5"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <line
                  className="wave-human-home-line Line_71"
                  data-name="Line 71"
                  x2="175.803"
                  transform="translate(1211.5 2029.5)"
                  fill="none"
                  stroke="#b5b5b5"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <line
                  className="wave-human-home-line Line_72"
                  data-name="Line 72"
                  x2="175.803"
                  transform="translate(1211.5 2044.5)"
                  fill="none"
                  stroke="#b5b5b5"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <line
                  className="wave-human-home-line Line_73"
                  data-name="Line 73"
                  x2="92"
                  transform="translate(1211.5 2059.5)"
                  fill="none"
                  stroke="#b5b5b5"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <line
                  className="wave-human-home-line Line_74"
                  data-name="Line 74"
                  x2="92"
                  transform="translate(1211.5 2074.5)"
                  fill="none"
                  stroke="#b5b5b5"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <line
                  className="wave-human-home-line Line_75"
                  data-name="Line 75"
                  x2="92"
                  transform="translate(1211.5 2089.5)"
                  fill="none"
                  stroke="#b5b5b5"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <line
                  className="wave-human-home-line Line_76"
                  data-name="Line 76"
                  x2="39"
                  transform="translate(1348.5 2121.5)"
                  fill="none"
                  stroke="#b5b5b5"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <line
                  className="wave-human-home-line Line_77"
                  data-name="Line 77"
                  x2="39"
                  transform="translate(1348.5 2127.5)"
                  fill="none"
                  stroke="#b5b5b5"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <path
                  className="Path_555"
                  data-name="Path 555"
                  d="M532.306,551.34c1.426-.895,2.863-1.83,4.27-2.78l.956,1.416c-1.423.961-2.875,1.906-4.318,2.811Z"
                  transform="translate(1004.315 1986.91)"
                  fill="#e6e6e6"
                />
                <path
                  className="Path_557"
                  data-name="Path 557"
                  d="M598.285,276.321l1.463-.881c.889,1.477,1.758,2.977,2.583,4.458l-1.492.831C600.024,279.264,599.164,277.781,598.285,276.321Z"
                  transform="translate(987.342 2057.17)"
                  fill="#e6e6e6"
                />
                <ellipse
                  className="Ellipse_92"
                  data-name="Ellipse 92"
                  cx="209.455"
                  cy="12.627"
                  rx="209.455"
                  ry="12.627"
                  transform="translate(1450.09 2681.747)"
                  fill="#3f3d56"
                />
                <path
                  className="Path_558"
                  data-name="Path 558"
                  d="M704.6,275.3s5.869,76.294-2.348,78.641-37.56,19.954-84.51,15.259c0,0-45.776,24.649-38.734,1.174s38.734-17.606,38.734-17.606,56.34-11.737,58.688-19.954-7.043-42.255-3.521-43.429S704.6,275.3,704.6,275.3Z"
                  transform="translate(992.491 2057.207)"
                  fill="#f3d5d9"
                />
                <path
                  className="Path_559"
                  data-name="Path 559"
                  d="M587.783,376.447h0l15.76-3.65a3.439,3.439,0,0,1,3.874,1.857l16.144,33.478a2.78,2.78,0,0,1-1.744,3.881L605.8,416.563a3.672,3.672,0,0,1-4.376-2.08l-10.3-23.927-.314.174-1.961-4.533.326-.167-2.875-6.679a2.117,2.117,0,0,1,1.484-2.9Z"
                  transform="translate(990.47 2032.148)"
                  fill="#3f3d56"
                />
                <path
                  className="Path_561"
                  data-name="Path 561"
                  d="M653.7,453.168s4.576,110.222,11.618,126.654c5.866,13.688,9.289,58.322,10.269,72.851.2,2.914.295,4.616.295,4.616s18.78,0,19.954-4.7,4.7-56.34,0-72.772,5.988-130.175,5.988-130.175Z"
                  transform="translate(973.088 2012.355)"
                  fill="#2f2e41"
                />
                <path
                  className="Path_562"
                  data-name="Path 562"
                  d="M674.074,720.74s-11.737,3.521-14.085,8.216-41.081,12.911-29.343,18.78,46.95-4.695,46.95-4.695,18.78-1.174,17.606-8.216-5.448-15.72-5.448-15.72Z"
                  transform="translate(979.586 1943.037)"
                  fill="#2f2e41"
                />
                <path
                  className="Path_563"
                  data-name="Path 563"
                  d="M718.322,737.754s-11.738,3.521-14.085,8.216-41.081,12.911-29.344,18.78,46.95-4.7,46.95-4.7,18.78-1.174,17.606-8.216S734,736.119,734,736.119Z"
                  transform="translate(968.203 1938.66)"
                  fill="#2f2e41"
                />
                <path
                  className="Path_564"
                  data-name="Path 564"
                  d="M667.757,447.635l16.432,28.17,27.425,97.942s-2.776,89.858.745,89.858,22.3,5.869,23.475,0c.991-4.957,14.138-52.446,7.585-84.055a404.183,404.183,0,0,1-8.2-60.64l-2.9-54.843s11.737-21.127-1.174-24.649S667.757,447.635,667.757,447.635Z"
                  transform="translate(969.471 2015.156)"
                  fill="#2f2e41"
                />
                <circle
                  className="Ellipse_93"
                  data-name="Ellipse 93"
                  cx="28.17"
                  cy="28.17"
                  r="28.17"
                  transform="translate(1624.316 2225.693)"
                  fill="#f3d5d9"
                />
                <path
                  className="Path_565"
                  data-name="Path 565"
                  d="M683.56,191.045s4.695,37.56,3.521,39.907,28.17-25.823,28.17-25.823-10.564-16.432-8.216-24.649Z"
                  transform="translate(965.405 2081.599)"
                  fill="#f3d5d9"
                />
                <path
                  className="Path_566"
                  data-name="Path 566"
                  d="M740.753,235.516s-32.865-23.475-34.039-28.17l-24.649,21.127-4.188-4.986s-19.287,19.071-19.287,27.287-1.174,32.865,2.347,39.907-10.564,96.247-10.564,96.247,11.737,10.564,12.911,11.738,48.124-7.043,48.124-7.043,23.475-2.347,23.475-5.869-7.042-56.34-4.7-70.425S740.753,235.516,740.753,235.516Z"
                  transform="translate(973.942 2074.688)"
                  fill="#d0cde1"
                />
                <path
                  className="Path_567"
                  data-name="Path 567"
                  d="M737.783,289.52s5.869,76.294-2.348,78.641-37.56,19.954-84.51,15.259c0,0-45.776,24.649-38.734,1.174s38.734-17.606,38.734-17.606,56.34-11.737,58.688-19.954-7.043-42.255-3.521-43.429S737.783,289.52,737.783,289.52Z"
                  transform="translate(983.954 2053.548)"
                  fill="#f3d5d9"
                />
                <path
                  className="Path_568"
                  data-name="Path 568"
                  d="M664.937,142.762c3.851-1.37,8.1-2.074,12.025-.938,5.557,1.608,9.405,6.479,13.556,10.508s9.972,7.6,15.437,5.7a9.051,9.051,0,0,1,1.729-6.684,6.149,6.149,0,0,0,1.535-2.555c.233-1.509-1.035-2.81-1.416-4.289-.667-2.591,1.161-6.138-1.086-7.59-.593-.383-1.344-.471-1.923-.875-2.272-1.588.251-5.537-1.251-7.866a4.8,4.8,0,0,0-1.707-1.424c-10.892-6.355-24.211-6.373-36.82-6.213-1.755.022-4.2.894-3.7,2.578-2.383-1.71-5.5.691-7.424,2.908l-3.931,4.538a34.958,34.958,0,0,0-4.8,6.5c-1.2,2.3-1.467,5.827.924,6.829-1.777-.744-3.933,9.781,4.259,8.049C655.1,150.935,659.761,144.6,664.937,142.762Z"
                  transform="translate(975.516 2097.029)"
                  fill="#2f2e41"
                />
                <path
                  className="Path_569"
                  data-name="Path 569"
                  d="M743.112,247.62l18.78-2.347s18.78,36.386,8.216,42.255-37.56,10.564-37.56,8.216S743.112,247.62,743.112,247.62Z"
                  transform="translate(952.803 2064.931)"
                  fill="#d0cde1"
                />
                <path
                  className="Path_570"
                  data-name="Path 570"
                  d="M875.824,677.171c-.2-.32-4.817-8.035-6.418-24.056-1.469-14.7-.525-39.473,12.324-74.031,24.341-65.469-5.609-118.293-5.916-118.819l1.478-.857c.078.133,7.806,13.6,12.371,35.047a152.9,152.9,0,0,1-6.333,85.224c-24.3,65.357-6.234,96.3-6.049,96.6Z"
                  transform="translate(917.729 2009.844)"
                  fill="#3f3d56"
                />
                <circle
                  className="Ellipse_94"
                  data-name="Ellipse 94"
                  cx="11.101"
                  cy="11.101"
                  r="11.101"
                  transform="translate(1772.936 2444.064)"
                  fill="#cf2e3b"
                >
                  <animate
                    begin="0s"
                    dur="2s"
                    attributeName="r"
                    repeatCount="indefinite"
                    values="0;11;0"
                  />
                </circle>
                <circle
                  className="Ellipse_95"
                  data-name="Ellipse 95"
                  cx="11.101"
                  cy="11.101"
                  r="11.101"
                  transform="translate(1807.944 2485.051)"
                  fill="#cf2e3b"
                >
                  <animate
                    begin="0.2s"
                    dur="2s"
                    attributeName="r"
                    repeatCount="indefinite"
                    values="0;11;0"
                  />
                </circle>
                <circle
                  className="Ellipse_96"
                  data-name="Ellipse 96"
                  cx="11.101"
                  cy="11.101"
                  r="11.101"
                  transform="translate(1784.035 2512.376)"
                  fill="#cf2e3b"
                >
                  <animate
                    begin="0.4s"
                    dur="2s"
                    attributeName="r"
                    repeatCount="indefinite"
                    values="0;11;0"
                  />
                </circle>
                <circle
                  className="Ellipse_97"
                  data-name="Ellipse 97"
                  cx="11.101"
                  cy="11.101"
                  r="11.101"
                  transform="translate(1813.068 2535.431)"
                  fill="#cf2e3b"
                >
                  <animate
                    begin="0.6s"
                    dur="2s"
                    attributeName="r"
                    repeatCount="indefinite"
                    values="0;11;0"
                  />
                </circle>
                <circle
                  className="Ellipse_98"
                  data-name="Ellipse 98"
                  cx="11.101"
                  cy="11.101"
                  r="11.101"
                  transform="translate(1775.496 2571.294)"
                  fill="#cf2e3b"
                >
                  <animate
                    begin="0.8s"
                    dur="2s"
                    attributeName="r"
                    repeatCount="indefinite"
                    values="0;11;0"
                  />
                </circle>
                <path
                  className="Path_571"
                  data-name="Path 571"
                  d="M886.641,736.582s-11.1-27.325,22.2-47.818Z"
                  transform="translate(913.619 1950.842)"
                  fill="#3f3d56"
                />
                <path
                  className="Path_572"
                  data-name="Path 572"
                  d="M853.582,742.5s-5.052-29.058-44.154-28.809Z"
                  transform="translate(933.025 1944.43)"
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
export default WaveForm
