// ===== DATA =====
const countries = [
  {
    id: `us`,
    code: `US`,
    name: `美国`,
    nameEn: `United States`,
    flag: `🇺🇸`,

    number: "01",
    program: {
      highlights: [
        `全球顶尖科研资源`,
        `整体审查 Holistic Review`,
        `STEM OPT 3年工作签证`,
        `博士申请套磁选校一体化`,
      ],
      tagline: `常春藤联盟 · 综合大学 · 整体审查录取 · 博士科研导向`,
      level: '本科/硕士/博士',
      duration: '规划期 ≤2 年',
      title: '美国本/硕/博智领名校计划',
      subtitle: "US Elite Admission Program",
      price: "¥48,000 – ¥198,000",
      modules: [
        '集团策略规划专家 1V1 深度访谈 & 申请力提升脑暴（线上2小时）',
        '《留学申请力提升行动方案》产出（含SWOT分析、GPA管理、标化规划）',
        '学期规划脑暴：每学期前设定目标 & 学期后评估成果（附《月度规划报告》）',
        '北森职业性格测评（5份报告）+ 名企专家导师1V1职业规划课',
        'CBL案例式兴趣探索营 + 测评解析 & 兴趣挖掘课',
        '《专业与未来职业规划报告》+ 留学&就业一体化规划方案',
        '在线互动小班课（1V10线上1小时×3次）+ 前辈留学分享',
        '学术科研项目（哥伦比亚/约翰霍普金斯/普林斯顿等终身教授指导）',
        '名企实习/PTA项目匹配（互联网/咨询/金融/快消方向）',
        '选校头脑风暴 + 专属《选校方案》报告（保底-匹配-冲刺梯度）',
        '美国TOP30外籍导师文书头脑风暴（线上2小时）+ 主文书润色',
        '申请递交全流程跟进 + 面试辅导 + 签证指导 + 选课赋能'
      ],
      stats: [
        {
          label: `院校导师`,
          value: `TOP30`,
        },
        {
          label: `名企专家`,
          value: `500强`,
        },
        {
          label: `服务层次`,
          value: `本硕博`,
        },
      ],
    },
  },
  {
    id: `de`,
    code: `DE`,
    name: `德国`,
    nameEn: `Germany`,
    flag: `🇩🇪`,


    number: "02",
    program: {
      highlights: [
        `慕尼黑工大 · 亚琛工大 · 卡尔斯鲁厄理工`,
        `18个月找工签证`,
        `IB/A-Level/AP/OSSD直接申请`,
        `APS审核1V1辅导10小时`,
      ],
      tagline: `TU9理工联盟 · 公立免学费 · APS审核 · 国际高中生直通`,
      level: '本科/硕士',
      duration: '规划期 1-2 年',
      title: '德国本科/硕士智领名校计划',
      subtitle: "Germany Elite Program",
      price: "¥28,000 – ¥88,000",
      modules: [
        'APS审核1V1辅导10小时 + 材料清单与面试模拟',
        '德语/英语授课方案双轨规划与语言考试排期',
        'TU9联盟院校专业匹配与课程描述优化',
        '动机信 & 课程匹配度分析报告定制',
        '申请门户（Uni-Assist/直申）全流程跟进',
        '签证材料准备、保险与住宿指导',
        '赴德前跨文化适应课程与学业衔接课',
        '在德求职/找工签证与实习资源对接'
      ],
      stats: [
        {
          label: `合作院校`,
          value: `80+`,
        },
        {
          label: `公立免学费`,
          value: `✓`,
        },
        {
          label: `在德留学生`,
          value: `39K+`,
        },
      ],
    },
  },
  {
    id: `uk`,
    code: `GB`,
    name: `英国`,
    nameEn: `United Kingdom`,
    flag: `🇬🇧`,

    number: "03",
    program: {
      highlights: [
        `牛津 · 剑桥 · 帝国理工 · UCL · LSE`,
        `PSW 毕业工签 2 年`,
        `UCAS 集中申请`,
        `博士申请RP质量为核心`,
      ],

      tagline: `G5 精英 · 罗素集团 · 一年制硕士 · 导师主导制博士`,
      level: "本科/硕士/博士",
      duration: '规划期 6-18 个月',
      title: '英国本/硕/博智领名校计划',
      subtitle: "UK G5 Admission Program",
      price: "¥38,000 – ¥158,000",
      modules: [
        '英联邦申请逻辑解析 + 选校梯度定位',
        'PS/CV/推荐信三轮打磨 + 外籍导师润色',
        'G5笔试面试（TMUA/STEP/面试）专项辅导',
        '博士RP研究计划精修 + 套磁策略与导师匹配',
        'UCAS/院校portal递交与进度跟进',
        '语言班、CAS、签证一站式指导',
        '行前住宿、选课与英国学术规范课程',
        '留英就业与PSW转工签路径规划'
      ],
      stats: [
        {
          label: `QS TOP 100`,
          value: `17所`,
        },
        {
          label: `一年制硕士`,
          value: `1年`,
        },
        {
          label: `PSW 工签`,
          value: `2年`,
        },
      ],
    },
  },
  {
    id: `ca`,
    code: `CA`,
    name: `加拿大`,
    nameEn: `Canada`,
    flag: `🇨🇦`,


    number: "04",
    program: {
      highlights: [
        `麦吉尔 · 多伦多 · UBC`,
        `Co-op 带薪实习项目`,
        `毕业工签最长 3 年`,
        `博士导师主导制申请`,
      ],
      tagline: `公立教育 · Co-op 带薪实习 · 移民友好 · 研究型博士`,
      level: "本科/硕士/博士",
      duration: '规划期 1-2 年',
      title: '加拿大本/硕/博智领名校计划',
      subtitle: "Canada Immigration Pathway",
      price: "¥32,000 – ¥128,000",
      modules: [
        '加拿大各省院校与移民政策匹配分析',
        'OUAC/院校直申系统双通道规划',
        'Co-op项目筛选与求职简历精修',
        '文书素材挖掘 + 加拿大招生官视角润色',
        '研究型硕士/博士套磁与导师沟通辅导',
        '签证学习计划（Study Plan）定制',
        '行前安家、选课与学业适应指导',
        '毕业工签PGWP与省提名移民路径咨询'
      ],
      stats: [
        {
          label: `合作省份`,
          value: `10+`,
        },
        {
          label: `Co-op 项目`,
          value: `80+`,
        },
        {
          label: `毕业工签`,
          value: `3年`,
        },
      ],
    },

  },
  {
    id: `sg`,
    code: `SG`,
    name: `新加坡`,
    nameEn: `Singapore`,
    flag: `🇸🇬`,
    number: "05",
    program: {
      highlights: [
        `NUS QS · NTU QS · SMU`,
        `硬性筛选 + 综合评估`,
        `一年制授课型硕士`,
        `博士亚洲科研前沿导向`,
      ],
      tagline: `亚洲名校 · 双语环境 · 就业衔接 · 科研前沿`,
      level: "硕士/博士",
      duration: '规划期 6-12 个月',
      title: '新加坡硕士/博士智领名校计划',
      subtitle: "Singapore Top Uni Program",
      price: "¥22,000 – ¥68,000",
      modules: [
        '新加坡公立大学录取画像与硬门槛评估',
        'A-Level/IB/AP/OSSD课程体系适配方案',
        '面试（Video/真人）专项模拟与表达训练',
        '文书与推荐信凸显亚洲领导力与全球视野',
        '科研/实习/竞赛背景提升资源匹配',
        '硕士滚动申请时间线与奖学金策略',
        '行前指导、住宿申请与跨文化适应',
        '新加坡本地就业与EP路径初步规划'
      ],

      stats: [
        {
          label: `公立大学`,
          value: `6所`,
        },
        {
          label: `一年制硕士`,
          value: `1年`,
        },
        {
          label: `服务层次`,
          value: `硕博`,
        },
      ],
    },

  },
  {
    id: `hk`,
    code: `HK`,
    name: `中国香港`,
    nameEn: `Hong Kong`,
    flag: `🇭🇰`,
    number: "06",
    program: {
      highlights: [
        `港大 · 港中文 · 港科技 · 港城 · 港理`,
        `一年制授课硕士`,
        `IANG 无条件工签 2 年`,
        `博士UGC资助研究轨道`,
      ],
      tagline: `港八大 · 中西融合 · IANG 签证 · UGC资助博士`,
      level: "硕士/博士",
      duration: '规划期 6-12 个月',
      title: '中国香港硕士/博士智领名校计划',
      subtitle: "Hong Kong Elite Program",
      price: "¥18,000 – ¥58,000",
      modules: [
        '港校招生偏好与滚动录取节奏分析',
        '商科/理工/人文社科分方向选校策略',
        '个人陈述与推荐信突出区域竞争力',
        '面试（群面/个人面）全真模拟',
        '博士RP与导师研究方向匹配辅导',
        '网申系统填写与材料认证跟进',
        '学生签证、ID办理与在港住宿指导',
        '留港就业IANG、大湾区发展双轨规划'
      ],
      stats: [
        {
          label: `八大院校`,
          value: `8所`,
        },
        {
          label: `QS TOP 100`,
          value: `5所`,
        },
        {
          label: `IANG 工签`,
          value: `2年`,
        },
      ],
    },

  },
];

