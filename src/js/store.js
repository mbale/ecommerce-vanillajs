/*
** State
*/

window.state = {
  gokuCount: 0,
  gokuPrice: 5,
  narutoCount: 0,
  narutoPrice: 20,
  luffyCount: 0,
  luffyPrice: 7.5,
  totalCount () {
    return this.gokuCount + this.narutoCount + this.luffyCount
  },
  totalCountString () {
    const totalCount = this.totalCount()
    const word = totalCount > 1 ? 'items' : 'item'

    return `${totalCount} ${word}`
  },
  totalPrice () {
    const totalGokuP = this.gokuCount * this.gokuPrice
    const totalNarutoP = this.narutoCount * this.narutoPrice
    const totalLuffyP = this.luffyCount * this.luffyPrice

    return totalGokuP + totalNarutoP + totalLuffyP
  },
  totalPriceString () {
    return `${this.totalPrice()} €`
  },
  qPriceString (prop) {
    return `${this[prop]} €`
  },
  qTotalPriceString (prop) {
    switch (prop) {
      case 'naruto':
        return `${this.narutoCount * this.narutoPrice} €`
      case 'luffy':
        return `${this.luffyCount * this.luffyPrice} €`
      case 'goku':
        return `${this.gokuCount * this.gokuPrice} €`
      default:
        break
    }
  },
  gokuDiscountPrice () {
    const isEligible = this.gokuCount / 2 >= 1

    if (isEligible) {
      const discountCount = parseInt(this.gokuCount / 2)

      return discountCount * this.gokuPrice
    }

    return 0
  },
  gokuDiscountPriceText () {
    return `-${this.gokuDiscountPrice()} €`
  },
  narutoDiscountPrice () {
    const isEligible = this.narutoCount >= 3

    if (isEligible) {
      const discountCount = this.narutoCount

      return discountCount
    }

    return 0
  },
  narutoDiscountPriceText () {
    return `-${this.narutoDiscountPrice()} €`
  },
  orderTotalCost () {
    const narutoTotal = (this.narutoCount * this.narutoPrice) - this.narutoDiscountPrice()
    const gokuTotal = (this.gokuCount * this.gokuPrice) - this.gokuDiscountPrice()
    const luffyTotal = this.luffyCount * this.luffyPrice

    const orderTotalCost = narutoTotal + gokuTotal + luffyTotal

    return `${orderTotalCost} €`
  }
}
