import remove from 'del';
import config from '../config.js';

let deletePath = `${config.app}/**`;
let clean = () => remove.sync(deletePath);

export default {
  default: clean,
};
