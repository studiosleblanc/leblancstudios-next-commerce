const navbar = {
  enter: {
    width: '70%',
  },
  exit: {
    width: '60%',
    transition: {
      delay: 0.5,
    },
  },
}

const topRow = {
  enter: {
    height: '55vh',
  },
  exit: {
    height: '46px',
    transition: {
      delay: 0.5,
    },
  },
}

const bottomRow = {
  enter: {
    height: '30vh',
  },
  exit: {
    height: '46px',
    transition: {
      delay: 0.5,
    },
  },
}

const bottomRowFooter = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const rightBar = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}
const collapse = {
  enter: {
    // borderLeftWidth: '1px',
    opacity: 1,
  },
  exit: {
    // borderLeftWidth: 0,
    opacity: 0,
  },
}
const collapseTopContent = {
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 30,
  },
}
const breadcrumbs = {
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
  },
}

export default {
  navbar,
  topRow,
  bottomRow,
  bottomRowFooter,
  rightBar,
  collapse,
  collapseTopContent,
  breadcrumbs,
}
