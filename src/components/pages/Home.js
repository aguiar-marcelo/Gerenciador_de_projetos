import styles from './Home.module.css'
import img from "../../img/resumo.png";

import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem Vindo ao <span>GPI</span>
      </h1>
      <p>
        Gerenciador de Projetos Inteligente <br />
        Gerencie os seus projetos da melhor forma!
      </p>
      <LinkButton to="/newproject" text="Criar projeto" />
      <img src={img} alt="" />
    </section>
  )
}

export default Home
