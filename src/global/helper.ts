import { moment } from '@ijstech/components';

export enum SITE_ENV {
  DEV = 'dev',
  TESTNET = 'testnet',
  MAINNET = 'mainnet',
}

export const DefaultDateTimeFormat = 'DD/MM/YYYY HH:mm:ss';
export const DefaultDateFormat = 'DD/MM/YYYY';

export const formatDate = (date: any, customType?: string, showTimezone?: boolean) => {
  const formatType = customType || DefaultDateFormat;
  const formatted = moment(date).format(formatType);
  if (showTimezone) {
    let offsetHour = moment().utcOffset() / 60;
    //will look like UTC-2 UTC+2 UTC+0
    return `${formatted} (UTC${offsetHour >= 0 ? "+" : ""}${offsetHour})`;
  }
  return formatted;
}

export const showResultMessage = (result: any, status: 'warning' | 'success' | 'error', content?: string | Error) => {
  if (!result) return;
  let params: any = { status };
  if (status === 'success') {
    params.txtHash = content;
  } else {
    params.content = content;
  }
  result.message = { ...params };
  result.showModal();
}