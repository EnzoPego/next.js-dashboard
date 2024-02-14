import {CartCounter} from '@/app/shopping-cart/Components/CartCounter'


export const metadata = {
  title:'Counter Page',
  description:'Contador'
}

export default function CounterPage() {

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span>Productos</span>

      <CartCounter  value={10}/>
      
    </div>
  );
}