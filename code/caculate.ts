type Offer = {
  name: string; // offer名称
  level: number; // 职级，对比P7, 目标职级, 1(不太满意), 2(满意), 3(非常满意)
  pay: number; // 薪资,
  targetMonths: number; // 目标月薪
  stockNums: number; // 万
  stockPrice: number; // 目前价格
  stockTotalYear: number; // 行权期
  postionExpertion: number; // 职位预期 1（不看好）,2(一般),3（看好）
  prospect: number; // 前景预期 1（不看好）,2(一般),3（看好）
  commutingTime: number; // 通勤时间
  workingTime: number; // 工作时长 1（不加班）,2(加班),3（加班严重）
};

const Proportion = {
  // 权重
  level: 1,
  pay: 1,
  targetMonths: 1,
  stockNums: 1,
  stockPrice: 1,
  stockTotalYear: 1,
  postionExpertion: 1,
  prospect: 1,
  commutingTime: 1,
  workingTime: 1,
};

const offers: Offer[] = [
  {
    name: "十荟团1方案",
    level: 1,
    pay: 43,
    targetMonths: 15,
    stockNums: 2,
    stockPrice: 16,
    stockTotalYear: 3,
    postionExpertion: 3,
    prospect: 2,
    commutingTime: 1,
    workingTime: 3,
  },
  {
    name: "十荟团2方案",
    level: 1,
    pay: 37,
    targetMonths: 15,
    stockNums: 3,
    stockPrice: 16,
    stockTotalYear: 3,
    postionExpertion: 3,
    prospect: 2,
    commutingTime: 1,
    workingTime: 3,
  },
];

function caculate(offers: Offer) {
  const anualPay =
    (offers.pay * offers.targetMonths) / 10 +
    Math.floor((offers.stockPrice * offers.stockNums) / offers.stockTotalYear);
  
  return anualPay;
}
