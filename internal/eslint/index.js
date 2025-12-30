import antfu from '@antfu/eslint-config';
import prettierConfig from 'eslint-config-prettier';

const config = {
	vue: true,
	typescript: true,
};

const defineConfig = () => {
	return antfu(config, [prettierConfig])
}

export default defineConfig;