const countryList = [
  { code: "US", name: "美国", codeLower: "us" },
  { code: "GB", name: "英国", codeLower: "gb" },
  { code: "CA", name: "加拿大", codeLower: "ca" },
  { code: "DE", name: "德国", codeLower: "de" },
  { code: "SG", name: "新加坡", codeLower: "sg" },
  { code: "HK", name: "中国香港", codeLower: "hk" },
];

const competenceData = [
  {
    title: "学术硬实力",
    en: "Academic Readiness",
    icon: "grad",
    items: [
      "GPA · IB · A-Level · AP · OSSD",
      "标化 IELTS / TOEFL / GRE / GMAT",
      "学科成绩与专业匹配度",
    ],
  },
  {
    title: "课外与领导力",
    en: "Leadership & Impact",
    icon: "users",
    items: [
      "学生会 · 社团 · 体育艺术",
      "持续性 · 影响力 · 团队协作",
      "社区服务与社会实践履历",
    ],
  },
  {
    title: "学术科研与竞赛",
    en: "Research & Competition",
    icon: "award",
    items: [
      "名校教授 1V1 科研课题（100+课题）",
      "优秀奖 · AMC · CTB全球创新大赛",
      "论文发表 · 学术会议 · 竞赛获奖",
    ],
  },
  {
    title: "实习与实践",
    en: "Internship & Practice",
    icon: "briefcase",
    items: [
      "500强名企实训（投行/咨询/科技等）",
      "创新创业社会实践项目",
      "PTA项目体现职业胜任力",
    ],
  },
  {
    title: "文书与个人品牌",
    en: "Essay & Personality",
    icon: "filetext",
    items: [
      "中外思维融合 · 外籍导师文书润色",
      "PS · CV · 推荐信定制打造",
      "创意文书 · 视频面试准备",
    ],
  },
  {
    title: "匹配度与潜力",
    en: "Fit & Potential",
    icon: "target",
    items: [
      "院校文化匹配与专业招生偏好分析",
      "未来职业目标与资源对接",
      "北美测评科学测评专业倾向",
    ],
  },
];

