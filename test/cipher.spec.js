describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  it('debería ser una función', () => {
    assert.equal(typeof cipher.encode, 'function');
  });

  it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
    assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG")
  });
  it('debería retornar " " para " " con offset 33', () => {
    assert.equal(cipher.encode(" ", 33), " ")
  });
});
describe('cipher.decode', () => {

  it('debería ser una función', () => {
    assert.equal(typeof cipher.decode, 'function');
  });

  it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
    assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  });
  it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
    assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg", 33), "abcdefghijklmnopqrstuvwxyz")
  });
  it('debería retornar " " para " " con offset 33', () => {
    assert.equal(cipher.decode(" ", 33), " ")
  });
});
