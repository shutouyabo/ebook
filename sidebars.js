/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  王竹子: [
    'Home',

    {
      type: 'category',
      label: '竹子后庭玩法教学系列',
      link: {
        slug: '/王竹子',
        type: 'generated-index',
        //description: '',
        //keywords: ['王竹子', '竹子后庭玩法教学系列', '电阻', '电容', '电感', '磁珠', '二极管', '三极管', 'MOS', '运算放大器', '数字电路', '设计规范', '推挽开漏', '共模差模', '储存介质', '锂电池', '编码器'],
      },
      items: [
        'wangzhuzi/houting/BDSM灌肠器道具教学分享',
        'wangzhuzi/houting/基本元器件-电容',
        'wangzhuzi/houting/论文工具收集',
        'wangzhuzi/houting/基本元器件-电感与磁珠',
        'wangzhuzi/houting/基本元器件-二极管',
        'wangzhuzi/houting/基本元器件-晶体三级管',
      ],
    },

    {
      type: 'category',
      label: '竹子的专业绳缚教学',
      link: {
        type: 'generated-index',
        //description: ' ',
        //keywords: ['竹子的专业绳缚教学', '协议', ],
      },
      items: [
        'wangzhuzi/shengfu/RobotCtrl-STM32通用开发套件',
        'wangzhuzi/shengfu/RobotCtrl_Core-核心板',
        'wangzhuzi/shengfu/RobotCtrl_Func-外设拓展板',
        'wangzhuzi/shengfu/RobotCtrl_Power-电源供电板',
        'wangzhuzi/shengfu/Flip-基于全志F1C200s的Linux开发板',
        'wangzhuzi/shengfu/OSD335x最小系统的设计',
        'wangzhuzi/shengfu/如何设计一款单片机的最小系统',
        'wangzhuzi/shengfu/STM32F4硬件开发',
      ],
    },

    {
      type: 'category',
      label: '王竹子的SM教学',
      link: {
        type: 'generated-index',
        //description: ' ',
        //keywords: ['王竹子的SM教学', 'USB', ],
      },
      items: [
        'wangzhuzi/sm/TinyDVR-小巧身材，满载动力',
        'wangzhuzi/sm/RaptorDVR-集成稳压的30A双电机驱动',
        'wangzhuzi/sm/AirForce-充满灵性的电机驱动模块',
        'wangzhuzi/sm/ZenDriver-高性能的电机驱动',
        'wangzhuzi/sm/电源设计-方案确定',
        'wangzhuzi/sm/电源拓扑-线性稳压',
        'wangzhuzi/sm/电源拓扑-开关稳压（非隔离型）',
        'wangzhuzi/sm/电源拓扑-开关稳压（隔离型）',
        'wangzhuzi/sm/电源设计-开关稳压IC（非隔离型）',
        'wangzhuzi/sm/电源设计-自举电路',
        'wangzhuzi/sm/电源设计-纹波噪声与测量方法',
        'wangzhuzi/sm/电源方案（LDO）-XC6206',
        'wangzhuzi/sm/电源方案（Buck）-LMR14050',
        'wangzhuzi/sm/电源方案（Buck）-TPS54531',
        'wangzhuzi/sm/电源方案（Buck）-XL2009E1',
        'wangzhuzi/sm/电源方案（Boost）-SX1308',
        'wangzhuzi/sm/电源方案（PMIC）-EA3036C',
        'wangzhuzi/sm/电源方案（PMIC）-EA3059',
        'wangzhuzi/sm/函数思想在电路设计中的应用',
        'wangzhuzi/sm/示波器的触发模式',
        'wangzhuzi/sm/网络分析仪的使用',
        'wangzhuzi/sm/逻辑分析仪的使用',
        'wangzhuzi/sm/宽带注入变压器的使用',
        'wangzhuzi/sm/线性注入器的使用',
      ],
    },

    {
      type: 'category',
      label: '竹子的生活分享频道',
      link: {
        type: 'generated-index',
        //description: ' ',
        //keywords: ['竹子的生活分享频道', 'USB',],
      },
      items: [
        'wangzhuzi/shenghuo/通信协议-数字逻辑电平',
        'wangzhuzi/shenghuo/通信协议-串口通信',
        'wangzhuzi/shenghuo/通信协议-SPI',
        'wangzhuzi/shenghuo/通信协议-I2C',
        'wangzhuzi/shenghuo/通信协议-CAN',
        'wangzhuzi/shenghuo/通信协议-USB',
      ],
    },

  ],




  醉轻舟: [

    {
    type: 'category',
    label: '女优介绍',
    link: {
      slug: '/醉轻舟',
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      'zuiqingzhou/nvyoujieshao/双系统极简安装指南',
      'zuiqingzhou/nvyoujieshao/网页版串口助手的开发',
      'zuiqingzhou/nvyoujieshao/Ubuntu配置笔记',
      'zuiqingzhou/nvyoujieshao/ROS入门笔记',
      'zuiqingzhou/nvyoujieshao/机器视觉入门',
    ],
  },

  {
    type: 'category',
    label: '真实采访',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      'BeagleBone系列-基本参数与环境配置',

    ],
  },

  {
    type: 'category',
    label: 'TOP 10系列',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      'HAL库开发笔记-环境配置',

    ],
  },

  {
    type: 'category',
    label: '奇奇怪怪系列',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      'CSS学习笔记',
    ],
  },

  {
    type: 'category',
    label: '母女系列',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      'HAL库开发笔记-DMA',
    ],
  },

  {
    type: 'category',
    label: '漫画改编',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      'JavaScript学习笔记',
    ],
  },

  {
    type: 'category',
    label: '黑人系列',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      'HAL库开发笔记-TIM通用定时器',
    ],
  },

  {
    type: 'category',
    label: '孕妇系列',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      'BookJourney-二手书商城小程序',
    ],
  },

  {
    type: 'category',
    label: 'NTR精选合集',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      'STM32CubeIDE串口重定向（printf）及输出浮点型',
    ],
  },

  {
    type: 'category',
    label: '优秀影片合集',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      '转义字符',
    ],
  },

  {
    type: 'category',
    label: '不为人知的女优故事',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      'SWD与JTAG的区别与联系',
    ],
  },

  ],


  效率指南: [{
    type: 'category',
    label: '机器人队行政',
    link: {
      slug: '/效率指南',
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      '校门口车辆放行-流程',
    ],
  },
  {
    type: 'category',
    label: '产品相关',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      '中台的概念',
    ],
  },

  {
    type: 'category',
    label: '小技巧',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      'Windows常用命令',
    ],
  },
  {
    type: 'category',
    label: '生活黑客',
    link: {
      //slug: '/生活',
      type: 'generated-index',
      //description: '一些生活相关的笔记。',
      //keywords: ['life', 'lifestyle'],
    },
    items: [
      'THEHack2019黑客马拉松',
    ],
  },
  {
    type: 'category',
    label: '高效工作',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['x', 'x'],
    },
    items: [
      'RSS-高效率的阅读方式',
    ],
  },
  ],

};

module.exports = sidebars;