const edgeData = [
  {
    icon: "lightbulb",
                title: 'SMARTER 智能系统',
                desc: '新通专有SMARTER智能系统提供全真模考语言评估，全球案例中心基于50万+真实录取案例，AI精准匹配院校组合。'
              },
              {
    icon: "network",
                title: '10年+ 集团策略专家',
                desc: '深谙美英港新德加录取偏好，拥有留学行业内超10年全球名校申请经验。'
              },
              {
    icon: "award2",
                title: '百+名校教授科研资源',
                desc: '哥伦比亚/约翰霍普金斯/普林斯顿/NUS/NTU等终身教授直接指导，100+课题可选。'
              },
              {
    icon: "briefcase2",
                title: '500强名企实训资源',
                desc: '麦肯锡·德勤·罗兰贝格·腾讯·阿里·耐克战略资源对接，为申请与求职双铺路。'
              }
];

const timelineData = [
 { step: '01', time: '1-2 周', title: '留学咨询', desc: '资深顾问1V1咨询 · 个性化留学方案推荐 · SMARTER智能系统免费模考语言评估' },
              { step: '02', time: '1 个月', title: '专业/职业方向定位', desc: '北森职业性格测评 · 名企专家导师1V1职业规划课 · CBL案例式兴趣探索营' },
              { step: '03', time: '持续至申请季前', title: '申请策略规划', desc: '集团专家深度访谈 & 申请力提升脑暴 · 出具《留学申请力提升行动方案》' },
              { step: '04', time: '6-18 个月', title: '竞争力提升', desc: '学术科研 · 名企实习/PTA · 学术竞赛 · 企业实训 · 社会实践项目落地' },
              { step: '05', time: '2-3 个月', title: '选校定校', desc: '“保底-匹配-冲刺”梯度选校方案 · 多轮次动态跟踪 · 套磁名单筛选' },
              { step: '06', time: '2-3 个月', title: '文书赋能', desc: '素材收集 & 亮点挖掘 · 中外思维融合文书润色 · 外籍导师定稿' },
              { step: '07', time: '1-2 个月', title: '申请递交与结果跟进', desc: '网申信息填写 · 成绩送分 · 邮件回复 · 面试辅导与模拟 · 签证材料准备' },
              { step: '08', time: '持续护航', title: '行前留后护航', desc: '行前培训 · 选课指导 · 在读就业咨询 · 毕业前OPT/工签咨询 · 归国学历认证' }
];

