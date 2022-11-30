import { useEffect } from 'react'
import { Parallax } from 'react-parallax'
import './styles.scss'

const bannerImage = require('../../../assets/imgs/banner.webp')

function NotFoundPageComponent() {
  useEffect(() => {
    document.title = 'Gabriel Reis - Dev. Full-Stack'
  }, [])

  return (
    <div id="notfound">
      <div className="banner">
        <Parallax strength={560} bgImage={bannerImage}></Parallax>
      </div>

      <div className="container">
        <h1 className="banner-text">404 ERROR</h1>
        <p className="description">
          Tem certeza que é isso mesmo que estava procurando?
        </p>
      </div>
    </div>
  )
}
export default NotFoundPageComponent
