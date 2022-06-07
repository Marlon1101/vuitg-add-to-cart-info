/* import React from 'react'

type Props = {
  products: []
}
const ProductGroup = ({ products }: Props) => {
  console.log(products)

  return (
    <>
      {products.map((item: any, index: number) => {
        console.log(item)

        return (
          <div key={index}>
            <div>
              <img src={item.imageUrls.at1x} alt="img" />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>${item.price / 100}</p>
              <p>Cant:{item.quantity}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ProductGroup
 */
