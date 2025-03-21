"use client";

import { useEffect, useState } from 'react';
import { cn       } from '@/lib/utils';
import { Badge    } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {

  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, 

} from '@/components/ui/carousel';


interface FilterCarouselProps {

  value?: string | null;
  isLoading?: boolean;
  onSelect: (value: string | null) => void;
  data: {
    value: string;
    label: string;
  }[];
}

export const FilterCarousel = ({

  value,
  onSelect,
  data,
  isLoading,
  
}: FilterCarouselProps) => {

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
    
  }, [api]);

  return (

    <div className='relative w-full'>

      {/* Left fade */}

      <div 
        className={cn(
          'absolute left-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none',
          current === 1 && 'hidden',
        )}
      />

      <Carousel className='w-full px-12' 
        setApi={ setApi }
        opts={{
          align: 'start',
          dragFree: true,
        }}>
        <CarouselContent className='-ml-13'>
          {!isLoading && ( 
            <CarouselItem className='pl-3 basis-auto'
              onClick={() => onSelect(null)}
            >
              <Badge className='rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm'
                variant={!value ? 'default' : 'secondary'}
              >
                ALL
              </Badge>
            </CarouselItem>
            )
          }
          {isLoading &&
            Array.from({ length: 14 }).map((_, index) => (
              <CarouselItem className='pl-3 basis-auto' key={ index }>
                  <Skeleton className='rounded-lg px-3 pl-1 h-full text-sm w-[100px] font-semibold'>
                    &nbsp;
                  </Skeleton>
              </CarouselItem>
            )
           )
          }
          {!isLoading && data.map((item) => (
            <CarouselItem className='pl-3 basis-auto' key={item.value}
              onClick={() => onSelect(item.value)}
            >
              <Badge className='rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm'
                variant={value === item.value ? 'default' : 'secondary'}
              >
                {item.label}
              </Badge>
            </CarouselItem>
            )
           )
          }
        </CarouselContent>
        <CarouselPrevious className='left-0 z-20'/>
        <CarouselNext className='right-0 z-20'/>
      </Carousel>

      {/* Right fade */}
      
      <div 
        className={cn(
          'absolute right-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none',
          current === count && 'hidden',
        )}
      />
    </div>
  )
}