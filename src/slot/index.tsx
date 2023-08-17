import { createContext, FC, PropsWithChildren, ReactNode, useContext } from 'react';
import { findSlot } from './utils.ts';

const SlotContext = createContext<ReactNode>(null);
export const getComponentWithSlots =
  <P extends object>(SlotPlacer: FC<P>) =>
  ({ children, ...props }: { children: ReactNode } & P) => (
    <SlotContext.Provider value={children}>
      <SlotPlacer {...(props as P)} />
    </SlotContext.Provider>
  );

export const getSlot = () => {
  const Slot: FC<PropsWithChildren> = ({ children }) => children;
  const RenderSlot: FC = () => {
    const children = useContext(SlotContext);
    const state = findSlot(children, Slot);

    return state.result;
  };

  return [Slot, RenderSlot];
};
