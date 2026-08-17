
$(".menu1").on("click", function () {
  $(".navigate").css({
    '-webkit-transform': 'translateX(0)',
    'transform': 'translateX(0)',
  }).show();

})
// 顶部banner
new Swiper($('.head-banner .swiper-container'), {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 27,
  autoplay: {
    delay: 3500
  },
  pagination: {
    el: '.head-banner .swiper-pagination',
  },
  freeMode: false,
})

$('body').on('click', '.popbtn', function () {
  $('.j_form_window').addClass('active')
})
$('.j_form_window .close').on('click', function () {
  $('.j_form_window').removeClass('active')
})
let caseSwiper = null

// 提取 URL 生成逻辑，便于集中管理和扩展
function getHrefForNews(tabId) {
  const urlMap = {
    lx: "https://m.igo.cn/news/",
    kp: "https://m.igo.cn/kp/info/"
  };
  return urlMap[tabId] || "https://m.igo.cn";
}

function getHrefForTeacher(tabId) {
  const urlMap = {
    lx: "https://m.igo.cn/liuxue/consultant.shtml",
    kp: "https://m.igo.cn/kp/teachers/"
  };
  return urlMap[tabId] || "#"; // 默认值可以根据需求调整
}

function getHrefForCase(tabId) {
  const urlMap = {
    lx: "https://m.igo.cn/case/search.php",
    kp: "https://m.igo.cn/kp/case/"
  };
  return urlMap[tabId] || "#"; // 默认值可以根据需求调整
}



$('.lxcase .c_tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active')
  let id = $(this).parent().data('id')
  if (id == "lx") {
    caseSwiper.destroy(false)
    caseSwiper = null
    getcase.init($(this).data('id'))
  } else {
    $(this).parents('.samepart').find('.high_section>div').eq($(this).index()).addClass('active').siblings().removeClass('active')
  }
})

let navLayData = {
  asia: [
    {
      name: '日本',
      icon: 'jpa',
      url: 'https://m.igo.cn/country/jp/'
    },
    {
      name: '韩国',
      icon: 'kor',
      url: 'https://m.igo.cn/country/kr/'
    },
    {
      name: '新加坡',
      icon: 'sgp',
      url: 'https://m.igo.cn/country/sg/'
    },
    {
      name: '泰国',
      icon: 'tha',
      url: 'https://m.igo.cn/country/th/'
    },
    {
      name: '马来西亚',
      icon: 'mys',
      url: 'https://m.igo.cn/country/ma/'
    },
    {
      name: '阿联酋迪拜',
      icon: 'dubai',
      url: 'https://m.igo.cn/country/dubai/'
    },
  ],
  eur: [
    {
      name: '法国',
      icon: 'fra',
      url: 'https://m.igo.cn/country/fr/'
    },
    {
      name: '德国',
      icon: 'gen',
      url: 'https://m.igo.cn/country/ge/'
    },
    {
      name: '荷兰',
      icon: 'nld',
      url: 'https://m.igo.cn/country/hl/'
    },
    {
      name: '意大利',
      icon: 'it',
      url: 'https://m.igo.cn/country/it/'
    },
    {
      name: '爱尔兰',
      icon: 'il',
      url: 'https://m.igo.cn/country/il/'
    },
    {
      name: '西班牙',
      icon: 'es',
      url: 'https://m.igo.cn/country/es/'
    }, {
      name: '瑞士',
      icon: 'ch',
      url: 'https://m.igo.cn/country/ch/'
    }, {
      name: '北欧',
      icon: 'ne',
      url: 'https://m.igo.cn/country/ne/'
    },
  ],
  hkg: [
    {
      name: '中国香港',
      icon: 'hkg',
      url: 'https://m.igo.cn/country/hk/'
    },
    {
      name: '中国澳门',
      icon: 'mo',
      url: 'https://m.igo.cn/country/mo/'
    },
  ],
  cwh: [
    {
      name: '雅思',
      icon: 'ielts',
      url: 'https://m.igo.cn/language/ielts/'
    },
    {
      name: 'A-Level/IGCSE',
      icon: 'Alevel',
      url: 'https://m.igo.cn/kpzt/A-level-new/'
    },
    {
      name: 'PTE',
      icon: 'pte',
      url: 'https://m.igo.cn/kpzt/pte/'
    },
    {
      name: '多邻国',
      icon: 'duolingo',
      url: 'https://m.igo.cn/kpzt/duolingo2023/'
    },
    {
      name: '剑桥英语',
      icon: 'ketpetfce',
      url: 'https://m.igo.cn/kpzt/ket_pet_fce/'
    },
    {
      name: '考培专区',
      icon: 'kp',
      url: 'https://m.igo.cn/kp'
    },
  ],
  na: [
    {
      name: '托福',
      icon: 'toefl',
      url: 'https://m.igo.cn/language/toefl/'
    },
    {
      name: 'GRE/GMAT',
      icon: 'gre_gmat',
      url: ' https://m.igo.cn/kpzt/gre_gmat/'
    },
    {
      name: 'SAT/ACT',
      icon: 'sat',
      url: 'https://m.igo.cn/zt/summer/sat-1/'
    },
    {
      name: 'AP',
      icon: 'ap',
      url: 'https://m.igo.cn/kpzt/hz/apkc/'
    },
    {
      name: 'IB',
      icon: 'ib',
      url: 'https://m.igo.cn/kpzt/jimuyu/IB/'
    },
    {
      name: 'OSSD',
      icon: 'ossd',
      url: 'https://m.igo.cn/kpzt/jimuyu/ossd/'
    },
  ],
  we: [
    {
      name: '日语',
      icon: 'Japanese',
      url: 'https://m.igo.cn/zt/Japanese-jt/'
    },
    {
      name: '韩语',
      icon: 'Korean',
      url: 'https://m.igo.cn/zt/Korean-jt/'
    },
    {
      name: '德语',
      icon: 'German',
      url: 'https://m.igo.cn/zt/German-jt/'
    },
    {
      name: '法语',
      icon: 'french',
      url: 'https://m.igo.cn/zt/french-jt/'
    },
    {
      name: '意语',
      icon: 'italiano',
      url: ''
    },
    {
      name: '西语',
      icon: 'spanish',
      url: ''
    },
    {
      name: '俄语',
      icon: 'russian',
      url: ''
    },
    {
      name: '小语种专区',
      icon: 'we',
      url: 'https://m.igo.cn/we'
    },
  ],
}

