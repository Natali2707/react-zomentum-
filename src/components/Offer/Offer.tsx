import './styles.scss';
import { ReactComponent as CustomerIcon } from '../../assets/icons/customer.svg'
import { ReactComponent as PlatformIcon } from '../../assets/icons/platform.svg'
import { ReactComponent as HystogrammIcon } from '../../assets/icons/grow.svg'

export const Offer = () => {
  return (
    <div className='offer'>
      <div className='offer__container container offer__container-bg'>
        <h1 className='offer__title title-offer title'>List. Sell. Grow</h1>
        <div className='offer__card-inner'>
          <div className='offer__card'>
            <PlatformIcon className='offer__pic' />
            <p className='offer__text'>Be a part of the only  All-In-One platform for IT services </p>
          </div>
          <div className='offer__card'>
            <CustomerIcon className='offer__pic' />
            <p className='offer__text'>Come closer to finding your next <br />customer</p>
          </div>
          <div className='offer__card'>
            <HystogrammIcon className='offer__pic' />
            <p className='offer__text'>Grow your business with a<br />single click</p>
          </div>
        </div>
      </div>
    </div>
  )
}

