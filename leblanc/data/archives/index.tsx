import { Fragment } from 'react'

import noMediumInserted from './no-medium-inserted'
import murderIsMyBusiness1 from './murder-is-my-business-1'
import murderIsMyBusiness2 from './murder-is-my-business-2'
import whiteShirt1 from './white-shirt-1'
import fausseGeometrie from './fausse-geometrie'
import valentinesAdCampaign from './valentines-ad-campaign'
import singularUnity from './singular-unity'
import olympique from './olympique'

export type ArchiveImage = {
  src: string
  width: number
  height: number
  caption?: string
}

export type Archive = {
  name: string
  handle: string // handle and slug
  shortText?: string
  richText?: string
  images?: ArchiveImage[]
  credits?: string
  abbrSvg?: string // File name of svg component
}

export const archivesData: Archive[] = [
  {
    name: 'La Cuisine, Everything Began With An Archive',
    handle: 'la-cuisine',
    abbrSvg: 'SS14',
  },
  {
    name: 'Olympique',
    handle: 'timeless-duck-shirt-lolympique',
    abbrSvg: 'SS15',
    images: olympique,
    credits:
      'Photographed in the Dominican Republic by Máximo del Castillo. <br />Modeled by Blanca Aguiló, Paola Giachero, and Luis Acosta.',
  },
  {
    name: 'Fausse Geométrié',
    handle: 'fausse-geometrie',
    richText:
      'FAUSSE GEOMÉTRIÉ EMBRACES THE IMPERFECTION ABOUT THE CONSTRUCTION OF CLASSIC GARMENTS. DEVELOPING LOUNGE PANTS MADE OF CASHMERE, SWEATERS WITH PATCHES OF DISTORTED FIGURES, HAVING A RESULT OF A CASUAL AND FUN ENVIRONMENT.',
    abbrSvg: 'FW15',
    images: fausseGeometrie,
    credits:
      'After Party Fausse Geométrié at the Museum of Modern Art, Santo Domingo',
  },
  {
    name: 'Kaputt',
    handle: 'kaputt',
    richText:
      'KAPUTT’S DISCOURSE COMPREHENDS THE HUMAN DISINTEGRATION IN MODERN HISTORY. IT’S BOUND FROM LINGUISTICS TO DISPOSABLE OBJECTS AND SELF-DESTRUCTIVE BEHAVIOUR... GENOCIDE, WHITE-COLLAR CRIMES, FAKE FRIENDSHIP, WAR AND PROPAGANDA. THE COLLECTION IS DEPICTED BY MILITARY SILHOUETTES, STRONG SHOULDER PADS, CARGO POCKETS SHIRT-JACKETS, PRINTS OF RELEVANT NEWS, ARCHIVE MATERIALS AND USELESS... COMPANY SLOGANS...',
    abbrSvg: 'SS16',
    images: [
      {
        src: '/assets/archives/kaputt/kapput-1.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-2.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-3.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-4.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-5.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-6.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-7.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-8.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-9.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-10.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-11.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-12.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-13.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-14.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-15.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-16.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-17.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-18.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-19.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-20.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-21.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-22.jpg',
        width: 1080,
        height: 1620,
      },
      {
        src: '/assets/archives/kaputt/kapput-23.jpg',
        width: 1080,
        height: 1620,
      },
    ],
    credits:
      'KAPUTT S/S 2016 WAS LAUNCHED AT THE CASA DE BASTIDAS MUSEUM AT THE ZONA COLONIAL, SANTO DOMINGO. <br/> AD CAMPAIGN SHOT BY MÁXIMO DEL CASTILLO.',
  },
  {
    name: 'Singular Unity',
    handle: 'singular-unity',
    shortText: 'Finalist at the Iberoamerican Design Biennial 2018',
    richText:
      'Singular Unity is based on the concept of technological singularity, or the way in which everything converges in one place due to the large amount of information that we are processing nowadays. We are highly connected and surrounded by information that we are constantly processing via our technological devices, resulting in a dilution or loss of cultural identity, leaving us all in a state of some form of “cut-and-paste”. Singular unity is made up of two conversations: the first is about the way in which technology affects us and is changing our perception of time, while the second focuses on class-based stereotypes in the Dominican Republic.',
    images: singularUnity,
    credits:
      'Photographed in the Dominican Republic by Fernando y Víctor. <br /> Modeled by Edwar Guerrero and Sheila Betances <br /> at the ISOTEX factory.',
    abbrSvg: 'FW17',
  },
  {
    name: 'Foregn Affair / Criminal Intent, 1st. Edition',
    handle: 'white-shirt-17-1',
    abbrSvg: 'WhiteShirt17',
    images: whiteShirt1,
    credits:
      'Photographed in the Dominican Republic at "Teatro de Agua y la Luz" by Luis Miguel Molina. <br /> Modeled by Víctor y Jorge',
  },
  {
    name: 'Identity Theft Cards, Bribery & Artnapping, 2nd. Edition',
    handle: 'white-shirt-17-2',
    abbrSvg: 'WhiteShirt17',
    richText:
      'WHITE SHIRT 2ND. EDITION LOOKS INTO WHITE-COLLAR CRIMES, FROM IDENTITY THEFT CARDS, ODEBRECHT BRIBERY SCANDAL TO GLOBAL ARTNAPPING SITUATIONS. DELIVERED WITH STRONG GRAPHICS, INFORMATIVE LABELS, BEING THIS COLLECTION A DECISIVE INPUT IN OUR GRAPHIC AND COMMUNICATION IDENTITY, AND WHAT GOES AFTERWARDS.',
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
      "Photographed in the Dominican Republic at Adolfo's House by Máximo del Castillo. <br /> Modeled by Mónica de Hostos and Edwar Guerrero.",
  },
  {
    name: 'Valentines Ad Campaign',
    handle: 'valentines-ad-campaign',
    abbrSvg: 'Svg2018',
    images: valentinesAdCampaign,
    credits:
      'Photographed at El Malecón by Adolfo Sesto. <br /> Modeled by Marielis.',
  },
  {
    name: 'Murder Is My Business, 3rd. Edition',
    handle: 'white-shirt-18',
    abbrSvg: 'WhiteShirt18',
    images: murderIsMyBusiness1,
    credits:
      'Photographed by Luis Quijada. <br />Creative Director, Angelo Beato. <br />Art Director, Jaime Moreno.',
  },
  {
    name: 'Murder Is My Business II / El Pueblo Cuestiona, 4th. Edition',
    handle: 'white-shirt-19',
    abbrSvg: 'WhiteShirt19',
    images: murderIsMyBusiness2,
    credits:
      'Photographed in the Universidad Pedro Hénriquez Urena by Luis Quijada.',
  },
  {
    name: 'A Necessary Risk',
    handle: 'a-necessary-risk',
    abbrSvg: 'Svg2022',
    images: [
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-1.jpg',
        width: 2000,
        height: 2999,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-2.jpg',
        width: 2000,
        height: 3000,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-3.jpg',
        width: 2000,
        height: 2998,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-4.jpg',
        width: 2000,
        height: 3000,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-5.jpg',
        width: 2000,
        height: 3000,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-6.jpg',
        width: 2000,
        height: 1335,
      },
      {
        src: '/assets/archives/a-necessary-risk/a-necessary-risk-7.jpg',
        width: 2000,
        height: 2998,
      },
    ],
    credits:
      'Photographed in Bani, Dominican Republic by Luis Quijada. <br />Modeled by Luca Baldessari, Manuela Corji and Axel Esteva.',
  },
  {
    name: 'No Medium Inserted',
    handle: 'no-medium-inserted',
    abbrSvg: 'FW22',
    images: noMediumInserted,
    credits:
      'Photographed in Santo Domingo Este, Dominican Republic by Luis Miguel Molina. <br />Modeled by Angel, Steven and Glorianny.',
  },
]
