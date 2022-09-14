import '@/styles/global.css';

export function doubleNumber (param: number) {
  return param * 2;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it(`doubles input number`, () => {
    expect(doubleNumber(1)).toBe(2);
  });
}