$('#main nav .set').click(function () {
  let cnName = $(this).data('name');
  let code = $(this).data('code');
  const suffix = code === "cwh" || code === "na" || code === "we" ? "" : cnName === "中国港澳" ? "升学" : "留学";
  $('.navLay').find('.cnName').html(`${cnName}${suffix}`);
  let str = ""
  let d = navLayData[code]
  for (let i = 0; i < d.length; i++) {
    const e = d[i];
    str += `<li ${e.url ? '' : 'onclick="leyubtn()"'}>
							<a href="${e.url ? e.url : 'javascript:;'}">
								<div style="background-image:url(migonew/version/newImage/${e.icon}.png)" alt=""></div>
								<p>${e.name}</p>
							</a>
						</li>`
  }
  $('.navLay ul').html(str)
  $('.navLay').show()

})

$('.navLay').click(function (event) {
  if (!$(event.target).closest('.content').length) {
    $('.navLay').hide()
  }
});


// 干货 BEGIN
const featureNews = (function () {
  const typeList = {
    "留学申请动态": ["院校申请", "申请方案", "留学费用", "奖学金", "行前准备", "海外生活", "留学新闻", "签证指南", "院校排名", "活动回顾"],
    "专业与就业": ["专业推荐"],
  }
  const topicId = {
    创始人有话说: "50028",
    院校来访团: "49427",
  }
  let newsObj = {
    category: "",
    page: 1,
    perpage: 5,
    city: 'xt_sd'
  };

  const ajaxRequest = function (params, url, type) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: type,
        url: "https://webapi.igo.cn" + url,
        data: params,
        dataType: "JSON",
        success: function (res) {
          if (res.code == 1) {
            resolve(res);
          } else {
            alert("数据获取失败，请刷新后重试");
            reject(new Error("API返回错误"));
          }
        },
        error: function (xhr, status, error) {
          console.error("AJAX请求失败:", error);
          reject(new Error("网络请求失败"));
        },
      });
    });
  }
  const getStr = function (d, idx) {
    // 参数验证
    if (!d || typeof d !== 'object') {
      console.warn('Invalid data provided to getStr:', d);
      return '';
    }

    // URL 类型判断
    let icon = 'video';
    let newsUrl = d.URL || d.url || d.lineUrl || '';

    if (newsUrl.includes('https://www.igo.cn/news/dynamicNews/')) {
      icon = 'dynamicNews';
    } else if (newsUrl.includes('https://www.igo.cn/news/') || newsUrl.includes('https://www.igo.cn/kpnews/')) {
      icon = 'news';
    }

    // 安全处理日期格式
    let date = '';
    if (d.CREATEDATE) {
      date = d.CREATEDATE;
    } else if (d.createdAt && typeof d.createdAt === 'string') {
      date = d.createdAt.substring(0, 10);
    } else if (d.publishdate && typeof d.publishdate === 'string') {
      date = d.publishdate.substring(0, 10);
    }
    newsUrl = newsUrl.replace('https://www.igo.cn', 'https://m.igo.cn')
    if (newsUrl.includes('https://m.igo.cn/kpnews/')) {
      newsUrl = newsUrl.replace('https://m.igo.cn/kpnews/', 'https://m.igo.cn/kp/info/details/')
    }

    if (newsUrl.includes('https://m.igo.cn/qiuzhi/')) {
      newsUrl = newsUrl.replace('https://m.igo.cn/qiuzhi/', 'https://m.igo.cn/')

    }
    // 安全处理URL和图片
    const coverUrl = d.COVER_URL || d.coverUrl || d.imgUrl || '';
    const title = d.TITLE || d.title || d.artTitle || '';

    // 防止 XSS 攻击，对内容进行转义
    const escapeHtml = (unsafe) => {
      if (typeof unsafe !== 'string') return '';
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    return `  <div class=""><a href="${escapeHtml(newsUrl)}" class="dis-b">
											<div class="txt">
												<p>${escapeHtml(title)}</p>
												<p>${escapeHtml(date)}</p>
											</div>
											<div class="img ${icon}"
												style="background-image:url(${escapeHtml(coverUrl)})">
											</div>
										</a></div>`;

  };

  const getFeaturedVideo = async function (idx) {
    let featuredData = {}
    if (idx == 0) {
      featuredData = await ajaxRequest({ topicId: 52333 }, "/web/getArticlesByTopic", "GET")
    } else if (idx == 1) {
      featuredData = await ajaxRequest({ topicId: 52334 }, "/web/getArticlesByTopic", "GET")
    }
    const list = featuredData.list
    const finalList = list.filter(item => item && typeof item === 'object' && Object.keys(item).length > 0)
      .slice(0, 3)
    const str = finalList.map((item, index) => getStr(item, index)).join('');
    $('.xt_zixun .news_container').html(str);
  }

  const getNews = async function (d) {
    let link = "/lx/getLxNewsList", type = "POST", obj = newsObj, finalList = []
    if (d == "预测备考攻略" || d == "校企战略合作") {
      link = "/mina/getLxStuffNewsList"
      type = "GET"
      if (d == "预测备考攻略") {
        request = [
          ajaxRequest({ category: "考培", page: 1, pageSize: 20, topic: 46168, companyId: "xt_sd" }, "/mina/getLxStuffNewsList", "GET"),
          ajaxRequest({ category: "考培", page: 1, pageSize: 20, topic: 46199, companyId: "xt_sd" }, "/mina/getLxStuffNewsList", "GET")
        ]
      } else {
        request =
          [
            ajaxRequest({ category: "求职", page: 1, pageSize: 20, topic: 51813, companyId: "xt_sd" }, "/mina/getLxStuffNewsList", "GET"),
            ajaxRequest({ category: "求职", page: 1, pageSize: 20, topic: 51813, companyId: "xt_sd" }, "/mina/getLxStuffNewsList", "GET"),
          ]
      }
      const [featuredData, latestData] = await Promise.all(request);
      finalList = [...featuredData.list, ...latestData.list].filter((item, index, self) =>
        index === self.findIndex(t => t.id === item.id)
      );
      finalList.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
      })
    } else {
      newsObj.category = typeList[d].join(',')
      let data = await ajaxRequest(obj, link, type)
      finalList = data.list.filter(item => item.COVER_URL != "" && item.coverUrl != "").sort((a, b) => {
        return new Date(b.CREATEDATE) - new Date(a.CREATEDATE)
      })
    }
    finalList.length = 3
    let str = finalList.map((item, index) => getStr(item, index)).join('')
    $('.xt_zixun .news_container').html(str)
  }
  return { getNews, getFeaturedVideo }
})();
featureNews.getFeaturedVideo(0)
$('.xt_zixun .xt_zixun_tabs li').click(function () {
  $('.xt_zixun .news_container').html('<div class="loading-initial tc"><img src="migonew/version/newImage/loading.gif" alt=""></div>');
  if ($(this).hasClass('active')) {
    return;
  }
  let index = $(this).index()
  $(this).addClass('active').siblings().removeClass('active');
  $(this).addClass('Cline').siblings().removeClass('Cline');
  if (index == 0 || index == 1) {
    featureNews.getFeaturedVideo(index)
  } else {
    featureNews.getNews($(this).text())
  }
})
// 干货 END




