import Icon from '../components/Icon'

export const svgData = [{
  main: {
    label: 'Git',
    icon: <Icon name="module_check" style={{
      maxWidth: '14px',
      minWidth: '14px',
      height: '12px',
      margin: '2px 0 0 10px'
    }} />
  },
  styles: {
    position: {top: 0, left: 0, width: '120px'},
    main: {
      outer: {height: '48px', background: 'var(--color-green)'},
      inner: {fontWeight: 600, color: 'var(--color-white)'}
    }
  }
}, {
  main: {
    label: 'Sql',
    icon: <Icon name="module_check" style={{
      maxWidth: '14px',
      minWidth: '14px',
      height: '12px',
      margin: '2px 0 0 10px'
    }} />
  },
  progress: {
    label: 'Проект Университет',
    icon: <Icon name="module_check_round" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-1" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '150px',
      height: '16px'
    }} key="0" />
  ],
  styles: {
    position: {top: '70px', left: 0, width: '120px'},
    main: {
      outer: {height: '40px', background: 'var(--color-green)'},
      inner: {fontWeight: 600, color: 'var(--color-white)'}
    },
    progress: {
      outer: {height: '58px', margin: '2px 0 0', background: 'var(--color-green)'},
      inner: {color: 'var(--color-white)'}
    }
  }
}, {
  main: {
    label: 'jdbc'
  },
  progress: {
    label: <>Проект <br />Бюджет</>,
    icon: <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      background: 'var(--color-orange)'
    }}></div>
  },
  arrows: [
    <Icon name="svg_arrows-2" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '260px',
      height: '16px'
    }} key="1" />
  ],
  styles: {
    position: {top: '70px', left: '270px', width: '106px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-middle)'},
      inner: {fontWeight: 600}
    },
    progress: {
      outer: {height: '58px', margin: '2px 0 0', border: '1px solid var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'hibernate',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  progress: {
    label: <>Проект <br />Автосервис</>
  },
  arrows: [
    <Icon name="svg_arrows-3" style={{
      position: 'absolute',
      top: '14px',
      left: '100%',
      width: '114px',
      height: '424px'
    }} key="2" />
  ],
  styles: {
    position: {top: '70px', left: '634px', width: '114px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    },
    progress: {
      outer: {height: '58px', margin: '2px 0 0', border: '1px solid var(--color-gray-light)'}
    }
  }
}, {
  main: {
    label: 'Java core',
    icon: <Icon name="module_check" style={{
      maxWidth: '14px',
      minWidth: '14px',
      height: '12px',
      margin: '2px 0 0 10px'
    }} />
  },
  progress: {
    label: <>Проект <br />Toyota</>,
    icon: <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      background: 'var(--color-blue)'
    }}></div>
  },
  arrows: [
    <Icon name="svg_arrows-4" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '114px',
      height: '16px'
    }} key="3" />
  ],
  styles: {
    position: {top: '226px', left: 0, width: '120px'},
    main: {
      outer: {height: '38px', border: '2px solid var(--color-green)', background: 'var(--color-green)'},
      inner: {color: 'var(--color-white)'}
    },
    progress: {
      outer: {height: '58px', margin: '2px 0 0', border: '1px solid var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Maven',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  progress: {
    label: 'Проект'
  },
  arrows: [
    <Icon name="svg_arrows-5" style={{
      position: 'absolute',
      top: '-33px',
      left: '100%',
      width: '72px',
      height: '108px',
      color: 'var(--color-gray-light)'
    }} key="4" />,
    <Icon name="svg_arrows-6" style={{
      position: 'absolute',
      top: '100%',
      left: '46px',
      width: '236px',
      height: '198px'
    }} key="5" />
  ],
  styles: {
    position: {top: '226px', left: '233px', width: '91px'},
    main: {
      outer: {height: '38px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    },
    progress: {
      outer: {height: '40px', margin: '2px 0 0', border: '1px solid var(--color-gray-light)'}
    }
  }
}, {
  main: {
    label: 'Lombok',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      maxWidth: '18px',
      minWidth: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  styles: {
    position: {top: '182px', left: '395px', width: '100px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Введение в тестирование',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  styles: {
    position: {top: '264px', left: '395px', width: '166px'},
    main: {
      outer: {height: '56px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Generics'
  },
  progress: {
    label: 'Проект',
    icon: <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      background: 'var(--color-orange)'
    }}></div>
  },
  arrows: [
    <Icon name="svg_arrows-7" style={{
      position: 'absolute',
      top: '100%',
      left: '58px',
      width: '14px',
      height: '37px'
    }} key="6" />
  ],
  styles: {
    position: {top: '375px', left: 0, width: '120px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-middle)'},
      inner: {fontWeight: 600}
    },
    progress: {
      outer: {height: '40px', margin: '2px 0 0', border: '1px solid var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Структуры данных +Stream api'
  },
  progress: {
    label: 'Проект Дорожный институт',
    icon: <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      background: 'var(--color-orange)'
    }}></div>
  },
  arrows: [
    <Icon name="svg_arrows-8" style={{
      position: 'absolute',
      top: '22px',
      left: '100%',
      width: '62px',
      height: '18px'
    }} key="7" />
  ],
  styles: {
    position: {top: '494px', left: 0, width: '183px'},
    main: {
      outer: {height: '58px', border: '2px solid var(--color-gray-middle)'},
      inner: {fontWeight: 600}
    },
    progress: {
      outer: {height: '60px', margin: '2px 0 0', border: '1px solid var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Reflection api',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-9" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '68px',
      height: '18px'
    }} key="8" />
  ],
  styles: {
    position: {top: '504px', left: '244px', width: '144px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Spring core',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-10" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '46px',
      height: '18px'
    }} key="9" />
  ],
  styles: {
    position: {top: '504px', left: '454px', width: '110px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Spring boot + spring web',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-11" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '44px',
      height: '18px'
    }} key="10" />
  ],
  styles: {
    position: {top: '504px', left: '608px', width: '140px'},
    main: {
      outer: {height: '58px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Spring data',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  progress: {
    label: 'Проект Отель'
  },
  arrows: [
    <Icon name="svg_arrows-12" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '44px',
      height: '18px'
    }} key="10" />
  ],
  styles: {
    position: {top: '504px', left: '790px', width: '130px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    },
    progress: {
      outer: {height: '40px', margin: '2px 0 0', border: '1px solid var(--color-gray-light)'}
    }
  }
}, {
  main: {
    label: 'Spring test',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  styles: {
    position: {top: '504px', left: '962px', width: '126px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Http',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-13" style={{
      position: 'absolute',
      top: '-25px',
      left: '100%',
      width: '166px',
      height: '48px'
    }} key="11" />
  ],
  styles: {
    position: {top: '584px', left: '450px', width: '74px'},
    main: {
      outer: {height: '36px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Git',
    icon: <Icon name="module_check" style={{
      maxWidth: '14px',
      minWidth: '14px',
      height: '12px',
      margin: '2px 0 0 10px'
    }} />
  },
  styles: {
    position: {top: 0, left: '1200px', width: '120px'},
    main: {
      outer: {height: '48px', background: 'var(--color-green)'},
      inner: {fontWeight: 600, color: 'var(--color-white)'}
    }
  }
}, {
  main: {
    label: 'Sql',
    icon: <Icon name="module_check" style={{
      maxWidth: '14px',
      minWidth: '14px',
      height: '12px',
      margin: '2px 0 0 10px'
    }} />
  },
  progress: {
    label: 'Проект Университет',
    icon: <Icon name="module_check_round" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-1" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '150px',
      height: '16px'
    }} key="0" />
  ],
  styles: {
    position: {top: '70px', left: '1200px', width: '120px'},
    main: {
      outer: {height: '40px', background: 'var(--color-green)'},
      inner: {fontWeight: 600, color: 'var(--color-white)'}
    },
    progress: {
      outer: {height: '58px', margin: '2px 0 0', background: 'var(--color-green)'},
      inner: {color: 'var(--color-white)'}
    }
  }
}, {
  main: {
    label: 'jdbc'
  },
  progress: {
    label: <>Проект <br />Бюджет</>,
    icon: <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      background: 'var(--color-orange)'
    }}></div>
  },
  arrows: [
    <Icon name="svg_arrows-2" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '260px',
      height: '16px'
    }} key="1" />
  ],
  styles: {
    position: {top: '70px', left: '1470px', width: '106px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-middle)'},
      inner: {fontWeight: 600}
    },
    progress: {
      outer: {height: '58px', margin: '2px 0 0', border: '1px solid var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'hibernate',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  progress: {
    label: <>Проект <br />Автосервис</>
  },
  arrows: [
    <Icon name="svg_arrows-3" style={{
      position: 'absolute',
      top: '14px',
      left: '100%',
      width: '114px',
      height: '424px'
    }} key="2" />
  ],
  styles: {
    position: {top: '70px', left: '1834px', width: '114px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    },
    progress: {
      outer: {height: '58px', margin: '2px 0 0', border: '1px solid var(--color-gray-light)'}
    }
  }
}, {
  main: {
    label: 'Java core',
    icon: <Icon name="module_check" style={{
      maxWidth: '14px',
      minWidth: '14px',
      height: '12px',
      margin: '2px 0 0 10px'
    }} />
  },
  progress: {
    label: <>Проект <br />Toyota</>,
    icon: <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      background: 'var(--color-blue)'
    }}></div>
  },
  arrows: [
    <Icon name="svg_arrows-4" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '114px',
      height: '16px'
    }} key="3" />
  ],
  styles: {
    position: {top: '226px', left: '1200px', width: '120px'},
    main: {
      outer: {height: '38px', border: '2px solid var(--color-green)', background: 'var(--color-green)'},
      inner: {color: 'var(--color-white)'}
    },
    progress: {
      outer: {height: '58px', margin: '2px 0 0', border: '1px solid var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Maven',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  progress: {
    label: 'Проект'
  },
  arrows: [
    <Icon name="svg_arrows-5" style={{
      position: 'absolute',
      top: '-33px',
      left: '100%',
      width: '72px',
      height: '108px',
      color: 'var(--color-gray-light)'
    }} key="4" />,
    <Icon name="svg_arrows-6" style={{
      position: 'absolute',
      top: '100%',
      left: '46px',
      width: '236px',
      height: '198px'
    }} key="5" />
  ],
  styles: {
    position: {top: '226px', left: '1433px', width: '91px'},
    main: {
      outer: {height: '38px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    },
    progress: {
      outer: {height: '40px', margin: '2px 0 0', border: '1px solid var(--color-gray-light)'}
    }
  }
}, {
  main: {
    label: 'Lombok',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      maxWidth: '18px',
      minWidth: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  styles: {
    position: {top: '182px', left: '1595px', width: '100px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Введение в тестирование',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  styles: {
    position: {top: '264px', left: '1595px', width: '166px'},
    main: {
      outer: {height: '56px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Generics'
  },
  progress: {
    label: 'Проект',
    icon: <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      background: 'var(--color-orange)'
    }}></div>
  },
  arrows: [
    <Icon name="svg_arrows-7" style={{
      position: 'absolute',
      top: '100%',
      left: '58px',
      width: '14px',
      height: '37px'
    }} key="6" />
  ],
  styles: {
    position: {top: '375px', left: '1200px', width: '120px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-middle)'},
      inner: {fontWeight: 600}
    },
    progress: {
      outer: {height: '40px', margin: '2px 0 0', border: '1px solid var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Структуры данных +Stream api'
  },
  progress: {
    label: 'Проект Дорожный институт',
    icon: <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      background: 'var(--color-orange)'
    }}></div>
  },
  arrows: [
    <Icon name="svg_arrows-8" style={{
      position: 'absolute',
      top: '22px',
      left: '100%',
      width: '62px',
      height: '18px'
    }} key="7" />
  ],
  styles: {
    position: {top: '494px', left: '1200px', width: '183px'},
    main: {
      outer: {height: '58px', border: '2px solid var(--color-gray-middle)'},
      inner: {fontWeight: 600}
    },
    progress: {
      outer: {height: '60px', margin: '2px 0 0', border: '1px solid var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Reflection api',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-9" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '68px',
      height: '18px'
    }} key="8" />
  ],
  styles: {
    position: {top: '504px', left: '1444px', width: '144px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Spring core',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-10" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '46px',
      height: '18px'
    }} key="9" />
  ],
  styles: {
    position: {top: '504px', left: '1654px', width: '110px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Spring boot + spring web',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-11" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '44px',
      height: '18px'
    }} key="10" />
  ],
  styles: {
    position: {top: '504px', left: '1808px', width: '140px'},
    main: {
      outer: {height: '58px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Spring data',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  progress: {
    label: 'Проект Отель'
  },
  arrows: [
    <Icon name="svg_arrows-12" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '44px',
      height: '18px'
    }} key="10" />
  ],
  styles: {
    position: {top: '504px', left: '1990px', width: '130px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    },
    progress: {
      outer: {height: '40px', margin: '2px 0 0', border: '1px solid var(--color-gray-light)'}
    }
  }
}, {
  main: {
    label: 'Spring test',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  styles: {
    position: {top: '504px', left: '2162px', width: '126px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Http',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-13" style={{
      position: 'absolute',
      top: '-25px',
      left: '100%',
      width: '166px',
      height: '48px'
    }} key="11" />
  ],
  styles: {
    position: {top: '584px', left: '1650px', width: '74px'},
    main: {
      outer: {height: '36px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}




, {
  main: {
    label: 'Git',
    icon: <Icon name="module_check" style={{
      maxWidth: '14px',
      minWidth: '14px',
      height: '12px',
      margin: '2px 0 0 10px'
    }} />
  },
  styles: {
    position: {top: 0, left: '2400px', width: '120px'},
    main: {
      outer: {height: '48px', background: 'var(--color-green)'},
      inner: {fontWeight: 600, color: 'var(--color-white)'}
    }
  }
}, {
  main: {
    label: 'Sql',
    icon: <Icon name="module_check" style={{
      maxWidth: '14px',
      minWidth: '14px',
      height: '12px',
      margin: '2px 0 0 10px'
    }} />
  },
  progress: {
    label: 'Проект Университет',
    icon: <Icon name="module_check_round" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-1" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '150px',
      height: '16px'
    }} key="0" />
  ],
  styles: {
    position: {top: '70px', left: '2400px', width: '120px'},
    main: {
      outer: {height: '40px', background: 'var(--color-green)'},
      inner: {fontWeight: 600, color: 'var(--color-white)'}
    },
    progress: {
      outer: {height: '58px', margin: '2px 0 0', background: 'var(--color-green)'},
      inner: {color: 'var(--color-white)'}
    }
  }
}, {
  main: {
    label: 'jdbc'
  },
  progress: {
    label: <>Проект <br />Бюджет</>,
    icon: <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      background: 'var(--color-orange)'
    }}></div>
  },
  arrows: [
    <Icon name="svg_arrows-2" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '260px',
      height: '16px'
    }} key="1" />
  ],
  styles: {
    position: {top: '70px', left: '2670px', width: '106px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-middle)'},
      inner: {fontWeight: 600}
    },
    progress: {
      outer: {height: '58px', margin: '2px 0 0', border: '1px solid var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'hibernate',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  progress: {
    label: <>Проект <br />Автосервис</>
  },
  arrows: [
    <Icon name="svg_arrows-3" style={{
      position: 'absolute',
      top: '14px',
      left: '100%',
      width: '114px',
      height: '424px'
    }} key="2" />
  ],
  styles: {
    position: {top: '70px', left: '3034px', width: '114px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    },
    progress: {
      outer: {height: '58px', margin: '2px 0 0', border: '1px solid var(--color-gray-light)'}
    }
  }
}, {
  main: {
    label: 'Java core',
    icon: <Icon name="module_check" style={{
      maxWidth: '14px',
      minWidth: '14px',
      height: '12px',
      margin: '2px 0 0 10px'
    }} />
  },
  progress: {
    label: <>Проект <br />Toyota</>,
    icon: <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      background: 'var(--color-blue)'
    }}></div>
  },
  arrows: [
    <Icon name="svg_arrows-4" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '114px',
      height: '16px'
    }} key="3" />
  ],
  styles: {
    position: {top: '226px', left: '2400px', width: '120px'},
    main: {
      outer: {height: '38px', border: '2px solid var(--color-green)', background: 'var(--color-green)'},
      inner: {color: 'var(--color-white)'}
    },
    progress: {
      outer: {height: '58px', margin: '2px 0 0', border: '1px solid var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Maven',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  progress: {
    label: 'Проект'
  },
  arrows: [
    <Icon name="svg_arrows-5" style={{
      position: 'absolute',
      top: '-33px',
      left: '100%',
      width: '72px',
      height: '108px',
      color: 'var(--color-gray-light)'
    }} key="4" />,
    <Icon name="svg_arrows-6" style={{
      position: 'absolute',
      top: '100%',
      left: '46px',
      width: '236px',
      height: '198px'
    }} key="5" />
  ],
  styles: {
    position: {top: '226px', left: '2633px', width: '91px'},
    main: {
      outer: {height: '38px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    },
    progress: {
      outer: {height: '40px', margin: '2px 0 0', border: '1px solid var(--color-gray-light)'}
    }
  }
}, {
  main: {
    label: 'Lombok',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      maxWidth: '18px',
      minWidth: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  styles: {
    position: {top: '182px', left: '2795px', width: '100px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Введение в тестирование',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  styles: {
    position: {top: '264px', left: '2795px', width: '166px'},
    main: {
      outer: {height: '56px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Generics'
  },
  progress: {
    label: 'Проект',
    icon: <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      background: 'var(--color-orange)'
    }}></div>
  },
  arrows: [
    <Icon name="svg_arrows-7" style={{
      position: 'absolute',
      top: '100%',
      left: '58px',
      width: '14px',
      height: '37px'
    }} key="6" />
  ],
  styles: {
    position: {top: '375px', left: '2400px', width: '120px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-middle)'},
      inner: {fontWeight: 600}
    },
    progress: {
      outer: {height: '40px', margin: '2px 0 0', border: '1px solid var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Структуры данных +Stream api'
  },
  progress: {
    label: 'Проект Дорожный институт',
    icon: <div style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      border: '1px solid var(--color-white)',
      borderRadius: '50%',
      background: 'var(--color-orange)'
    }}></div>
  },
  arrows: [
    <Icon name="svg_arrows-8" style={{
      position: 'absolute',
      top: '22px',
      left: '100%',
      width: '62px',
      height: '18px'
    }} key="7" />
  ],
  styles: {
    position: {top: '494px', left: '2400px', width: '183px'},
    main: {
      outer: {height: '58px', border: '2px solid var(--color-gray-middle)'},
      inner: {fontWeight: 600}
    },
    progress: {
      outer: {height: '60px', margin: '2px 0 0', border: '1px solid var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Reflection api',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-9" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '68px',
      height: '18px'
    }} key="8" />
  ],
  styles: {
    position: {top: '504px', left: '2644px', width: '144px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Spring core',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-10" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '46px',
      height: '18px'
    }} key="9" />
  ],
  styles: {
    position: {top: '504px', left: '2854px', width: '110px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Spring boot + spring web',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-11" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '44px',
      height: '18px'
    }} key="10" />
  ],
  styles: {
    position: {top: '504px', left: '3008px', width: '140px'},
    main: {
      outer: {height: '58px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Spring data',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  progress: {
    label: 'Проект Отель'
  },
  arrows: [
    <Icon name="svg_arrows-12" style={{
      position: 'absolute',
      top: '11px',
      left: '100%',
      width: '44px',
      height: '18px'
    }} key="10" />
  ],
  styles: {
    position: {top: '504px', left: '3190px', width: '130px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    },
    progress: {
      outer: {height: '40px', margin: '2px 0 0', border: '1px solid var(--color-gray-light)'}
    }
  }
}, {
  main: {
    label: 'Spring test',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  styles: {
    position: {top: '504px', left: '3362px', width: '126px'},
    main: {
      outer: {height: '40px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}, {
  main: {
    label: 'Http',
    icon: <Icon name="module_plus" style={{
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      width: '18px',
      height: '18px',
      color: 'var(--color-green)'
    }} />
  },
  arrows: [
    <Icon name="svg_arrows-13" style={{
      position: 'absolute',
      top: '-25px',
      left: '100%',
      width: '166px',
      height: '48px'
    }} key="11" />
  ],
  styles: {
    position: {top: '584px', left: '2850px', width: '74px'},
    main: {
      outer: {height: '36px', border: '2px solid var(--color-gray-light)'},
      inner: {fontWeight: 600, color: 'var(--color-gray-middle)'}
    }
  }
}

]

export const svgDataMobile = [{
  main: 'Maven'
}, {
  main: 'Lombok'
}, {
  main: 'Введение в тестирование'
}, {
  main: 'hibernate',
  progress: 'Проект Автосервис'
}, {
  main: 'Reflection api'
}, {
  main: 'Spring core'
}, {
  main: 'Http'
}, {
  main: 'Spring boot + spring web'
}, {
  main: 'Spring data',
  progress: 'Проект Отель'
}, {
  main: 'Spring test'
}]

const exportData = {
  svgData,
  svgDataMobile
}

export default exportData