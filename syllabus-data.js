/* 优尔 L1-L3 课程大纲数据
   来源：tools.html / tools-l2.html / tools-l3.html 的课程主题表 + products.js 的产品元信息
   注意：修改课程内容时需同时更新本文件与对应教具页，避免两处不一致 */

const SYLLABUS = {
  "L1": {
    "level": "L1",
    "name": "L1 零基础启蒙盒",
    "productId": "C01",
    "age": "2–3 岁起",
    "goal": "认识数字 · 建立数感",
    "theme": "orange",
    "home": {
      "title": "家庭版课程大纲（视频在线课）",
      "planNote": "纯视频在线学习 · 无课件 · 无教案",
      "disclaimer": "内容由 AI 生成，仅供参考，实际课程以官方发布为准",
      "boards": [
        { "name": "数量概念", "count": "24 节" },
        { "name": "空间几何", "count": "3 节" },
        { "name": "逻辑思维", "count": "11 节" },
        { "name": "思维训练", "count": "36 节" }
      ],
      "total": "74 节视频课"
    },
    "stats": [
      {
        "n": "8",
        "l": "大能力模块"
      },
      {
        "n": "32",
        "l": "课程主题"
      },
      {
        "n": "156",
        "l": "游戏课时"
      },
      {
        "n": "44",
        "l": "标准教案"
      },
      {
        "n": "48",
        "l": "配套课件"
      },
      {
        "n": "74",
        "l": "真人视频课"
      }
    ],
    "modulesTitle": "8 大能力模块（层层递进）",
    "modules": [
      {
        "name": "感官启蒙 · 认识世界",
        "sub": "4 主题 · 13 课时",
        "items": "颜色认知 / 图形认知 / 量感 / 认识点线"
      },
      {
        "name": "分类与规律 · 逻辑起步",
        "sub": "4 主题 · 12 课时",
        "items": "形色碰碰 / 集合与分类 / 找规律 1-2"
      },
      {
        "name": "数感启蒙 · 数量与数字",
        "sub": "5 主题 · 17 课时",
        "items": "感知数量 / 点数 / 认识数字 / 倒数 / 数序"
      },
      {
        "name": "数量对应 · 空间方位",
        "sub": "8 主题 · 34 课时",
        "items": "城市飞行棋 / 数感记忆力 / 毛毛虫散步 / 按数取物 / 糖果铺子 / 空间方位 / 颜色数独 / 堆高楼·小鱼总动员"
      },
      {
        "name": "专注力与反应力训练",
        "sub": "3 主题 · 12 课时",
        "items": "观察与专注 / 手眼协调与反应力（盖数字、金钩钓鱼）/ 舒尔特方格"
      },
      {
        "name": "数字建形 · 数的结构",
        "sub": "2 主题 · 21 课时",
        "items": "数字建形（十格阵、一眼识数、认识 1-20）/ 数字分和（5 与 10 的分解组成）"
      },
      {
        "name": "运算启蒙 · 加减法",
        "sub": "3 主题 · 36 课时",
        "items": "5 以内加减法（疯狂大请客）/ 10 以内加减法（心算闯关、格米对战）/ 数字连击"
      },
      {
        "name": "数的应用与进阶认知",
        "sub": "3 主题 · 11 课时",
        "items": "比较大小（大于号小于号）/ 基数与序数 / 单双数的认知"
      }
    ],
    "columns": [
      "seq",
      "course",
      "content",
      "games",
      "materials"
    ],
    "groups": [
      {
        "title": "9月 · 颜色形状认知与分类启蒙（7 个主题）",
        "count": 7,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "认识颜色",
            "content": "认识红、黄、蓝三原色，能按指令指认并区分颜色",
            "games": "颜色指认、颜色分类",
            "materials": "自制色卡、卡通图片、颜色积木、动物磁贴",
            "imgs": null
          },
          {
            "seq": 2,
            "month": null,
            "course": "缺失的颜色",
            "content": "复习三色并完成颜色分类拼搭，判断行列空缺方位补全颜色",
            "games": "搭高楼、颜色数独",
            "materials": "自制色卡、房子游戏板、颜色积木",
            "imgs": null
          },
          {
            "seq": 3,
            "month": null,
            "course": "空间几何（1）",
            "content": "认识三角形、方形、圆形及生活中的图形，辨别特征并分类",
            "games": "形状分类、摸箱辨形",
            "materials": "自制形状图卡、形状积木块、不透明袋子、形状游戏板、PPT",
            "imgs": null
          },
          {
            "seq": 4,
            "month": null,
            "course": "形色碰碰",
            "content": "综合颜色与形状认知，按骰子指令快速匹配",
            "games": "颜色骰子、形状骰子",
            "materials": "游戏板、积木块、大骰子、小骰子",
            "imgs": null
          },
          {
            "seq": 5,
            "month": null,
            "course": "集合与分类",
            "content": "按颜色、形状等属性对物品分类与配对，完成图形拼搭复刻",
            "games": "分类游戏、配对游戏、小小建筑师",
            "materials": "颜色/图形积木块、动物磁贴、磁扣、数字贴、游戏板、PPT",
            "imgs": null
          },
          {
            "seq": 6,
            "month": null,
            "course": "量感",
            "content": "感知长短、高矮差异，学会一端对齐比较并排序",
            "games": "围巾比长短、高矮排队",
            "materials": "颜色积木块、吸管、地垫、PPT",
            "imgs": null
          },
          {
            "seq": 7,
            "month": null,
            "course": "找规律 1",
            "content": "发现 ABAB/ABB 排列规律并按规律续排",
            "games": "排排站找规律",
            "materials": "颜色积木块、形状积木块、动物磁贴、PPT",
            "imgs": null
          }
        ]
      },
      {
        "title": "10月 · 点数与数感建立（6 个主题）",
        "count": 6,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "感知数量",
            "content": "手口一致点数 1-3 的物品，建立数量概念",
            "games": "手指谣、点数游戏",
            "materials": "颜色积木块、动物磁贴、PPT",
            "imgs": null
          },
          {
            "seq": 2,
            "month": null,
            "course": "点数",
            "content": "手口一致点数 1-5 实物并说出总数，感知数量与数字对应",
            "games": "动物做客、分类点数、按群计数",
            "materials": "颜色积木块、动物磁贴、自制大动物卡、音乐、食物玩具、磁扣、小鱼卡、PPT",
            "imgs": null
          },
          {
            "seq": 3,
            "month": null,
            "course": "城市飞行棋",
            "content": "掌握城市飞行棋规则，按骰子点数行进完成数量对应",
            "games": "城市飞行棋",
            "materials": "城市飞行棋学具、数字卡、大骰子、PPT",
            "imgs": null
          },
          {
            "seq": 4,
            "month": null,
            "course": "认识数字",
            "content": "认读数字 1-3，建立数字符号与数量的对应关系",
            "games": "数字精灵手指谣、数字找卡",
            "materials": "数字卡、积木、卡通贴、动物磁贴、PPT",
            "imgs": null
          },
          {
            "seq": 5,
            "month": null,
            "course": "倒数",
            "content": "感知从大到小的数数顺序，练习 5-1 倒数",
            "games": "积木送回家",
            "materials": "数字卡、积木、卡通磁贴、PPT",
            "imgs": null
          },
          {
            "seq": 6,
            "month": null,
            "course": "数序",
            "content": "按 1-5 顺序正确排列数字卡片，巩固数序",
            "games": "火车排列、数字排序",
            "materials": "数字卡、小鱼卡、数字贴、积木块、自制火车头、PPT",
            "imgs": null
          }
        ]
      },
      {
        "title": "11月 · 数感强化与专注力训练（5 个主题）",
        "count": 5,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "数字追缉",
            "content": "掌握数字追缉游戏规则，强化数字辨认与轮流游戏意识",
            "games": "数字追缉（赛车比赛）",
            "materials": "格米扑克、PPT",
            "imgs": null
          },
          {
            "seq": 2,
            "month": null,
            "course": "谁不见了",
            "content": "复习数字 1-5 及排序，锻炼观察力与专注力",
            "games": "谁不见了",
            "materials": "积木、数字卡、自制动物图卡、PPT",
            "imgs": null
          },
          {
            "seq": 3,
            "month": null,
            "course": "盖数字",
            "content": "按指令快速找到对应数字，锻炼视听觉专注与快速反应",
            "games": "盖数字（初阶/进阶）",
            "materials": "数字卡、PPT",
            "imgs": null
          },
          {
            "seq": 4,
            "month": null,
            "course": "金钩钓鱼",
            "content": "掌握金钩钓鱼接龙规则，强化数感与规则意识",
            "games": "数字拍拍乐、金钩钓鱼",
            "materials": "格米扑克牌、PPT",
            "imgs": null
          },
          {
            "seq": 5,
            "month": null,
            "course": "舒尔特方格",
            "content": "认识 3×3 方格，按序指认 1-10 数字，提升专注力",
            "games": "舒尔特方格",
            "materials": "数字卡、游戏板、PPT",
            "imgs": null
          }
        ]
      },
      {
        "title": "12月 · 数量对应与空间方位（8 个主题）",
        "count": 8,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "毛毛虫散步",
            "content": "复习手口一致点数，按动物数量匹配数字 1-5",
            "games": "动物园故事、毛毛虫点数",
            "materials": "数字卡、磁力板、动物磁贴、小鱼卡、PPT",
            "imgs": null
          },
          {
            "seq": 2,
            "month": null,
            "course": "按数取物",
            "content": "根据数字取出对应数量物品，强化数量对应",
            "games": "按数取物、糖果卡",
            "materials": "数字卡、积木块、卡通磁贴、教师自制糖果卡、PPT",
            "imgs": null
          },
          {
            "seq": 3,
            "month": null,
            "course": "糖果铺子",
            "content": "通过售卖糖果情境强化 1-5 数量对应",
            "games": "糖果铺子",
            "materials": "糖果铺子操作板、积木块、PPT",
            "imgs": null
          },
          {
            "seq": 4,
            "month": null,
            "course": "空间几何（2）",
            "content": "感知上、下、前、后基本空间方位，结合生活场景判断位置",
            "games": "帮小兔找朋友、方位转盘",
            "materials": "玩偶、卡通磁贴、积木块、转盘、PPT",
            "imgs": null
          },
          {
            "seq": 5,
            "month": null,
            "course": "空间几何（3）",
            "content": "通过动物城堡情境完成空间方位对应摆放",
            "games": "小动物住城堡",
            "materials": "房子操作板、动物磁贴、PPT",
            "imgs": null
          },
          {
            "seq": 6,
            "month": null,
            "course": "颜色数独",
            "content": "按空间位置摆放颜色，初步理解数独行列不重复规则",
            "games": "颜色魔法卡、颜色数独",
            "materials": "积木块、操作板、PPT",
            "imgs": null
          },
          {
            "seq": 7,
            "month": null,
            "course": "堆高楼",
            "content": "根据游戏板指定数字叠加对应数量积木搭建高楼",
            "games": "堆高楼",
            "materials": "积木块、操作板、PPT",
            "imgs": null
          },
          {
            "seq": 8,
            "month": null,
            "course": "小鱼总动员",
            "content": "认读数字 1-6，点数小鱼并完成数量匹配",
            "games": "小鱼配对、点数比赛",
            "materials": "小鱼游戏底板、小鱼配对卡、数字大卡、奖励贴纸、拍铃、PPT",
            "imgs": null
          }
        ]
      },
      {
        "title": "1月 · 数字建形、分合与加减法（12 个主题）",
        "count": 12,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "一眼识数",
            "content": "认识十格阵结构，摆出 1-5 建形并整体识别数量",
            "games": "十格阵摆数、识数超人",
            "materials": "十格阵、红蓝磁贴、操作板、PPT",
            "imgs": null
          },
          {
            "seq": 2,
            "month": null,
            "course": "数字建形",
            "content": "掌握十格阵摆放规则，完成 1-10 标准数字建形",
            "games": "数字宝宝找家、我说你摆、闪卡认一认",
            "materials": "十格阵、红蓝磁贴、操作板、PPT",
            "imgs": null
          },
          {
            "seq": 3,
            "month": null,
            "course": "认识数字 11-20",
            "content": "用十格阵理解\"1 个十+几个一\"，认读并摆出 11-20",
            "games": "十格阵拼两位数",
            "materials": "十格阵、红蓝磁贴、操作板、PPT",
            "imgs": null
          },
          {
            "seq": 4,
            "month": null,
            "course": "10 的分解组合",
            "content": "操作中感知 10 的分解与组合，理解总数与部分的变化关系",
            "games": "搭建城堡分积木",
            "materials": "积木块、操作板、PPT",
            "imgs": null
          },
          {
            "seq": 5,
            "month": null,
            "course": "5 的分解组合",
            "content": "掌握 5 的有序分解方法，发现分解交换位置规律",
            "games": "汉堡分一分",
            "materials": "卡通磁贴、雪花片、操作板、PPT",
            "imgs": null
          },
          {
            "seq": 6,
            "month": null,
            "course": "5 以内的减法",
            "content": "认识减号，理解\"拿走求剩\"含义，计算 5 以内减法",
            "games": "小熊蜂蜜派对",
            "materials": "卡通磁贴、红蓝磁扣、操作板、PPT",
            "imgs": null
          },
          {
            "seq": 7,
            "month": null,
            "course": "5 以内的加法",
            "content": "借助十格阵理解\"合起来求总数\"，计算 5 以内加法",
            "games": "十格阵摆蜂蜜",
            "materials": "卡通磁贴、红蓝磁扣、操作板、PPT",
            "imgs": null
          },
          {
            "seq": 8,
            "month": null,
            "course": "疯狂大请客",
            "content": "通过\"疯狂大请客\"找相同食物卡牌，巩固 5 以内凑数",
            "games": "疯狂大请客",
            "materials": "疯狂大请客卡牌",
            "imgs": null
          },
          {
            "seq": 9,
            "month": null,
            "course": "10 以内的减法",
            "content": "借助十格阵完成 6-10 减法建形与心算闯关",
            "games": "小松鼠分饼干、心算闯关",
            "materials": "十格阵操作卡、彩色磁力贴片、减法练习卡、磁性十格阵、大号贴片、心算闯关卡、情景 PPT",
            "imgs": null
          },
          {
            "seq": 10,
            "month": null,
            "course": "格米减法",
            "content": "掌握\"同时出牌、抢算结果\"规则，开展 5/10 以内减法对战",
            "games": "格米减法对战",
            "materials": "1-5/1-10 数字卡牌、小组抢答铃",
            "imgs": null
          },
          {
            "seq": 11,
            "month": null,
            "course": "10 以内的加法",
            "content": "借助十格阵完成 5/10 以内加法建形与心算闯关",
            "games": "小熊野餐、心算闯关",
            "materials": "十格阵操作卡、彩色贴片、磁性十格阵、大号贴片、加法题卡、心算闯关卡、情景 PPT",
            "imgs": null
          },
          {
            "seq": 12,
            "month": null,
            "course": "格米加法",
            "content": "掌握格米加法对战规则，开展 5/10 以内加法对战",
            "games": "格米加法对战",
            "materials": "1-5/1-10 数字卡牌、小组抢答铃",
            "imgs": null
          }
        ]
      },
      {
        "title": "2月 · 比较、逻辑与数概念拓展（6 个主题）",
        "count": 6,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "比较大小",
            "content": "比较 10 以内数的大小，认识并使用 >、<、= 符号",
            "games": "摘苹果比大小、加法比大小",
            "materials": "1-10 数字卡、大于小于等于号操作卡、符号卡片、练习卡",
            "imgs": null
          },
          {
            "seq": 2,
            "month": null,
            "course": "找规律 2",
            "content": "识别三种元素组合的排序规律并按规律续排",
            "games": "花园种花找规律",
            "materials": "彩色圆片、规律操作板、雪花片、空白操作底板、彩笔",
            "imgs": null
          },
          {
            "seq": 3,
            "month": null,
            "course": "基数与序数",
            "content": "区分基数（几个）与序数（第几），回答排队问题",
            "games": "动物园排队",
            "materials": "动物排队磁贴、1-5 数字卡、彩色小圆片、水果卡、交通工具卡、方向指示卡",
            "imgs": null
          },
          {
            "seq": 4,
            "month": null,
            "course": "单双数的认知",
            "content": "通过两两配对理解单双数含义，区分 1-10 单双数",
            "games": "好朋友房子、数字大转盘",
            "materials": "1-10 数字大卡片、动物磁贴、好朋友房子贴板、水果贴卡、单双数分类大底板",
            "imgs": null
          },
          {
            "seq": 5,
            "month": null,
            "course": "认识点线",
            "content": "认识点与直线、曲线、折线，在生活中辨认对应形态",
            "games": "笔宝宝跳舞、点线组合画",
            "materials": "生活实景图、点线示范卡、粗马克笔、大画纸、磁性点线拼块、彩笔",
            "imgs": null
          },
          {
            "seq": 6,
            "month": null,
            "course": "数字连击",
            "content": "认识 1-10 数字扑克，掌握数字连击游戏规则",
            "games": "数字连击",
            "materials": "格米扑克牌",
            "imgs": null
          }
        ]
      }
    ]
  },
  "L2": {
    "level": "L2",
    "name": "L2 进阶提升盒",
    "productId": "C02",
    "age": "3–4 岁",
    "goal": "从数数到运算",
    "theme": "green",
    "home": {
      "title": "家庭版课程大纲（视频在线课）",
      "planNote": "纯视频在线学习 · 无课件 · 无教案",
      "disclaimer": "内容由 AI 生成，仅供参考，实际课程以官方发布为准",
      "boards": [
        { "name": "数量概念", "count": "24 节" },
        { "name": "空间几何", "count": "1 节" },
        { "name": "逻辑思维", "count": "7 节" },
        { "name": "游戏模块", "count": "36 节" }
      ],
      "total": "68 节视频课"
    },
    "stats": [
      {
        "n": "69",
        "l": "课程主题"
      },
      {
        "n": "12",
        "l": "个月课程"
      },
      {
        "n": "25",
        "l": "教学工具"
      }
    ],
    "modulesTitle": "核心玩法板块",
    "modules": [
      {
        "name": "棋盘博弈 · 规则与策略",
        "sub": "",
        "items": "拼接棋盘 ×2、游戏棋盘 ×3，掷骰走格，在规则游戏中巩固点数与数量对应"
      },
      {
        "name": "卡牌对战 · 运算启蒙",
        "sub": "",
        "items": "格米扑克、小羊牌、动物美食卡 ×20，在对抗游戏中练习加减"
      },
      {
        "name": "数字运算 · 从数数到算数",
        "sub": "",
        "items": "数字卡 ×45、数字游戏、逻辑九宫格，建立数学思维框架"
      },
      {
        "name": "分类与对应 · 数感强化",
        "sub": "",
        "items": "水果卡、矿石卡，按类点数与数量对应训练"
      },
      {
        "name": "动手操作 · 手眼协调",
        "sub": "",
        "items": "拼接积木 ×20、图形木板 ×9、手拍铃，做中学"
      }
    ],
    "columns": [
      "seq",
      "course",
      "content",
      "games",
      "materials"
    ],
    "groups": [
      {
        "title": "9月：一眼识数与数字建形启蒙（8个主题）",
        "count": 8,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "一眼识数",
            "content": "快速识别5以内数量，建立“数量-数字符号”直接关联，做到见数知量、见量知数",
            "games": "一眼识数、红蓝片摆数",
            "materials": "红蓝圆片5个、扑克牌数字1-5",
            "imgs": [
              "images/C02/tools/一眼识数.jpg",
              "images/C02/tools/一眼识数-2.jpg"
            ]
          },
          {
            "seq": 2,
            "month": null,
            "course": "PK游戏",
            "content": "巩固5以内一眼识数，认识十格阵结构（2行5格），强化数量与数字对应",
            "games": "十格阵识数PK",
            "materials": "十格阵操作板、红蓝圆片5个、数字卡片1-5",
            "imgs": [
              "images/C02/tools/PK游戏.jpg"
            ]
          },
          {
            "seq": 3,
            "month": null,
            "course": "多角度分类",
            "content": "按颜色/形状/大小/用途等多属性分类，掌握2-3种分类标准，不重复不遗漏",
            "games": "多角度分类、分类说理由",
            "materials": "不同材质不同颜色物品5-8件",
            "imgs": [
              "images/C02/tools/多角度分类.jpg"
            ]
          },
          {
            "seq": 4,
            "month": null,
            "course": "天黑请闭眼&配对",
            "content": "通过视觉、触觉多种方式分类，配对游戏巩固多角度分类",
            "games": "图形对对碰、触觉分类",
            "materials": "不同材质物品、图形操作卡、扑克牌",
            "imgs": []
          },
          {
            "seq": 5,
            "month": null,
            "course": "数字建形",
            "content": "通过十格阵操作进行1-10数字建形，理解抽象数字与数量的关系",
            "games": "十格阵摆数、数字配对",
            "materials": "红蓝圆片10个、十格阵",
            "imgs": [
              "images/C02/tools/数字建形.jpg"
            ]
          },
          {
            "seq": 6,
            "month": null,
            "course": "建形游戏",
            "content": "巩固10以内数字建形，翻牌快速摆出对应建形图",
            "games": "翻牌摆建形",
            "materials": "红蓝圆片10个、扑克牌6-10",
            "imgs": []
          },
          {
            "seq": 7,
            "month": null,
            "course": "建形PK",
            "content": "巩固数字建形，图形与数字配对PK对战",
            "games": "建形PK对战",
            "materials": "红蓝圆片10个、数字牌6-20、十格阵操作板",
            "imgs": [
              "images/C02/tools/建形PK.jpg"
            ]
          },
          {
            "seq": 8,
            "month": null,
            "course": "多退少补",
            "content": "通过多退少补方法修正数字建形，完成数字与图形正确配对",
            "games": "多退少补配对",
            "materials": "红蓝圆片若干、扑克牌1-10",
            "imgs": []
          }
        ]
      },
      {
        "title": "10月：数字分解与组合（6个主题）",
        "count": 6,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "数字2-3的分合",
            "content": "理解数字2、3的分解与组成，认识分解与组成符号",
            "games": "分花游戏、分解组合操作",
            "materials": "PPT、分解组合操作板",
            "imgs": [
              "images/C02/tools/数字2-3的分合.jpg"
            ]
          },
          {
            "seq": 2,
            "month": null,
            "course": "数字4-5的分合",
            "content": "学会数字4-5多种分解与组成方法，引导按序分数",
            "games": "小鱼分缸、按序分数",
            "materials": "PPT、分解组合操作板",
            "imgs": []
          },
          {
            "seq": 3,
            "month": null,
            "course": "5以内数字分合练习",
            "content": "熟练掌握数字2-5的分解与组合，理解按序分数规律",
            "games": "青蛙跳荷叶、翻牌凑数",
            "materials": "PPT、雪花片",
            "imgs": []
          },
          {
            "seq": 4,
            "month": null,
            "course": "数字6-7的分合",
            "content": "学会数字6-7多种分解与组合方法，按序分数",
            "games": "分竹子、挖掘宝石",
            "materials": "PPT、分解组合操作材料",
            "imgs": [
              "images/C02/tools/数字6-7的分合.jpg"
            ]
          },
          {
            "seq": 5,
            "month": null,
            "course": "数字8-9的分合",
            "content": "学会数字8-9多种分解与组合方法，按序分数",
            "games": "蚂蚁赛跑、分椰子",
            "materials": "PPT、分解组合操作板",
            "imgs": []
          },
          {
            "seq": 6,
            "month": null,
            "course": "数字10的分合",
            "content": "学会数字10的多种分解与组合方法，按序分数",
            "games": "分帽子、买宝石",
            "materials": "PPT、分解组合操作板",
            "imgs": []
          }
        ]
      },
      {
        "title": "11月：凑十与数字组合（2个主题）",
        "count": 2,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "凑十游戏",
            "content": "熟练掌握凑十方法和数字组合，探索凑十的5组好朋友组合",
            "games": "十格阵凑十、翻牌凑十",
            "materials": "PPT、十格阵操作板、数字卡片1-10、红蓝圆片10个",
            "imgs": [
              "images/C02/tools/凑十游戏.jpg"
            ]
          },
          {
            "seq": 2,
            "month": null,
            "course": "数字找朋友（教具）",
            "content": "认识数字牌，掌握凑十拍铃游戏规则，理解数字牌图案与数量关系",
            "games": "数字找朋友（拍铃凑十）",
            "materials": "教具《数字牌》2人一套、铃铛每组一个",
            "imgs": []
          }
        ]
      },
      {
        "title": "12月：5/10以内加减法（7个主题）",
        "count": 7,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "数字5的加法",
            "content": "复习数字5的组成，学习5以内加法运算",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 2,
            "month": null,
            "course": "数字5的减法",
            "content": "复习数字5的分解，学习5以内减法运算",
            "games": "课件PPT",
            "materials": "数字卡片1-5、PPT",
            "imgs": [
              "images/C02/tools/数字5的减法.jpg"
            ]
          },
          {
            "seq": 3,
            "month": null,
            "course": "数字5以内加减运算",
            "content": "巩固加减符号及含义，进行5以内加减运算",
            "games": "课件PPT",
            "materials": "扑克牌",
            "imgs": [
              "images/C02/tools/数字5以内加减运算.jpg"
            ]
          },
          {
            "seq": 4,
            "month": null,
            "course": "复习5以内加减运算",
            "content": "复习巩固5以内加减运算",
            "games": "课件PPT",
            "materials": "扑克牌",
            "imgs": []
          },
          {
            "seq": 5,
            "month": null,
            "course": "数字6-10的加法",
            "content": "复习数字6-10的组成，学习6-10加法运算",
            "games": "课件PPT",
            "materials": "扑克牌",
            "imgs": []
          },
          {
            "seq": 6,
            "month": null,
            "course": "数字6-10的减法",
            "content": "复习数字6-10的分解，学习6-10减法运算",
            "games": "课件PPT",
            "materials": "扑克牌",
            "imgs": []
          },
          {
            "seq": 7,
            "month": null,
            "course": "复习6-10加减运算",
            "content": "复习巩固6-10加减运算",
            "games": "课件PPT",
            "materials": "扑克牌",
            "imgs": []
          }
        ]
      },
      {
        "title": "1月：10以内加减混合与进位加法（7个主题）",
        "count": 7,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "10以内加减混合（一）",
            "content": "学习10以内加减混合运算",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 2,
            "month": null,
            "course": "10以内加减混合（二）",
            "content": "巩固10以内加减混合运算",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 3,
            "month": null,
            "course": "进位加法（一）",
            "content": "学习一位数加一位数进位加法，理解“满十进一”",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 4,
            "month": null,
            "course": "进位加法（二）",
            "content": "巩固一位数加一位数进位加法",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 5,
            "month": null,
            "course": "进位加法（三）",
            "content": "练习一位数加一位数进位加法",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 6,
            "month": null,
            "course": "进位加法（四）",
            "content": "熟练一位数加一位数进位加法",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 7,
            "month": null,
            "course": "小羊农场（教具）",
            "content": "通过小羊农场游戏巩固进位加法运算",
            "games": "小羊农场游戏",
            "materials": "教具《小羊农场》4人一套",
            "imgs": [
              "images/C02/tools/小羊农场(教具).jpg"
            ]
          }
        ]
      },
      {
        "title": "2月：群计数与相邻数（6个主题）",
        "count": 6,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "按群计数（一）",
            "content": "学习按群计数方法（2个2数、5个5数）",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 2,
            "month": null,
            "course": "按群计数（二）",
            "content": "巩固按群计数方法",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 3,
            "month": null,
            "course": "相邻数（一）",
            "content": "认识相邻数，理解相邻数含义",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 4,
            "month": null,
            "course": "相邻数（二）",
            "content": "巩固相邻数认识",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 5,
            "month": null,
            "course": "数字火车",
            "content": "通过数字火车游戏巩固数序与相邻数",
            "games": "数字火车",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 6,
            "month": null,
            "course": "数字邻居（教具）",
            "content": "通过数字邻居游戏巩固相邻数",
            "games": "数字邻居游戏",
            "materials": "教具《数字牌》2人一套、铃铛每组一个",
            "imgs": [
              "images/C02/tools/数字邻居(教具).jpg"
            ]
          }
        ]
      },
      {
        "title": "3月：数位认识与20以内不进位加法（6个主题）",
        "count": 6,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "两位数",
            "content": "认读20以内两位数，理解“10个一是1个十”“2个十是20”",
            "games": "课件PPT",
            "materials": "课件PPT、数字卡片1-10",
            "imgs": [
              "images/C02/tools/两位数.jpg"
            ]
          },
          {
            "seq": 2,
            "month": null,
            "course": "认识个位十位",
            "content": "理解个位、十位的数位意义，会读写两位数，明确数位不同数值不同",
            "games": "课件PPT",
            "materials": "课件PPT、红蓝圆片、数位表格操作单",
            "imgs": [
              "images/C02/tools/认识个位十位.jpg"
            ]
          },
          {
            "seq": 3,
            "month": null,
            "course": "破十法",
            "content": "理解“破十”算理，掌握十几减几（个位不够减）算法",
            "games": "课件PPT",
            "materials": "课件PPT、红蓝圆片、十格阵操作板",
            "imgs": []
          },
          {
            "seq": 4,
            "month": null,
            "course": "20以内不进位加法（一）",
            "content": "理解算理，十位不变、个位相加，口算20以内不进位加法",
            "games": "课件PPT",
            "materials": "课件PPT、红蓝圆片、串珠",
            "imgs": []
          },
          {
            "seq": 5,
            "month": null,
            "course": "20以内不进位加法（二）",
            "content": "巩固20以内不进位加法口算，脱离数位图直接计算",
            "games": "课件PPT",
            "materials": "课件PPT、运算卡牌",
            "imgs": []
          },
          {
            "seq": 6,
            "month": null,
            "course": "格米扑克麻将（教具）",
            "content": "通过扑克麻将游戏巩固20以内不进位加法",
            "games": "格米扑克麻将游戏",
            "materials": "扑克牌2-4人一套",
            "imgs": [
              "images/C02/tools/格米扑克麻将(教具).jpg"
            ]
          }
        ]
      },
      {
        "title": "4月：20以内退位减法（5个主题）",
        "count": 5,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "20以内不退位减法（一）",
            "content": "掌握20以内不退位减法算理（个位减个位、十位不变）",
            "games": "课件PPT",
            "materials": "课件PPT、数字卡片1-10",
            "imgs": [
              "images/C02/tools/20以内不退位减法(一).jpg"
            ]
          },
          {
            "seq": 2,
            "month": null,
            "course": "20以内不退位减法（二）",
            "content": "巩固20以内不退位减法口算",
            "games": "课件PPT",
            "materials": "课件PPT、口算题卡",
            "imgs": []
          },
          {
            "seq": 3,
            "month": null,
            "course": "平十法",
            "content": "理解平十法算理（先凑10再减），掌握20以内退位减法平十法",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 4,
            "month": null,
            "course": "想加算减",
            "content": "理解加减法互逆关系，通过加法算式推导减法得数",
            "games": "课件PPT",
            "materials": "课件PPT",
            "imgs": []
          },
          {
            "seq": 5,
            "month": null,
            "course": "数字叠叠乐（教具）",
            "content": "通过数字叠叠乐游戏巩固退位减法",
            "games": "数字叠叠乐游戏",
            "materials": "教具《数字叠叠乐》2-4人一套",
            "imgs": [
              "images/C02/tools/数字叠叠乐(教具).jpg"
            ]
          }
        ]
      },
      {
        "title": "5月：20以内加减综合运算（5个主题）",
        "count": 5,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "20以内加减法的综合练习",
            "content": "综合运用凑十法、破十法、平十法，熟练计算20以内加减法",
            "games": "课件PPT",
            "materials": "课件PPT、扑克牌",
            "imgs": [
              "images/C02/tools/20以内加减法的综合练习.jpg"
            ]
          },
          {
            "seq": 2,
            "month": null,
            "course": "20以内连加法运算",
            "content": "掌握“从左到右依次计算”算法，灵活运用凑十法简化计算",
            "games": "课件PPT",
            "materials": "",
            "imgs": []
          },
          {
            "seq": 3,
            "month": null,
            "course": "20以内连减法运算",
            "content": "掌握“从左到右依次计算”算法，灵活运用破十法、平十法简化计算",
            "games": "课件PPT",
            "materials": "",
            "imgs": []
          },
          {
            "seq": 4,
            "month": null,
            "course": "20以内加减混合运算",
            "content": "理解先加后减/先减后加交替数量关系，掌握混合运算",
            "games": "课件PPT",
            "materials": "",
            "imgs": []
          },
          {
            "seq": 5,
            "month": null,
            "course": "格米14分（教具）",
            "content": "通过格米14分游戏巩固20以内加减综合运算",
            "games": "格米14分游戏",
            "materials": "教具《格米14分》2-4人一套",
            "imgs": []
          }
        ]
      },
      {
        "title": "6月：量的比较与等量代换（5个主题）",
        "count": 5,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "量的比较（一）",
            "content": "用＞、＜、＝正确表示数或量的大小关系，借助一一对应直观比较",
            "games": "课件PPT",
            "materials": "课件PPT、＞＜＝图片、数量1-10实物卡片",
            "imgs": [
              "images/C02/tools/量的比较(一).jpg"
            ]
          },
          {
            "seq": 2,
            "month": null,
            "course": "量的比较（二）",
            "content": "从形象数量比较过渡到对应数字比较，巩固符号使用",
            "games": "课件PPT",
            "materials": "课件PPT、＞＜＝图片、数量1-10实物卡片",
            "imgs": []
          },
          {
            "seq": 3,
            "month": null,
            "course": "等量代换（一）",
            "content": "理解等量、代换基本含义，从具体情境抽象数量相等关系",
            "games": "课件PPT",
            "materials": "课件PPT、《曹冲称象》视频",
            "imgs": []
          },
          {
            "seq": 4,
            "month": null,
            "course": "等量代换（二）",
            "content": "复习等量代换，进行一步或多步代换解决问题",
            "games": "课件PPT",
            "materials": "课件PPT、《曹冲称象》视频",
            "imgs": []
          },
          {
            "seq": 5,
            "month": null,
            "course": "小羊加加加（教具）",
            "content": "通过小羊加加加游戏巩固等量代换",
            "games": "小羊加加加游戏",
            "materials": "教具《小羊加加加》2人一套",
            "imgs": [
              "images/C02/tools/小羊加加加(教具).jpg"
            ]
          }
        ]
      },
      {
        "title": "7月：测量与逻辑推理（8个主题）",
        "count": 8,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "测量",
            "content": "用像素积木作为非标准测量工具，理解首尾相连、对齐起点，记录测量结果",
            "games": "测量探究游戏",
            "materials": "像素积木、记录单、PPT",
            "imgs": [
              "images/C02/tools/测量.jpg"
            ]
          },
          {
            "seq": 2,
            "month": null,
            "course": "数独（一）",
            "content": "认识3×3拉丁方阵，理解每行每列图形不重复不遗漏",
            "games": "拉丁方阵排列",
            "materials": "3×3拉丁方阵模板、彩色图形卡片、PPT",
            "imgs": [
              "images/C02/tools/数独(一).jpg"
            ]
          },
          {
            "seq": 3,
            "month": null,
            "course": "数独（二）",
            "content": "理解3×3数独规则，每行每列数字不重复",
            "games": "数独闯关",
            "materials": "3×3数独操作板、数字1-3、PPT闯关图",
            "imgs": []
          },
          {
            "seq": 4,
            "month": null,
            "course": "数独（三）",
            "content": "由三宫数独迁移学习四宫数独，独立完成四宫数独",
            "games": "四宫数独闯关",
            "materials": "四宫数独操作板、数字1-4、PPT闯关图",
            "imgs": []
          },
          {
            "seq": 5,
            "month": null,
            "course": "数字游戏（一）",
            "content": "掌握数字游戏基本规则，找确定数字及带“×”数字",
            "games": "数字游戏闯关",
            "materials": "课堂教学PPT、数字游戏操作板每人一套",
            "imgs": [
              "images/C02/tools/数字游戏(一).jpg"
            ]
          },
          {
            "seq": 6,
            "month": null,
            "course": "数字游戏（二）",
            "content": "2-3个条件相结合找确定或排除数字，学会匹配关联线索推理",
            "games": "数字游戏闯关",
            "materials": "课堂教学PPT、数字游戏教具每人一套",
            "imgs": []
          },
          {
            "seq": 7,
            "month": null,
            "course": "数字游戏（三）",
            "content": "掌握假设法和排除法，学会加减运算推理可能的数字组合",
            "games": "数字游戏闯关",
            "materials": "课堂教学PPT、数字游戏教具每人一套",
            "imgs": []
          },
          {
            "seq": 8,
            "month": null,
            "course": "数字游戏（四）",
            "content": "复习推理规则，独立操作31-40关",
            "games": "数字游戏闯关",
            "materials": "课堂教学PPT、数字游戏教具每人一套",
            "imgs": []
          }
        ]
      },
      {
        "title": "8月：逻辑推理综合（4个主题）",
        "count": 4,
        "items": [
          {
            "seq": 1,
            "month": null,
            "course": "逻辑九宫格（一）",
            "content": "理解游戏规则，确定提示先放，根据限制排除确定其他位置",
            "games": "逻辑九宫格闯关",
            "materials": "课件、逻辑九宫格1人/个",
            "imgs": [
              "images/C02/tools/逻辑九宫格(一).jpg"
            ]
          },
          {
            "seq": 2,
            "month": null,
            "course": "逻辑九宫格（二）",
            "content": "无虚线提醒时推理策略，通过颜色、形状两维度分析找突破点",
            "games": "逻辑九宫格闯关",
            "materials": "课件、逻辑九宫格1人/个",
            "imgs": []
          },
          {
            "seq": 3,
            "month": null,
            "course": "逻辑九宫格（三）",
            "content": "明确“X”含义，先放确认图形，对可放置位置进行限制排除",
            "games": "逻辑九宫格闯关",
            "materials": "课件、逻辑九宫格1人/个",
            "imgs": []
          },
          {
            "seq": 4,
            "month": null,
            "course": "逻辑九宫格（四）",
            "content": "增加难度，结合已放置图形提示寻找位置，对“X”提示位置限制排除",
            "games": "逻辑九宫格闯关",
            "materials": "课件、逻辑九宫格1人/个",
            "imgs": []
          }
        ]
      }
    ]
  },
  "L3": {
    "level": "L3",
    "name": "L3 高阶拓展盒",
    "productId": "C03",
    "age": "4–5 岁",
    "goal": "从运算到推理",
    "theme": "red",
    "home": {
      "title": "家庭版课程大纲（视频在线课）",
      "planNote": "纯视频在线学习 · 无课件 · 无教案",
      "disclaimer": "内容由 AI 生成，仅供参考，实际课程以官方发布为准",
      "boards": [
        { "name": "24 算", "count": null },
        { "name": "百里驰援", "count": null },
        { "name": "官渡算战", "count": null },
        { "name": "三国谋算", "count": null },
        { "name": "神机妙算", "count": null },
        { "name": "九九争霸", "count": null },
        { "name": "课前导入 · 家长必读", "count": null }
      ],
      "total": null
    },
    "stats": [
      {
        "n": "31",
        "l": "课程主题"
      },
      {
        "n": "12",
        "l": "种核心教具"
      },
      {
        "n": "4",
        "l": "大玩法板块"
      }
    ],
    "modulesTitle": "核心玩法板块",
    "modules": [
      {
        "name": "24 算专区 · 四则运算",
        "sub": "",
        "items": "24 算比赛专用垫、24 算卡牌、计时沙漏，四则混合运算竞速对决"
      },
      {
        "name": "主题算战棋盘 ×4",
        "sub": "",
        "items": "九九争霸（乘法口诀）、官渡算战、三国谋算等主题棋盘，运算 + 策略"
      },
      {
        "name": "对战道具 · 沉浸体验",
        "sub": "",
        "items": "黑白棋子、白黄棋子、多面骰子、元宝道具、游戏卡牌，桌游级对战配置"
      },
      {
        "name": "空间与推理 · 思维建构",
        "sub": "",
        "items": "规划路线、分类整理等生活迁移游戏，培养空间想象与逻辑推理"
      }
    ],
    "columns": [
      "seq",
      "month",
      "course",
      "content",
      "materials"
    ],
    "groups": [
      {
        "title": "第一学期 · 秋季（9 月–11 月）：运算基础与乘法启蒙",
        "count": 13,
        "items": [
          {
            "seq": 1,
            "month": "9月",
            "course": "数字 5 的加法",
            "content": "理解\"合\"的本质，掌握 5 以内加法口算，感知加号两边交换位置结果不变",
            "games": null,
            "materials": "课件 PPT",
            "imgs": null
          },
          {
            "seq": 2,
            "month": "9月",
            "course": "数字 5 的减法",
            "content": "理解\"分\"的本质，掌握 5 以内减法口算，感知减法是加法的逆运算",
            "games": null,
            "materials": "数字卡片 1-5、PPT",
            "imgs": null
          },
          {
            "seq": 3,
            "month": "9月",
            "course": "5 以内数字的加减",
            "content": "熟练 5 以内加减运算，通过 24 算牌游戏巩固练习",
            "games": null,
            "materials": "24 算牌",
            "imgs": null
          },
          {
            "seq": 4,
            "month": "9月",
            "course": "数字 6-10 的加法",
            "content": "理解 10 以内加法的数量关系，掌握 6-10 加法口算，感知交换律",
            "games": null,
            "materials": "24 算牌",
            "imgs": null
          },
          {
            "seq": 5,
            "month": "9月",
            "course": "数字 6-10 的减法",
            "content": "理解 10 以内减法的数量关系，掌握 6-10 减法口算，感受逆运算",
            "games": null,
            "materials": "24 算牌",
            "imgs": null
          },
          {
            "seq": 6,
            "month": "9月",
            "course": "10 以内数字的加减运算",
            "content": "熟练 10 以内加减口算，能根据情境选择合适运算方式",
            "games": null,
            "materials": "24 算牌",
            "imgs": null
          },
          {
            "seq": 7,
            "month": "9月",
            "course": "10 以内数字的加减混合运算",
            "content": "理解\"先合后分\"\"先分后合\"的混合运算意义，掌握从左到右运算顺序",
            "games": null,
            "materials": "24 算牌、PPT",
            "imgs": null
          },
          {
            "seq": 8,
            "month": "9月",
            "course": "一位数加一位数的进位加法",
            "content": "理解\"满十进一\"进位规则，掌握凑十法，能口算进位加法",
            "games": null,
            "materials": "24 算牌、PPT",
            "imgs": null
          },
          {
            "seq": 9,
            "month": "10月",
            "course": "20 以内数字的加减混合运算",
            "content": "20 以内加减混合运算口算，4 张牌全加与混合运算游戏",
            "games": null,
            "materials": "24 算牌、PPT",
            "imgs": null
          },
          {
            "seq": 10,
            "month": "10月",
            "course": "数字 21 点",
            "content": "20 以内加法策略游戏，累计不超过 21 的博弈思维",
            "games": null,
            "materials": "24 算牌、PPT",
            "imgs": null
          },
          {
            "seq": 11,
            "month": "10月",
            "course": "百里驰援（1-4 课时）",
            "content": "百以内数字加减运算，策略分兵前进，加减乘除混合运算三骰子模式",
            "games": null,
            "materials": "教具《百里驰援》2 人一套、元宝若干",
            "imgs": null
          },
          {
            "seq": 12,
            "month": "11月",
            "course": "乘法的意义",
            "content": "理解乘法是\"相同加数求和\"的简便运算，认识乘号，掌握表内乘法口算",
            "games": null,
            "materials": "课件 PPT、24 算扑克牌、记录表、笔、教学视频",
            "imgs": null
          },
          {
            "seq": 13,
            "month": "11月",
            "course": "神机妙算（1-6 课时）",
            "content": "多数字连续加法配发，乘法玩法规则（相同数字×张数），四则运算策略",
            "games": null,
            "materials": "教具《神机妙算》4 人一套、沙漏、手拍铃、元宝标记",
            "imgs": null
          }
        ]
      },
      {
        "title": "第一学期 · 冬季（12 月–1 月）：除法启蒙与棋盘策略",
        "count": 5,
        "items": [
          {
            "seq": 14,
            "month": "12月",
            "course": "除法的意义",
            "content": "理解\"平均分\"的等分除与包含除两种意义，认识除号，借助乘法口诀求商",
            "games": null,
            "materials": "课件 PPT、教学动画视频、数棒若干",
            "imgs": null
          },
          {
            "seq": 15,
            "month": "12月",
            "course": "神机妙算进阶（1-4 课时）",
            "content": "除法玩法规则（总人数÷分队数=武器数），感知除法是乘法的逆运算",
            "games": null,
            "materials": "教具《神机妙算》4 人一套、沙漏、手拍铃、元宝标记",
            "imgs": null
          },
          {
            "seq": 16,
            "month": "12月",
            "course": "九九争霸（1-3 课时）",
            "content": "九九乘法表熟练认读与应用，掷骰子乘法竞技，棋盘占领策略",
            "games": null,
            "materials": "教具《九九争霸》4 人/2 人一套、贤士棋白橘各 20 个、十面骰子 2 个",
            "imgs": null
          },
          {
            "seq": 17,
            "month": "1月",
            "course": "九九争霸（4-7 课时）",
            "content": "乘法竞技策略深化，小黑人替换骰子扩展战术，多占格子策略",
            "games": null,
            "materials": "教具《九九争霸》2 人一套、贤士棋白橘各 20 个、十面骰子 2 个、小黑人",
            "imgs": null
          },
          {
            "seq": 18,
            "month": "1月",
            "course": "三子棋（1-4 课时）",
            "content": "三子棋基础规则与策略（边/角/中心分析），双重威胁与不败策略",
            "games": null,
            "materials": "教具《三国谋算》2 人一套",
            "imgs": null
          }
        ]
      },
      {
        "title": "第二学期 · 春季（2 月–4 月）：四则混合与博弈策略",
        "count": 5,
        "items": [
          {
            "seq": 19,
            "month": "2月",
            "course": "三国谋算（1-4 课时）",
            "content": "加减乘（后加入除）四则混合运算，棋盘博弈与记牌策略，多人玩法",
            "games": null,
            "materials": "教具《三国谋算》2 人一套",
            "imgs": null
          },
          {
            "seq": 20,
            "month": "2月",
            "course": "24 算混合运算沙漏版（1-4 课时）",
            "content": "3 张牌不限 24 的混合运算竞速，沙漏计时+抢答机制，升级版纸笔竞速",
            "games": null,
            "materials": "教具《24 算牌》2 人一套",
            "imgs": null
          },
          {
            "seq": 21,
            "month": "3月",
            "course": "官渡算战（1-6 课时）",
            "content": "2 骰子→3 骰子四则运算占领粮仓，沙漏限时、保护小兵、多人战",
            "games": null,
            "materials": "教具《官渡算战》2 人一套",
            "imgs": null
          },
          {
            "seq": 22,
            "month": "3月",
            "course": "24 算基础加法 & 加减混合（1-2 课时）",
            "content": "24 算入门：全加法与加减混合法解题，创编 24 算题目",
            "games": null,
            "materials": "教具《24 算牌》2 或 4 人一套",
            "imgs": null
          },
          {
            "seq": 23,
            "month": "4月",
            "course": "24 算乘法（1-8 课时）",
            "content": "掌握 3×8 / 4×6 / 2×12 / 1×24 乘法解体系，多种凑数策略",
            "games": null,
            "materials": "教具《24 算牌》2 或 4 人一套",
            "imgs": null
          }
        ]
      },
      {
        "title": "第二学期 · 夏季（5 月–7 月）：24 算全解法与竞速",
        "count": 8,
        "items": [
          {
            "seq": 24,
            "month": "5月",
            "course": "24 算加法解（1-2 课时）",
            "content": "加法解体系（X+Y=24 的各种拆分组合），系统训练加法结尾解题",
            "games": null,
            "materials": "教具《24 算牌》2 或 4 人一套",
            "imgs": null
          },
          {
            "seq": 25,
            "month": "5月",
            "course": "24 算减法解（1-2 课时）",
            "content": "减法解体系（X-Y=24 的各种拆分组合），乘除与减法混合",
            "games": null,
            "materials": "教具《24 算牌》2 或 4 人一套",
            "imgs": null
          },
          {
            "seq": 26,
            "month": "5月",
            "course": "24 算除法解（1-2 课时）",
            "content": "除法解体系（X÷Y=24 的各种拆分组合），高阶混合运算",
            "games": null,
            "materials": "教具《24 算牌》2 或 4 人一套",
            "imgs": null
          },
          {
            "seq": 27,
            "month": "6月",
            "course": "24 算特殊解法（1-2 课时）",
            "content": "特殊解法（如 7²-5²、利用公因数提取），创造性数学思维",
            "games": null,
            "materials": "教具《24 算牌》2 或 4 人一套",
            "imgs": null
          },
          {
            "seq": 28,
            "month": "6月",
            "course": "24 算一题多解（1-3 课时）",
            "content": "同一题目多角度解题能力，灵活运用所有解法体系",
            "games": null,
            "materials": "教具《24 算牌》2 或 4 人一套",
            "imgs": null
          },
          {
            "seq": 29,
            "month": "6月",
            "course": "24 算 4 人玩法 & 有趣的 24 算（1-3 课时）",
            "content": "四张相同数字探索（1-10），4 人竞速竞技模式",
            "games": null,
            "materials": "教具《24 算牌》4 人一套",
            "imgs": null
          },
          {
            "seq": 30,
            "month": "7月",
            "course": "32 算玩法（1-2 课时）",
            "content": "5 张牌计算 32（4×8 为主），拓展数学思维边界",
            "games": null,
            "materials": "教具《24 算牌》4 人一套",
            "imgs": null
          },
          {
            "seq": 31,
            "month": "7月",
            "course": "24 算混合运算沙漏版四牌（1-6 课时）",
            "content": "4 人四牌不限 24 混合运算竞速，沙漏计时+纸笔升级版，综合数学能力",
            "games": null,
            "materials": "教具《24 算牌》4 人一套",
            "imgs": null
          }
        ]
      }
    ]
  }
};

const SYLLABUS_ORDER = ['L1', 'L2', 'L3'];
