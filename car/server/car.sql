#设置客户端连接服务器端的编码 
set names utf8;

DROP DATABASE if EXISTS CAR;

CREATE DATABASE CAR charset = utf8;

USE CAR;

-- 产品详情

CREATE TABLE
    PROSET_DETAIL (
        tid INT PRIMARY KEY auto_increment,
        pic VARCHAR(118) NOT NULL
    );

INSERT INTO PROSET_DETAIL VALUES (NULL, '01-1.jpg#01-2.jpg');

INSERT INTO PROSET_DETAIL VALUES (NULL, '02-1.jpg#02-2.jpg');

INSERT INTO PROSET_DETAIL VALUES (NULL, '03-1.jpg#03-2.jpg');

INSERT INTO PROSET_DETAIL VALUES (NULL, '04-1.jpg#04-2.jpg');

INSERT INTO PROSET_DETAIL VALUES (NULL, '05-1.jpg#05-2.jpg');

INSERT INTO PROSET_DETAIL VALUES (NULL, '06-1.jpg#06-2.jpg');

-- 产品选购

CREATE TABLE
    CAR_PROSET (
        sid INT PRIMARY KEY auto_increment,
        pic VARCHAR(118) default 'proset01.jpg',
        title varchar(118) NOT NULL,
        type INT NOT NULL
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        default,
        '10米超景观营地房车租赁款',
        10
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        default,
        '10米超景观营地房车麻将款',
        10
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        default,
        '10米超观景亲子款营地房车',
        10
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset02.jpg',
        '10米超观景KTV版营地房车',
        10
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset03.jpg',
        '8米超景观版营地房车住宿版B款',
        8
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset03.jpg',
        '8米超景观版营地房车住宿版A款',
        8
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset03.jpg',
        '8米超观景版营地房车',
        8
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset04.jpg',
        '13米超观景五星级版营地房车',
        13
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset05.jpg',
        '8米标准版营地房车',
        8
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset06.jpg',
        '8米景观款拖挂式营地房车',
        8
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset05.jpg',
        '10米超观景VIP版营地房车',
        10
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset07.jpg',
        '10米营地教育版拖挂式营地房车',
        10
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset08.jpg',
        '10米温泉款拖挂式营地房车',
        10
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset09.jpg',
        '11.5米免维护型木屋房车',
        1
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset10.jpg',
        '11米免维护型木屋房车榻榻米版',
        1
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset11.jpg',
        '11米免维护型木屋房车',
        1
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset12.jpg',
        '10米免维护木屋房车',
        1
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset13.jpg',
        '8.5米免维护木屋型房车',
        1
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset14.jpg',
        '7.2米免维护型木屋房车',
        1
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset15.jpg',
        '11米VIP定制款拖挂式营地房车',
        11
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset16.jpg',
        '12米定制款拖挂式营地房车',
        12
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset17.jpg',
        '10米吧台款拖挂式营地房车',
        10
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset18.jpg',
        '8米KTV款拖挂式营地房车',
        8
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset19.jpg',
        '8米圆床款拖挂式营地房车',
        8
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset20.jpg',
        '13米超级VIP定制款营地房车',
        13
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset21.jpg',
        '10米酒店款拖挂式营地房车',
        10
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset22.jpg',
        '10米KTV款拖挂式营地房车',
        10
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset23.jpg',
        '10米麻将桌款拖挂式营地房车',
        10
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset24.jpg',
        '10米卡座款拖挂式营地房车',
        10
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset25.jpg',
        '8米榻榻米款拖挂式营地房车',
        8
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset26.jpg',
        '8米情侣款拖挂式营地房车',
        8
    );

INSERT INTO CAR_PROSET
VALUES (
        NULL,
        'proset27.jpg',
        '8米亲子款拖挂式营地房车',
        8
    );

-- 成功案例

CREATE TABLE
    CAR_SUCCESS (
        sid INT PRIMARY KEY auto_increment,
        title VARCHAR(128) NOT NULL,
        pic1 VARCHAR(128),
        pic2 VARCHAR(128),
        pic3 VARCHAR(128)
    );

INSERT INTO CAR_SUCCESS
VALUES (
        NULL,
        '湖南邵阳银杏房车营地',
        '1-1.jpg',
        '1-2.jpg',
        '1-3.jpg'
    );