// 活动list BEGIN
const getAct = (function () {
  // 配置项
  const config = {
    apiUrl: 'https://webapi.igo.cn/mina/getchannellivelist',
    defaultImageUrl: 'default_image_url.jpg', // 默认图片占位符
    defaultLink: 'https://m.igo.cn/study/live/' // 默认链接
  }
  // 初始化函数
  const init = function () {
    $.ajax({
      type: 'get',
      url: config.apiUrl,
      data: {
        recentlimit: 1,
        upcominglimit: 99,
        expiredlimit: 50,
        ongoinglimit: 99
      },
      dataType: 'JSON',
      success: function (res) {
        if (res.code == 1) {
          initDom(res.list);
        } else {
          console.error('API 请求成功，但返回数据异常:', res);
        }
      },
      error: function (err) {
        console.error('API 请求失败:', err);
        $('.hotact').find('.item_box').html('<p>加载失败，请稍后再试</p>');
      }
    });
  }

  // 生成 HTML 字符串
  const processActivityList = function (list, defaultLinkPrefix, type) {
    let finalList = list;
    if (type == "expired") {
      list.forEach(e => {
        let playLink = e.ACT_PLAYLINK.split(',');
        e.ACT_PLAYLINK = playLink.map(item => item ? item.trim() : '').filter(item => item !== '');
        e.timestr = "end";
      });
      let hasplayLink = list.filter(e => e.ACT_PLAYLINK.length > 0);
      let playLinkEmpty = list.filter(e => e.ACT_PLAYLINK.length === 0);
      finalList = [...hasplayLink, ...playLinkEmpty];
    }

    return finalList.map(e => {
      if (defaultLinkPrefix) {
        e.link = e.ACT_OUTLINK ? e.ACT_OUTLINK : `${defaultLinkPrefix}${e.ACT_ID}`;
      }

      e.type = type;
      e.isElite = e.ACT_ISELITE == 1;

      if (type == 'expired') {
        e.timestr = "green";
        if (e.ACT_PLAYLINK.length > 0) {
          e.keytext = "听回放";
        } else if (!e.keytext) {
          e.keytext = "已结束";
        }
      } else if (type == 'upcoming') {
        e.timestr = "red";
        e.keytext = "待开始";
      } else if (type == 'recent') {
        e.timestr = "red";
        e.keytext = "即将开始";
      } else {
        e.timestr = "red";
        e.keytext = "进行中";
      }

      if (!e.link) {
        e.link = `https://m.igo.cn/study/live/?act_id=${e.ACT_ID}`;
      }
      return e;
    });
  }

  const str = function (data) {
    let time = data.ACT_TIMESTART.substring(0, 16).replaceAll('-', '.');
    let eliteTag = data.isElite ? '<em class="elite-tag"></em>' : '';
    return `
      <li class="item dis_e">
        <a href="${data.link}" class="dis_e">
          <div class="img">
            <img src="${data.ACT_PIC}" onclick="return false;">
            <span class="dis-c">
              <i class="${data.timestr}"></i>${data.keytext}</span>
            ${eliteTag}
          </div>
          <p class="i_t">${data.ACT_NAME}</p>
          <p class="date">${time}</p>
        </a>
      </li>
    `;
  }

  // 初始化 DOM
  const initDom = function (data) {
    let _recent = data.list_recent || [];
    let _upcoming = data.list_upcoming || [];
    let _ongoing = data.list_ongoing || [];
    let _expired = data.list_expired || [];

    if (_recent.length == 0 && _upcoming.length == 0 && _ongoing.length == 0 && _expired.length == 0) {
      $('.hotact').find('.item_box').html('<p>暂无数据</p>');
      return;
    }

    const defaultLinkPrefix = "https://m.igo.cn/study/live/?act_id=";
    _recent = _recent.length > 0 ? processActivityList(_recent, defaultLinkPrefix, 'recent') : [];
    _upcoming = _upcoming.length > 0 ? processActivityList(_upcoming, defaultLinkPrefix, 'upcoming') : [];
    _ongoing = _ongoing.length > 0 ? processActivityList(_ongoing, defaultLinkPrefix, 'ongoing') : [];
    _expired = _expired.length > 0 ? processActivityList(_expired, defaultLinkPrefix, 'expired') : [];

    let newList = [..._recent, ..._upcoming, ..._ongoing, ..._expired];

    // 将精选的且未过期的活动放置最前面
    let eltiedata = newList.filter(item => item.ACT_ISELITE == 1 && item.type != "expired")
    console.log(eltiedata);
    eltiedata.sort((a, b) => new Date(a.ACT_TIMESTART) - new Date(b.ACT_TIMESTART));
    newList = [...eltiedata, ...newList];
    const uniqueActivities = new Map();
    [...eltiedata, ...newList].forEach(item => {
      if (!uniqueActivities.has(item.ACT_ID)) {
        uniqueActivities.set(item.ACT_ID, item);
      }
    });
    newList = Array.from(uniqueActivities.values());
    newList.length = 10
    let items = newList.map(str).join('');

    items = items + `<li><a class="pic more" href="https://m.igo.cn/study/live/list.shtml">更多<br>活动</a></li>`;
    // 更新 DOM
    $('.hotact').find('.item_box').html(items);
  }

  return { init }
})()
// 活动list END

