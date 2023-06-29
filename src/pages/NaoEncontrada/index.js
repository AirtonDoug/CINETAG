import React from 'react'
import styles from './NaoEncontrada.module.css'
export default function NaoEncontrada() {
  return (
    <section className={styles.container}>
        <h2>Ops</h2>
        <p>O conteúdo que voce procurou não foi encontrado</p>
    </section>
  )
}
