// vue.config.js
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: (config) => {
        // 기존 copy 플러그인 옵션을 건드려 index.html 복사 제외
        const copyPlugin = config.plugins.get('copy');
        if (copyPlugin) {
            config.plugin('copy').tap((args) => {
                // Vue CLI는 보통 args[0].patterns 형태
                const patterns = args[0].patterns || args[0];
                patterns.forEach((p) => {
                    // globOptions 병합
                    p.globOptions = p.globOptions || {};
                    p.globOptions.ignore = [...(p.globOptions.ignore || []), '**/index.html'];
                });
                return args;
            });
        }
    },
});