// 留学方案 BEGIN
const getProduct = (function () {
  const productData = {
    1: {
      name: "海外留学牛校<br/>精英培养计划",
      link: "https://m.igo.cn/zt/cultivate_product/",
      cover: "cultivate_product",
      fit: "应届或往届高中毕业生/完成高二学习，成绩优良",
    },
    2: {
      name: "考研&留学<br/>双保险计划",
      link: "https://m.igo.cn/zt/master_abroad_kaoyan/",
      cover: "master_abroad_kaoyan",
      fit: "有意向未来攻读硕士的内地本科院校在读大学生",
    },
    3: {
      name: "高考&留学<br/>双保险计划",
      link: "https://m.igo.cn/zt/gaokao_product/",
      cover: "gaokao_product",
      fit: "中国内地普通高中生及高考生",
    },
    4: {
      name: "雅思/SAT/ACT<br/>港澳地区陪考团",
      link: "https://m.igo.cn/kpzt/pkt/",
      cover: "pkt",
      fit: "赴境外参加雅思/SAT/ACT考试的学员能够发挥出最佳水平，推出了针对香港/澳门地区考试送考团服务。",
    },
    5: {
      name: "新通雅思培训<br/><i>雅思考试官方<br/>白金级合作伙伴</i>",
      link: "https://m.igo.cn/kpzt/ielts/",
      cover: "ielts",
      fit: "计划出国读本科/研究生，申请交换生项目，提升职业竞争力及考公考编等人群",
    },
    6: {
      name: "推免&留学<br/>双保险计划",
      link: "https://m.igo.cn/zt/master_abroad_baoyan/",
      cover: "master_abroad_baoyan",
      fit: "内地四年制本科大三在读学生；内地五年制本科大四在读学生",
    },
    7: {
      name: "美国硕士强校申请<br/>IGO Package 计划",
      link: "https://m.igo.cn/zt/us/igopackage_master/",
      cover: "us_igopackage_master",
      fit: "冲刺全美前20/全美前50的大学的学生",
    },
    8: {
      name: "英国本硕强校申请<br/>IGO Package 计划",
      link: "https://m.igo.cn/zt/uk/igopackage/",
      cover: "uk_igopackage",
      fit: "冲刺牛津或剑桥大学/英国G5精英大学/英国QS前50大学的学生",
    },
    9: {
      name: "新通星途计划<br/>世界牛校跳板",
      link: "",
      cover: "Star_Path",
      fit: "计划入读新加坡&马来西亚优选院校或有意向通过“2+2”升学攻读美国本科的学生",
    },
    10: {
      name: "美国本科强校申请<br/>IGO Package 计划",
      link: "https://m.igo.cn/zt/us/igopackage_undergraduate/",
      cover: "us_igopackage_undergraduate",
      fit: "冲刺全美前20/全美前30/全美前15的大学的学生",
    },
    11: {
      name: "文书&选课<br/>赋能计划",
      link: "https://m.igo.cn/zt/enablement_programs/",
      cover: "enablement_programs",
      fit: "针对专业解读、选校规划、头脑风暴、个性文书、选课指导服务有全方面需求的学生",
    },
    12: {
      name: "考研&英国留学<br/>双保险计划",
      link: "https://m.igo.cn/zt/master_abroad_kaoyan/",
      cover: "master_abroad_kaoyan",
      fit: "有意向未来攻读英国硕士的内地本科院校在读大学生",
    },
    13: {
      name: "英港澳本科强校申请<br/>IGO卓越成长计划",
      link: " https://m.igo.cn/zt/igo_grow/",
      cover: "igo_grow",
      fit: "冲刺牛津或剑桥大学、香港前三和澳洲前三/英国G5精英大学、澳洲八大或香港前五/英港澳QS前100的学生",
    },
    14: {
      name: "日韩德留学语培<br/>双护航计划",
      link: " https://m.igo.cn/wezt/double_escort/",
      cover: "we_xyz",
      fit: "入读日本、韩国本科的普高生、三校生；大专生、本科生在读韩国本科插班及研究生；以德语考试成绩申请大学",
    },
    15: {
      name: "新通剑桥<br/>青少年英语",
      link: "https://m.igo.cn/kpzt/ket_pet_fce",
      cover: "ket_pet_fce",
      fit: "寻求体制内外英语能力双提升的小学生；想在国内英语体系中获得优的学员；有出国规划的学员",
    },
    16: {
      name: "IGCSE/A-Level<br/>新通国际课程",
      link: "https://m.igo.cn/kpzt/A-level-new/",
      cover: "A-level-new",
      fit: "计划升读英美本科的学生",
    },
    17: {
      name: "高考生<br/>飞跃&双保险计划",
      link: "https://m.igo.cn/zt/leap_plan/",
      cover: "leap_plan",
      fit: "内地高三学生（英澳留学飞跃专项奖学金）",
    },
    18: {
      name: "线上实训项目",
      link: "https://m.igo.cn/qiuzhi/project/?id=0",
      cover: "qiuzhi",
      fit: "需要实训经验或企业推荐信用于留学申请的学生",
    },
    19: {
      name: "实习无忧计划",
      link: "https://m.igo.cn/qiuzhi/project/?id=1",
      cover: "qiuzhi",
      fit: "想跨专业读研/求职，但过往经历与该专业毫不匹配的学生",
    },
    20: {
      name: "就业无忧计划",
      link: "https://m.igo.cn/qiuzhi/project/?id=2",
      cover: "qiuzhi",
      fit: "校招求职，投递企业，但由于无相关经验被拒绝的学生",
    },
    21: {
      name: "留学就业一体化<br/>硕士留学申请服务",
      link: "https://m.igo.cn/study/product/?id=1766",
      cover: "qiuzhi",
      fit: "有高薪专业申请定制需求，以就业结果为目标的人群",
    },
    22: {
      name: "留学就业一体化<br/>本科留学申请服务",
      link: "https://m.igo.cn/study/product/?id=1802",
      cover: "qiuzhi",
      fit: "有高薪专业申请定制需求，以就业结果为目标的人群",
    },
    23: {
      name: "新通PTE<br/><i>培生PTE官方<br/>战略合作伙伴</i>",
      link: "https://m.igo.cn/kpzt/pte/",
      cover: "pte",
      fit: "口语写作较弱，但是听力阅读较好，同时希望能短期快速提高分的考生",
    },
    24: {
      name: "新通多邻国英语测试<br/><i>中国区官方金牌<br/>战略合作伙伴</i>",
      link: "https://m.igo.cn/kpzt/duolingo2023/",
      cover: "duolinguo",
      fit: "基础比较弱：苦战雅思托福考不下来；临近 DDL：马上到截止日期，还没拿到成绩",
    },
    25: {
      name: "专科生<br/>超车计划",
      link: "https://m.igo.cn/zt/dzs-accelerate/",
      cover: "dzs-accelerate",
      fit: "已获得三年制大专学历，寻求学历破圈法的学生；国内大专在读，想快速提升学历的学生",
    },
    26: {
      name: "新通托福培训<br/><i>ETS官方授权<br/>报名中心</i>",
      link: "https://m.igo.cn/kpzt/toefl/",
      cover: "toefl",
      fit: "非英语国家留学生的英语考试，可用于本科及研究生阶段的院校申请",
    },
    27: {
      name: "新通GRE/GMAT课程<br/><i>全面适配改革后<br/>新GRE/GMAT</i>",
      link: "https://m.igo.cn/kpzt/gregmat/",
      cover: "gregmat",
      fit: "GRE用于申请世界范围内的理工科、人文社科、商科、法学等专业硕士，GMAT申请商科和管理专业硕士",
    },
    28: {
      name: "新通SAT/ACT<br/><i>上外GAC-U项目<br/>战略合作伙伴</i>",
      link: "https://m.igo.cn/kpzt/satact/",
      cover: "satact",
      fit: "SAT用于申请美国大学本科入学资格及奖学金的学生；ACT用于申请就读美国本科一年级课程",
    },
    29: {
      name: "新通OSSD课程<br/><i>以加拿大学籍身份<br/>直申海外名门学府</i>",
      link: "https://m.igo.cn/kpzt/ossd/",
      cover: "ossd",
      fit: "初三至高三计划出国的学生，不擅长应试/不参加高考群体，免预科/桥梁课程、偏科的学生",
    },
    30: {
      name: "新通国际课程<br/><i>升学路径规划<br/>择校备考攻略</i>",
      link: "https://m.igo.cn/zt/nb/ly/gjgz/",
      cover: "gjgz",
      fit: "面临“职校”恐慌，想要突破单一和竞争激烈的升学选择的家庭",
    },
    31: {
      name: "英国专升硕<br/>升学计划",
      link: "https://m.igo.cn/zt/uk/junior_college_master/",
      cover: "junior_college_master",
      fit: "商科专业背景的大专在读学生、大专毕业学生",
    },
    32: {
      name: "加拿大&德国留学<br/>高端规划",
      link: "https://m.igo.cn/zt/ca_ge/",
      cover: "ca_ge",
      fit: "高中10-11年级在读学生，高考生或国际课程体系学生，申请加德留学的学生",
    },
    33: {
      name: "高考后全球升学<br/>快车计划",
      link: "https://m.igo.cn/zt/gaokao_GES/",
      cover: "gaokao_GES",
      fit: "用高考成绩直接申请，高中平时成绩直接申请的学生",
    },
    34: {
      name: "中外合作办学<br/>硕士联申计划",
      link: "https://m.igo.cn/zt/master_CFCRS/",
      cover: "master_CFCRS",
      fit: "计划出国想通过“2+2”“3+1”模式降低文化冲击风险，节省留学成本以及高考成绩中等但希望冲击牛校的学生",
    },
    35: {
      name: "新通日语<br/>培训课程",
      link: "https://m.igo.cn/zt/Japanese-jt/",
      cover: "japanese",
      fit: "准备留学的语言学习人群；需日语能力考考级申校的留学申请人，追求留学沟通顺畅的人群",
    },
    36: {
      name: "新通韩语<br/>培训课程",
      link: "https://m.igo.cn/zt/Korean-jt/",
      cover: "korean",
      fit: "准备留学的语言学习人群；需TOPIK考试考级申校的留学申请人，追求留学沟通顺畅的人群",
    },
    37: {
      name: "新通德语<br/>培训课程",
      link: "https://m.igo.cn/zt/German-jt/",
      cover: "german",
      fit: "准备留学的语言学习人群；需歌德/德福考试考级申校的留学申请人，追求留学沟通顺畅的人群",
    },
    38: {
      name: "新通欧亚教育<br/>小语种 大世界",
      link: "https://m.igo.cn/wezt/xyz",
      cover: "we_xyz",
      fit: "对小语种有兴趣、准备留学的语言学习、欲提升能力职场储备人群；计划考研并选非英语语种的考生",
    },
    39: {
      name: "中外合作办学<br/>国际本科",
      link: "https://m.igo.cn/zt/gndhwdx/",
      cover: "leap_plan",
      fit: "高考成绩不理想但不想复读、目标明确要出国读研、未来主要在外企或海外发展的学生",
    }
  }
  const producType = {
    elite: [1, 32, 14, 4, 5],
    master: [2, 6, 25, 31, 34],
    undergraduate: [3, 9, 33, 39, 13],
    language: [5, 23, 24, 16, 15],
  }
  const init = function (type) {
    let ids = producType[type]
    let item = ""
    for (let i = 0; i < ids.length; i++) {
      let d = productData[ids[i]]
      let cover = type == "master" || type == "undergraduate" ? type : d.cover
      item += `
    <li onclick="${d.link ? '' : 'leyubtn()'}"> <a href="${d.link ? d.link : 'javascript:;'}">
						<div class="p-t" id="${cover}" style="background-image: url(migonew/version/newImage/products/${cover}.jpg);">${d.name}</div>
						<div class="fit dis-f"><img src="migonew/version/newImage/fit.png" alt="" onclick="return false;">
							<p>${d.fit}</p>
						</div>
            </a>
            <div class="dis-c leyubtn" onclick="leyubtn()">1v1方案规划</div>
					</li>
    `
    }
    $('.product ul').html(item)
  }
  return { init }
})()
getProduct.init('elite')
// 留学方案 END

