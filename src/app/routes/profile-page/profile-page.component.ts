import { Component, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnDestroy {
  user = {
    id: 1,
    firstName: 'Terry',
    lastName: 'Medhurst',
    maidenName: 'Smitham',
    age: 50,
    gender: 'male',
    email: 'atuny0@sohu.com',
    phone: '+63 791 675 8914',
    username: 'atuny0',
    password: '9uQFF1Lh',
    birthDate: '2000-12-25',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    bloodGroup: 'A−',
    height: 189,
    weight: 75.4,
    eyeColor: 'Green',
    hair: {
      color: 'Black',
      type: 'Strands',
    },
    domain: 'slashdot.org',
    ip: '117.29.86.254',
    address: {
      address: '1745 T Street Southeast',
      city: 'Washington',
      coordinates: {
        lat: 38.867033,
        lng: -76.979235,
      },
      postalCode: '20020',
      state: 'DC',
    },
    macAddress: '13:69:BA:56:A3:74',
    university: 'Capitol University',
    bank: {
      cardExpire: '06/22',
      cardNumber: '50380955204220685',
      cardType: 'maestro',
      currency: 'Peso',
      iban: 'NO17 0695 2754 967',
    },
    company: {
      address: {
        address: '629 Debbie Drive',
        city: 'Nashville',
        coordinates: {
          lat: 36.208114,
          lng: -86.58621199999999,
        },
        postalCode: '37076',
        state: 'TN',
      },
      department: 'Marketing',
      name: "Blanda-O'Keefe",
      title: 'Help Desk Operator',
    },
    ein: '20-9487066',
    ssn: '661-64-2976',
    userAgent: 'Mozilla/5.0 ...',
  };
  cartSubscription: any;
  cart: any;
  visibleCart: any;

  personalInfo = Object.entries(this.user)
    .slice(1, 15)
    .map((arr) => {
      return [this.camelCaseToTitleCase(arr[0]), arr[1]];
    });

  bank = Object.entries(this.user.bank).map((arr) => {
    return [this.camelCaseToTitleCase(arr[0]), arr[1]];
  });

  camelCaseToTitleCase(str: string) {
    if (str === '') return '';

    const words = str.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
    const titleCaseWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return titleCaseWords.join(' ');
  }
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {
    this.personalInfo.splice(10, 1);
  }

  ngOnInit() {
    this.cartSubscription = this.cartService.cart$.subscribe((cart) => {
      this.cart = cart;
      this.loadVisibleCart();
    });
  }

  logOut(): void {
    this.authService.logout();
    window.location.reload();
  }

  loadVisibleCart() {
    const visibleCart: any[] = [];

    Promise.all(
      this.cart.products.map((product: any) => {
        return fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((res) => visibleCart.push(res))
          .catch(console.log);
      })
    )
      .then(() => {
        this.visibleCart = visibleCart;
      })
      .catch(console.log);
  }

  ngOnDestroy() {
    this.cartSubscription && this.cartSubscription.unsubscribe();
  }
}
