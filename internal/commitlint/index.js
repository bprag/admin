export default {
	// 使用官方提供的规则集
	extends: ['@commitlint/config-conventional'],
	// 可选：自定义规则
	rules: {
		// type 必须是下面这些
		'type-enum': [
			2,
			'always',
			[
				'feat',    // 新功能
				'fix',     // 修复 bug
				'docs',    // 文档
				'style',   // 代码格式
				'refactor',// 重构
				'perf',    // 性能优化
				'test',    // 测试
				'build',   // 构建
				'ci',      // CI 配置
				'chore',   // 杂项
				'revert'   // 回滚
			]
		],
		// subject 最小长度
		'subject-min-length': [2, 'always', 3],
		// subject 最大长度
		'subject-max-length': [2, 'always', 72],
		// scope 可选
		'scope-empty': [2, 'allow'],
		// body 每行长度
		'body-max-line-length': [2, 'always', 100],
		// footer 每行长度
		'footer-max-line-length': [2, 'always', 100],
		// 禁止 type-case 错误
		'type-case': [2, 'always', 'lower-case'],
		// 禁止 subject 首字母大写
		'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
	}
};
