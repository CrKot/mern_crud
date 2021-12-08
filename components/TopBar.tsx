import { NextPage } from "next";

export const TopBar: NextPage = () => {
  return (
    <div>
      <div className='top-bar'>
        <div className='top-bar__title'>
          CRUD
        </div>
        <div className='top-bar__shadow-subtext'>
          MERN
        </div>
      </div>
    </div>
  )
}
