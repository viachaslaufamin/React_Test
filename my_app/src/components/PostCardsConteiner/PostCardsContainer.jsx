import React from 'react'
import PostCard from '../PostCard/PostCard'
import s from './PostCardsConteiner.module.css'

export default function PostCardsContainer() {
   const postsData = [
      {
      id: 1,
      title: 'About weather',
      text: 'Its very warm today!',
      likes: 5,
      coments_count: 67
      },
      {
      id: 2,
      title: 'About university',
      text: 'My favorite subject is Math',
      likes: 13,
      coments_count: 34
      },
      {
      id: 3,
      title: 'About myself',
      text: 'My name is Anna',
      likes: 3,
      coments_count: 75
      }
   ]
   return (
   <div className={s.posts_conteiner}>
      {postsData.map(el=> <PostCard {...el} key={el.id}/>)}
   </div>
   )
}
