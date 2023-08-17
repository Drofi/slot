import AppleWatchPng from './assets/apple-watch.png';
import { TestCardWithSlots } from './components/TestCardWithSlots.tsx';
import { Rating } from './components/Rating.tsx';

export function App() {
  return (
    <TestCardWithSlots.Wrapper title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport">
      <TestCardWithSlots.Top>
        <a href="#">
          <img className="rounded-t-lg p-8 pt-0" src={AppleWatchPng} alt="product image" />
        </a>
      </TestCardWithSlots.Top>

      <TestCardWithSlots.Middle>
        <div className="mb-5 mt-2.5">
          <Rating mark={4} />
        </div>
      </TestCardWithSlots.Middle>

      <TestCardWithSlots.Bottom>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>

          <button className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </TestCardWithSlots.Bottom>
    </TestCardWithSlots.Wrapper>
  );
}