//成功案例 BEGIN
const getcase = (function () {
  const init = function (coun) {
    $.ajax({
      url: "https://webapi.igo.cn/web/getWapIndexOffer",
      type: "get",
      async: true,
      data: {
        country: coun,
        limit: 3
      },
      dataType: "json",
    })
      .done(function (res) {
        if (res.code == 1) {
          if (res.list && res.list.length > 0) {
            initDom(res.list);
          } else {
            $('.lxcase .offer .swiper-wrapper').html('<p>暂无数据</p>')
          }
        } else {
          $('.lxcase .offer .swiper-wrapper').html('<p>加载失败，请稍后再试</p>')
        }
      })
      .fail(function () {
        $('.lxcase .offer .swiper-wrapper').html('<p>加载失败，请稍后再试</p>')
      });
  }
  const initDom = function (data) {
    let str = ""
    data.forEach(e => {
      str += `<div class="swiper-slide"><a href="${e.url}" class="dis-f">
										<div class="offerImg"><img src="${e.offerpath}" alt="" onclick="return false;"></div>
										<div class="offerRight">
											<p>${e.tTitle}</p>
											<div class="">
												<p class="sch">录取院校：${e.tCollegeName}</p>
												<p class="major">录取专业：${e.tSpecialty}</p>
											</div>
											<div class="leyubtn dis-c" onclick="leyubtn()">查看录取要求</div>
										</div>
                    </a>
									</div>`
    });
    $('.lxcase .offer .swiper-wrapper').html(str)
    caseSwiper = new Swiper($('.lxcase .swiper-container'), {
      loop: true,
      slidesPerView: 1,
      disableOnInteraction: false,
      on: {
        slideChangeTransitionEnd: function () {
          this.autoplay.start();//手动滑动后继续轮播
        },
      },
      pagination: {
        el: '.lxcase .swiper-pagination',
        clickable: true,
      },
      spaceBetween: 35,
      autoplay: {
        delay: 2000
      },
      freeMode: false,
    })
  }
  return { init }
})()
//成功案例 END

