const MENU_ITEMS = [
  {
    "id": "dish-1",
    "name": "干锅花菜",
    "category": "蔬菜",
    "image": "images/dish_01.jpg"
  },
  {
    "id": "dish-2",
    "name": "蒸肉",
    "category": "肉类",
    "image": "images/dish_02.jpg"
  },
  {
    "id": "dish-3",
    "name": "红烧排骨",
    "category": "肉类",
    "image": "images/dish_03.jpg"
  },
  {
    "id": "dish-4",
    "name": "豆豉牛肉",
    "category": "肉类",
    "image": "images/dish_04.jpg"
  },
  {
    "id": "dish-5",
    "name": "炒青菜",
    "category": "蔬菜",
    "image": "images/dish_05.jpg"
  },
  {
    "id": "dish-6",
    "name": "西红柿炒鸡蛋",
    "category": "家常菜",
    "image": "images/dish_06.jpg"
  },
  {
    "id": "dish-7",
    "name": "土豆片",
    "category": "蔬菜",
    "image": "images/dish_07.jpg"
  },
  {
    "id": "dish-8",
    "name": "拍黄瓜",
    "category": "凉菜",
    "image": "images/dish_08.jpg"
  },
  {
    "id": "dish-9",
    "name": "炖牛腩",
    "category": "肉类",
    "image": "images/dish_09.jpg"
  },
  {
    "id": "dish-10",
    "name": "烤鸡翅",
    "category": "肉类",
    "image": "images/dish_10.jpg"
  },
  {
    "id": "dish-11",
    "name": "烤羊排",
    "category": "肉类",
    "image": "images/dish_11.jpg"
  },
  {
    "id": "dish-12",
    "name": "懒人汤（胡萝卜、玉米、排骨汤）",
    "category": "汤",
    "image": "images/dish_12.jpg"
  },
  {
    "id": "dish-13",
    "name": "饺子",
    "category": "主食",
    "image": "images/dish_13.jpg"
  },
  {
    "id": "dish-14",
    "name": "包子",
    "category": "主食",
    "image": "images/dish_14.jpg"
  },
  {
    "id": "dish-15",
    "name": "馄饨",
    "category": "主食",
    "image": "images/dish_15.jpg"
  },
  {
    "id": "dish-16",
    "name": "炒米饭",
    "category": "主食",
    "image": "images/dish_16.jpg"
  },
  {
    "id": "dish-17",
    "name": "拉面",
    "category": "主食",
    "image": "images/dish_17.jpg"
  },
  {
    "id": "dish-18",
    "name": "麻辣干锅虾",
    "category": "海鲜",
    "image": "images/dish_18.jpg"
  },
  {
    "id": "dish-19",
    "name": "火锅",
    "category": "特别料理",
    "image": "images/dish_19.jpg"
  },
  {
    "id": "dish-20",
    "name": "烤肉",
    "category": "特别料理",
    "image": "images/dish_20.jpg"
  },
  {
    "id": "dish-21",
    "name": "西兰花牛肉",
    "category": "肉类",
    "image": "images/dish_21.jpg"
  },
  {
    "id": "dish-22",
    "name": "小猪盖被（东北菜）",
    "category": "东北菜",
    "image": "images/dish_22.jpg"
  },
  {
    "id": "dish-23",
    "name": "孜然羊肉",
    "category": "肉类",
    "image": "images/dish_23.jpg"
  },
  {
    "id": "dish-24",
    "name": "香煎三文鱼",
    "category": "海鲜",
    "image": "images/dish_24.jpg"
  },
  {
    "id": "dish-25",
    "name": "南瓜（蒸/炒）",
    "category": "蔬菜",
    "image": "images/dish_25.jpg"
  },
  {
    "id": "dish-26",
    "name": "蒸鸡蛋",
    "category": "家常菜",
    "image": "images/dish_26.jpg"
  },
  {
    "id": "dish-27",
    "name": "煎鸡蛋",
    "category": "家常菜",
    "image": "images/dish_27.jpg"
  },
  {
    "id": "dish-28",
    "name": "土豆焖鸡",
    "category": "肉类",
    "image": "images/dish_28.jpg"
  },
  {
    "id": "dish-29",
    "name": "白菜豆腐汤",
    "category": "汤",
    "image": "images/dish_29.jpg"
  },
  {
    "id": "dish-30",
    "name": "麻婆豆腐",
    "category": "家常菜",
    "image": "images/dish_30.jpg"
  },
  {
    "id": "dish-31",
    "name": "莲藕排骨汤",
    "category": "汤",
    "image": "images/dish_31.jpg"
  },
  {
    "id": "dish-32",
    "name": "辣椒炒肉",
    "category": "肉类",
    "image": "images/dish_32.jpg"
  },
  {
    "id": "dish-33",
    "name": "手撕包菜",
    "category": "蔬菜",
    "image": "images/dish_33.jpg"
  },
  {
    "id": "dish-34",
    "name": "鱼香茄子",
    "category": "蔬菜",
    "image": "images/dish_34.jpg"
  },
  {
    "id": "dish-35",
    "name": "鸡蛋炒土豆丝",
    "category": "家常菜",
    "image": "images/dish_35.jpg"
  },
  {
    "id": "dish-36",
    "name": "红烧冬瓜",
    "category": "蔬菜",
    "image": "images/dish_36.jpg"
  },
  {
    "id": "dish-37",
    "name": "葱爆大虾",
    "category": "海鲜",
    "image": "images/dish_37.jpg"
  },
  {
    "id": "dish-38",
    "name": "空壳意面",
    "category": "主食",
    "image": "images/dish_38.jpg"
  },
  {
    "id": "dish-39",
    "name": "清爽夏天虾沙拉",
    "category": "凉菜",
    "image": "images/dish_39.jpg"
  },
  {
    "id": "dish-40",
    "name": "蒜香烤茄子",
    "category": "蔬菜",
    "image": "images/dish_40.jpg"
  },
  {
    "id": "dish-41",
    "name": "苹果橙子水",
    "category": "饮品",
    "image": "images/dish_41.jpg"
  },
  {
    "id": "dish-42",
    "name": "冰糖雪梨",
    "category": "饮品",
    "image": "images/dish_42.jpg"
  },
  {
    "id": "dish-43",
    "name": "芋圆奶茶",
    "category": "饮品",
    "image": "images/dish_43.jpg"
  }
];
