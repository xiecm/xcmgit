// ===== DATA =====
const countries = [
  {
    id: `us`,
    code: `US`,
    name: `美国`,
    nameEn: `United States`,
    flag: `??`,

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
      price: "?48,000 – ?198,000",
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
    flag: `??`,


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
      price: "?28,000 – ?88,000",
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
          value: `?`,
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
    flag: `??`,

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
      price: "?38,000 – ?158,000",
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
    flag: `??`,


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
      price: "?32,000 – ?128,000",
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
    flag: `??`,
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
      price: "?22,000 – ?68,000",
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
    flag: `??`,
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
      price: "?18,000 – ?58,000",
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
  { code: "AU", name: "澳大利亚", codeLower: "au" },
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
const cases = [
  {
    "id": 1, "name": "W同学", "bgSchool": "海本", "bgMajor": "金融",
    "countries": ["英国", "新加坡", "中国香港"],
    "offers": [
      { "school": "伦敦大学学院 UCL", "ranking": "QS#8", "system": "QS", "rankNum": 8, "major": "经济学", "country": "英国", "flag": "GB" },
      { "school": "新加坡国立大学", "ranking": "QS#10", "system": "QS", "rankNum": 10, "major": "经济学", "country": "新加坡", "flag": "SG" },
      { "school": "香港大学", "ranking": "QS#11", "system": "QS", "rankNum": 11, "major": "经济学", "country": "中国香港", "flag": "HK" },
      { "school": "爱丁堡大学", "ranking": "QS#35", "system": "QS", "rankNum": 35, "major": "经济学", "country": "英国", "flag": "GB" },
      { "school": "伦敦政治经济学院", "ranking": "QS#62", "system": "QS", "rankNum": 62, "major": "经济学", "country": "英国", "flag": "GB" }
    ],
    "process": "海本金融专业，GPA3.9/4.0，GRE321。3段实习、3项竞赛、1段科研。导师推动参加MCM竞赛，将优异GPA和数学成绩转化为顶尖经济系看重的量化研究能力，补足科研产出短板。", "highlight": "格拉经济系第一名(1/511)；通过MCM竞赛将数学能力转化为量化研究能力的直接证据", "plan": "导师推动参加MCM竞赛，将优异GPA和数学成绩转化为量化研究能力硬证据，补足科研产出短板；持续跟进、定期推进，确保各项任务按时落地"
  },
  {
    "id": 2, "name": "X同学", "bgSchool": "中外合作办学双学位", "bgMajor": "设计",
    "countries": ["英国"],
    "offers": [
      { "school": "伯明翰大学", "ranking": "QS#68", "system": "QS", "rankNum": 68, "major": "人工智能理", "country": "英国", "flag": "GB" },
      { "school": "布里斯托大学", "ranking": "QS#57", "system": "QS", "rankNum": 57, "major": "商务创新", "country": "英国", "flag": "GB" },
      { "school": "谢菲尔德大学", "ranking": "QS#82", "system": "QS", "rankNum": 82, "major": "数据科学", "country": "英国", "flag": "GB" },
      { "school": "华威大学WMG学院", "ranking": "QS#68", "system": "QS", "rankNum": 68, "major": "人工智能", "country": "英国", "flag": "GB" },
      { "school": "格拉斯哥大学", "ranking": "QS#80", "system": "QS", "rankNum": 80, "major": "计算", "country": "英国", "flag": "GB" }
    ],
    "process": "GPA 3.19/4.0，3段实习、2段科研、5个项目。导师推动将设计项目转化为SCI及国际会议论文，推荐进入中科院计算所参与算法实习，打造差异化作品集。", "highlight": "优势塑造为\"懂设计、能编程、有论文\"的复合型竞争力", "plan": "推动将设计项目转化为SCI及国际会议论文，补足学术成果；推荐进入中科院计算所参与算法实习，打造\"懂设计、能编程、有论文\"的复合型作品集"
  },
  {
    "id": 3, "name": "C同学", "bgSchool": "双非", "bgMajor": "信息与计算科学",
    "countries": ["英国"],
    "offers": [
      { "school": "格拉斯哥大学", "ranking": "QS#80", "system": "QS", "rankNum": 80, "major": "计算", "country": "英国", "flag": "GB" },
      { "school": "伯明翰大学", "ranking": "QS#68", "system": "QS", "rankNum": 68, "major": "人工智能理", "country": "英国", "flag": "GB" },
      { "school": "布里斯托大学", "ranking": "QS#57", "system": "QS", "rankNum": 57, "major": "商务创新", "country": "英国", "flag": "GB" },
      { "school": "谢菲尔德大学", "ranking": "QS#82", "system": "QS", "rankNum": 82, "major": "数据科学", "country": "英国", "flag": "GB" },
      { "school": "华威大学WMG学院", "ranking": "QS#68", "system": "QS", "rankNum": 68, "major": "人工智能", "country": "英国", "flag": "GB" }
    ],
    "process": "GPA 3.7/4.0，3段实习、4段科研、5个活动、3项竞赛。导师精准判断港校对硬通货的需求，规划参加全国大学生数学建模竞赛，全程把关选题、建模思路和论文撰写。", "highlight": "全国大学生数学建模竞赛国家级一等奖；体现\"数学+编程+解决真实问题\"的综合能力", "plan": "规划参加全国大学生数学建模竞赛，导师全程把关选题（聚焦数据科学赛题）、建模思路和论文撰写，最终斩获国一"
  },
  {
    "id": 4, "name": "W同学", "bgSchool": "美本", "bgMajor": "材料科学与工程",
    "countries": ["中国香港", "美国"],
    "offers": [
      { "school": "香港中文大学", "ranking": "QS#18", "system": "QS", "rankNum": 18, "major": "金融科技", "country": "中国香港", "flag": "HK" },
      { "school": "香港理工大学", "ranking": "QS#50", "system": "QS", "rankNum": 50, "major": "量化金融", "country": "中国香港", "flag": "HK" },
      { "school": "约翰斯·霍普金斯大学", "ranking": "U.S.News#7", "system": "U.S.News", "rankNum": 7, "major": "工程管理", "country": "美国", "flag": "US" },
      { "school": "西北大学", "ranking": "U.S.News#7", "system": "U.S.News", "rankNum": 7, "major": "工程管理", "country": "美国", "flag": "US" },
      { "school": "南加州大学", "ranking": "U.S.News#28", "system": "U.S.News", "rankNum": 28, "major": "工程管理", "country": "美国", "flag": "US" },
      { "school": "布朗大学", "ranking": "U.S.News#13", "system": "U.S.News", "rankNum": 13, "major": "工程管理", "country": "美国", "flag": "US" },
      { "school": "东北大学", "ranking": "U.S.News#46", "system": "U.S.News", "rankNum": 46, "major": "工程管理", "country": "美国", "flag": "US" },
      { "school": "乔治城大学", "ranking": "U.S.News#24", "system": "U.S.News", "rankNum": 24, "major": "项目管理", "country": "美国", "flag": "US" },
      { "school": "塔夫茨大学", "ranking": "U.S.News#36", "system": "U.S.News", "rankNum": 36, "major": "工程管理", "country": "美国", "flag": "US" }
    ],
    "process": "GPA 3.37/4，3段实习、4段项目。导师以海藻降解塑料项目为主线，将材料研发、工程分析和项目管理串联，让技术背景自然延伸到管理维度；安排制造方向科研并发表论文。", "highlight": "技术+商业+可持续的复合能力；将供应商协调、DFMEA优化经验提炼为\"用技术做决策\"的亮点", "plan": "以海藻降解塑料项目为主线，将材料研发、工程分析和项目管理串联，让技术背景自然延伸到管理维度；安排制造方向科研并发表论文"
  },
  {
    "id": 5, "name": "C同学", "bgSchool": "海本", "bgMajor": "媒体与传播",
    "countries": ["中国香港"],
    "offers": [
      { "school": "香港浸会大学", "ranking": "QS#216", "system": "QS", "rankNum": 216, "major": "创意经济市场营销学理学", "country": "中国香港", "flag": "HK" },
      { "school": "香港中文大学", "ranking": "QS#18", "system": "QS", "rankNum": 18, "major": "广告学", "country": "中国香港", "flag": "HK" }
    ],
    "process": "GPA 77.714，1段实习、1段科研、2段活动。导师针对新媒体对编程的要求，规划通过Coursera补充Python与数据分析技能，参与课程项目积累可展示成果。", "highlight": "沟通能力突出，斩获港中文、港浸会等传媒强校录取", "plan": "规划通过Coursera补充Python与数据分析技能，参与课程项目积累可展示成果"
  },
  {
    "id": 6, "name": "Z同学", "bgSchool": "海本", "bgMajor": "经济学荣誉社会科学",
    "countries": ["英国", "中国香港"],
    "offers": [
      { "school": "曼彻斯特大学", "ranking": "QS#40", "system": "QS", "rankNum": 40, "major": "经济", "country": "英国", "flag": "GB" },
      { "school": "香港城市大学", "ranking": "QS#52", "system": "QS", "rankNum": 52, "major": "经济", "country": "中国香港", "flag": "HK" }
    ],
    "process": "GPA 7.7/10.0，2段实习、3段科研、2段课外活动。导师安排高含金量经济类课题，要求深度参与并独立产出论文；推荐远程实习补商量化实操与团队协作经验。", "highlight": "独立研究产出论文；在真实工作场景中运用经济学理论", "plan": "安排高含金量经济类课题，要求深度参与并独立产出论文；推荐远程实习补商量化实操与团队协作经验"
  },
  {
    "id": 7, "name": "Z同学", "bgSchool": "双非", "bgMajor": "会展经济与管理",
    "countries": ["美国"],
    "offers": [
      { "school": "密歇根大学-安娜堡分校", "ranking": "U.S.News#20", "system": "U.S.News", "rankNum": 20, "major": "国际教学和领导力", "country": "美国", "flag": "US" },
      { "school": "南加州大学", "ranking": "U.S.News#28", "system": "U.S.News", "rankNum": 28, "major": "教育政策", "country": "美国", "flag": "US" },
      { "school": "约翰斯·霍普金斯大学", "ranking": "U.S.News#7", "system": "U.S.News", "rankNum": 7, "major": "教育国际教学与全球领导力", "country": "美国", "flag": "US" },
      { "school": "纽约大学", "ranking": "U.S.News#32", "system": "U.S.News", "rankNum": 32, "major": "教育学理学", "country": "美国", "flag": "US" }
    ],
    "process": "GPA 2.9/4，3段实习、1段活动、1段竞赛。导师帮助梳理各项目对GPA的硬性门槛和往年录取数据，明确GRE考到310-315即可弥补GPA不足；匹配教育政策方向科研项目，争取海外教授强推。", "highlight": "GPA 2.9逆袭美国Top院校；GRE有效弥补GPA不足；获得海外教授强推", "plan": "梳理各项目GPA硬性门槛和往年录取数据，明确GRE考到310-315弥补GPA不足；匹配教育政策方向科研项目，争取海外教授强推"
  },
  {
    "id": 8, "name": "Z同学", "bgSchool": "中外合作办学双学位", "bgMajor": "金融学",
    "countries": ["美国"],
    "offers": [
      { "school": "华盛顿大学-圣路易斯", "ranking": "U.S.News#20", "system": "U.S.News", "rankNum": 20, "major": "商业分析", "country": "美国", "flag": "US" },
      { "school": "加州大学-欧文分校", "ranking": "U.S.News#32", "system": "U.S.News", "rankNum": 32, "major": "金融", "country": "美国", "flag": "US" }
    ],
    "process": "GPA 3.67/4.0，3段实习、5段科研项目、3项活动。导师建议将课程中涉及的量化研究按实证论文标准完善，形成writing sample；鼓励利用银行实习积累的交易数据做独立量化分析报告。", "highlight": "将课程量化研究深化为实证论文标准；利用银行实习数据做独立量化分析报告", "plan": "建议将课程量化研究按实证论文标准完善，形成writing sample；鼓励利用银行实习数据做独立量化分析报告"
  },
  {
    "id": 9, "name": "X同学", "bgSchool": "双非", "bgMajor": "生物技术",
    "countries": ["英国", "澳大利亚"],
    "offers": [
      { "school": "曼彻斯特大学", "ranking": "QS#40", "system": "QS", "rankNum": 40, "major": "生物", "country": "英国", "flag": "GB" },
      { "school": "墨尔本大学", "ranking": "QS#22", "system": "QS", "rankNum": 22, "major": "市场", "country": "澳大利亚", "flag": "AU" },
      { "school": "悉尼新南威尔士大学", "ranking": "QS#19", "system": "QS", "rankNum": 19, "major": "工程科学", "country": "澳大利亚", "flag": "AU" },
      { "school": "蒙纳士大学", "ranking": "QS#31", "system": "QS", "rankNum": 31, "major": "管理", "country": "澳大利亚", "flag": "AU" },
      { "school": "利兹大学", "ranking": "QS#77", "system": "QS", "rankNum": 77, "major": "项目", "country": "英国", "flag": "GB" },
      { "school": "布里斯托大学", "ranking": "QS#57", "system": "QS", "rankNum": 57, "major": "可持续", "country": "英国", "flag": "GB" }
    ],
    "process": "GPA 3.49/5，2段竞赛、1段项目、3段活动。导师引导将已有科研与竞赛经历用项目管理语言重新包装：课题设计对应项目规划、小组分工对应团队管理、定期汇报对应进度跟进、实验问题解决对应风险应对。", "highlight": "跨专业申请项目管理，学科跨度成为差异化竞争优势", "plan": "引导将已有科研与竞赛经历用项目管理语言重新包装：课题设计对应项目规划、小组分工对应团队管理、定期汇报对应进度跟进、实验问题解决对应风险应对"
  },
  {
    "id": 10, "name": "L同学", "bgSchool": "海本", "bgMajor": "电子与电气工程",
    "countries": ["中国香港"],
    "offers": [
      { "school": "香港理工大学", "ranking": "QS#50", "system": "QS", "rankNum": 50, "major": "卫星工程", "country": "中国香港", "flag": "HK" }
    ],
    "process": "2:1(英本)，1段实习、1段科研、4段项目、1项竞赛。导师将分散项目串成\"器件—模块—系统\"的能力主线，以论文发表为抓手补足学术短板。", "highlight": "MIT亚太创业竞赛Best Entrepreneurship Award；跨学科整合与系统规划能力", "plan": "将分散项目串成\"器件—模块—系统\"的能力主线，以论文发表为抓手补足学术短板"
  },
  {
    "id": 11, "name": "H同学", "bgSchool": "中外合作", "bgMajor": "金融",
    "countries": ["中国香港"],
    "offers": [
      { "school": "香港科技大学", "ranking": "QS#33", "system": "QS", "rankNum": 33, "major": "公共政策", "country": "中国香港", "flag": "HK" },
      { "school": "香港城市大学", "ranking": "QS#52", "system": "QS", "rankNum": 52, "major": "公共政策与公共管理", "country": "中国香港", "flag": "HK" }
    ],
    "process": "GPA 3.42/4，2段实习、1段科研、3段课外活动。导师提炼\"政策敏感型金融人\"定位，将零散素材串成\"金融视角观察政策—数据评估政策效果—回归政策执行\"的主线；论文修改投稿被MME 2025录用。", "highlight": "从金融转向公共政策的清晰主线；论文被MME 2025会议录用", "plan": "提炼\"政策敏感型金融人\"定位，将零散素材串成\"金融视角观察政策—数据评估政策效果—回归政策执行\"的主线；论文修改投稿被MME 2025录用"
  },
  {
    "id": 12, "name": "H同学", "bgSchool": "双非一本", "bgMajor": "电气工程及其自动化",
    "countries": ["德国"],
    "offers": [
      { "school": "慕尼黑工业大学亚洲校区", "ranking": "QS#25", "system": "QS", "rankNum": 25, "major": "绿色电子", "country": "德国", "flag": "GE" }
    ],
    "process": "雅思6.5，原签约普通留学合同，大四转为智领名校产品。集团策略规划老师详细分析院校和课程学分匹配度，精准选校选专业，梳理申请时间表；文案老师尽早提交申请，细致准备材料。", "highlight": "双非一本申请德国英语授课硕士，课程学分精准匹配，半年拿下Offer", "plan": "详细分析院校和课程学分匹配度，精准选校选专业，梳理申请时间表；文案老师尽早提交申请，细致准备材料"
  },
  {
    "id": 13, "name": "Z同学", "bgSchool": "中美本科", "bgMajor": "",
    "countries": ["德国"],
    "offers": [
      { "school": "达根多夫技术大学", "ranking": null, "system": null, "rankNum": null, "major": "人工智能", "country": "德国", "flag": "GE" }
    ],
    "process": "雅思6.0，签约时本科大四在读。原本规划冲刺德语授课本科，因德语零基础且大四学业压力大，规划老师及时跟进，客观剖析\"德授vs英授\"利弊，果断转向英授本科，仅用2周高效斩获录取。", "highlight": "精准规划调整赛道，零GAP顺利衔接；兼顾\"快速入学\"与\"长期发展\"", "plan": "客观剖析\"德授vs英授\"利弊，果断转向英授本科，仅用2周高效斩获录取"
  },
  {
    "id": 14, "name": "Q同学", "bgSchool": "国内高中", "bgMajor": "",
    "countries": ["德国"],
    "offers": [
      { "school": "达根多夫技术大学", "ranking": null, "system": null, "rankNum": null, "major": "人工智能", "country": "德国", "flag": "GE" }
    ],
    "process": "A-LEVEL体系，签约时已高中毕业，签约到拿offer：5个月。雅思7.0。学生诉求明确，毕业后考虑留德工作。集团策略规划老师结合学生兴趣和德国好就业理工类专业和学校，做了非常细致的选校查校；学生配合度高，选校沟通效率很高。", "highlight": "就业导向精准选校；高质沟通极速申请", "plan": ""
  },
  {
    "id": 15, "name": "A同学", "bgSchool": "国内大一在读", "bgMajor": "",
    "countries": ["德国"],
    "offers": [
      { "school": "慕尼黑工业大学", "ranking": "QS#25", "system": "QS", "rankNum": 25, "major": "信息工程", "country": "德国", "flag": "GE" }
    ],
    "process": "高考生，国内大一在读，签约到拿offer：7个月。学生因对国内专业不满意决定申请德国英授本科。集团策略规划老师精准定校，仔细梳理和分析目标院校申请要求；提供同等难度德适考试英文笔试真题与模拟题帮助练兵，提供系统化面试技巧、模拟面试问答等辅导。", "highlight": "精准破局名校门槛；笔试破局&面试赋能，短期内高效突破申请难关", "plan": "结合学生兴趣和德国好就业理工类专业和学校，做细致选校查校，选校沟通效率高"
  },
  {
    "id": 16, "name": "Z同学", "bgSchool": "民办本科", "bgMajor": "中医",
    "countries": ["中国香港", "英国", "澳大利亚"],
    "offers": [
      { "school": "香港都会大学", "ranking": null, "system": null, "rankNum": null, "major": "体育适应科学", "country": "中国香港", "flag": "HK" },
      { "school": "埃克塞特大学", "ranking": null, "system": null, "rankNum": null, "major": "体育与运动医学", "country": "英国", "flag": "GB" },
      { "school": "拉夫堡大学", "ranking": null, "system": null, "rankNum": null, "major": "骨肌运动科学与健康", "country": "英国", "flag": "GB" },
      { "school": "纽卡斯尔大学", "ranking": null, "system": null, "rankNum": null, "major": "公共健康", "country": "英国", "flag": "GB" },
      { "school": "利物浦大学", "ranking": null, "system": null, "rankNum": null, "major": "数据科学与AI健康创新", "country": "英国", "flag": "GB" },
      { "school": "伦敦玛丽女王大学", "ranking": null, "system": null, "rankNum": null, "major": "全球公共健康与政策", "country": "英国", "flag": "GB" },
      { "school": "昆士兰大学", "ranking": null, "system": null, "rankNum": null, "major": "环境健康科学", "country": "澳大利亚", "flag": "AU" }
    ],
    "process": "均分79.77，无语言成绩，2段实习。中医专业申请相关方向存在局限性，但英国院校对专业背景和院校背景包容度较高；港校门槛收紧趋势下，将英国作为联合申请核心阵地，利用细分专业体系实现低分高录。拒录：港都会中药药剂学硕士。", "highlight": "民办背景+无语言获7枚录取；英港联申双重保障", "plan": "精准定校，仔细梳理和分析目标院校申请要求；提供德适考试英文笔试真题与模拟题帮助练兵，提供系统化面试技巧、模拟面试问答等辅导"
  },
  {
    "id": 17, "name": "*同学", "bgSchool": "软科Top150院校", "bgMajor": "社会工作（法学学位）",
    "countries": ["英国"],
    "offers": [
      { "school": "伯明翰大学", "ranking": null, "system": null, "rankNum": null, "major": "Law and Social Justice", "country": "英国", "flag": "GB" },
      { "school": "利兹大学", "ranking": null, "system": null, "rankNum": null, "major": "Law and Social Justice", "country": "英国", "flag": "GB" }
    ],
    "process": "均分83，雅思6.5，2段实习、2段项目。泛法学背景（核心学分集中于社会学与社工实务）申请传统法学方向存在劣势；港校青睐课程体系纯正的法学学士，竞争内卷。转向英国LLM体系，借助其对交叉学科的高度包容性打破专业壁垒。拒录：港中文AI Law/能源环境法、港城大仲裁与争议解决/LLM General、曼彻斯特LLM Public Intl Law、布里斯托LLM Law Environment Sustainability。", "highlight": "泛法学背景借英国LLM包容性逆袭；英港联申风险对冲", "plan": "将英国作为联合申请核心阵地，利用其细分专业体系实现低分高录；英港联申双重保障，转向英国LLM体系，借助其对交叉学科的高度包容性打破专业壁垒；英港联申风险对冲"
  }
];

// ===== STATE =====
let activeCountry = "US";
let currentModules = [];
let modulesExpanded = false;
const MODULES_LIMIT = 5;

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
  $(".country-chip").each(function () {
    $(this).removeClass("active");
    if ($(this).data("country") == activeCountry)
      $(this).addClass("active");
  })
  // Also render program section
  renderProgram();
  // Also update offers filter highlight

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
  currentModules = p.modules;
  modulesExpanded = false;
  renderModules();

  // Animate content
  const content = document.getElementById("programContent");
  content.classList.add("program-fade-out");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      content.classList.remove("program-fade-out");
    });
  });
}