const navbar = document.getElementById('navbar');
let menuOpen = false;

function updateNav() {
  const scrolled = window.scrollY > 60;
  if (scrolled) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
  // color handled by CSS .nav-scrolled .mobile-menu-btn
}
window.addEventListener('scroll', updateNav);

// ===== STATE =====
let activeCountry = "US";

// ===== HELPERS =====
function getCountry() {
  return countries.find((c) => c.code === activeCountry) || countries[0];
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

// ===== RENDERERS =====

function renderCountrySwitcher() {
  const container = document.getElementById("heroCountrySwitcher");
  if (!container) return;
  container.innerHTML = countryList
    .map((c) => {
      const isActive = c.code === activeCountry;
      return `<button class="country-chip${isActive ? " active" : ""}" data-country="${c.code}">
      <span class="chip-code">${c.code.toLowerCase()}</span>
      <span>${c.name}</span>
    </button>`;
    })
    .join("");
  // Also render program section
  renderProgram();
  // Also update offers filter highlight
  renderOffersFilter();
}

function renderProgram() {
  const c = getCountry();
  const p = c.program;

  document.getElementById("programSubtitle").textContent = c.subtitle;

  const badgeEl = document.getElementById("programCountryBadge");
  badgeEl.querySelector(".p-code").textContent = c.code;
  badgeEl.querySelector(".p-title").textContent = c.name + " · 智领名校计划";

  document.getElementById("programLevel").textContent = p.level;
  document.getElementById("programDuration").textContent = p.duration;
  document.getElementById("programInnerTitle").textContent = p.title;
  document.getElementById("programInnerSubtitle").textContent = p.tagline;
  document.getElementById("highlights").innerHTML = p.highlights.map((s) => `<li>${s}</li>`).join("");

  // Stats icon mapping
  const statIconMap = {
    院校: '<svg viewBox="0 0 24 24"><rect x="3" y="2" width="18" height="18" rx="2"/><path d="M3 10h18M8 2v8M16 2v8"/><circle cx="12" cy="15" r="2"/></svg>',
    排名: '<svg viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 6 9 6 9z"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 18 9 18 9z"/><path d="M4 22h16"/><path d="M10 22V8h4v14"/><line x1="9" y1="14" x2="10" y2="14"/></svg>',
    战绩: '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    服务: '<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    工签: '<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>',
    录取: '<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    就业: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    层次: '<svg viewBox="0 0 24 24"><path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9"/><path d="M22 10.5 12 16l-3-1.7"/><path d="M17 14l5 5-5 5"/></svg>',
    申请: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>',
    通过: '<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
    数量: '<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    年限: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    TOP: '<svg viewBox="0 0 24 24"><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
    合作: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    覆盖: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    学生: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    省份: '<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    大学: '<svg viewBox="0 0 24 24"><rect x="3" y="2" width="18" height="18" rx="2"/><path d="M3 10h18M8 2v8M16 2v8"/><circle cx="12" cy="15" r="2"/></svg>',
    default: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
  };
  function getStatIcon(label) {
    for (const [k, icon] of Object.entries(statIconMap)) {
      if (label.includes(k)) return icon;
    }
    return statIconMap.default;
  }

  document.getElementById("programStats").innerHTML = p.stats
    .map(
      (s) =>
        `<div class="program-stat">
      <div class="program-stat-icon">${getStatIcon(s.label)}</div>
      <div class="program-stat-body">
        <div class="program-stat-val">${s.value}</div>
        <div class="program-stat-label">${s.label}</div>
      </div>
    </div>`,
    )
    .join("");

  // Modules
  document.getElementById("modulesGrid").innerHTML = p.modules
    .map(
      (m, idx) =>
        `<div class="module-item">
      <span class="module-num">${String(idx + 1).padStart(2, "0")}</span>
      <p class="module-text">${m}</p>
    </div>`,
    )
    .join("");

  // Animate content
  const content = document.getElementById("programContent");
  content.classList.add("program-fade-out");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      content.classList.remove("program-fade-out");
    });
  });
}

function renderOffersFilter() {
  const container = document.getElementById("offersFilter");
  if (!container) return;
  container.innerHTML = countryList
    .map((c) => {
      const isActive = c.code === activeCountry;
      return `<button class="offers-filter-btn${isActive ? " active" : ""}" data-offer-country="${c.code}">
      <span class="offers-filter-code">${c.code.toLowerCase()}</span>
      <span>${c.name}</span>
    </button>`;
    })
    .join("");
  renderOffers();
}


