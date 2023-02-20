import React from 'react'

const List = () => {
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

  // const listItems = people.map(person =>
  //   <li>{person}</li>
  // );
  
  return (
    <div>
 <ul>
        {people.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  )
}

export default List