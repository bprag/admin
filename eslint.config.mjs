import antfu from '@antfu/eslint-config';
import prettierConfig from 'eslint-config-prettier';

const config = {
  vue: true,
  typescript: true,
};

export default antfu(config, [prettierConfig]);
