import React from 'react'
import { useEffect } from 'react'
import { Parallax } from 'react-parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faBehance,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import ReactTypingEffect from 'react-typing-effect'
import './styles.scss'

const bannerImage = require('../../../assets/imgs/banner.webp')
const profileImage = require('../../../assets/imgs/profile.jpeg')

function HomeComponent() {
  const cardRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const rightRef = React.useRef() as React.MutableRefObject<HTMLInputElement>

  const getPosition = () => {
    const body = document.body.getBoundingClientRect()

    if (body.width > 992) {
      if (Math.abs(body.top) >= 145) {
        cardRef.current.className = 'info-card fixed'
        rightRef.current.className = 'right fixed'
        cardRef.current.style.cssText = ` height: calc(${body.height}px - 30rem); top: 26rem`
      } else {
        cardRef.current.className = 'info-card'
        rightRef.current.className = 'right'
        cardRef.current.style.cssText = ``
      }
    }
  }

  useEffect(() => {
    getPosition()
    window.addEventListener('scroll', getPosition)
    document.title = 'Gabriel Reis - Dev. Full-Stack'
  }, [])

  return (
    <div id="home">
      <header className="default">
        <div className="container">
          <div className="logo">
            {'<'}Gabriel<span>.Reis {' />'}</span>
          </div>
          <div className="menu">
            <ul>
              <li className="active">
                <a href="/home">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="banner">
        <Parallax strength={560} bgImage={bannerImage}></Parallax>
      </div>

      <div className="container">
        <div className="left">
          <div className="info-card" ref={cardRef}>
            <div
              className="avatar"
              style={{
                backgroundImage: `url(${profileImage})`,
              }}
            ></div>
            <h2 className="name">Gabriel Reis</h2>
            <p className="description">
              <ReactTypingEffect
                speed={100}
                eraseSpeed={50}
                text={[
                  'Front-End Developer',
                  'Back-End Developer',
                  'Full-Stack Developer',
                ]}
              ></ReactTypingEffect>
            </p>
            <div className="divisor"></div>
            <div className="social">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gabriel-reis-b26193114/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/gabriieelreeis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://behance.net/gabriieelreeis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faBehance} size="1x" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/gabriieelreeis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="divisor"></div>
            <div className="infos">
              <div className="info">
                <p className="option">Pais:</p>
                <p className="value">Brasil</p>
              </div>
              <div className="info">
                <p className="option">Cidade:</p>
                <p className="value">Belo Horizonte</p>
              </div>
              <div className="info">
                <p className="option">Idade:</p>
                <p className="value">26</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right" ref={rightRef}>
          <h1 className="banner-text">
            <ReactTypingEffect
              speed={100}
              typingDelay={50}
              eraseSpeed={50}
              text={[
                'Eu crio lindos sites.',
                'Eu crio apps moveis.',
                'Eu amo Flutter.',
                'Eu amo Javascript.',
                'Eu adoro desafios.',
              ]}
            ></ReactTypingEffect>
          </h1>
          <section className="sobre">
            <div className="title">
              <p>Sobre mim</p>
              <div className="divisor"></div>
              <p className="cap">01</p>
            </div>
            <div className="card quote">
              <p className="description">
                Meu nome é Gabriel Reis e este é o meu portfólio (para não dizer
                a minha vida!)
              </p>
              <p className="description">
                Eu sou um cara realmente fascinado por tudo o que envolve a
                internet.
              </p>
              <p className="description">
                Um interesse que surgiu quando ganhei meu primeiro computador.
              </p>
              <p className="description">
                Então desde pequeno, a minha motivação sempre foi aprender como
                os programas funcionam, como os arquivos são lidos e como os
                sites são feitos. Com isso muito claro na minha mente, não tive
                dúvidas do caminho a ser seguido. Em meu aniversário de 12 anos,
                pedi de presente um curso de Web Master para minha mãe.
              </p>
              <p className="description">
                De lá pra cá, nunca mais parei de estudar.
              </p>
              <p className="description">
                Hoje estou imerso nas principais formas de programação para me
                aprofundar nas linguagens mais importantes do mercado. De olho
                nessas demandas, me consolidei como programador Front e Back-End
                com o objetivo de melhorar a performance dos meus clientes.
              </p>
              <p className="description">
                Enfim, se o seu negócio precisa de soluções digitais na web,
                entre contato comigo agora mesmo!
              </p>
            </div>
          </section>
          <section className="skills">
            <div className="title">
              <p>Minhas Skills</p>
              <div className="divisor"></div>
              <p className="cap">02</p>
            </div>
            <div className="skills-list">
              <div className="skill">
                <p className="name">HTML</p>
                <div className="percentage">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                </div>
              </div>
              <div className="skill">
                <p className="name">CSS</p>
                <div className="percentage">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                </div>
              </div>
              <div className="skill">
                <p className="name">Javascript/Typescript</p>
                <div className="percentage">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span></span>
                </div>
              </div>
              <div className="skill">
                <p className="name">PHP</p>
                <div className="percentage">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="skill">
                <p className="name">NodeJS</p>
                <div className="percentage">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="skill">
                <p className="name">Angular</p>
                <div className="percentage">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span></span>
                </div>
              </div>
              <div className="skill">
                <p className="name">ReactJS</p>
                <div className="percentage">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span></span>
                </div>
              </div>
              <div className="skill">
                <p className="name">Flutter</p>
                <div className="percentage">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="skill">
                <p className="name">React-Native</p>
                <div className="percentage">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="skill">
                <p className="name">MySQL</p>
                <div className="percentage">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="skill">
                <p className="name">MongoDB</p>
                <div className="percentage">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="skill">
                <p className="name">Cloud Services</p>
                <div className="percentage">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </section>

          <section className="portfolio">
            <div className="title">
              <p>Trabalhos</p>
              <div className="divisor"></div>
              <p className="cap">03</p>
            </div>
            <div className="works">
              <div
                className="work"
                style={{ backgroundImage: `url(${profileImage})` }}
              >
                <div className="title">ds</div>
              </div>
              <div
                className="work"
                style={{ backgroundImage: `url(${profileImage})` }}
              >
                <div className="title">ds</div>
              </div>
              <div
                className="work"
                style={{ backgroundImage: `url(${profileImage})` }}
              >
                <div className="title">ds</div>
              </div>
            </div>
          </section>

          <div className="divisor"></div>
          <footer className="default">
            <p>&copy; 2022 Todos os direitos reservados.</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
export default HomeComponent
