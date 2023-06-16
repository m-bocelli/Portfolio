import myself from '../assets/head.png'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div aria-label='head'>
        <a href="https://github.com/m-bocelli" target="_blank">
          <img src={myself} className="logo" alt="Pic of myself" />
        </a>
      </div>
      <h1><b>M</b>ichael <b>Bocelli</b></h1>
      <Footer></Footer>
    </>
  )
}

export default Home
