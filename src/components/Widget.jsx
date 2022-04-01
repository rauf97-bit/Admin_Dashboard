import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'

const Widget = ({type}) => {
  let data;
    switch (type) {
      case "users":
        data = {
          title: "USERS",
          isMoney: false,
          link: "See all users",
          icon : <PersonOutlined className='bg-violet-200 text-violet-500' />
        }
        break;
      case "orders":
        data = {
          title: "ORDERS",
          isMoney: false,
          link: "See all orders",
          icon : <ShoppingCartOutlined className='bg-orange-200 text-orange-500' />
        }
        break;
      case "earnings":
        data = {
          title: "EARNINGS",
          isMoney: true,
          link: "View net earnings",
          icon : <MonetizationOnOutlined className='bg-green-200 text-green-500' />
        }
        break;
      case "balance":
        data = {
          title: "BALANCE",
          isMoney: true,
          link: "See all users",
          icon : <AccountBalanceWalletOutlined className='bg-blue-200 text-blue-500' />
        }
        break;
    
      default:
        break;
    }
    let amount = 100
    let diff = 20
  return (
    <div className='widget flex-1 h-[24vh] relative p-5 mx-2 shadow-xl rounded-md'>
      <div className="flex justify-between h-full pb-2 items-stretch">
        <div className="flex flex-col justify-between">
          <h2 className="text-gray-600 text-xl">{data.title}</h2>
          <div className="text-3xl">{data.isMoney && "$"}{amount}</div>
          <p className="text-gray-600 text-md border-b-[1px] border-b-gray-500">{data.link}</p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex">
          <KeyboardArrowUp />
          <span>{diff}%</span>
          </div>
          <div className=" self-end">
          {data.icon}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Widget