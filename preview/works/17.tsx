/* eslint-disable react/display-name */
import React, { memo, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { Circle } from 'rc-progress';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';

const initialValues = [
  {
    title: 'The Majestic Mountains',
    link: '#the-majestic-mountains',
    description: [
      "Towering peaks reach towards the sky, their snow-capped summits kissing the clouds. The rugged terrain of mountains offers a breathtaking display of nature's raw power and beauty.",
      'Hikers and adventurers are drawn to these formidable landscapes, seeking the thrill of conquest and the serenity of high-altitude vistas.',
    ],
  },
  {
    title: 'Lush Forests',
    link: '#lush-forests',
    description: [
      'Verdant canopies stretch as far as the eye can see, a sea of green teeming with life. Forests are the lungs of our planet, purifying the air and providing habitats for countless species.',
      'From the misty redwood groves of California to the tropical rainforests of the Amazon, these wooded realms hold secrets and wonders yet to be fully explored.',
      "The gentle rustle of leaves and the soft crunch of forest floor beneath one's feet create a symphony of tranquility.",
    ],
  },
  {
    title: 'Serene Lakes',
    link: '#serene-lakes',
    description: [
      'Mirror-like surfaces reflect the sky and surrounding landscape, creating a double world of beauty. Lakes serve as oases of calm in nature, their still waters hiding complex ecosystems beneath.',
    ],
  },
  {
    title: 'Winding Rivers',
    link: '#winding-rivers',
    description: [
      'Lifeblood of the land, rivers carve their paths through diverse terrains, shaping the world around them. From gentle streams to roaring rapids, these flowing waterways are essential to both wildlife and human civilizations.',
      'The constant motion of rivers reminds us of the ever-changing nature of our world and the importance of going with the flow.',
    ],
  },
  {
    title: 'Vast Deserts',
    link: '#vast-deserts',
    description: [
      'Seemingly barren landscapes that hide surprising biodiversity and resilience. Deserts teach us about adaptation and the tenacity of life in extreme conditions.',
      'The shifting sands and stark beauty of these arid regions have inspired artists, writers, and explorers for centuries.',
      'From the towering dunes of the Sahara to the alien landscapes of the Atacama, deserts offer a unique perspective on the diversity of our planet.',
    ],
  },
  {
    title: 'Coastal Wonders',
    link: '#coastal-wonders',
    description: [
      "Where land meets sea, a dynamic interplay of elements creates some of nature's most stunning vistas. Rugged cliffs, sandy beaches, and hidden coves showcase the relentless power and beauty of the ocean.",
      'Coastal ecosystems are among the most productive on Earth, supporting a rich variety of marine and terrestrial life.',
    ],
  },
  {
    title: 'Polar Regions',
    link: '#polar-regions',
    description: [
      "The Arctic and Antarctic, Earth's icy extremes, are lands of stark beauty and harsh conditions. Vast ice sheets, towering glaciers, and endless expanses of snow create otherworldly landscapes.",
      'Despite the challenging environment, these regions are home to unique and hardy species, from polar bears in the north to penguins in the south.',
    ],
  },
  {
    title: 'Tropical Islands',
    link: '#tropical-islands',
    description: [
      "Scattered across vast oceans, tropical islands are nature's paradise. Palm-fringed beaches, crystal-clear waters, and lush interiors create idyllic scenes that captivate the imagination.",
      'These isolated ecosystems often harbor unique species found nowhere else on Earth, making them hotspots of biodiversity and natural wonder.',
    ],
  },
  {
    title: 'Volcanic Landscapes',
    link: '#volcanic-landscapes',
    description: [
      "Forged by the Earth's fiery core, volcanic landscapes offer a glimpse into the planet's raw power. From smoldering craters to hardened lava fields, these formations are a testament to the Earth's dynamic nature.",
      "Despite their destructive force, volcanic soils often support rich ecosystems, demonstrating life's remarkable adaptability.",
    ],
  },
  {
    title: 'Ancient Forests',
    link: '#ancient-forests',
    description: [
      "Standing for centuries or even millennia, ancient forests are living museums of Earth's history. Towering redwoods, sprawling rainforests, and misty cloud forests harbor countless species and complex ecosystems.",
      'These forests play a crucial role in maintaining global climate and biodiversity, serving as the lungs of our planet.',
    ],
  },
  {
    title: 'Canyons and Gorges',
    link: '#canyons-and-gorges',
    description: [
      "Carved by the patient work of water over millions of years, canyons and gorges reveal the Earth's geological history in dramatic fashion. Their layered walls tell stories of ancient seas, shifting continents, and changing climates.",
      'From the Grand Canyon to the fjords of Norway, these formations offer breathtaking vistas and unique habitats for specialized flora and fauna.',
    ],
  },
  {
    title: 'Wetlands and Marshes',
    link: '#wetlands-and-marshes',
    description: [
      "Often overlooked, wetlands are among the most productive ecosystems on Earth. These water-saturated landscapes act as nature's filters, purifying water and providing crucial habitats for countless species of plants and animals.",
      'From the Everglades to the Pantanal, wetlands play a vital role in flood control, carbon sequestration, and maintaining biodiversity.',
    ],
  },
  {
    title: 'Alpine Meadows',
    link: '#alpine-meadows',
    description: [
      'Nestled high in mountain ranges, alpine meadows burst with life during brief summer seasons. These fragile ecosystems host a stunning array of wildflowers and specialized plants adapted to harsh conditions.',
      'Alpine regions are particularly sensitive to climate change, making them important indicators of global environmental shifts.',
    ],
  },
];

export default function Works17() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <div>
      <MotionConfig transition={{ duration: 0.7, type: 'spring', bounce: 0.25 }}>
        <AnimatePresence>
          {open && (
            <motion.div
              className='fixed inset-0 z-30 bg-black/30 backdrop-blur-lg'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
          )}
        </AnimatePresence>
        <div className='fixed left-1/2 top-[100px] z-40 -translate-x-1/2'>
          <motion.div
            layout
            initial={{
              height: 44,
              width: 240,
            }}
            animate={{
              height: open ? 'auto' : 44,
              width: open ? 300 : 240,
            }}
            className='relative cursor-pointer overflow-hidden bg-neutral-900 text-white'
            style={{ borderRadius: 22 }}
          >
            <header
              className='flex h-[44px] cursor-pointer items-center gap-2 px-4'
              onClick={() => setOpen(!open)}
            >
              <ProgressCircle />
              <h1 className='grow font-bold'>Nature&apos;s Beauty</h1>
              <ScrollPercentage />
            </header>
            <div className='mt-2 flex flex-col gap-2 px-4 pb-4'>
              {initialValues.map((item) => (
                <Link
                  key={`demo17-${Math.random()}`}
                  className={cn(
                    'whitespace-nowrap text-sm text-natural-400 hover:text-natural-200',
                  )}
                  href={item.link}
                  onClick={() => {
                    setOpen(false);
                    setSelected(item.link);
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
        <Sections selected={selected} />
      </MotionConfig>
    </div>
  );
}

const Sections = memo(({ selected }: { selected: string }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isScrolling) {
      console.log('Scrolling has stopped');
    }
  }, [isScrolling]);

  return (
    <div>
      {initialValues.map((item) => (
        <motion.div
          id={item.link.slice(1)}
          key={`section-${Math.random()}`}
          className={cn('mb-12 scroll-mt-48')}
          animate={{
            opacity:
              !isScrolling && selected === item.link ? [0.5, 0.6, 0.8, 1, 0.8, 0.6, 0.5, 1] : 1,
            transition: {
              duration: 0.5,
              delay: 0.2,
            },
          }}
        >
          <h1 className='mb-4 text-2xl font-bold'>{item.title}</h1>
          {item.description.map((description) => (
            <p className='mb-4' key={`title-${Math.random()}`}>
              {description}
            </p>
          ))}
        </motion.div>
      ))}
    </div>
  );
});

function ProgressCircle() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updatePageScroll = () => {
      const scrollPercentage =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener('scroll', updatePageScroll);
    updatePageScroll(); // Initial call to set the initial scroll position

    return () => window.removeEventListener('scroll', updatePageScroll);
  }, []);

  return (
    <div className='h-7 w-7'>
      <Circle percent={scrollPercentage * 100} strokeWidth={10} strokeColor='#fff' />
    </div>
  );
}

function ScrollPercentage() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updatePageScroll = () => {
      const scrollPercentage =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener('scroll', updatePageScroll);
    updatePageScroll(); // Initial call to set the initial scroll position

    return () => window.removeEventListener('scroll', updatePageScroll);
  }, []);

  return <p>{Math.round(scrollPercentage * 100)}%</p>;
}
