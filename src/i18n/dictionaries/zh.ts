import type { Dictionary } from "./en";

// Chinese (Simplified). Same shape as en.ts. Not yet checked by a
// native-speaking editor.
export const zh: Dictionary = {
  meta: {
    homeTitle: "SafePersonalAI — Mac 上的私密 AI 助手：把邮件变成日程和待办",
    homeDescription:
      "SafePersonalAI 在你的 Mac 上运行，把邮件变成等待你确认的待办事项和日历日程，支持本地 Ollama 或你自己的 AI 服务商账号。",
    wealthTitle: "Wealth — 在 Mac 上读取任何银行的对账单，无需登录银行",
    wealthDescription:
      "在 Mac 上读取任何银行的对账单——CSV、Excel、PDF、MT940、CAMT、OFX 或 QIF——无需登录银行。按类别查看支出、未来几个月的预测、预算和你的投资。",
    appDescription:
      "一款 Mac 应用：读取你的邮件，把它们变成日历日程、待办事项、行程安排和清晰的资金概览。它提出的每一项都等待你的确认。它从不代你发邮件、从不付款、从不点击链接。它在你的 Mac 上运行，使用本地 Ollama 模型或你自己的 AI 服务商密钥。",
    offerDescription: "免费下载测试版。全部模块（Base、Travel、Wealth）开放 {days} 天。",
  },
  nav: {
    useCases: "使用场景",
    modules: "模块",
    howItWorks: "工作方式",
    pricing: "价格",
    faq: "常见问题",
    account: "账户",
    download: "下载测试版",
    appleSilicon: "Apple 芯片（M1 及以上）",
    appleSiliconRequired: "需要 Apple 芯片（M1 及以上）",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    language: "语言",
  },
  offer: {
    trialLine: "测试期间免费：全部模块开放 {days} 天。",
    priceLine:
      "之后一次性购买：Base €{base}、Travel €{travel}、Wealth €{wealth}——测试期间三个模块合计 €{bundleBeta}（之后为 €{bundle}）。购买即将开放。",
    priceNote: "一次性付费 · 测试期间免费 {days} 天",
    downloadNote: "免费 {days} 天，包含全部模块 · 已通过 Apple 公证 · Apple 芯片（M1 或更新）",
  },
  hero: {
    badge: "Mac 私密助手 · 免费测试版",
    titleLine1: "把收件箱变成行动。",
    titleLine2: "等你确认后才执行。",
    body: "SafePersonalAI 读取新邮件，准备好它从中找到的待办事项或日历日程，并在任何改动发生之前，让你清楚看到将要发生什么。它在你的 Mac 上运行，可以使用本地的 Ollama，也可以使用你自己的云服务商账号。",
    ctaDownload: "下载免费测试版",
    ctaUseCases: "查看真实使用场景",
    finePrint:
      "适用于搭载 Apple 芯片（M1 或更新）的 Mac。可使用本地 Ollama 模型而无需云账号，或使用你自己的 Anthropic、OpenAI 或 Gemini 密钥。",
  },
  panel: {
    title: "待确认事项",
    preview: "示意预览",
    rows: [
      {
        title: "待办：周五前寄出签好字的表格",
        detail: "来自学校办公室的邮件，附带截止日期",
      },
      {
        title: "把“牙医——9月3日 15:00”加入日历",
        detail: "来自你发给自己的一条 iMessage",
      },
      {
        title: "记录电费账单——€84.00，10月28日到期",
        detail: "从账单邮件中读取；到期前会提醒你",
      },
    ],
    approve: "同意",
    reject: "拒绝",
    approved: "✓ 已同意",
    rejected: "✕ 已拒绝",
    allDone: "全部处理完毕——没有等待你的事项。",
    replay: "↺ 重新播放演示",
    footer: "这些事项等待你的确认。它从不发邮件，也不付款。",
    waiting: "{n} 项待确认",
  },
  laptop: {
    eyebrow: "在后台，安静地",
    title: "只有当有内容需要你看时，它才会出现。",
    body: "没有转个不停的加载图标，没有需要你时刻盯着的面板——只有在某件事确实需要你决定时，才亮起一盏安静的灯。",
  },
  ownership: {
    eyebrow: "拥有它，而不是租用它",
    title: "属于你自己的私密助手，而不是又一项订阅。",
    intro:
      "SafePersonalAI 把你桌上已有的那台 Mac 变成一层私密的自动化。你的工作数据留在本地，你与 AI 服务商的关系仍然属于你，购买条款在购买前就清楚可见。",
    points: [
      {
        title: "为你已经拥有的 Apple 生态而做",
        body: "无需新硬件，无需租用服务器，也没有第三方公司托管你的生活。它安静地运行在你自己的 Mac 上，用的就是你已有的电脑。",
      },
      {
        title: "你的 AI 服务商，你的边界",
        body: "可以在本地使用 Ollama 而无需账号，也可以用自己的密钥连接受支持的云服务商并直接向其付费。凭据留在你的 Mac 上；SafePersonalAI 不会把 AI 费用藏进第二项订阅，也不会悄悄改用由我们付费的模型。",
      },
      {
        title: "按“归你所有的软件”来设计",
        body: "每个模块都是与版本绑定的一次性许可，而不是永久的月租。",
      },
    ],
    counter: {
      typical: "一项典型的 AI 订阅",
      running: "每月 ${cost} × {n} 个月——还在不断累加。",
      runningOne: "每月 ${cost} × 1 个月——还在不断累加。",
      perMonth: "/月",
      ours: "每个模块一次性付费。你的 Mac，你的 AI 密钥——没有平台费。",
    },
  },
  boundary: {
    eyebrow: "边界",
    title: "在“思考”与“执行”之间划一条清晰的线。",
    intro:
      "大多数 AI 工具把理解和执行混成一步。我们不这样做。SafePersonalAI 从你的邮件中得出的内容，在你同意之前只是一项建议。只有你自己的银行发来的信息和少量提醒会被直接添加——带有标记，并且一键即可撤销。",
    steps: [
      {
        title: "AI 理解",
        body: "它把收到的邮件当作不可信的数据来读取，并提取出一项建议：一项待办、一个日历日程、一条续费提醒，或某个模块支持的操作。",
      },
      {
        title: "你来确认",
        body: "每一项建议都进入同一个审核列表。你可以同意、拒绝、推迟，或补充缺少的信息。含糊不清永远不会被当作许可。",
      },
      {
        title: "软件执行",
        body: "只有你同意的内容会被执行。日历操作无法邀请任何人；财务功能只做记录和预测，无法转移资金。",
      },
    ],
  },
  useCases: {
    eyebrow: "它能做什么",
    title: "从日常事务开始，只添加你需要的部分。",
    intro: "Base 是处理日常事务的基础。Travel 和 Wealth 扩展的是同一个私密助手，无需迁移你的历史记录，也无需再注册一个账号。",
    exploreAll: "查看全部使用场景 →",
    tabsLabel: "产品模块",
    queueTitle: "一个审核列表",
    queueBody: "每个已安装的模块都使用同一个可见的确认步骤，没有隐藏的自动化。",
    practicalUses: "{n} 个实用场景",
    note: "每张卡片背后的详细示例目前为英文。",
    modules: {
      operational: {
        name: "Base",
        label: "基础模块",
        description: "日常的收件箱、日历、待办事项和你自己的规则。",
      },
      travel: {
        name: "Travel",
        label: "附加模块",
        description: "预订、机票价格追踪，以及参考你日历的行程规划。",
      },
      wealth: {
        name: "Wealth",
        label: "附加模块",
        description: "任何银行的对账单、支出、预测、预算和投资。",
      },
    },
    topics: {
      "email-to-task": {
        title: "邮件 → 待办",
        friction: "重要的请求不再被新邮件淹没。",
      },
      "calendar-events": {
        title: "日历日程",
        friction: "不必再为了输入一个日期而打开日历。",
      },
      "todos-reminders": {
        title: "待办与提醒",
        friction: "不再有“我肯定记得”却悄悄错过的截止日期。",
      },
      "bill-invoice-tracking": {
        title: "账单追踪",
        friction: "不必在到期前一晚翻遍收件箱。",
      },
      "custom-rules": {
        title: "你自己的简单规则",
        friction: "不必为了迁就别人的自动化模板而改变自己的习惯。",
      },
      "booking-to-itinerary": {
        title: "预订 → 行程",
        friction: "不必把航班和酒店信息抄到三个不同的地方。",
      },
      "flight-deal-tracking": {
        title: "机票价格追踪",
        friction: "不必再习惯性地刷新比价页面。",
      },
      "calendar-aware-travel": {
        title: "参考日历的出行",
        friction: "不再出现找到好价格后才发现日期不合适的情况。",
      },
      "cashflow-forecast": {
        title: "现金流预测",
        friction: "不再等到余额不足之后才发现。",
      },
      "recurring-cost-watch": {
        title: "固定支出监控",
        friction: "订阅不再悄悄地在后台扣费。",
      },
      "portfolio-import": {
        title: "导入投资组合",
        friction: "不必再单独打开券商应用查看。",
      },
    },
  },
  pricing: {
    eyebrow: "SafePersonalAI v1",
    title: "一次安装，免费 {days} 天，之后一次性付费。",
    intro:
      "下载测试版，全部模块免费开放 {days} 天。之后每个模块一次性购买——Mac 应用没有订阅。未购买的模块会关闭；它的数据留在你的 Mac 上，购买后即可恢复。购买即将开放，今天不会收取任何费用。",
    bundleLead: "三个模块一起：",
    bundleStrong: "测试期间一次性 €{bundleBeta}",
    bundleRest: "，之后为 €{bundle}。购买即将开放——在此之前无需支付任何费用。",
    learnMore: "了解更多 →",
    download: "下载测试版",
    included: "包含在 {days} 天试用中",
    modules: {
      operational: {
        name: "Base",
        tagline: "日常事务的基础：收件箱、日历、iMessage 和待办。",
        features: [
          "理解你的收件箱，准备好待你确认的待办事项",
          "从邮件生成日历日程，不向任何人发送邀请",
          "带截止日期和提醒的待办事项",
          "一个待确认事项列表——同意、推迟或拒绝",
          "在你的 Mac 上运行，使用本地 Ollama 或你自己的云端密钥",
        ],
      },
      travel: {
        name: "Travel",
        tagline: "从不超出自身搜索额度的机票价格追踪。",
        features: [
          "按航线每日查价，始终在你的搜索额度之内",
          "只有价格真正低于你设定的上限时才提醒",
          "灵活日期和多段行程搜索",
          "显示出行日期在你的日历中是否空闲",
        ],
      },
      wealth: {
        name: "Wealth",
        tagline: "从任何银行的对账单读取你的资金状况，无需登录银行。",
        features: [
          "任何银行的对账单：CSV、Excel、PDF、MT940、CAMT、OFX、QIF",
          "按类别查看任意时间段的支出",
          "未来 1–3 个月的预测，余额可能为负时发出提醒",
          "预算、自动发现的订阅、异常扣款标记",
          "投资与贷款，支持导入 Trade Republic",
        ],
      },
    },
  },
  trust: {
    eyebrow: "信任",
    title: "为不放心把收件箱交给 AI 的人而做。",
    points: [
      {
        title: "你的数据留在你的 Mac 上",
        body: "操作记录、待办、设置和各模块的数据都保存在你的 Mac 上。发送给云端 AI 服务商的内容，直接通过你选择的服务商账号发送；SafePersonalAI 不会收到这些内容。",
      },
      {
        title: "本地运行，或使用你自己的密钥",
        body: "Ollama 可以完全在你的 Mac 上运行，无需账号或密钥。云端选项使用你自己的服务商账号和密钥；SafePersonalAI 把密钥保存在本地，请求直接发送给你选择的服务商，绝不经过 SafePersonalAI 的服务器。",
      },
      {
        title: "危险的能力根本不存在",
        body: "这款应用无法发送邮件、邀请参与者、点击链接、取消服务或转移资金。你的同意也不会打开通往这些操作的隐藏通道。",
      },
      {
        title: "随时查看 Trust Center",
        body: "一个页面清楚显示连接了什么、应用能做什么和不能做什么，以及你的数据实际存放在哪里——而不是一句只能选择相信的承诺。",
      },
    ],
    panel: {
      title: "Trust Center",
      rows: [
        { label: "Gmail", detail: "只读——无法发送" },
        { label: "Google 日历", detail: "读取 + 创建日程" },
        { label: "Google 云端硬盘", detail: "你导入的对账单副本" },
        { label: "iMessage", detail: "仅在你的 Mac 上本地读取" },
        { label: "AI 服务商", detail: "你自己的密钥——从不交给我们" },
      ],
      connected: "已连接",
      local: "仅本地",
      footer: "刚刚检查过——你可以随时查看。",
      items: "5 项",
    },
  },
  faq: {
    eyebrow: "常见问题",
    title: "大家真正会问的问题。",
    items: [
      {
        q: "价格是多少？有免费试用吗？",
        a: "测试版免费下载，全部模块——Base、Travel 和 Wealth——开放 {days} 天。之后每个模块一次性购买，不是订阅：Base €{base}、Travel €{travel}、Wealth €{wealth}，测试期间三个模块合计 €{bundleBeta}（之后为 €{bundle}）。购买尚未开放，所以今天不会收取任何费用。{days} 天结束后，没有许可的模块会关闭，它的数据仍留在你的 Mac 上。如果你使用云端 AI 服务商，费用由你直接支付给该服务商；本地 Ollama 模型不产生任何 AI 费用。",
      },
      {
        q: "我需要自己的 Claude、OpenAI 或 Gemini 账号吗？",
        a: "不需要。你可以在 Mac 上本地使用 Ollama，无需云账号或密钥。如果你选择 Anthropic、OpenAI 或 Gemini，则使用你自己的账号和密钥，并直接向该服务商付费。SafePersonalAI 把密钥保存在你的 Mac 上，把请求直接发送给你选择的服务商，从不接收或转交你的密钥。本地模型和云端模型都在同一个确认步骤之后工作。",
      },
      {
        q: "这不就是多了几个步骤的 ChatGPT 或 Claude 吗？",
        a: "不是，它也无意成为那样的产品。聊天助手在你提问时才回答。SafePersonalAI 会自己读取你的新邮件，用你选择的模型来理解它，按固定规则核对日期和金额，并把每一项建议的日历日程或待办放进列表，等你确认。它的工具被有意限制得很窄：它不能发邮件、不能付款、不能点击链接。",
      },
      {
        q: "如果它读错了，或者提出了错误的建议怎么办？",
        a: "这正是确认步骤存在的原因。在任何事情发生之前，你都能看到建议的内容以及它来自哪封邮件。文本中没有的日期绝不会被编造；修改日历需要与已有日程完全匹配；这款应用无法发送邮件、邀请参与者、点击链接或转移资金。",
      },
      {
        q: "我的数据会被用来训练别人的 AI 模型吗？",
        a: "SafePersonalAI 不训练模型，也不会收到你收件箱的内容。当你选择云端 AI 服务商时，相关内容会按照该服务商的 API 条款，从你的 Mac 直接发送给它。连接之前，请先查看该服务商当前的数据使用与保留政策。",
      },
      {
        q: "它运行在云端，还是我自己的电脑上？",
        a: "在你自己的电脑上。SafePersonalAI 目前是 Mac 软件，而不是托管的网页应用——需要你的 Mac 处于开机状态，才能检查新消息并执行你同意的操作。在此期间，没有任何 SafePersonalAI 服务器保存你的数据。",
      },
      {
        q: "运行 SafePersonalAI 需要什么样的 Mac？",
        a: "当前测试版需要搭载 Apple 芯片的 Mac（M1 或更新——包括 M1/M2/M3/M4 的 MacBook Air、MacBook Pro、Mac mini、iMac 和 Mac Studio）。此版本不支持 Intel 处理器的 Mac。权限请求由 macOS 在设置过程中显示；无需单独注册 SafePersonalAI 账号。",
      },
      {
        q: "它能在我不知情时发消息、邀请别人或转移资金吗？",
        a: "不能。这款应用没有任何办法发送邮件、邀请参与者、付款、取消服务或点击链接。创建日历日程时不会通知任何人；资金相关功能只记录你同意的内容并计算预测。",
      },
      {
        q: "如果我不再使用，我的数据会怎样？",
        a: "它们仍然留在原来的地方——你的 Mac 上，以及你自己的邮箱和日历账号里。你可以随时在各账号的安全设置中移除 SafePersonalAI 的访问权限，之后它就再也接触不到任何内容。",
      },
    ],
  },
  footer: {
    tagline: "理解、建议、等待你的确认。从不发邮件，从不付款。",
    account: "账户",
    privacy: "隐私政策（英文）",
    terms: "条款（英文）",
  },
  shell: {
    allModules: "← 全部模块",
    whatYouGet: "你将获得",
    ready: "准备好使用 {name} 了吗？",
    required: "需要 Apple 芯片（M1 及以上）",
    download: "下载测试版",
  },
  wealth: {
    name: "Wealth",
    tagline: "从任何银行的对账单读取你的资金状况，无需登录银行。",
    intro:
      "Wealth 读取银行本来就提供给你的对账单——CSV、Excel、PDF、MT940、CAMT、OFX 或 QIF——自行识别各列，并在添加任何内容之前先让你看到它读取的结果。在此基础上，你可以按类别查看支出、未来几个月的预测、预算和你的投资，全部保存在你的 Mac 上。",
    steps: [
      {
        title: "给它一份对账单",
        body: "在 Wealth 页面选择文件，或通过 iMessage 发给自己。任何银行、任何时间段——整整一年的记录也可以。银行应用的截图同样可用。",
      },
      {
        title: "检查它读取的内容",
        body: "在点击“导入”之前，你可以看到每笔交易、所属账户以及它做出的每一项假设。没有你的确认，不会添加任何内容。",
      },
      {
        title: "看清钱花在哪里、接下来会发生什么",
        body: "任意时间段按类别的支出、它从你的历史记录中学到的定期付款，以及未来一到三个月的预计余额。",
      },
    ],
    features: [
      {
        title: "任何银行，任何格式",
        body: "CSV、Excel、PDF、MT940、CAMT.053、OFX 和 QIF。无需模板，无需手动对应各列：它会自行识别列、日期、正负号和币种。已用真实的 İş Bankası PDF 对账单测试。PDF 必须包含文字；扫描图片会被拒绝，并给出明确提示。",
      },
      {
        title: "截图，在你的 Mac 上读取",
        body: "银行或信用卡应用的截图，会在你的 Mac 上用 Apple 自带的文字识别来读取，绝不上传。交易进入审核列表；余额则等待你把它应用到某个账户。",
      },
      {
        title: "看得懂的支出",
        body: "自动分类、按类别的图表，以及逐月的收入与支出——可以查看一个月、最近 3、6 或 12 个月，或一整年。某个商户的类别只需修改一次，就会一直保留。",
      },
      {
        title: "来自你自身历史的预测",
        body: "它会学习每个月重复出现的项目——房租、贷款、保险、订阅、工资——并列出未来一、二或三个月，以及每笔付款之后的账户余额。当某个账户预计会低于零时它会提醒你，你也可以添加自己计划中的付款。",
      },
      {
        title: "预算",
        body: "为每个类别设定月度上限，达到 80% 和 100% 时各提醒一次——而不是每天提醒。",
      },
      {
        title: "订阅与异常扣款",
        body: "同一商户每月扣除相同金额，会被列为订阅。同一天出现两次的相同扣款，或远高于该商户平时金额的扣款，会被标记为“值得看一眼”。",
      },
      {
        title: "投资有自己的页面",
        body: "股票、ETF、黄金和加密货币：今天的价值、你投入的金额，以及盈亏。可直接读取 Trade Republic 的交易导出文件；在可能的情况下会更新价格。",
      },
      {
        title: "贷款，帮你算清楚",
        body: "在金额、利率、期限和月供这四项中输入任意三项，第四项会自动算出。你可以看到剩余本金、还清的月份和总成本。",
      },
      {
        title: "所有账户，一个总余额",
        body: "活期、储蓄、信用卡和投资账户合并显示，可选择 15 种货币中的任意一种。每笔金额保留原有币种；换算使用欧洲央行的每日汇率。",
      },
      {
        title: "针对德国的税务提示",
        body: "选择所在国家后，可能与报税有关的交易会附上简短提示，一键即可导出全年数据交给你的税务顾问。仅为提示——绝不是税务建议。",
      },
    ],
    readsEyebrow: "它读取什么",
    readsTitle: "银行本来就提供给你的对账单。",
    readsBody:
      "Wealth 从不连接你的银行，也从不询问你的网银密码。你给它一份对账单文件或一张截图；它在你的 Mac 上读取，归入正确的账户，然后等待你点击“导入”。",
    investEyebrow: "投资",
    investTitle: "你持有什么，以及它今天值多少。",
    investBody:
      "你可以自己录入股票、ETF、黄金或加密货币，也可以导入 Trade Republic 的交易导出文件，让它算出持有数量和平均成本。没有当前价格的持仓按你的买入金额计算——绝不使用编造的数值。",
    provenTitle: "测试版中仍在验证的功能",
    provenBody:
      "有三项功能已经做好并可以开启，但在真实邮箱中运行的时间还不够长，我们暂时不能做出承诺：从银行邮件中获取对账单、通过银行提醒邮件更新账户，以及通过一次性设置的 iPhone 快捷指令记录 Apple Pay 消费。请把它们当作额外功能。自己导入对账单并不依赖其中任何一项。",
    limitsTitle: "Wealth 不做的事",
    limitsBody:
      "它不登录你的银行，不付款，也不转移资金。它不读取只含图片的扫描版 PDF——可以改用截图。它不提供税务建议；这由你的税务顾问决定。而且它在你的 Mac 上运行，所以你的数据不会存放在我们的任何服务器上。",
  },
};
