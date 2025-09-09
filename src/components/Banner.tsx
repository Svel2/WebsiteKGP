'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  id: number;
  image: string;
  strap: string;
  title: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/jumbotron1.jpg',
    strap: 'NEW CASE STUDY',
    title: 'Uptime wins revenue back',
    link: '#'
  },
  {
    id: 2,
    image: '/images/jumbotron2.jpg',
    strap: 'FIELD SUPPORT',
    title: 'Nationwide certified engineers',
    link: '#'
  },
  {
    id: 3,
    image: '/images/jumbotron3.jpg',
    strap: 'SECURITY',
    title: 'EMV and firmware hardening',
    link: '#'
  }
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isBusy, setIsBusy] = useState(false);
  const [isGlobalCooldown, setIsGlobalCooldown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [startIndex, setStartIndex] = useState(1);
  
  const trackRef = useRef<HTMLDivElement>(null);
const autoplayTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const COOLDOWN_TIME = 1000;
  const allSlides = [slides[slides.length - 1], ...slides, slides[0]]; // Add clones

  const goToSlide = (index: number, animate = true) => {
    setCurrentIndex(index);
    if (trackRef.current) {
      trackRef.current.style.transition = animate ? 'transform .6s ease' : 'none';
      trackRef.current.style.transform = `translateX(${-index * 100}%)`;
    }
  };

  const startCooldown = () => {
    setIsGlobalCooldown(true);
    setTimeout(() => {
      setIsGlobalCooldown(false);
    }, COOLDOWN_TIME);
  };

  const handlePrev = () => {
    if (isBusy || isGlobalCooldown) return;
    setIsBusy(true);
    goToSlide(currentIndex - 1, true);
    startCooldown();
    resetAutoplay();
  };

  const handleNext = () => {
    if (isBusy || isGlobalCooldown) return;
    setIsBusy(true);
    goToSlide(currentIndex + 1, true);
    startCooldown();
    resetAutoplay();
  };

  const resetAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    autoplayTimerRef.current = setInterval(() => {
      if (!isBusy) {
        setIsBusy(true);
        goToSlide(currentIndex + 1, true);
      }
    }, 5000);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      goToSlide(allSlides.length - 2, false);
    } else if (currentIndex === allSlides.length - 1) {
      goToSlide(1, false);
    }
    setIsBusy(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isGlobalCooldown) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setDeltaX(0);
    setStartIndex(currentIndex);
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
    }
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || isGlobalCooldown) return;
    const newDeltaX = e.clientX - startX;
    setDeltaX(newDeltaX);
    const percent = -startIndex * 100 + (newDeltaX / window.innerWidth) * 100;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${percent}%)`;
    }
  };

  const handleMouseUp = () => {
    if (!isDragging || isGlobalCooldown) return;
    setIsDragging(false);
    const threshold = window.innerWidth * 0.12;

    setIsBusy(true);
    if (deltaX > threshold) {
      goToSlide(currentIndex - 1, true);
      startCooldown();
    } else if (deltaX < -threshold) {
      goToSlide(currentIndex + 1, true);
      startCooldown();
    } else {
      goToSlide(currentIndex, true);
      setIsBusy(false);
    }
    resetAutoplay();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isGlobalCooldown) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDeltaX(0);
    setStartIndex(currentIndex);
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
    }
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || isGlobalCooldown) return;
    const newDeltaX = e.touches[0].clientX - startX;
    setDeltaX(newDeltaX);
    const percent = -startIndex * 100 + (newDeltaX / window.innerWidth) * 100;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${percent}%)`;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging || isGlobalCooldown) return;
    setIsDragging(false);
    const threshold = window.innerWidth * 0.12;

    setIsBusy(true);
    if (deltaX > threshold) {
      goToSlide(currentIndex - 1, true);
      startCooldown();
    } else if (deltaX < -threshold) {
      goToSlide(currentIndex + 1, true);
      startCooldown();
    } else {
      goToSlide(currentIndex, true);
      setIsBusy(false);
    }
    resetAutoplay();
  };

  useEffect(() => {
    // Initialize at first real slide
    goToSlide(1, false);

    // Start autoplay
    resetAutoplay();

    // Add global event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section
      className="Banner"
      aria-roledescription="Banner"
      aria-label="Featured slides"
      id="Banner"
    >
      <div className="Banner-viewport" role="group" aria-live="polite">
        <div 
          ref={trackRef}
          className="Banner-track" 
          id="track"
          onTransitionEnd={handleTransitionEnd}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {allSlides.map((slide, index) => (
            <article key={`${slide.id}-${index}`} className="slide" aria-label={`Slide ${index + 1}`}>
              <Image
                src={slide.image}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 1} // Priority for first real slide
                draggable={false}
              />
              <div className="caption">
                <p className="strap">{slide.strap}</p>
                <h2>{slide.title}</h2>
                <Link href={slide.link} className="cta-outline">
                  <span>LEARN MORE</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button 
        className={`arrow prev ${isGlobalCooldown ? 'disabled' : ''}`}
        aria-label="Previous slide" 
        onClick={handlePrev}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button 
        className={`arrow next ${isGlobalCooldown ? 'disabled' : ''}`}
        aria-label="Next slide" 
        onClick={handleNext}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
    </section>
  );
}
