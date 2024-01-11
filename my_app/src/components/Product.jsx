import React from 'react'

export default function Product({title, description, price, disconts}) {
return (
   <div>
      <p>Title:{title} </p>
      <p>Description: {description}</p>
      <p>Price: {price} </p>
      <p>Disconts: {disconts} </p>
   </div>
)
}
