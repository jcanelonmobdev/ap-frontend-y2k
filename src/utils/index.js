export const setPageName = (name) => {
    document.title = name;
}

export const formatCurrency = (number, withDecimals = false) => {
    if (isNaN(number)) {
      return 'invalid number'
    } else {
      const [integer, decimals] = number.toString().split('.');
      const integerNumber = integer.split('').reverse().join('').replace(/(\d{3})/g, '$1.').replace(/\.$/, '').split('').reverse().join('');
      return withDecimals && decimals ? `${integerNumber},${decimals}` : integerNumber;
    }
  }

  export const formatUf = (uf) => {
    try {
      return Number(uf.toString().replace(/(?<=\.\d{2})\d+$/, '')).toString().replace(/\./, ',')
    } catch (error) {
      return 'invalid number'
    }
  };