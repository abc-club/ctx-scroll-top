// 创建按钮
const createBtn = () => {
  const backToTopBtn = document.createElement('div');
  backToTopBtn.setAttribute('id', 'back-to-top');
  backToTopBtn.innerHTML = '<svg t="1566628718522" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5590" width="50" height="50"><path d="M508.245 143.837c-0.606 0.059-1.194 0.174-1.791 0.258-0.725 0.104-1.45 0.188-2.168 0.332-0.687 0.135-1.351 0.325-2.024 0.495-0.622 0.156-1.247 0.293-1.861 0.479-0.661 0.202-1.298 0.448-1.945 0.68-0.614 0.219-1.232 0.422-1.836 0.671-0.604 0.25-1.181 0.544-1.771 0.821-0.622 0.293-1.251 0.569-1.861 0.897-0.563 0.301-1.097 0.645-1.644 0.972-0.6 0.358-1.206 0.696-1.791 1.087-0.606 0.405-1.175 0.856-1.756 1.292-0.487 0.364-0.987 0.701-1.459 1.091-1.044 0.856-2.048 1.76-3.001 2.714l-173.668 173.668c-15.986 15.986-15.986 41.907 0 57.894s41.907 15.986 57.894 0l103.784-103.784v556.173c0 22.61 18.328 40.937 40.937 40.937 22.61 0 40.937-18.328 40.937-40.937v-556.176l103.784 103.784c15.986 15.986 41.907 15.986 57.894 0s15.986-41.907 0-57.894l-173.668-173.668c-0.954-0.954-1.957-1.856-3.001-2.712-0.473-0.39-0.972-0.727-1.459-1.091-0.581-0.436-1.152-0.886-1.756-1.292-0.583-0.391-1.189-0.729-1.787-1.087-0.549-0.327-1.083-0.671-1.648-0.974-0.088-0.047-0.17-0.106-0.258-0.153-0.524-0.276-1.068-0.493-1.603-0.743-0.587-0.279-1.167-0.571-1.771-0.821-0.606-0.25-1.224-0.452-1.838-0.673-0.645-0.231-1.283-0.479-1.942-0.68-0.078-0.023-0.151-0.057-0.228-0.080-0.538-0.161-1.089-0.262-1.631-0.399-0.673-0.17-1.339-0.358-2.024-0.495-0.718-0.143-1.445-0.227-2.168-0.332-0.598-0.086-1.185-0.199-1.791-0.258-1.344-0.133-2.692-0.204-4.040-0.205-1.349 0.004-2.698 0.076-4.040 0.209z" p-id="5591" fill="#13227a"></path><path d="M0.571 512.074c0 282.612 229.103 511.714 511.714 511.714s511.714-229.103 511.714-511.714-229.103-511.714-511.714-511.714-511.714 229.103-511.714 511.714zM942.126 512.071c0 237.396-192.446 429.84-429.84 429.84s-429.84-192.446-429.84-429.84 192.446-429.84 429.84-429.84 429.84 192.448 429.84 429.84z" p-id="5592" fill="#13227a"></path></svg>'
  backToTopBtn.setAttribute('style', 'opacity: 0.6; position: fixed; width: 50px; height: auto; z-index: 2147483647; border: 0px; padding: 0px; min-width: auto; min-height: auto; max-width: none; max-height: none; bottom: 100px; right: 80px; margin: 0px; cursor: pointer;display:none;');
  backToTopBtn.addEventListener('click', onClick);
  return backToTopBtn;
}
// 点击事件
const onClick = () => {
  (function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
  })();
}

// 把按钮插入文档
const injectBtn = () => {
  var body = document.querySelector('body');
  body.appendChild(createBtn());
};

// 监听滚动，大于50px才显示按钮
window.onscroll = function(e){
  var currentScroll=document.documentElement.scrollTop||document.body.scrollTop;
  var backToTopBtn = document.querySelector('#back-to-top');
  if (currentScroll >50) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

injectBtn();
