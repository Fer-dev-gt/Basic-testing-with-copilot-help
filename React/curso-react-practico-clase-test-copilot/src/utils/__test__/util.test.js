import { totalPrice } from "../";


describe('totalPrice', () => {
  it('should return 0 if no products are passed', () => {
    expect(totalPrice([])).toBe(0);
  })

  it('should return the price of a single product', () => {
    expect(totalPrice([{ price: 100 }])).toBe(100);
  })

  it('should return the total price of multiple products', () => {
    expect(totalPrice([{ price: 100 }, { price: 200 }, { price: 300 }])).toBe(600)
  })
});