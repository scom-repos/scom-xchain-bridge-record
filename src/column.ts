import { State, VaultOrderItem, VaultOrderStatus } from './store/index';
import { assets } from '@scom/scom-token-list';
import { HStack, Icon, Label, Styles, VStack, Image, Panel, FormatUtils } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

const truncateAddress = (address: string, length: number, separator?: string): string => {
  if (!address || address.length <= length) return address;

  separator = separator || '...';

  const sepLen = separator.length;
  const charsToShow = length - sepLen;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);

  return address.substr(0, frontChars) + separator + address.substr(address.length - backChars);
}

const fromTokenIcon = (data: any) => {
  return assets.tokenPath(data.fromToken, data.fromNetwork.chainId);
}

const toTokenIcon = (data: any) => {
  return assets.tokenPath(data.toToken, data.toNetwork.chainId);
}

const viewTransaction = (state: State, chainId: number, txHash: string) => {
  state.viewOnExplorerByTxHash(chainId, txHash);
}

const getBridgeRecordColumns = () => {
  return [
    {
      title: 'ID',
      fieldName: 'orderId',
      onRenderCell: function (source: any, data: number, row: VaultOrderItem) {
        const lb = new Label(undefined, { caption: `#${data}` })
        return lb;
      }
    },
    {
      title: '$token_swap',
      fieldName: 'token_swap',
      onRenderCell: function (source: any, data: any, row: VaultOrderItem) {
        return renderFromToToken(row);
      }
    },
    {
      title: '$from',
      fieldName: 'from',
      onRenderCell: function (source: any, data: any, row: VaultOrderItem) {
        return renderTokenFrom(row);
      }
    },
    {
      title: '$to',
      fieldName: 'to',
      onRenderCell: function (source: any, data: any, row: VaultOrderItem) {
        return renderTokenTo(row);
      }
    },
    {
      title: '$status',
      fieldName: 'status',
      onRenderCell: function (source: any, data: any, row: VaultOrderItem) {
        return renderStatus(row.statusCode, row.status);
      }
    },
    {
      title: '',
      fieldName: '',
      type: 'actions',
      onRenderCell: async function (source: any, data: any, row: VaultOrderItem) {
        const { orderId, fromNetwork, fromVaultAddress } = row;
        const orderHash = `${orderId}-${fromNetwork.chainId}-${fromVaultAddress}`;
        const icon = await Icon.create();
        icon.id = 'detail';
        icon.name = 'ellipsis-v';
        icon.fill = Theme.text.primary;
        icon.width = '15px';
        icon.height = '15px';
        icon.setAttribute('order-hash', orderHash);
        icon.style.float = 'right';
        return icon;
      }
    },
  ];
};

const bridgeRecordColumns = getBridgeRecordColumns();

const renderFromToToken = (row: VaultOrderItem, justify: string = 'start') => {
  // const date = moment(row.date).format(DefaultDateTimeFormat);
  const vstack = new VStack();
  const hstack = new HStack(vstack, {
    gap: '5px',
    verticalAlignment: 'center'
  })
  const fromLb = new Label(hstack, {
    caption: row.fromToken.symbol,
    font: { bold: true }
  })
  const to = new Label(hstack, {
    caption: 'to',
  })
  const toLb = new Label(hstack, {
    caption: row.toToken.symbol,
    font: { bold: true }
  })
  hstack.append(fromLb, to, toLb)
  // const dateLb = new Label(vstack, {
  //   caption: date,
  //   font: { size: '0.875rem', color: 'hsla(0, 0%, 100%, 0.55)' },
  //   margin: { right: '0.5rem' }
  // })
  // vstack.append(hstack, dateLb);

  return vstack;
}

const renderTokenFrom = (row: VaultOrderItem) => {
  const wrapper = new Panel();
  const hstack = new HStack(wrapper, {
    gap: '4px',
    verticalAlignment: 'center'
  });
  new Image(hstack, {
    url: fromTokenIcon(row),
    width: 20
  });
  new Label(hstack, {
    caption: `${FormatUtils.formatNumber(row.fromAmount, { decimalFigures: 4, hasTrailingZero: false })} ${row.fromToken.symbol}`,
  });
  new Label(wrapper, {
    caption: row.fromNetwork.chainName,
    class: 'text-opacity'
  });
  return wrapper;
}

const renderTokenTo = (row: VaultOrderItem) => {
  const wrapper = new Panel();
  const hstack = new HStack(wrapper, {
    gap: '4px',
    verticalAlignment: 'center'
  });
  new Image(hstack, {
    url: toTokenIcon(row),
    width: 20
  });
  new Label(hstack, {
    caption: `${FormatUtils.formatNumber(row.toAmount, { decimalFigures: 4, hasTrailingZero: false })} ${row.toToken.symbol}`
  });
  new Label(wrapper, {
    caption: row.toNetwork.chainName,
    class: 'text-opacity'
  });
  return wrapper;
}

const renderStatus = (statusCode: VaultOrderStatus, status: string) => {
  let color = statusCode === VaultOrderStatus.Executed ? Theme.colors.success.main : Theme.colors.error.main;
  return new Label(new VStack(), {
    caption: status,
    font: { color: color }
  });
}

export {
  bridgeRecordColumns,
  toTokenIcon,
  viewTransaction,
  truncateAddress
};
