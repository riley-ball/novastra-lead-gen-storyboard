import { useState } from 'react';
import { Frame1Contacts } from './components/Frame1Contacts';
import { Frame2Emails } from './components/Frame2Emails';
import { Frame3CRM } from './components/Frame3CRM';
import { Frame4Results } from './components/Frame4Results';
import { Frame5Revenue } from './components/Frame5Revenue';

export default function App() {
  const [currentFrame, setCurrentFrame] = useState(1);

  const nextFrame = () => {
    if (currentFrame < 5) {
      setCurrentFrame(currentFrame + 1);
    }
  };

  const prevFrame = () => {
    if (currentFrame > 1) {
      setCurrentFrame(currentFrame - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-[1920px]">
        {currentFrame === 1 && <Frame1Contacts onNext={nextFrame} onPrev={prevFrame} />}
        {currentFrame === 2 && <Frame2Emails onNext={nextFrame} onPrev={prevFrame} />}
        {currentFrame === 3 && <Frame3CRM onNext={nextFrame} onPrev={prevFrame} />}
        {currentFrame === 4 && <Frame4Results onNext={nextFrame} onPrev={prevFrame} />}
        {currentFrame === 5 && <Frame5Revenue onNext={nextFrame} onPrev={prevFrame} />}
      </div>
    </div>
  );
}
