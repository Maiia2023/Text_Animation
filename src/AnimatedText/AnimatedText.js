import { useRef, useEffect } from 'react';

/** @typedef {import('./types').AnimatedTextProps} Props */

/**
 * @function AnimatedText
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const AnimatedText = (props) => {
  const animatedTextRef = useRef(null);
  console.log(animatedTextRef);

  useEffect(() => {});

  // сначала в браузере появляется тэг р
  // затем нужна ссылка на дом узел тэга р
  // затем в useEffect выполняем добавление контента в тэг по ссылке
  // текст - это массив символов
  // запускаем цикл и во время итерации печатаем символ с задержкой
  // создать тэг спан

  return (
    <p ref={animatedTextRef}>
      {props.text}
    </p>
  );
};

