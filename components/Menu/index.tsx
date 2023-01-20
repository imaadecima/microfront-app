import React, { Dispatch, SetStateAction } from 'react'

interface IMenu {
  setCount?: Dispatch<SetStateAction<number>>
}

const Menu = ({ setCount }: IMenu) => {
  return (
    <>
      <div>
        <ul>
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Preferences</li>
          <li>About</li>
          <li>Log Out</li>
          <li
            onClick={() => {
              if (typeof setCount === 'function') {
                setCount((prevState) => prevState + 1)
              }
            }}
          >
            Increment Count
          </li>
        </ul>
      </div>
      <style jsx>{`
        div {
          display: flex;
          width: 100%;
        }

        ul {
          width: 100%;
          margin: 0;
          padding: 0.5rem 0;
          flex-direction: column;
        }

        li {
          width: 100%;
          list-style: none;
          color: #666;
          font-weight: 400;
          font-size: 1.1rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 200ms ease;
          user-select: none;
        }

        li:hover {
          background-color: #e5e5e5;
          color: black;
        }

        li:last-child {
          color: #0070f3;
          font-weight: 500;
        }
      `}</style>
    </>
  )
}

export default Menu
