import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import styles from './Inicio.module.css'
import React, { useEffect, useState } from 'react'



export default function Inicio() {
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/AirtonDoug/cinetag-api/videos")
    .then((response)=>response.json())
    .then(data=>{
      setVideos(data)
    })
  },[])
  return (
    <>
      <Banner imagem="home"/>
      <Titulo>
        <h1>Um lugar para guardar suas séries e filmes!</h1>
      </Titulo>
        <section className={styles.container}>
          {videos.map((video)=>{
           return <Card {...video} key={video.id} />
          })}
        </section>
       
    </>

  )
}