function renderModules() {
  const gridEl = document.getElementById("modulesGrid");
  if (!gridEl) return;
  const limit = modulesExpanded ? currentModules.length : MODULES_LIMIT;
  gridEl.innerHTML = currentModules
    .slice(0, limit)
    .map(
      (m, idx) =>
        `<div class="module-item">
      <span class="module-num">${String(idx + 1).padStart(2, "0")}</span>
      <p class="module-text">${m}</p>
    </div>`,
    )
    .join("");

  if (currentModules.length > MODULES_LIMIT) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "modules-more" + (modulesExpanded ? " active" : "");
    btn.setAttribute("aria-expanded", modulesExpanded ? "true" : "false");
    btn.innerHTML = modulesExpanded
      ? '收起<svg class="modules-more-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"></path></svg>'
      : '展开更多<svg class="modules-more-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>';
    gridEl.appendChild(btn);
  }
}




// ===== EVENT HANDLERS =====
// 兼容处理：点击按钮内部任意元素（含 SVG 箭头图标）都能命中按钮
function findModuleMoreBtn(target) {
  let el = target;
  while (el && el.nodeType === 1) {
    if (el.classList && el.classList.contains("modules-more")) return el;
    el = el.parentNode;
  }
  return null;
}

function setActiveCountry(code) {
  if (activeCountry === code) return;
  activeCountry = code;
  renderCountrySwitcher();

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
    const code = navBtn.dataset.country;
    if (code) setActiveCountry(code);
    if (section) scrollToSection(section);
    return;
  }

  // Modules expand / collapse
  const moreBtn = findModuleMoreBtn(e.target);
  if (moreBtn) {
    modulesExpanded = !modulesExpanded;
    renderModules();
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

function offerCard() {
  const grid = document.getElementById('cases-grid');
  if (!cases || !Array.isArray(cases)) return;
  grid.innerHTML = '<div class="swiper-wrapper">' + cases.map(c => {
    if (!c.offers || !c.offers.length) return '';
    const bestOffer = c.offers.slice().sort((a, b) => a.rankNum - b.rankNum)[0];
    const countryFlags = c.countries ? c.countries.map(ct => { const country = countryList.find(item => item.name === ct); return `<span title="${ct}">${country.code}</span>` }).join(' ') : '';
    return `
      <div class="card-slide swiper-slide" data-id="${c.id}">
        <div class="hd">
          <div>
            <div class="nm">${c.name}</div>
            <div class="bg">${c.bgSchool} · ${c.bgMajor}</div>
          </div>
          <div class="flags">${countryFlags}</div>
        </div>
        <div class="best">
          <div class="lab">最佳录取</div>
          <div class="row">
            <span class="sch">${bestOffer.flag || ''} ${bestOffer.school}</span>
            ${bestOffer.ranking ? `<span class="rk">${bestOffer.system} ${bestOffer.rankNum}</span>` : ''}
          </div>
        </div>
        <div class="ft">
          <span class="cnt">${c.offers.length} Offers</span>
          <span class="more">查看详情<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hero-btn-arrow" aria-hidden="true">
              <path d="m9 18 6-6-6-6"></path>
            </svg></span>
        </div>
      </div>
    `;
  }).join('') + '</div>';
  grid.onclick = function (e) { const btn = e.target.closest('.card-slide'); if (btn) openModal(+btn.dataset.id); }
  new Swiper($("#main .cases-grid"), {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: "#main .cases-container .swiper-button-next",
      prevEl: "#main .cases-container .swiper-button-prev",
    },
    freeMode: false,
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true, //修改swiper的父元素时，自动初始化swiper
  });
}

