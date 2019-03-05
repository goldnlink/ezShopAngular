import { Produit } from './produit';

describe('Produits', () => {
  it('should create an instance', () => {
    expect(new Produit(1, '', '', '', 0, 1, 1, '', false)).toBeTruthy();
  });
});
