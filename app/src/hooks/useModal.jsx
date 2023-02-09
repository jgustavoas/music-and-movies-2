import { useState } from 'react';

export default function useModal(state) {
  const [isOpen, toggleModal] = useState(state);

  return [isOpen, toggleModal];
}
