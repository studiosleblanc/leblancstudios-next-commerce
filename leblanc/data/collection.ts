export type CollectionItem = {
  name: string
  image: {
    src: string
    width: number
    height: number
  }
  colors: string[]
  sizes: string[]
  price: string
  collection: string
}

export const collection: CollectionItem[] = [
  {
    name: 'Black Graphic T-Shirt',
    image: {
      src: '/assets/products/product1.jpg',
      width: 559,
      height: 745,
    },
    colors: ['#000'],
    sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
    price: '$130',
    collection: 'Biografía De Literatos Nacionales [NMI]',
  },
  {
    name: 'Black Graphic T-Shirt',
    image: {
      src: '/assets/products/product2.jpg',
      width: 558,
      height: 745,
    },
    colors: ['#000', '#fff'],
    sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
    price: '$130',
    collection: 'World Mass Observers [NMI]',
  },
  {
    name: 'Cognac Embroidered Bucket Hat',
    image: {
      src: '/assets/products/product3.jpg',
      width: 559,
      height: 749,
    },
    colors: ['#000', '#775235'],
    sizes: ['Onesize'],
    price: '$130',
    collection: 'Federación De Mujeres Dominicanas 1962 [FMD]',
  },
  {
    name: 'Black Embroidered Patch Shirt',
    image: {
      src: '/assets/products/product4.jpg',
      width: 561,
      height: 745,
    },
    colors: ['#000'],
    sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
    price: '$260',
    collection: 'Lissajous [NMI]',
  },
  {
    name: 'White Embroidered T-Shirt',
    image: {
      src: '/assets/products/product5.jpg',
      width: 559,
      height: 745,
    },
    colors: ['#000', '#fff'],
    sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
    price: '$100',
    collection: 'African-Caribbean-Pacific [LBS]',
  },
  {
    name: 'Black Embroidered Patch Bucket Hat',
    image: {
      src: '/assets/products/product6.jpg',
      width: 559,
      height: 745,
    },
    colors: ['#000', '#775235'],
    sizes: ['Onesize'],
    price: '$100',
    collection: 'Federación De Mujeres Dominicanas 1962 [FMD]',
  },
]

export const sigleSock: CollectionItem = {
  name: 'Yellow Knitted Logo Socks',
  image: {
    src: '/assets/products/featured_sock.jpg',
    width: 517,
    height: 657,
  },
  colors: ['#000', '#FAB300', '#85B3F0'],
  sizes: ['Onesize'],
  price: '$33',
  collection: 'A Necessary Risk x Gus Peña [ANR]',
}