// 客户好评 BEGIN
const getreviews = (function () {
  const init = function () {
    fetchReviews()
      .then((res) => {
        if (res.code == 1 && Array.isArray(res.list)) {
          initDom(res.list);
        } else {
          $('.review .swiper-wrapper').html('<p>暂无数据</p>');
        }
      })
      .catch((error) => {
        console.error("接口调用失败:", error);
        $('.review .swiper-wrapper').html('<p>加载失败，请稍后再试</p>');
      });
  }
  const fetchReviews = function () {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "https://webapi.igo.cn/mina/getreviewslist",
        type: "GET",
        async: true,
        data: {
          page: 1,
          perpage: 10,
        },
        dataType: "json",
      })
        .done((res) => {
          resolve(res);
        })
        .fail((xhr, status, error) => {
          reject(error);
        });
    });
  }
  const initDom = function (data) {
    if (!Array.isArray(data) || data.length === 0) {
      $('.review .swiper-wrapper').html('<p>暂无数据</p>');
      return;
    }

    let str = '';
    for (const item of data) {
      // 防止 XSS 攻击，对图像路径进行转义
      const safeImage = escapeHtml(item.IMAGE || '');
      str += `<li class="swiper-slide img"><img src="${safeImage}" alt="" onclick="return false;"></li>`;
    }

    $('.review .swiper-wrapper').html(str);

    new Swiper(".review .swiper-container", {
      observer: true, // 开启动态检查器，监测 swiper 和 slide
      observeParents: true, // 监测 Swiper 的祖/父元素
      speed: 4000, // 切换速度
      loop: true, // 循环
      slidesPerView: 2, // 显示数量
      spaceBetween: 10, // 间隔
      freeMode: true, // 自动贴合
      autoplay: { // 自动播放
        delay: 0, // 自动切换的时间间隔
        stopOnLastSlide: false, // 切换到最后一个 slide 时停止自动切换
        disableOnInteraction: false, // 用户操作后是否停止
      },
    });
  }
  const escapeHtml = function (str) {
    // 对特殊字符进行转义，防止 XSS 攻击
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  return { init }
})()
// 客户好评 END

// 顾问 BEGIN
const getTeacher = (function () {
  const init = function (type) {
    let url = "https://webapi.igo.cn/lx/getLxTeacherList"
    let obj = {
      page: 1,
      perpage: 100
    }
    let ajaxType = 'POST'
    if (type == "kp") {
      url = "https://webapi.igo.cn/kp/getKpTeacherList"
      obj = {
        page: 1,
        perpage: 100
      }
    }
    $.ajax({
      url: url,
      type: ajaxType,
      data: obj,
      dataType: "json",
    })
      .done(function (res) {
        if (res.code == "1") {
          if (type == "lx") {
            initDom(res.list, type)
          } else {
            initDom(res.list, type)
          }
        } else {
          $('.T-info').remove()  // 用户友好的提示
          $('.teacher ul').html('<p>加载失败，请稍后再试</p>')
        }
      })
      .fail(function () {

      });
  }
  const initDom = function (data, type) {

    let str = '';
    let sortedData = [];
    const isLx = type === "lx";

    // 提取配置项
    const config = {
      lx: {
        idField: 'EXPERT_ID',
        idList: lxTeacherIds,
        photoField: 'PHOTO_PATH',
        nameField: 'EXPERT_NAME',
        moreLink: 'https://m.igo.cn/liuxue/consultant.shtml'
      },
      kp: {
        idField: 'EXPERT_ID',
        idList: kpTeacherIds,
        photoField: 'PHOTO',
        nameField: 'EXPERT_NAME',
        moreLink: 'https://m.igo.cn/kp/teachers/'
      }
    };

    const currentConfig = config[type];

    // 数据过滤和排序
    sortedData = data
      .filter(e => currentConfig.idList.includes(parseInt(e[currentConfig.idField])))
      .sort((a, b) => {
        const indexA = currentConfig.idList.indexOf(parseInt(a[currentConfig.idField]));
        const indexB = currentConfig.idList.indexOf(parseInt(b[currentConfig.idField]));
        return indexA - indexB;
      });

    sortedData.length = 7

    // 构建列表HTML
    sortedData.forEach((e, i) => {
      let photoSrc = e[currentConfig.photoField];

      // // 特殊处理lx类型的图片路径
      // if (isLx && !photoSrc.includes('https')) {
      //   photoSrc = `http://www.igo.cn/${photoSrc}`;
      // }

      str += `<li class=" ${i == 0 ? 'active' : ''}">
              <div class="img dis-c">
                <img src="${photoSrc}" alt="" onclick="return false;">
              </div>
              <p>${e[currentConfig.nameField]}</p>
            </li>`;
    });

    // 添加"更多"链接
    str += `<a class="more dis-c" href="${currentConfig.moreLink}">更多</a>`;

    $('.teacher ul').html(str);

    // 缓存 DOM 元素以提高性能
    const $teacherPosition = $('.teacher .postion');
    const $teacherPositionText = $('.teacher .postion p');
    const $teacherGoodat = $('.teacher .goodat');
    const $teacherGoodatText = $('.teacher .goodat p');
    const $teacherListItems = $('.teacher li');

    // 提取公共逻辑：更新 position 和 goodat 的显示状态
    const updateTeacherInfo = function (index, type) {
      if (!sortedData || !Array.isArray(sortedData) || index < 0 || index >= sortedData.length) {
        console.error('Invalid data or index:', index);
        return;
      }

      const item = sortedData[index];
      const hasPosition = item.POSITION || item.HONOR;
      const hasGoodat = item.LX_QUESTION_COUNTRY || item.PX_SUBJECTS;

      // 更新 position 部分
      if (hasPosition) {
        $teacherPosition.show();
        console.log(item.POSITION);
        $teacherPositionText.text(hasPosition);
      } else {
        $teacherPosition.hide();
      }

      // 更新 goodat 部分
      if (hasGoodat) {
        $teacherGoodat.show();
        $teacherGoodatText.text(type === "lx" ? '擅长申请：' + hasGoodat : '主授科目：' + hasGoodat);
      } else {
        $teacherGoodat.hide();
      }
    }

    // 初始化页面
    if (sortedData && Array.isArray(sortedData) && sortedData.length > 0) {
      updateTeacherInfo(0, type); // 默认显示第一个元素的信息
    } else {
      $teacherPosition.hide();
      $teacherGoodat.hide();
    }

    // 绑定点击事件
    $teacherListItems.click(function () {
      const index = $(this).index();

      // 更新选中状态
      $(this).addClass('active').siblings().removeClass('active');

      // 更新教师信息
      updateTeacherInfo(index, type);
    });
  }

  return { init }
})()
// 顾问 END

