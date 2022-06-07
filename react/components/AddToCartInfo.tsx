/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'

import ButtonGroup from './ButtonGroup'
import Totalizers from './Totalizers'
import styles from './styles.css'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)
  const {
    orderForm: { items, totalizers },
  } = useOrderForm()

  return (
    <div className={container}>
      {items?.map((item: any, index: number) => {
        return (
          <div key={index} className={container__item}>
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
      {totalizers.length && (
        <Totalizers totalizers={totalizers} itemsLength={items.length} />
      )}

      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo
