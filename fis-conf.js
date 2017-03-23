/**
 * Created by adoug on 2017/3/3.
 */

/****************环境变量*****************/
fis
    .set('project.files', ['src/**', 'examples/**'])
    .set('project.ignore', ['test/**', 'dev/**', 'node_modules/**', '.gitignore', '.git/**', '.idea/**', 'fis-conf.js'])
    .set('project.fileType.text', 'map,vue');


// 模块化支持插件
// https://github.com/fex-team/fis3-hook-commonjs (forwardDeclaration: true)
fis.hook('commonjs', {
    extList: [
        '.js', '.coffee', '.es6', '.jsx', '.vue',
    ],
    paths: {
      vue: '/node_modules/vue/dist/vue.common.js'
    },
    umd2commonjs: true,
    ignoreDependencies: [

    ]
});

// 禁用components，启用node_modules
fis.unhook('components');
fis.hook('node_modules');

fis.match('node_modules/**.js', {
    isMod: true
});

// 所有js文件
fis.match('{**.js}', {
    isMod: true,
    rExt: 'js'
});

// 编译vue组件
fis.match('/src/**.vue', {
    isMod: true,
    rExt: 'js',
    parser: [
        fis.plugin('vue-component', {
          runtimeOnly: true
        })
    ]
});

fis.match('/src/**.vue:js', {
    isMod: true,
    rExt: 'js',
    parser: [
      fis.plugin('babel-6.x', {
        presets: ['es2015-loose', 'stage-3']
      })
    ],
});

// 模块文件
fis.match('/src/**.js', {
    isMod: true,
    parser: [
        fis.plugin('babel-6.x', {
            presets: ['es2015-loose', 'stage-3']
        })
    ]
});

// 页面直接引入的文件，不进行模块require包装
fis.match('/examples/**.js', {
    parser: [
        fis.plugin('babel-6.x', {
            presets: ['es2015-loose', 'stage-3']
        })
    ],
    isMod: false
});

// 非模块文件
fis.match('/examples/mod.js', {
    parser: null,
    isMod: false
});

// 打包
fis.match('::package', {
    postpackager: fis.plugin('loader'),
});
