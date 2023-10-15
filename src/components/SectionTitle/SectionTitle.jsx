import React from 'react'

const SectionTitle = ({Maintitle, Subtitle}) => {
  return (
    <>
        <h1 className='text-white text-center text-5xl font-medium mt-12 '> {Maintitle} </h1>
        <p className='text-primary text-center text-xl font-normal mt-3 mb-5' > {Subtitle} </p>
    </>
  )
}

export default SectionTitle