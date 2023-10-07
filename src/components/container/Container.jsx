import React from 'react'
import style from '~/style'

const Container = (props) => {
  return (
    <section className={props.classCustom}>
        <div className={`${style.boxWidth} mx-auto`}>{props.children}</div>
    </section>
  )
}

export default Container