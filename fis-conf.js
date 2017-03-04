/**
 * Created by adoug on 2017/3/3.
 */

/****************环境变量*****************/
fis
// 排除指定目录
    .set('project.files', ['**', '.**', '.**/**'])
    .set('project.ignore', ['dist/**', 'dev/**', 'node_modules/**', '.gitignore', '.git/**', '.idea/**', 'fis-conf.js'])
    .set('project.fileType.text', 'es');


/****************单文件处理插件*****************/
//node_module require支持
fis.hook('commonjs', {
    extList: ['.js', '.jsx', '.es', '.ts', '.tsx']
});

fis.unhook('components');
fis.hook('node_modules');
fis.match('node_modules/**.js', {
    isMod: true
});

fis.match('{/src/**.js, /examples/**.js}', {
    parser: fis.plugin('babel-5.x', {
        blacklist: ['regenerator'],
        stage: 3
    }),
    rExt: 'js'
});

fis.match('/src/**.js', {
    isMod: true
});

fis.match('::package', {
    postpackager: fis.plugin('loader', {})
});

// 设置 *.scss 配置配置项
/*fis.match('/static/scss/!**.scss', {
    isMod: true,
    rExt: '.css',
    parser: fis.plugin('node-sass')
});*/