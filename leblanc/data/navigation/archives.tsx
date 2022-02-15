import { Fragment } from 'react'
import type { NavItem } from '@leblanc/data/navigation'

const archives: NavItem[] = [
  {
    id: 'la-cuisine',
    label: (
      <Fragment>
        SS14: <b>[La Cuisine, Everything Began With An Archive]</b>
      </Fragment>
    ),
    handle: 'la-cuisine',
    href: '/archives/la-cuisine',
  },
  {
    id: 'timeless-duck-shirt-lolympique',
    label: (
      <Fragment>
        SS15: <b>[Timeless Duck Shirt: L’ Olympique]</b>
      </Fragment>
    ),
    handle: 'timeless-duck-shirt-lolympique',
    href: '/archives/timeless-duck-shirt-lolympique',
  },
  {
    id: 'fausse-geometrie',
    label: (
      <Fragment>
        FW15: <b>[Fausse Geométrié]</b>
      </Fragment>
    ),
    handle: 'fausse-geometrie',
    href: '/archives/fausse-geometrie',
  },
  {
    id: 'kapput',
    label: (
      <Fragment>
        SS16: <b>[Kaputt]</b>
      </Fragment>
    ),
    handle: 'kapput',
    href: '/archives/kapput',
  },
  {
    id: 'singular-unity',
    label: (
      <Fragment>
        FW17: <b>[Singular Unity]</b>
      </Fragment>
    ),
    handle: 'singular-unity',
    href: '/archives/singular-unity',
  },
  {
    id: 'white-shirt-17-1',
    label: (
      <Fragment>
        17 White Shirt: <b>[Foregn Affair / Criminal Intent, 1st. Edition]</b>
      </Fragment>
    ),
    handle: 'white-shirt-17-1',
    href: '/archives/white-shirt-17-1',
  },
  {
    id: 'white-shirt-17-2',
    label: (
      <Fragment>
        17 White Shirt:{' '}
        <b>[Identity Theft Cards, Bribery & Artnapping, 2nd. Edition]</b>
      </Fragment>
    ),
    handle: 'white-shirt-17-2',
    href: '/archives/white-shirt-17-2',
  },
  {
    id: 'white-shirt-18',
    label: (
      <Fragment>
        18 White Shirt: <b>[Murder Is My Business, 3rd. Edition]</b>
      </Fragment>
    ),
    handle: 'white-shirt-18',
    href: '/archives/white-shirt-18',
  },
  {
    id: 'white-shirt-19',
    label: (
      <Fragment>
        19 White Shirt:{' '}
        <b>[Murder Is My Business II / El Pueblo Cuestiona, 4th. Edition]</b>
      </Fragment>
    ),
    handle: 'white-shirt-19',
    href: '/archives/white-shirt-19',
  },
  {
    id: 'a-necessary-risk',
    label: (
      <Fragment>
        2022: <b>[A Necessary Risk]</b>
      </Fragment>
    ),
    handle: 'a-necessary-risk',
    href: '/archives/a-necessary-risk',
  },
  {
    id: 'no-medium-inserted',
    label: (
      <Fragment>
        FW22: <b>[No Medium Inserted]</b>
      </Fragment>
    ),
    handle: 'no-medium-inserted',
    href: '/archives/no-medium-inserted',
  },
]

export default archives
