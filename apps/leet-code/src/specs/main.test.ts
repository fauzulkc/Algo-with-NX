import main from '../main';

describe('CLI tests', () => {
  it('should print true', () => {
    const val = main();
    expect(val).toBe(true);
  });
});
