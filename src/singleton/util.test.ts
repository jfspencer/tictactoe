import { Utils } from './util';


test('genId generates unique ids', () => {
  const one = Utils.genId();
  const two = Utils.genId();
  const equality = one === two;
  expect(equality).toBe(false);
})
