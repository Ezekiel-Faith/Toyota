import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function CardCarousel({ children, totalCount }) {
  const containerRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(0); // Current visible index
  const [cardWidth, setCardWidth] = useState(0); // Width of a card including margin
  const totalCards = Array.isArray(children) ? children.length : 0;

  const CARD_MARGIN = 20; // px, matches your `gap-5`

  // Measure card width on load or resize
  useEffect(() => {
    if (containerRef.current?.firstChild) {
      const card = containerRef.current.firstChild;
      const width = card.getBoundingClientRect().width;
      setCardWidth(width + CARD_MARGIN);
    }
  }, [children]);

  // Reset scroll and index when tab (children) changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0, behavior: 'auto' });
    }
    setVisibleIndex(0);
  }, [children]);

  // Scroll to specific index
  const scrollToIndex = (index) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setVisibleIndex(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = Math.max(0, visibleIndex - 2);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(totalCards - 1, visibleIndex + 2);
    scrollToIndex(newIndex);
  };

  return (
    <div className='relative ml-12'>
      <div
        className='flex flex-row overflow-x-auto gap-5 m-0 p-0 scroll-smooth scrollbar-hide'
        ref={containerRef}
      >
        {children}
      </div>

      {totalCards > 0 && (
        <div className='flex justify-center items-center mt-8 gap-20'>
          <button
            onClick={scrollLeft}
            className={`bg-black text-white rounded-full py-2 px-4 hover:bg-gray-400 hover:cursor-pointer duration-300 transition ${
              visibleIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label='Scroll Left'
            disabled={visibleIndex === 0}
          >
            <FaChevronLeft />
          </button>

          <span className='text-sm font-semibold text-gray-600'>
            {visibleIndex + 1} of {totalCount}
          </span>

          <button
            onClick={scrollRight}
            className={`bg-black text-white rounded-full py-2 px-4 hover:bg-gray-400 hover:cursor-pointer duration-300 transition ${
              visibleIndex + 2 >= totalCards
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
            aria-label='Scroll Right'
            disabled={visibleIndex + 2 >= totalCards}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