function renderTimeline() {
  const container = document.getElementById("timelineContainer");
  if (!container) return;
  let html = '<div class="timeline-line"></div>';
  timelineData.forEach((item, idx) => {
    html += `
    <div class="timeline-item anim-up-sm" style="transition-delay:${idx * 0.06}s">
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="timeline-header-badge">Step ${item.step}</span>
          <svg class="svg-icon-xs" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          ${item.time}
        </div>
        <h3 class="timeline-step-title">${item.title}</h3>
        <p class="timeline-step-desc">${item.desc}</p>
      </div>
      <div class="timeline-dot">${item.step}</div>
      <div class="timeline-spacer"></div>
    </div>`;
  });
  container.innerHTML = html;
}

function renderCompetence() {
  const container = document.getElementById("compGrid");
  if (!container) return;
  container.innerHTML = competenceData
    .map((item, idx) => {
      const icons = {
        grad: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>',
        users:
          '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        award:
          '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
        briefcase:
          '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
        filetext:
          '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>',
        target:
          '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
      };
      return `
    <div class="comp-card anim-up-sm" style="transition-delay:${idx * 0.08}s">
      <div class="comp-card-header">
        <div class="comp-icon-wrap">
          <svg class="svg-icon" viewBox="0 0 24 24">${icons[item.icon] || ""}</svg>
        </div>
        <div>
          <div class="comp-name">${item.title}</div>
          <div class="comp-en">${item.en}</div>
        </div>
      </div>
      <ul class="comp-list">
        ${item.items.map((i) => `<li><span class="comp-dot"></span>${i}</li>`).join("")}
      </ul>
    </div>`;
    })
    .join("");
}

function renderEdge() {
  const container = document.getElementById("edgeGrid");
  if (!container) return;
  const icons = {
    lightbulb:
      '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path>',
    network:
      '<rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path>',
    award2:
      '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
    briefcase2:
      '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect>',
  };
  container.innerHTML = edgeData
    .map(
      (item, idx) => `
    <div class="edge-card anim-up-sm" style="transition-delay:${idx * 0.08}s">
      <div class="edge-icon-wrap">
        <svg class="svg-icon-lg" viewBox="0 0 24 24">${icons[item.icon] || ""}</svg>
      </div>
      <h3 class="edge-title">${item.title}</h3>
      <p class="edge-desc">${item.desc}</p>
    </div>
  `,
    )
    .join("");
}
// ===== EVENT HANDLERS =====
function setActiveCountry(code) {
  if (activeCountry === code) return;
  activeCountry = code;
  renderCountrySwitcher();
  renderOffersFilter();
}

// Global event delegation
document.addEventListener("click", function (e) {
  // Country chip click
  const chip = e.target.closest(".country-chip");
  if (chip) {
    const code = chip.dataset.country;
    if (code) setActiveCountry(code);
    return;
  }

  // Dest card click
  const card = e.target.closest(".dest-card");
  if (card) {
    const code = card.dataset.country;
    if (code) setActiveCountry(code);
    return;
  }

  // Offers filter
  const offerBtn = e.target.closest(".offers-filter-btn");
  if (offerBtn) {
    const code = offerBtn.dataset.offerCountry;
    if (code) setActiveCountry(code);
    return;
  }

  // Nav button
  const navBtn = e.target.closest(".nav-btn");
  if (navBtn) {
    const section = navBtn.dataset.scroll;
    if (section) scrollToSection(section);
    return;
  }
});

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  document
    .querySelectorAll(".anim-up, .anim-up-sm, .anim-fade")
    .forEach((el) => {
      observer.observe(el);
    });
}

// Mark hero elements as visible immediately
document.querySelectorAll(".hero .anim-up, .hero .anim-up-sm").forEach((el) => {
  el.classList.add("visible");
});

// ===== INIT =====
function init() {
  renderCountrySwitcher();
  renderProgram();
  renderCompetence();
  renderEdge();
  renderTimeline();
  renderOffersFilter();
  setupScrollAnimations();

  // Make toggleMobileNav and closeMobileNavScreen global
  window.toggleMobileNav = toggleMobileNav;
  window.closeMobileNavScreen = closeMobileNavScreen;
  window.scrollToSection = scrollToSection;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function showlay() {
  $('.lay-form').addClass('show');
}

function hidelay() {
  $('.lay-form').removeClass('show');
}

$("#main .sameform").Form({
    form: "#main .sameform",
});
