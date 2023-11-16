import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private assetsPath = '../../../assets/svg/'

  navData = [
    {
      title: 'Products',
      list: [
        { text: 'Open Banking Payments', url: '#' },
        { text: 'Card Payments', url: '#' },
        { text: 'Checkout Form', url: '#' },
        { text: 'Bank Payouts', url: '#' },
        { text: 'Card Payouts', url: '#' },
        { text: 'Financial AI Toolset', url: '#' },
        { text: 'Sign in via Bank', url: '#' },
      ],
    },
    {
      title: 'Developers',
      list: [
        { text: 'Noda Pay tech documentation', url: '#' },
        { text: 'Open-Banking Demo', url: '#' },
        {
          text: 'Log In To Hub',
          url: '#',
          icon: this.assetsPath + 'logo_hub.svg',
        },
      ],
    },
    {
      title: 'Pricing',
      list: [{ text: 'Pricing', url: '#' }],
    },
  ];
}
