import React, { useState } from 'react';

// El componente Post no tiene componentes hijos.
// ESTADO: Post debe tener un número para almacenar la cantidad de likes, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Post debe tener un método para manejar el click de su boton, el cual debe:
//  - sumar 1 like al posteo
//  - sumar en la cantidad total de likes contabilizada por App
//  - mostrar en consola qué posteo sumó un like
// PROPS: Post recibe todos los campos que muestra en pantalla: titulo, texto, likes y el método heredados para sumar en el total.
// Maqueta de Post:
//    h3
//    p
//    button       (este boton debe permitir sumar likes)
//    h5    (este h5 debe mostrar la cantidad de likes, pero si la misma es mayor a 10 debe decir "Más de 10 likes")

export default function Post({ post, addTotalLike }) {

  const [likes, setLikes] = useState(post.likes); //NOTE - EXCELENTE PRÁCTICA EN ASIGNAR UN VALOR ESTÁTICO A UN ESTADO PARA PODERLO MANEJAR.

  const addLike = () => {
    setLikes(likes + 1);
    addTotalLike();
    console.log("Suma 1 like: " + post.titulo);
  }

  return (
    <div className='posteo'>
      <h3>{post.titulo}</h3>
      <p>{post.texto}</p>
      <button onClick={addLike}>👍</button>
      <h5>{likes > 10 ? "Más de 10 likes" : "Likes " + likes}</h5>
    </div>
  );

}