// this will definitely get updated soon
// very crude and my pixel art is pretty bad (sorry)

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Position {
  x: number;
  y: number;
}

export default function PixelArtEyes() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [eyePositions, setEyePositions] = useState<Position[]>([
    { x: 0, y: 0 }, // left eye
    { x: 0, y: 0 }, // right eye
  ]);

  // socket positions
  const leftEyeSocket: Position = { x: 130, y: 75 };
  const rightEyeSocket: Position = { x: 167, y: 75 };

  // eye movement range (how far the pupil can move from center)
  const eyeMovementRange = 3;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // eye positions based on mouse position
    const calculateEyePosition = (
      socketX: number,
      socketY: number
    ): Position => {
      // get element position
      const element = document.getElementById('character-container');
      if (!element) return { x: 0, y: 0 };

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + socketX;
      const centerY = rect.top + socketY;

      // calculate angle between mouse and eye
      const deltaX = mousePosition.x - centerX;
      const deltaY = mousePosition.y - centerY;
      const angle = Math.atan2(deltaY, deltaX);

      // calculate eye movement - keep within pixel grid
      const distance = Math.min(
        Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 30,
        1
      );

      // round to maintain pixel-perfect positioning
      const xMovement = Math.round(
        Math.cos(angle) * eyeMovementRange * distance
      );
      const yMovement = Math.round(
        Math.sin(angle) * eyeMovementRange * distance
      );

      return { x: xMovement, y: yMovement };
    };

    setEyePositions([
      calculateEyePosition(leftEyeSocket.x, leftEyeSocket.y),
      calculateEyePosition(rightEyeSocket.x, rightEyeSocket.y),
    ]);
  }, [
    mousePosition,
    leftEyeSocket.x,
    leftEyeSocket.y,
    rightEyeSocket.x,
    rightEyeSocket.y,
  ]);

  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div
        id='character-container'
        className='relative w-full h-full'
        style={{ imageRendering: 'pixelated' }}
      >
        <Image src='/frieren-no-eyes-4x.png' alt='Pixel Art Character' fill />

        {/* eyes */}
        <div
          className='absolute w-1 h-6 '
          style={{
            left: `${leftEyeSocket.x + 1}px`,
            top: `${leftEyeSocket.y - 10}px`,
            imageRendering: 'pixelated',
          }}
        >
          {/* left eye */}
          <Image
            src='/left-eye-4x.png'
            alt='Left eye'
            fill
            style={{
              transform: `translate(${eyePositions[0].x}px, ${eyePositions[0].y}px)`,
            }}
          />
        </div>

        <div
          className='absolute w-1 h-6'
          style={{
            left: `${rightEyeSocket.x + 1}px`,
            top: `${rightEyeSocket.y - 10}px`,
            imageRendering: 'pixelated',
          }}
        >
          {/* right eye */}
          <Image
            src='/right-eye-4x.png'
            alt='Right eye'
            fill
            style={{
              transform: `translate(${eyePositions[1].x}px, ${eyePositions[1].y}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