// 资讯 BEGIN
const newsList = (function () {
  const escapeHtml = function (unsafe) {
    if (typeof unsafe !== 'string') return '';
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  const init = function (id) {
    $.ajax({
      type: 'GET',
      url: 'https://webapi.igo.cn/web/getWapIndexHotNews',
      data: {
        category: id,
        cityCode: "xt_sd",
        limit: 4,
      },
      dataType: 'JSON',
      success: function (res) {
        if (Array.isArray(res.list)) {
          initDom(res.list);
        } else {
          console.error('Invalid response format: res.list is not an array');
          $('.news ul').html('<p>暂无数据</p>'); // 提示用户无数据
        }
      },
      error: function (err) {
        console.error('AJAX 请求失败:', err);
        $('.news ul').html('<p>加载失败，请稍后再试</p>'); // 用户友好的提示
      }
    });
  }

  // 数据处理
  const initDom = function (data) {
    if (!Array.isArray(data)) {
      console.error('Invalid input data: Expected an array');
      return;
    }

    const generateItemHtml = (item, isFirst) => {
      if (!item || !item.url || !item.title) {
        console.warn('Invalid item data:', item);
        return '';
      }

      if (isFirst) {
        return `
          <li>
            <a href="${item.url}" class="dis-f">
              <div>
                <p>${escapeHtml(item.title)}</p>
                <p>${escapeHtml(item.publishdate || '')}</p>
              </div>
              <div class="poster dis-c">
                <img src="${escapeHtml(item.coverUrl || '')}" alt="" onclick="return false;">
              </div>
            </a>
          </li>`;
      } else {
        return `<li><a href="${item.url}"><p>${escapeHtml(item.title)}</p></a></li>`;
      }
    };

    const items = data.map((e, i) => generateItemHtml(e, i === 0)).filter(Boolean); // 过滤掉无效项
    $('.news ul').html(items.join(''));
  }
  return { init }
})()
// 资讯 END

// getAct.init();
// getcase.init('US')
// getreviews.init();
// getTeacher.init("lx")
// newsList.init('lx');
// getVideo.init()

// 发现频道 BEGIN
// 添加节流函数，防止频繁触发
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// 状态管理
let isLoading = false;
let hasMoreData = true;
let firstLoadTime = true;
let firstDataID = []
let loadingData = []
let groupedData = [];
let moreThenFive = true
let pageInex = 1
let currentTimeRange = {
  endTime: new Date(),
  daysLoaded: 0,
};

// 推荐模块
const recommended = (function () {
  const config = {
    activity: "/mina/getactlist",
    lxnews: "/lx/getLxNewsList",
    kpnews: "/kp/getKpNewsList",
    video: "/mina/getvideolist"
  };

  // 工具函数：生成视频缩略图URL
  const generateVideoSnapshotUrl = (videoLink) => {
    return `${videoLink}?x-oss-process=video/snapshot,t_10,f_jpg,w_260`;
  };

  const fetchData = function (params, url, type) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: type,
        url: "https://webapi.igo.cn" + url,
        data: params,
        dataType: "JSON",
        success: function (res) {
          if (res.code == 1) {
            resolve(res);
          } else {
            console.error("API返回错误:", res.message || "未知错误");
            reject(new Error("API返回错误"));
          }
        },
        error: function (xhr, status, error) {
          console.error("AJAX请求失败:", error);
          reject(new Error("网络请求失败"));
        },
      });
    });
  };

  const gethtml = function (d) {
    let url = d.lineUrl
    let type = 'zixun'
    if (url.includes('live')) {
      type = 'activity'
    } else if (url.includes('video')) {
      type = 'video'
    }
    if (type == "activity") {
      return `
        <div class="activity">
          <a href="${url}">
            <div class="topinfo">
              <p class="stitle">${d.artTitle}</p>
              <div class="poster" style="background-image:url(${d.imgUrl})"></div>
              <div class="intr">${d.lineAbstract}</div>
              <div class="from dis-b">
                <p class="dis-f"><em></em>新通教育</p>
              </div>
            </div>
          </a>
        </div>`;

    } else if (type == "video") {
      return `
        <div class="video">
          <a href="${url}">
            <div class="poster">
              <div style="background-image: url(${d.imgUrl});"></div>
              <div style="background-image: url(${d.imgUrl});"></div>
            </div>
            <p class="stitle">${d.artTitle}</p>
            <div class="from dis-b">
              <p class="dis-f"><em></em>新通教育</p>
              <p>${d.TIME.substring(0, 10) || ''}</p>
            </div>
          </a>
        </div>`;
    } else {
      let icon = 'newsIcon';
      if (url.includes('dynamicNews')) {
        icon = 'dynamicNewsIcon';
      }
      return `
        <div class="zixun">
          <a href="${url.replace('https://m.igo.cn/kpnews/', 'https://m.igo.cn/kp/info/details/')}">
            <p class="stitle">${d.artTitle}</p>
            <div class="info dis-b">
              <p class="intr">${d.lineAbstract}</p>
              <div class="poster ${icon}" style="background-image:url(${d.imgUrl})"></div>
            </div>
            <div class="from dis-b">
              <p class="dis-f"><em></em>新通教育</p>
              <p>${d.TIME.substring(0, 10) || ''}</p>
            </div>
          </a>
        </div>`;
    }
  };

  const processAndValidateList = (list, timeField, type, timeField2) => {
    return Array.isArray(list) ? list.map(item => ({
      ...item,
      TIME: item[timeField],
      TIME2: item[timeField2] || item[timeField],
      TYPE: type
    })) : [];
  };


  // 数据获取部分
  const fetchDataSourcesFirst = async function (page) {
    try {
      // 并行请求所有数据
      const [newsRes] = await Promise.all([
        fetchData({
          topicId: 45529,
          page: page,
          perpage: 999
        }, '/web/getArticlesByTopic', "GET")

      ]);


      return [newsRes];
    } catch (error) {
      throw new Error("数据获取失败: " + error.message);
    }
  };

  // 数据处理部分
  const processDataSources = function (dataResults) {
    const [newsRes] = dataResults;

    // 处理各类型数据
    const processedLists = {
      lxnews: processAndValidateList(newsRes.list || [], 'publishdate', 'zixun')
    };

    // 合并数据
    const finalList = [
      ...processedLists.lxnews
    ];
    return finalList;
  };

  const parseDateForSorting = function (dateStr) {
    if (!dateStr) return 0;

    // 处理 ISO 8601 格式 (2025-11-06T10:28:58+08:00)
    if (dateStr.includes('T')) {
      // iOS Safari 需要将时区格式中的冒号移除
      const isoFormatted = dateStr.replace(/\+([0-9]{2}):([0-9]{2})$/, '+$1$2');
      return new Date(isoFormatted).getTime();
    }

    // 处理点号分隔格式 (2025.11.03 17:07:02)
    if (dateStr.includes('.')) {
      const parts = dateStr.split(' ');
      if (parts.length === 2) {
        const datePart = parts[0].replace(/\./g, '/');
        const timePart = parts[1];
        return new Date(`${datePart} ${timePart}`).getTime();
      }
    }

    // 处理默认的连字符格式 (2025-11-06 10:28:58)
    if (dateStr.includes('-')) {
      // 先尝试直接解析
      let directParse = new Date(dateStr).getTime();
      if (!isNaN(directParse)) {
        return directParse;
      }
      // 如果失败，替换连字符为斜杠再尝试
      return new Date(dateStr.replace(/-/g, '/')).getTime();
    }

    // 其他情况尝试直接解析
    return new Date(dateStr).getTime() || 0;
  }


  // 修改后的init函数
  const init = async function (page, timeRange, isLoadMore = false) {
    // 如果正在加载，直接返回
    if (isLoading) return;

    isLoading = true;

    // 显示加载指示器
    if (isLoadMore) {
      // $('.recommended-list').append('<div class="loading-more tc"><img src="migonew/version/newImage/loading.gif" alt=""></div>');
    } else {
      $('.recommended-list').html('<div class="loading-initial tc"><img src="migonew/version/newImage/loading.gif" alt=""></div>');
    }

    try {
      // 获取数据
      let dataResults = {}

      // 处理数据
      if (page == 1) {
        dataResults = await fetchDataSourcesFirst(page);
        dataResults = dataResults.map(item => item != null ? item : [])
        const finalList = processDataSources(dataResults);
        loadingData = [...finalList]
        loadingData.sort((a, b) => {
          return b.lineIdx - a.lineIdx;
        });
        for (let i = 0; i < loadingData.length; i += 8) {
          groupedData.push(loadingData.slice(i, i + 8));
        }
      }

      if ($('#recommended').hasClass('active')) {
        let datalist = groupedData[page - 1]
        $('.loading-more').remove();
        $('.loading-initial').remove()
        if (!datalist) {
          hasMoreData = false;
          $('.recommended-list').append('<div class="error-message" style="font-size:.55rem;text-align: center;color: #b7b7b7;">暂无其他内容</div>');
        } else {
          const htmlString = datalist
            .map(e => gethtml(e))
            .filter(html => html !== '')
            .join('');
          $('.recommended-list').append(htmlString);
        }
      }

    } catch (error) {
      if (isLoadMore) {
        $('.loading-more').remove();
        $('.recommended-list').append('<div class="error-message" style="font-size:.55rem;text-align: center;color: #b7b7b7;">暂无其他内容</div>');
      } else {
        $('.recommended-list').html('<div class="error-message">内容加载失败，请稍后重试</div>');
      }
    } finally {
      isLoading = false;
    }
  };

  // 重置状态
  const reset = function () {
    currentTimeRange = {
      endTime: new Date(),
      daysLoaded: 0
    };
    hasMoreData = true;
    $('.recommended-list').empty();
  };

  return { init, reset };
})();