const sectionIcons = {
  录取清单: '<svg class="section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>',
  背景经历: '<svg class="section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  突出亮点: '<svg class="section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  规划方案: '<svg class="section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
};

function openModal(id) {
  const c = cases.find(function (x) { return x.id === id; }); if (!c) return;
  const flags = c.countries.map(function (ct) {
    const f = (c.offers.find(function (o) { return o.country === ct; }) || {}).flag;
    return '<span class="fb">' + ct + '</span>';
  }).join('');
  const offers = c.offers.map(function (o) {
    return '<div class="oi"><div class="s">' + (o.flag || '') + ' ' + o.school + '<small>' + o.major + '</small></div>'
      + (o.ranking ? '<span class="rk">' + o.ranking.replace('#', ' #') + '</span>' : '') + '</div>';
  }).join('');
  modal.innerHTML = '<h3>' + c.name + '的申请案例</h3>'
    + '<div class="mh">毕业院校：' + c.bgSchool + ' · 毕业专业：' + c.bgMajor + '</div>'
    + '<div class="flags">' + flags + '</div>'
    + '<div class="blk"><div class="t"><span>' + sectionIcons['录取清单'] + '</span>录取清单</div><div class="olist">' + offers + '</div></div>'
    + '<div class="blk"><div class="t"><span>' + sectionIcons['背景经历'] + '</span>背景经历</div><div class="body">' + c.process + '</div></div>'
    + '<div class="blk"><div class="amber"><div class="t"><span>' + sectionIcons['突出亮点'] + '</span>突出亮点</div><div class="body">' + c.highlight + '</div></div></div>'
    + '<div class="blk"><div class="t"><span>' + sectionIcons['规划方案'] + '</span>规划方案</div><div class="body">' + c.plan + '</div></div>';
  $('#overlay').addClass('show');
  $("body").css("overflow", "hidden");
}

$('#overlay').click(function (e) {
  // 如果点击的目标是 overlay 本身（而不是其子元素 modal），则关闭
  if (e.target === this) {
    $(this).removeClass('show');
    $("body").css("overflow", "");
  }
})

// ===== INIT =====
function init() {
  renderCountrySwitcher();
  renderProgram();
  offerCard()
  setupScrollAnimations();

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
