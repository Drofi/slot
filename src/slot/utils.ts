import { Children, Fragment, ReactElement, ReactNode } from 'react';

type Nullable<T> = T | null | undefined;
type SlotComponentType = ({ children }: { children: ReactNode }) => ReactNode;

const getType = (element: ReactNode) => (element as Nullable<ReactElement>)?.type;

const getIsComponent =
  (component: SlotComponentType) =>
  (element: ReactNode): element is ReactElement =>
    getType(element) === component;

export const isFragment = getIsComponent(Fragment);

type State = {
  result: ReactNode;
  isFound: boolean;
};

export const findSlot = (children: ReactNode, component: SlotComponentType) =>
  findContent(children, getIsComponent(component));

function findContent(children: ReactNode, isComponent: (element: ReactNode) => element is ReactElement): State {
  const arr = Children.toArray(children);

  let state: State = {
    result: null,
    isFound: false,
  };

  for (const el of arr) {
    if (isComponent(el)) {
      state.result = el.props.children;
      state.isFound = true;
    } else if (isFragment(el)) {
      state = findContent(el.props.children, isComponent);
    }

    if (state.isFound) break;
  }

  return state;
}
