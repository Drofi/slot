import { getComponentWithSlots, getSlot } from '../slot';

const [Top, RenderTopSlot] = getSlot();
const [Middle, RenderMiddleSlot] = getSlot();
const [Bottom, RenderBottomSlot] = getSlot();

type WrapperProps = { title: string };

const Wrapper = getComponentWithSlots(({ title }: WrapperProps) => (
  <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800">
    <RenderTopSlot />

    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>

    <RenderMiddleSlot />

    <RenderBottomSlot />
  </div>
));

export const TestCardWithSlots = {
  Wrapper,
  Top,
  Middle,
  Bottom,
};
