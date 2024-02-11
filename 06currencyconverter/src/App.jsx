import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('clp')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  // se puede acceder a las key con el metodo key de Object y pasarle el arreglo de donde saco los key
  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-[url("https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
      
      <div className='w-full'>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label={'from'}
              amount={amount}
              currencyOptions={options}
              onCurrencyChance={(currency)=>setFrom(currency)}
              onAmountChange={(amount)=>{setAmount(amount)}}
              selectedCurrency={from}
              />
            </div>
            <div className='realtive w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
              label={'to'}
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChance={(currency)=>setTo(currency)}
              selectedCurrency={to}
              amountDisabled
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default App
