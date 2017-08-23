// Supported cryptocurrencies
const CRYPTOCURRENCY = {
  BTC: { key: 'btc', name: 'Bitcoin', fillColor: '#FFEBC5', strokeColor: '#FFB01E' },
  ETH: { key: 'eth', name: 'Ethereum', fillColor: '#F0F1F8', strokeColor: '#6E7CB9' },
  LTC: { key: 'ltc', name: 'Litecoin', fillColor: '#ECECEC', strokeColor: '#B5B5B5' },
};

// Supported Currencies
const CURRENCY = {
  CAD: { key: 'CAD', name: 'Canadian Dollar' },
  USD: { key: 'USD', name: 'US Dollar' },
};

// Time duration constants
const DURATION = {
  DAY: { key: 'hour', codename: '1H', humanize: 'since an hour ago' },
  HOUR: { key: 'day', codename: '1D', humanize: 'since yesterday' },
  WEEK: { key: 'week', codename: '1W', humanize: 'since last week' },
  MONTH: { key: 'month', codename: '1M', humanize: 'since last month' },
  YEAR: { key: 'year', codename: '1Y', humanize: 'since last year' },
  ALL: { key: 'all', codename: 'ALL', humanize: '' },
};

// Directory where price data (.json files) are stored
const PRICE_DATA_PATH = './priceData';

export {
  CURRENCY,
  CRYPTOCURRENCY,
  DURATION,
  PRICE_DATA_PATH,
};