import { AnimatedText } from 'AnimatedText';

export const App = () => {
  const text = 'some text';
  return (
    <div className="app">
      <AnimatedText text={text} width={300}/>
    </div>
  );
};
