
import { useState } from "react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

type Painting = {
  id: number;
  name: string;
  image: string;
  price: number;
  stock: number;
};

const paintingsData: Painting[] = [
  {
    id: 1,
    name: "The Starry Night",
    image: "https://picsum.photos/200/300?random=2",
    price: 300,
    stock: 1,
  },
  {
    id: 2,
    name: "The Persistence of Memory",
    image: "https://picsum.photos/200/300?random=1",
    price: 400,
    stock: 1,
  },
  {
    id: 3,
    name: "The Scream",
    image: "https://picsum.photos/200/300?random=3",
    price: 500,
    stock: 1,
  },
  {
    id: 4,
    name: "The Unkown",
    image: "https://picsum.photos/200/300?random=4",
    price: 340,
    stock: 1,
  },
  {
    id: 5,
    name: "The Mind",
    image: "https://picsum.photos/200/300?random=5",
    price: 520,
    stock: 1,
  },
];

export default function App() {
  const [cart, setCart] = useState<Painting[]>([]);
  const [paintings, setPaintings] = useState<Painting[]>(paintingsData);

  const addToCart = (painting: Painting) => {
    const updatedPaintings = paintings.map((p) =>
      p.id === painting.id ? { ...p, stock: p.stock - 1 } : p
    );
    setPaintings(updatedPaintings);
    setCart([...cart, painting]);
  };
  
  const BuyCart = () => {
    setCart([]);
  };


  const removeFromCart = (painting: Painting) => {
    const updatedCart = cart.filter((p) => p.id !== painting.id);
    const updatedPaintings = paintings.map((p) =>
      p.id === painting.id ? { ...p, stock: p.stock + 1 } : p
    );
    setCart(updatedCart);
    setPaintings(updatedPaintings);
  };

  return (
    <div className="flex flex-col">
      <h1 className="mx-auto md:text-5xl font-bold leading-normal mt-0 mb-2 text-cyan-800">
  The Picture Shop
</h1>
      {/* <h1 className="flex text-5xl my-5 mx-auto ">Painting Shop</h1> */}
      <div className="flex flex-wrap w-[90%] mx-auto justify-evenly gap-3">
        {paintings.map((painting) => (
<>
          
<div key={painting.id} className={`md:w-[22%] bg-white border-2 border-orange-200 rounded-lg shadow-xl  ${painting.stock > 0 ? '' : 'hidden'}`}>
        <img className=" rounded-t-lg w-[100%] h-[15em] " src={painting.image} alt={painting.name} />
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
            {painting.name}
            </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">${painting.price}</span>
            <button onClick={() => addToCart(painting)} className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</button>
        </div>
    </div>
</div>


          {/* <div key={painting.id} className={`flex flex-col h-[30vw] w-[25%] border-2 shadow-xl rounded-lg border-orange-400 ${painting.stock > 0 ? '' : 'hidden'}`}>
            <img src={painting.image} alt={painting.name} />
            <h2>{painting.name}</h2>
            <p>${painting.price}</p>
            {painting.stock > 0 ? (
              <button onClick={() => addToCart(painting)}>Add to cart</button>
            ) : (
              <p>Out of stock</p>
            )}
          </div> */}

          </>
        ))}
      </div>
      <h1 className="mx-auto md:text-5xl font-bold leading-normal mt-0 mb-2 text-cyan-800 ">
  Cart
</h1>
      {/* <h2 className="flex text-5xl my-5 mx-auto">Cart</h2> */}
      <div className="flex flex-wrap w-[90%] mx-auto justify-evenly gap-3 my-5">
        {cart.map((painting) => (

<div key={painting.id} className={`md:w-[22%] bg-white border-2 border-orange-200 rounded-lg shadow-xl  ${painting.stock > 0 ? '' : 'hidden'}`}>
<img className=" rounded-t-lg w-[100%] h-[15em] " src={painting.image} alt={painting.name} />
<div className="px-5 pb-5">
<a href="#">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
    <h2>{painting.name}</h2>
    </h5>
</a>
<div className="flex items-center mt-2.5 mb-5">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">5.0</span>
</div>
<div className="flex items-center justify-between">
    <span className="text-3xl font-bold text-gray-900">${painting.price}</span>
    <button onClick={() => removeFromCart(painting)} className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Remove from cart</button>
</div>
</div>
</div>

          // <div key={painting.id}>
          //   <img src={painting.image} alt={painting.name} />
          //   <h3>{painting.name}</h3>
          //   <p>${painting.price}</p>
          //   <button onClick={() => removeFromCart(painting)}>Remove from cart</button>
          // </div>
        ))}
      </div>

      {cart.length > 0 && (
      <button onClick={() => BuyCart() } className="mx-auto md:w-[10%] inline-flex overflow-hidden text-white bg-gray-900 rounded group my-5">
<span className="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
</span>
<span className="pl-4 pr-5 py-2.5">Buy Now</span>
</button>
      )
}
    </div>
  );
}
