import React from 'react'

const Item1 = () => {
  return (
    <>
      <div>
        <p>Esta página se encuentra dentro del router del repo de App.</p>
      </div>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}

export default Item1
