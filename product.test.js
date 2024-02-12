const { resetProducts, addProduct, removeProduct, getProduct, updateProduct, getProducts } = require('./product');

describe('addProduct', () => {
  beforeEach(() => {
    resetProducts();
  });

  it('should add a product', () => {
    addProduct('Product 1', 10);
    expect(getProducts()).toEqual([{ id: 1, name: 'Product 1', price: 10 }]);
  });

  it('should increment the id by 1 each time a product is added', () => {
    addProduct('Product 1', 10);
    addProduct('Product 2', 20);
    expect(getProducts()).toEqual([
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 }
    ]);
  });

  it('should throw an error if the name is not defined', () => {
    expect(() => addProduct(undefined, 20)).toThrow();
  });

  it('should throw an error if the price is not defined', () => {
    expect(() => addProduct('Product 1', undefined)).toThrow();
  });

  it('should throw an error if the product already exists', () => {
    addProduct('Product 1', 10);
    expect(() => addProduct('Product 1', 20)).toThrow();
  });
});

describe('removeProduct', () => {
  beforeEach(() => {
    resetProducts();
    addProduct('Product 1', 10);
  });

  it('should remove a product', () => {
    removeProduct(1);
    expect(getProducts()).toEqual([]);
  });

  it('should throw an error if the product does not exist', () => {
    expect(() => removeProduct(2)).toThrow();
  });
});

describe('getProduct', () => {
  beforeEach(() => {
    resetProducts();
    addProduct('Product 1', 10);
  });

  it('should return a product by its id', () => {
    const product = getProduct(1);
    expect(product).toEqual({ id: 1, name: 'Product 1', price: 10 });
  });

  it('should throw an error if the product does not exist', () => {
    expect(() => getProduct(2)).toThrow();
  });
});

describe('updateProduct', () => {
  beforeEach(() => {
    resetProducts();
    addProduct('Product 1', 10);
  });

  it('should update a product by its id', () => {
    updateProduct(1, 'Updated Product', 20);
    const product = getProduct(1);
    expect(product).toEqual({ id: 1, name: 'Updated Product', price: 20 });
  });

  it('should throw an error if the product does not exist', () => {
    expect(() => updateProduct(2, 'Updated Product', 20)).toThrow();
  });

  it('should only update the price if name is not defined', () => {
    updateProduct(1, undefined, 20);
    const product = getProduct(1);
    expect(product).toEqual({ id: 1, name: 'Product 1', price: 20 });
  });

  it('should only update the name if price is not defined', () => {
    updateProduct(1, 'Updated Product');
    const product = getProduct(1);
    expect(product).toEqual({ id: 1, name: 'Updated Product', price: 10 });
  });
});
