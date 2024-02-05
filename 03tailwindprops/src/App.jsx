import './App.css'
import Card from './components/Card'

function App() {
const newArr = [1,2,3,4]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card user='maguito explosivo' rol='mago' content='soy un mago' />
      <Card user='usuario 2' rol='barco' pic='https://images.pexels.com/photos/14219545/pexels-photo-14219545.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
      <Card user={newArr} rol='dinosaurio' />     
    </>
  )
}

export default App