INSERT INTO CAR_SUCCESS
VALUES (
        NULL,
        '沈阳参仙谷度假康养房车营地',
        '2-1.jpg',
        '2-2.jpg',
        '2-3.jpg'
    );

INSERT INTO CAR_SUCCESS
VALUES (
        NULL,
        '湖南沅陵借母溪房车营地',
        '3-1.jpg',
        '3-2.jpg',
        '3-3.jpg'
    );

INSERT INTO CAR_SUCCESS
VALUES (
        NULL,
        '海南黄金海岸日月湾房车营地',
        '4-1.jpg',
        '4-2.jpg',
        '4-3.jpg'
    );

INSERT INTO CAR_SUCCESS
VALUES (
        NULL,
        '东郊国际马术俱乐部房车营地',
        '5-1.jpg',
        '5-2.jpg',
        '5-3.jpg'
    );

INSERT INTO CAR_SUCCESS
VALUES (
        NULL,
        '新疆那拉泉生态小木屋房车营地',
        '6-1.jpg',
        '6-2.jpg',
        '6-3.jpg'
    );

INSERT INTO CAR_SUCCESS
VALUES (
        NULL,
        '江苏南通世外桃源休闲农庄',
        '7-1.jpg',
        '7-2.jpg',
        '7-3.jpg'
    );

INSERT INTO CAR_SUCCESS
VALUES (
        NULL,
        '湖南长沙莲花山房车营地',
        '8-1.jpg',
        '8-2.jpg',
        '8-3.jpg'
    );

INSERT INTO CAR_SUCCESS
VALUES (
        NULL,
        '湘潭盘龙大观园房车露营地',
        '9-1.jpg',
        '9-2.jpg',
        '9-3.jpg'
    );

INSERT INTO CAR_SUCCESS
VALUES (
        NULL,
        '中航爱游客枫泾房车露营地',
        '10-1.jpg',
        '10-2.jpg',
        '10-3.jpg'
    );

INSERT INTO CAR_SUCCESS
VALUES (
        NULL,
        '昆明世博房车时光·行云轩轩房车营地',
        '11-1.jpg',
        '11-2.jpg',
        '11-3.jpg'
    );

INSERT INTO CAR_SUCCESS
VALUES (
        NULL,
        '秦皇岛野途房车桃林口营地',
        '12-1.jpg',
        '12-2.jpg',
        '12-3.jpg'
    );

-- 用户表

create table
    car_user(
        uid int primary key auto_increment,
        phone char(11) not null,
        upwd varchar(16) not null,
        uname varchar(16) not null,
        code varchar(8),
        head_pic varchar(128) not null
    );

insert into car_user
values (
        null,
        '18888888888',
        'a1234567',
        '张三',
        '123456',
        'head.jpg'
    );

-- 用户意向表

create table
    car_intention(
        uid int primary key auto_increment,
        phone char(11) not null,
        uname varchar(16) not null,
        uadd VARCHAR(64) not NULL,
        type varchar(16) not null,
        code varchar(1000)
    );

insert into car_intention
values (
        null,
        '18888888888',
        'zhangsan',
        '江苏/南京',
        '8米亲子款拖挂式营地房车',
        '暂无需求'
    );

-- 新闻列表详情

create table
    car_news(
        nid int primary key auto_increment,
        title char(64) not null,
        browse int,
        ntime varchar(64),
        text varchar(1000),
        pic varchar(128) not null
    );

insert into car_news
values (
        null,
        '8大类型房车营地，总有一款适合你！',
        '265',
        '2022-01-14',
        '如果说房车是移动的家”，那么，房车营地就是移动之家的停靠港湾。房车营地是指为房车旅游提供车辆停泊、住宿、餐饮以及休闲娱乐等服务的场所。房车营地内除了有供水设施、供电设施、污水处理装置等专门针对房车配置的设施外，还配有帐篷、木屋、运动游乐设备等设施，适合外出旅行或长时间居住。',
        'new01.jpg'
    );

