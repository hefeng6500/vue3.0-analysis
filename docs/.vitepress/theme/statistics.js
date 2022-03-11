const useBaiduTongji = () => {
  const hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1de472432e76a93aa5f97f550145dfb4";
  const s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
};
const generateStatistics = () => {
  useBaiduTongji();
};



