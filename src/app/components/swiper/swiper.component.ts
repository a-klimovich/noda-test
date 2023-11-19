import { Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { SwiperItem } from '../../models/swiper-item.model';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss'
})
export class SwiperComponent {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  content: SwiperItem[] = [
    {
      alt: 'some alt...',
      url: '../../../assets/images/slider-1-min.jpeg',
    },
    {
      alt: 'some alt...',
      url: '../../../assets/images/slider-2-min.jpeg',
    },
    {
      alt: 'some alt...',
      url: '../../../assets/images/slider-3-min.jpeg',
    },
    {
      alt: 'some alt...',
      url: '../../../assets/images/slider-1-min.jpeg',
    },
    {
      alt: 'some alt...',
      url: '../../../assets/images/slider-3-min.jpeg',
    },
    {
      alt: 'some alt...',
      url: '../../../assets/images/slider-1-min.jpeg',
    },
    {
      alt: 'some alt...',
      url: '../../../assets/images/slider-3-min.jpeg',
    },
    {
      alt: 'some alt...',
      url: '../../../assets/images/slider-1-min.jpeg',
    },
    {
      alt: 'some alt...',
      url: '../../../assets/images/slider-3-min.jpeg',
    },
    {
      alt: 'some alt...',
      url: '../../../assets/images/slider-1-min.jpeg',
    },
  ]

  index = 0;

  swiperConfig: SwiperOptions = {
    slidesPerView: 'auto',
    breakpoints: {
      640: {
      },
      1024: {
        freeMode: {
          enabled: true,
          sticky: true,
        },
      },
    },
  };

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }
}
