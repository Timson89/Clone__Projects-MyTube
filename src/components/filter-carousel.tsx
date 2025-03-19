"use client";

import {

  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,

} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';


interface FilterCarouselProps {

  value?: string | null;
  isLoading?: boolean;
  onSelect?: (value: string | null) => void;
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

  return (

    <div className='relative w-full'>
      <Carousel className='w-full px-12'
        opts={{
          align: 'start',
          dragFree: true,
        }}>
        <CarouselContent className='-ml-13'>
          <CarouselItem>
            <Badge>
              ALL
            </Badge>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}