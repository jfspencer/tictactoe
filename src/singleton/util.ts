import { now, random } from 'lodash';

export class Utils {
  static genId() {
    return (now().toString(36) + random(78364164095).toString(36) + (now() % 37).toString(36)).toLowerCase();
  }
}