// 检查是否需要加载更多内容
function checkLoadMore() {
  if (isLoading) return;
  if (!hasMoreData) return;
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  const documentHeight = $(document).height();

  // 当滚动接近底部时触发加载更多
  if (scrollTop + windowHeight >= documentHeight - 300) {
    $('.recommended-list').append('<div class="loading-more tc"><img src="migonew/version/newImage/loading.gif" alt=""></div>');
    loadMoreContent();
  }
}

// 加载更多内容
const loadMoreContent = async function (autoRetry = false) {
  // 确保即使在非active状态下，自动重试也能执行
  if (!$('#recommended').hasClass('active') && !autoRetry) return;
  if (isLoading) return;
  // if (moreThenFive) { loadingData = [] }

  // 更新时间范围：将结束时间向前推一天
  currentTimeRange.daysLoaded++;
  pageInex++
  let newEndTime = new Date(currentTimeRange.endTime);
  newEndTime.setDate(newEndTime.getDate() - currentTimeRange.daysLoaded);

  const timeRange = {
    endTime: newEndTime
  };

  // await recommended.init(1, timeRange, true);
  await recommended.init(pageInex, timeRange, true);
}

// 绑定滚动事件
$(window).on('scroll', checkLoadMore);

// 修改推荐模块的点击事件处理
$('.recommended_tab>div').click(function () {
  loadingData = []
  if ($(this).hasClass('active')) return
  $(this).addClass('active').siblings().removeClass('active');
  $('.recommended-index>div').eq($(this).index()).addClass('active').siblings().removeClass('active');
  if ($(this).index() == 0) {
    firstLoadTime = true;
    // 重置状态并重新加载
    recommended.reset();
    recommended.init(1, { endTime: new Date() });
  }
  $('html, body').animate({
    scrollTop: 0
  }, 0);
});

$('.getMore').click(function () {
  // loadingData = []
  // $('.recommended_tab>div').siblings().removeClass('active');
  // $('.recommended_tab>div').eq(0).addClass('active')
  // $('.recommended-index>div').siblings().removeClass('active');
  // $('.recommended-index>div').eq(0).addClass('active')
  // firstLoadTime = true;
  // $('html, body').animate({
  //   scrollTop: 0
  // }, 0);

  // // 重置状态并重新加载
  // recommended.reset();
  // recommended.init(1, { endTime: new Date() });
const activeIndex = $('.xt_zixun_tabs li.active').index();
  const hrefList = [
    "https://m.igo.cn/study/video/",
    "https://m.igo.cn/news/?page=1&category=%E9%99%A2%E6%A0%A1%E7%94%B3%E8%AF%B7",
    "https://m.igo.cn/news/",
    "https://m.igo.cn/kp/info/",
    "https://m.igo.cn/qznews/",
    "https://m.igo.cn/qznews/?page=1&topic=51813",
  ]

  location.href = hrefList[activeIndex]

});

// 绑定错误信息点击事件
$(document).on('click', '.error-message', function () {
  if ($(this).text().includes('加载失败')) {
    $(this).remove();
    loadMoreContent();
  }
});

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day} 23:59:59`;
}
// 发现频道 END

$('.samepart .tab').click(function () {
  // 缓存常用的选择器
  const $this = $(this);
  const $parents = $this.parents('.samepart');
  const $tabContentDivs = $parents.find('.tabcontent > div');
  const tabId = $this.data('id');

  // 切换 active 类
  $this.addClass('active').siblings().removeClass('active');
  $tabContentDivs.eq($this.index()).addClass('active').siblings().removeClass('active');

  // 初始化对应模块
  if ($parents.hasClass('news')) {
    newsList.init(tabId);

    // 使用函数生成 URL，提高可维护性
    const href = getHrefForNews(tabId);
    if (tabId == "qz") {
      $parents.find('.same-t a').hide()
    } else {
      $parents.find('.same-t a').attr('href', href);
      $parents.find('.same-t a').show()
    }

  } else if ($parents.hasClass('teacher')) {
    getTeacher.init(tabId);
    // 使用函数生成 URL，提高可维护性
    const href = getHrefForTeacher(tabId);
    $parents.find('.same-t a').attr('href', href);
  } else if ($parents.hasClass('product')) {
    getProduct.init(tabId)
  } else if ($parents.hasClass('lxcase')) {
    const href = getHrefForCase(tabId);
    $parents.find('.same-t a').attr('href', href);
  }
});



let IGOFun = {
  fun: function () {
    alert('提交成功！新通老师将会联系您。请保持手机畅通，注意接听来电！')
  },
};
$("#main .IGOFORM").Form({
  form: "#main .IGOFORM",
  goRun: IGOFun
});

