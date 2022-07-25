import {animate, state, style, transition, trigger} from '@angular/animations';

export const routingAnimation = trigger('routingAnimation', [
  state('*', style({opacity: 1})),

  transition(':enter', [
    style({
      opacity: 0,
      display: 'block',
    }),
    animate('300ms 150ms ease-in',
      style({opacity: 1})),
  ]),

  transition(':leave', [
    style({
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 400,
      right: 400,
      zIndex: 1000,
      opacity: '0'
    }),
    animate('300ms ease-out',
      style({opacity: 0})),
  ]),
]);
