import React from 'react'
import PropsType from 'prop-types'
import { CardProduct } from '~/components'

const ProductSlide = (props) => {
    const {products} = props
  return (
    <div className="product-slide flex">
      {products.map((product, index) => (
        <CardProduct key={index} {...product} />
      ))}
    </div>
  )
}

ProductSlide.propsType = {
    products: PropsType.array.isRequired
}

export default ProductSlide