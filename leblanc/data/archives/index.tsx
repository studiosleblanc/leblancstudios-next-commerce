import { Fragment } from 'react'

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
  images: ArchiveImage[]
  abbrSvg?: React.ReactNode
}

export const archivesData: Archive[] = [
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
        caption:
          'Photographed in the Dominican Republic by Fernando y Víctor <br /> Modeled by Edwar Guerrero and Sheila Betances <br /> at the ISOTEX factory',
      },
      {
        src: '/assets/archives/singular-unity/singular-2.jpg',
        width: 1953,
        height: 2441,
        caption:
          'Photographed in the Dominican Republic by Fernando y Víctor <br /> Modeled by Edwar Guerrero and Sheila Betances <br /> at the ISOTEX factory',
      },
      {
        src: '/assets/archives/singular-unity/singular-3.jpg',
        width: 1841,
        height: 2301,
        caption:
          'Photographed in the Dominican Republic by Fernando y Víctor <br /> Modeled by Edwar Guerrero and Sheila Betances <br /> at the ISOTEX factory',
      },
    ],
  },
]
