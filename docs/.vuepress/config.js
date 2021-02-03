module.exports = {
    title: 'webpack-website',
    description: '前台模板前端模块化方案',
    dest: './dist',
    port: '8080',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['script', {type: 'text/javascript', src: 'https://s9.cnzz.com/z_stat.php?id=1279668533&web_id=1279668533'}]/* ,
        ['script', {type: 'text/javascript'}, `
            window.onload = function(){
                var oScript = document.createElement("script");
                oScript.type = "text/javascript";
                oScript.url = "https://s9.cnzz.com/z_stat.php?id=1279668533&web_id=1279668533";
                document.body.parentNode.appendChild(oScript);
            };
        `] */
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        sidebarDepth: 3,
        // lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: false,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}