insert into car_news
values (
        null,
        '第二批5C、4C级自驾车旅居车营地名单公示',
        '135',
        '2022-01-13',
        '依据《自驾车旅居车营地质量等级划分》行业标准及认定细则，中国旅游车船协会2021年在全国范围内开展了自驾车旅居车营地质量等级认定工作。现将第二批5C、4C级自驾车旅居车营地名单公示如下（按行政区划顺序排列）：一、5C级自驾车旅居车营地（7家）1．内蒙古自治区 草甘沙漠汽车自驾运动营地2．黑龙江省 峰悦瑷珲国际汽车营地',
        'new02.jpg'
    );

insert into car_news
values (
        null,
        '高德指南上线全国首批C级自驾车旅居车营地信息',
        '233',
        '2022-01-12',
        '10月13日，由中国旅游车船协会、湖北省文化和旅游厅、宜昌市人民政府共同主办的“第十三届中国露营旅游论坛”在湖北宜昌举行。会上，全国首批15家C级自驾车旅居车营地集聚一堂，发起并成立“全国C级自驾车旅居车营地俱乐部”，全国首批C级自驾车旅居车营地信息同步在高德指南上线，为用户提供更多自驾出行参考。',
        'new03.jpg'
    );

insert into car_news
values (
        null,
        '金苹果云上森林营地：把孩子“丢进”森林',
        '226',
        '2022-01-11',
        '万物有灵且美，给孩子，被自然和四季润色的童年！当教育者、设计师、建筑者为了构筑同一个梦想而走到一起时，梦想变为了现实——金苹果云上森林营地。它位于成都大邑云上旅游度假区，是由世界著名教育空间设计师日比野拓担纲设计，金苹果教育集团与合景泰富集团携手打造的成渝地区最大的儿童森林成长营地。',
        'new04.jpg'
    );

insert into car_news
values (
        null,
        '芜湖龙山露营地自驾旅游攻略',
        '278',
        '2022-01-10',
        '芜湖龙山汽车露营体验公园占地150亩，背靠龙山，面朝凤鸣湖，同时容纳18辆自驾房车，82辆营地房车以及25个可移动生态木屋，可供约600人露营休闲，营地设置房车体验住宿、木屋，园区内可以烧烤、露营，景区内提供餐饮，可以临湖垂钓、泳池，有星星的夜晚还可以仰望天空数星星。(游玩景点可参见旅游景区游览图)',
        'new05.jpg'
    );

insert into car_news
values (
        null,
        '北京首家以汽车露营 红栌银山汽车露营地',
        '123',
        '2022-01-09',
        '红栌银山汽车露营地位于北京市昌平区延寿镇海子村银山塔林风景区，是北京首家以汽车露营为主体，观光旅游、休闲度假、户外养生等多功能的京郊户外休闲露营带。红栌银山背倚燕山，西接太行，山秀景幽，植被茂盛，山水合一，山中净地。区域内资源丰富，松柏美景，民俗风情，古塔林、古遗址、古树、古井、古道，美不胜收。',
        'new06.jpg'
    );

insert into car_news
values (
        null,
        '“拎包入住”标准化露营产品加速场地复制',
        '235',
        '2022-01-08',
        '据悉，户外露营生活方式品牌「大热荒野」近日获得千万级人民币天使轮融资，由小恐龙基金和惟一资本联合投资，凌波资本担任独家财务顾问，本轮融资将用于营地拓展和市场运营。大热荒野成立于2020年底，是一家从三亚走出来的露营地品牌，目前主要面向露营小白爱好者提供标准化的体验套餐。',
        'new07.jpg'
    );

insert into car_news
values (
        null,
        '逆势生长！桂林这种民宿渐成“新宠”',
        '543',
        '2022-01-07',
        '10月桂林的各大酒店、民宿迎来了一次客流高峰。相比往年，今年民宿产品中出现了一批全新的面孔：一批以亲近自然为卖点的帐篷露营“星空房”、模块化泡泡房等“创意风”旅居产品相继出现。相比传统民宿，这些全新的旅居衍生产品，不但造型亮眼、亲近自然，也呈现出灵活、多变，便于安装、设置的共性。那么这样的特色旅居产品，现状如何？又能否和桂林秀美的自然山水发生“化学反应”呢？',
        'new08.jpg'
    );

