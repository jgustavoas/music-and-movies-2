import { useState } from 'react';

export default function useModal(state) {
  const [[isOpen, data], toggleModal] = useState(state);

  return [[isOpen, data], toggleModal];
}
