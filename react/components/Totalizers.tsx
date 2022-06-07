import React from 'react'

type Props = {
  totalizers: any
  itemsLength: number
}

const Totalizers = ({ totalizers, itemsLength }: Props) => {
  const [{ value }] = totalizers

  return (
    <div>
      <p>Tenemos {itemsLength} items en tu compra</p>
      <p>Total: ${value / 100}</p>
    </div>
  )
}

export default Totalizers
