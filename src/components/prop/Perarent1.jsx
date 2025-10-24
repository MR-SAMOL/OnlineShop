import React from 'react'
import Child1 from './Child1'

const Perarent1 = () => {
  return (
    <div className="p-4">
      <Child1 
        data={[
          {
            img: 'https://i.pinimg.com/1200x/0e/f1/13/0ef113de4b877881bd328ee17f51f640.jpg', 
            name: ' Sneakers',                
            price: 20                             
          },
          {
            img: 'https://i.pinimg.com/1200x/bc/e5/69/bce56949283aefd207752b946992883e.jpg',
            name: 'Sneakers',
            price: 29.99
          },
          {
            img: 'https://i.pinimg.com/736x/17/d6/c2/17d6c226af8959a9c6d72c328cef5d4d.jpg',
            name: 'Sneakers',
            price: 19.99
          },
          {
            img: 'https://i.pinimg.com/736x/b4/71/2e/b4712e7c85c13eb4af6e611464899ea7.jpg',
            name: 'Sneakers',
            price: 19.99
          },
          {
            img: 'https://i.pinimg.com/1200x/e9/fe/1a/e9fe1ae23f072c157fa7f3b47af0eb90.jpg',
            name: 'Sneakers',
            price: 19.99
          },
          {
            img: 'https://i.pinimg.com/736x/5f/25/77/5f257711482c0ba6f38f19013e9aea7b.jpg',
            name: 'Sneakers',
            price: 19.99
          },
          {
            img: 'https://i.pinimg.com/1200x/86/9b/84/869b849412d7f7bbb8d93be9d72fea15.jpg',
            name: 'Sneakers',
            price: 19.99
          },
          {
            img: 'https://i.pinimg.com/736x/1f/6d/66/1f6d66ebb2b7b6236e67cf5037890c5c.jpg',
            name: 'Sneakers',
            price: 19.99
          },
              
        ]}
      />
    </div>
  )
}

export default Perarent1