insert into car_news
values (
        null,
        '滁州这里将建房车露营基地',
        '554',
        '2022-01-06',
        '在后疫情时代，人们的生活方式改变了很多，调查显示疫情过后人们最迫切的前两项就是上班（工作）和找朋友聚会/聚餐（社交）。对大型景区和人口密集商业街，还是心存顾虑。人们更倾向健康生活，亲近自然，远离城市。所以有了当下最风靡出游模式“露营热”。今天带大家解锁滁州市 全椒县首家房车露营基地 ——雅琦自然营地。',
        'new09.jpg'
    );

insert into car_news
values (
        null,
        '房车旅游业成为新蓝海 配套营地建设至关重要',
        '560',
        '2022-01-05',
        '国家旅游局会同国家发改委、工信部、公安部等11部门联合印发了 《关于促进自驾车旅居车旅游发展的若干意见》（以下简称《意见》）。提出了一系列解决自驾车旅居车发展的政策措施，力图通过政策扶持和行业标准确立，促进自驾车房车旅游发展。',
        'new10.jpg'
    );

insert into car_news
values (
        null,
        '云中河温泉小镇房车营地会展中心',
        '179',
        '2022-01-04',
        '云中河温泉康养旅游项目位于忻府区云中河景区南北两岸，是助力忻州创建全域旅游示范区而投资建设的集休闲度假于一体的温泉康养旅游项目。项目分三部分建设：忻州云中河景区开发管理有限公司投资16.69亿元建设的云中河温泉康养旅游项目；忻州云中河实业有限公司投资5.1亿元建设的福朋喜来登酒店项目；山西康养集团清凉湾发展有限公司投资10亿元建设的清凉湾温泉康养小镇项目。',
        'new01.jpg'
    );

insert into car_news
values (
        null,
        '畲寨东弄！化身沉浸式房车露营基地',
        '577',
        '2022-01-03',
        '房车旅游近年比较流行的自驾游方式，已成为当下相对而言“最安全”“最惬意”的一种旅行模式，最近畲族东弄化身为沉浸式房车露营基地。10月24日，丽水房车协会来自江浙沪长三角地带以及外省多地130多位车友，驾驶着50多辆房车来到景宁畲族风情省级旅游度假区。浙西南的江南秘境总能带给人们无限的惊喜，房车驶进东弄，浓重的森林气息扑面而来，不自觉的打开车窗，探向窗外。',
        'new02.jpg'
    );

insert into car_news
values (
        null,
        '房车营地的发展',
        '763',
        '2022-01-02',
        '关于房车营地
二十世纪三十年代，欧美国家开始根据飞机的构造来制造房车，房车里拥有了生活所需物品，甚至连水电都是一应俱全的。随着房车数量的不断增加，使用者开始要求房车里具备完整的生活设施。尤其是在第二次世界大战以后，更多欧美人开始寻求移动的生活，房车行业随之繁荣起来',
        'new03.jpg'
    );

insert into car_news
values (
        null,
        '一批特色房车露营基地落成',
        '126',
        '2022-01-01',
        '从2021湖南文化旅游产业博览会上获悉，近年来，我省积极支持大湘西地区自驾车房车营地建设，目前，武冈云山、龙山八面山、凤凰老洞村、洪江市黔阳古城、靖州飞山景区等一批特色房车露营基地已经落成。大湘西、大湘东文化生态旅游精品线路受到省内自驾车房车旅游者的青睐。我省围绕“房车旅游与露营产业发展”这一新命题，曾于2017年出台了《湖南省自驾车房车营地发展规划》(2017-2020)，坚持以产业化、信息化、标准化、国际化为原则引领全省自驾车房车营地发展，从终端扩容，推动房车旅游产业良性健康发展。',
        'new04.jpg'
    );

insert into car_news
values (
        null,
        '全国首个中国国家地理·营地落点淄博',
        '110',
        '2021-12-30',
        '共赏佳景、共襄盛典。10月23日上午，2021中国国家地理·淄博营地产品发布暨开放仪式在博山区红叶柿岩景区举行，据了解，这是淄博市首个国家级自然科学型文旅项目，也是中国国家地理·营地在全国范围内的首个落点。',
        'new05.jpg'
    );