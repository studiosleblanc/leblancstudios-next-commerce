import { Fragment } from 'react'

export type ArchiveImage = {
  src: string
  width: number
  height: number
}

export type Archive = {
  name: string
  handle: string // handle and slug
  shortText?: string
  richText?: string
  images?: ArchiveImage[]
  credits?: string
  abbrSvg?: string // path of svg component
}

export const archivesData: Archive[] = [
  {
    name: 'La Cuisine, Everything Began With An Archive',
    handle: 'la-cuisine',
  },
  {
    name: 'Timeless Duck Shirt: L’ Olympique',
    handle: 'timeless-duck-shirt-lolympique',
  },
  {
    name: 'Fausse Geométrié',
    handle: 'fausse-geometrie',
    richText:
      'FAUSSE GEOMÉTRIÉ EMBRACES THE IMPERFECTION ABOUT THE CONSTRUCTION OF CLASSIC GARMENTS. DEVELOPING LOUNGE PANTS MADE OF CASHMERE, SWEATERS WITH PATCHES OF DISTORTED FIGURES, HAVING A RESULT OF A CASUAL AND FUN ENVIRONMENT.',
    images: [
      {
        src: '/assets/archives/fausse-geometrie/fausse-geometrie-4.jpg',
        width: 2400,
        height: 1600,
      },
      {
        src: '/assets/archives/fausse-geometrie/fausse-geometrie-2.jpg',
        width: 2400,
        height: 1600,
      },
      {
        src: '/assets/archives/fausse-geometrie/fausse-geometrie-3.jpg',
        width: 1600,
        height: 2400,
      },
      {
        src: '/assets/archives/fausse-geometrie/fausse-geometrie-1.jpg',
        width: 2400,
        height: 1600,
      },
    ],
  },
  {
    name: 'Kapput',
    handle: 'kapput',
    richText:
      'KAPUTT’S DISCOURSE COMPREHENDS THE HUMAN DISINTEGRATION IN MODERN HISTORY. IT’S BOUND FROM LINGUISTICS TO DISPOSABLE OBJECTS AND SELF-DESTRUCTIVE BEHAVIOUR... GENOCIDE, WHITE-COLLAR CRIMES, FAKE FRIENDSHIP, WAR AND PROPAGANDA. THE COLLECTION IS DEPICTED BY MILITARY SILHOUETTES, STRONG SHOULDER PADS, CARGO POCKETS SHIRT-JACKETS, PRINTS OF RELEVANT NEWS, ARCHIVE MATERIALS AND USELESS... COMPANY SLOGANS...',
    credits:
      'KAPUTT S/S 2016 WAS LAUNCHED AT THE CASA DE BASTIDAS MUSEUM AT THE ZONA COLONIAL, SANTO DOMINGO. AD CAMPAIGN SHOT BY MÁXIMO DEL CASTILLO.',
  },
  {
    name: 'Singular Unity',
    handle: 'singular-unity',
    shortText: 'Finalist at the Iberoamerican Design Biennial 2018',
    richText:
      'Singular Unity is based on the concept of technological singularity, or the way in which everything converges in one place due to the large amount of information that we are processing nowadays. We are highly connected and surrounded by information that we are constantly processing via our technological devices, resulting in a dilution or loss of cultural identity, leaving us all in a state of some form of “cut-and-paste”. Singular unity is made up of two conversations: the first is about the way in which technology affects us and is changing our perception of time, while the second focuses on class-based stereotypes in the Dominican Republic.',
    images: [
      {
        src: '/assets/archives/singular-unity/singular-1.jpg',
        width: 1785,
        height: 2232,
      },
      {
        src: '/assets/archives/singular-unity/singular-2.jpg',
        width: 1953,
        height: 2441,
      },
      {
        src: '/assets/archives/singular-unity/singular-3.jpg',
        width: 1841,
        height: 2301,
      },
    ],
    credits:
      'Photographed in the Dominican Republic by Fernando y Víctor. <br /> Modeled by Edwar Guerrero and Sheila Betances <br /> at the ISOTEX factory.',
    abbrSvg: 'FW17',
  },
  {
    name: 'Foregn Affair / Criminal Intent, 1st. Edition',
    handle: 'white-shirt-17-1',
    images: [
      {
        src: '/assets/archives/white-shirt-1/white-shirt_1_-1.jpg',
        width: 3648,
        height: 5472,
      },
      {
        src: '/assets/archives/white-shirt-1/white-shirt_1_-2.jpg',
        width: 5472,
        height: 3648,
      },
      {
        src: '/assets/archives/white-shirt-1/white-shirt_1_-3.jpg',
        width: 3648,
        height: 5472,
      },
      {
        src: '/assets/archives/white-shirt-1/white-shirt_1_-4.jpg',
        width: 3648,
        height: 5472,
      },
      {
        src: '/assets/archives/white-shirt-1/white-shirt_1_-5.jpg',
        width: 5472,
        height: 3648,
      },
      {
        src: '/assets/archives/white-shirt-1/white-shirt_1_-6.jpg',
        width: 5472,
        height: 3648,
      },
    ],
    credits:
      'Photographed in the Dominican Republic at "Teatro de Agua y la Luz" by Luis Miguel Molina.',
  },
  {
    name: 'Identity Theft Cards, Bribery & Artnapping, 2nd. Edition',
    handle: 'white-shirt-17-2',
    richText:
      'WHITE SHIRT 2ND. EDITION LOOK INTO WHITE-COLLAR CRIMES, FROM IDENTITY THEFT CARDS, ODEBRECHT BRIBERY SCANDAL TO GLOBAL ARTNAPPING SITUATIONS. DELIVERED WITH STRONG GRAPHICS, INFORMATIVE LABELS, BEING THIS COLLECTION A DECISIVE INPUT IN OUR GRAPHIC AND COMMUNICATION IDENTITY, AND WHAT GOES AFTERWARDS.',
    images: [
      {
        src: '/assets/archives/white-shirt-2/white-shirt_2_-1.jpg',
        width: 1080,
        height: 1920,
      },
      {
        src: '/assets/archives/white-shirt-2/white-shirt_2_-2.jpg',
        width: 1080,
        height: 1920,
      },
      {
        src: '/assets/archives/white-shirt-2/white-shirt_2_-3.jpg',
        width: 1080,
        height: 1920,
      },
      {
        src: '/assets/archives/white-shirt-2/white-shirt_2_-4.jpg',
        width: 1080,
        height: 1920,
      },
    ],
    credits:
      "Photographed in the Dominican Republic at Adolfo's House. Photographed by Máximo del Castillo",
  },
  {
    name: 'Murder Is My Business, 3rd. Edition',
    handle: 'white-shirt-18',
  },
  {
    name: 'Murder Is My Business II / El Pueblo Cuestiona, 4th. Edition',
    handle: 'white-shirt-19',
  },
  {
    name: 'A Necessary Risk',
    handle: 'a-necessary-risk',
    images: [
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-1.jpg',
        width: 1080,
        height: 1619,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-2.jpg',
        width: 1080,
        height: 1619,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-3.jpg',
        width: 1080,
        height: 1619,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-4.jpg',
        width: 1080,
        height: 1619,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-5.jpg',
        width: 1080,
        height: 1619,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-6.jpg',
        width: 1080,
        height: 1619,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-7.jpg',
        width: 1080,
        height: 1619,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-8.jpg',
        width: 1151,
        height: 768,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-9.jpg',
        width: 1151,
        height: 768,
      },
    ],
  },
  {
    name: 'No Medium Inserted',
    handle: 'no-medium-inserted',
  },
]