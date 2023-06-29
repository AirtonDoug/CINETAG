import Banner from 'components/Banner'
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import { useFavoritoContext } from 'context/Favoritos'

export default function Favoritos() {
  const { favoritos } = useFavoritoContext();
  
  return (
    <div>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
          {favoritos && favoritos.map((fav)=> <Card{...fav} key={fav.id} />)}
      </section>

    </div>
  )
}
