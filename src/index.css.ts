import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

export const bridgeStyle = Styles.style({
  marginInline: 'auto',
  maxWidth: '1420px',
  $nest: {
    '.modal': {
      width: '480px',
      borderRadius: '12px',
      padding: '20px',
    },
    '.row-table': {
      marginBottom: '15px'
    },
    '.i-icon': {
      display: 'inline-block',
      cursor: 'pointer'
    },
    '.empty-header': {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      minHeight: 65
    },
    '.group-filter': {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: 'auto',
      marginTop: '.25rem',
    },
    '.btn-dropdown': {
      marginLeft: '.25rem',
      marginBlock: '.25rem',
      $nest: {
        '> i-button': {
          background: Theme.background.modal,
          opacity: 0.9,
          boxShadow: 'none',
          border: 'none',
          borderRadius: 0,
          height: '2.5rem',
          padding: '1rem 0.5rem',
          justifyContent: 'space-between',
          minWidth: '9.3rem',
          $nest: {
            '&:hover': {
              background: `${Theme.background.modal} !important`,
              opacity: 1
            }
          }
        },
        'i-modal': {
          width: '100%'
        },
        '.modal': {
          padding: '0.25rem 0',
          marginTop: 0,
          border: `2px solid ${Theme.action.focusBackground}`,
          background: Theme.background.modal,
          borderRadius: 4,
          minWidth: 0,
          maxHeight: '50vh',
          overflow: 'auto',
          $nest: {
            '&::-webkit-scrollbar': {
              width: '3px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '5px',
            },
            'i-button': {
              display: 'block',
              padding: '0.35rem 0.5rem',
              background: Theme.background.modal,
              borderRadius: '0',
              border: 'none',
              boxShadow: 'none',
              fontSize: '0.875rem',
              height: 'auto',
              $nest: {
                '&:hover': {
                  background: Theme.action.focusBackground,
                },
                'i-image': {
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                },
                // 'img': {
                //   minWidth: '24px',
                //   height: '24px',
                //   marginRight: '0.25rem',
                //   width: 'auto'
                // },
              },
            },
            'i-button:last-child': {
              marginBottom: 0
            },
            '.network-item': {
              padding: '0.35rem 0.5rem',
              background: Theme.background.modal,
              borderRadius: '0',
              border: 'none',
              boxShadow: 'none',
              fontSize: '0.875rem',
              height: 'auto',
              $nest: {
                '&:hover': {
                  background: Theme.action.focusBackground,
                },
                'i-image': {
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }
              },
            },
            '.network-item:last-child': {
              marginBottom: 0
            }
          }
        },
        '.caption': {
          background: Theme.text.primary,
        },
        '.icon': {
          // background: Theme.background.paper,
          border: 'none',
          borderRadius: 'inherit',
          height: 'auto',
          width: '18px',
          paddingRight: '10px',
        },
        '.network-img': {
          width: '24px',
          minWidth: '24px',
          height: '24px',
          display: 'flex',
          marginRight: '0.2rem',
        },
      },
    },
    '.text-grey *': {
      opacity: 0.75,
    },
    '.text-opacity *': {
      opacity: 0.75,
    },
    '.custom-modal_header': {
      $nest: {
        '.i-modal_header': {
          display: 'none',
        },
        '.header': {
          display: 'flex',
          justifyContent: 'space-between',
        },
        '.header > i-label *': {
          fontSize: '1rem',
          fontWeight: 'bold',
          color: Theme.colors.primary.main,
        },
        '.header > i-icon': {
          fill: Theme.colors.primary.main,
          cursor: 'pointer'
        },
        '#tokenSelectionModal .i-modal_header': {
          display: 'flex',
        },
        '#tokenSelectionModal > div': {
          overflow: 'hidden',
          height: 'auto',
        },
      },
    },
    '.col-50': {
      width: '50%',
    },
    '.custom-col': {
      width: '40%',
    },
    '.custom-token-input': {
      $nest: {
        '#gridTokenInput': {
          background: 'transparent'
        },
        'i-button.disabled': {
          opacity: 1,
          $nest: {
            'i-label': {
              color: Theme.colors.primary.dark,
              fontWeight: 'bold'
            }
          }
        }
      }
    },
    '#bridgeRecordTable': {
      background: Theme.background.modal,
      $nest: {
        '&.os-table table': {
          minWidth: '100%',
          $nest: {
            '.i-table-cell': {
              borderRight: 'none',
              borderTop: `1px solid ${Theme.divider}`
            },
            'thead th': {
              fontWeight: 'bold',
              padding: '1rem',
              textTransform: 'capitalize'
            },
            '.i-table-header > tr > th': {
              border: 'none',
              // borderBottom: `1px solid ${Theme.divider}`,
              background: Theme.background.modal
            },
            '.i-table-body .i-table-cell': {
              padding: '1rem 0.5rem',
              border: 'none',
              borderTop: `1px solid ${Theme.text.primary}`,
              verticalAlign: 'inherit'
            },
            '.i-table-body .is--expanded td': {
              background: Theme.action.focusBackground
            },
            '.i-table-body .i-table-row--child > td': {
              background: Theme.action.focusBackground,
              paddingTop: '1rem',
              border: 'none'
            },
          },
        },
        '.expanded-item': {
          paddingInline: '1rem',
        }
      },
    },
    '.record-pagination': {
      justifyContent: 'flex-end'
    },
    'i-pagination': {
      $nest: {
        '.pagination-main': {
          display: 'flex',
          flexWrap: 'wrap',
        },
        '.paginate_button': {
          backgroundColor: 'rgb(12, 18, 52)',
          border: `1px solid ${Theme.colors.primary.main}`,
          color: Theme.text.third,
          padding: '4px 16px',
          $nest: {
            '&.active': {
              backgroundColor: '#d05271',
              border: '1px solid #d05271',
              color: '#fff',
            }
          }
        }
      }
    },
    '#mobilePanel': {
      marginInline: 'auto',
    },
    '#bridgeRecordMobile': {
      width: '420px',
      maxWidth: '100%',
      marginInline: 'auto',
    },
    '.bg-item': {
      background: Theme.background.modal,
      marginBottom: '1rem',
      padding: '1rem',
      position: 'relative',
      width: '100%',
    },
    '.row-status': {
      position: 'absolute',
      top: '3.75rem',
      right: '1.25rem',
    },
    '.row-item': {
      marginBottom: '0.5rem',
    },
    '.expanded-item-mobile': {
      $nest: {
        '&.expanded-item': {
          flexDirection: 'column',
          display: 'flex',
          marginTop: '1rem',
          $nest: {
            '.col-50': {
              width: '100% !important',
            },
            '.custom-col': {
              maxWidth: '60%',
              width: '10rem',
            },
          },
        },
        '.row-table': {
          display: 'flex',
          alignItems: 'center',
        },
        '.group-btn': {
          justifyContent: 'center',
        }
      }
    },
    '.pagination-mobile': {
      $nest: {
        '&.record-pagination': {
          justifyContent: 'center'
        },
        'i-pagination': {
          $nest: {
            '.paginate_button': {
              $nest: {
                '&.previous, &.next': {
                  display: 'none',
                },
              },
            },
          },
        },
      }
    }
  }
})

export const buttonProps = {
  height: 'auto',
  minHeight: 36,
  background: { color: Theme.colors.primary.main },
  font: { color: Theme.text.primary, weight: 700 },
  padding: { left: 4, right: 4, top: 4, bottom: 4 },
}