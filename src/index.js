const _ = new Vue({
    el: '#app',
    data:()=>{
        return {}
    }
});

(()=>{
    const tye = document.querySelector('#tye');
    ityped.init(tye, {showCursor: true, strings:['欢迎关注我的公众号-星明窝-->>里面啥都有，关注了才知道！'] });
    console.log('itpyed: https://ityped.surge.sh/');
})();
