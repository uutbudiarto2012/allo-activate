import  './AppHeader.scss'
import {BsChevronLeft} from 'react-icons/bs'

const AppHeader = () => {
  return (
    <div className='wrapper'>
      <div className="left">
        <BsChevronLeft />
      </div>
      <div className="right">
        <h2 className="title">ACTIVATE ALLO PAY</h2>
      </div>
    </div>
  )
}

export default AppHeader