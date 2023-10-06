import React from 'react'

const Container = (props) => {
  return (
    <section className={props.classCustom}>
        <div className='xl:max-w-[1280px] w-full mx-auto'>{props.children}</div>
    </section>
  )
}

export default Container