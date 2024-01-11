import React from 'react'
import s from './PostCard.module.css'

export default function PostCard({title, text, likes, coments_count}) {

   const card_style = {
      backgroundColor: likes>=5 ? 'lightgreen': 'lightpink',
      border: coments_count>=67 ? '2px solid blue' : '2px solid red'
   }
   //const coments_style = {
   //   border: coments_count>=67 ? '2px solid blue' : '2px solid red'}
   return (
   <div style={card_style} className={s.post_card}>
      <p>Title: { title } </p>
      <p>Text: { text } </p>
      <p className={s.likes}>Likes: { likes } </p>
      <p>Coments_count: { coments_count } </p>
   </div>
   )
}
