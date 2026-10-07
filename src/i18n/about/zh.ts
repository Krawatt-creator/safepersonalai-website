import type { AboutDictionary } from "./en";

export const zhAbout: AboutDictionary = {
  metaTitle: "SafePersonalAI 是什么？一款 Mac 上的私人 AI 助手，一次付费",
  metaDescription:
    "SafePersonalAI 是一款 Mac 应用：读取你的邮件，提议日历事项、待办、出行计划，并让你看清自己的收支。它在你的 Mac 上运行，等待你的批准，一次购买，没有订阅。",
  footerLabel: "SafePersonalAI 是什么？",
  answersLabel: "问答（英文）",
  eyebrow: "简单地说",
  title: "SafePersonalAI 是什么？",
  lead: "SafePersonalAI 是一款 Mac 上的私人 AI 助手。它读取你的新邮件和你发给自己的备忘，提议日历事项、待办、行程和收支记录，并在任何改动发生之前等待你的批准。它在你自己的 Mac 上运行，可以使用本地 AI 模型，一次付费，而不是按月付费。",
  factsTitle: "要点速览",
  facts: [
    { label: "它是什么", value: "一款 Mac 应用。不是网站，也不是聊天窗口。" },
    {
      label: "运行环境",
      value: "搭载 Apple 芯片的 Mac（M1 或更新）。不支持 Intel Mac 和 Windows。",
    },
    {
      label: "AI 模型",
      value: "本地 Ollama 模型，无需账户，也没有 AI 账单；或使用你自己的 Anthropic、OpenAI 或 Gemini 密钥。",
    },
    {
      label: "读取",
      value: "Gmail、Apple 邮件，以及你通过 iMessage 发给自己的备忘。",
    },
    {
      label: "创建",
      value: "Google 日历或 Apple 日历中的事项，以及带日期的待办。",
    },
    {
      label: "不能做",
      value: "发送邮件、邀请他人、点击链接、付款或转账。这些能力根本没有内置。",
    },
    {
      label: "你的数据",
      value: "留在你的 Mac 上。没有任何 SafePersonalAI 服务器保存你的邮件、日历或收支数据。",
    },
    {
      label: "价格",
      value:
        "免费测试版：所有模块开放 {days} 天。之后一次性购买：Base €{base}、Travel €{travel}、Wealth €{wealth}，测试期间三个模块合计 €{bundleBeta}（之后为 €{bundle}）。",
    },
    { label: "订阅", value: "Mac 应用没有订阅。" },
    { label: "当前版本", value: "{version}，已通过 Apple 公证。应用界面为英文。" },
  ],
  sections: [
    {
      title: "它做什么",
      paragraphs: [
        "Base 是基础模块。它读取新邮件，找出约会、改期的约会、截止日期和请求，并把每一项作为提议的日历事项或待办放进一个列表。由你批准、拒绝或推迟。你也可以通过 iMessage 给它发简短的备忘，并设定自己的规则，例如“邮件里出现这个词时，就提议这个事项”。",
        "Travel 监控你所选航线的机票价格，价格低于你的上限时通知你。它支持灵活日期和多段行程的搜索，显示这些日期在你的日历中是否有空，并根据你的预订邮件生成行程。",
        "Wealth 读取银行本来就提供给你的对账单——CSV、Excel、PDF、MT940、CAMT、OFX 或 QIF——无需登录你的银行。它显示按类别的支出、未来一到三个月的预测、预算、发现的订阅，以及你的投资和贷款。",
      ],
    },
    {
      title: "它如何工作",
      paragraphs: [
        "分三步。首先，AI 模型读取一条消息并理解其含义。然后，提议的结果连同它所依据的消息一起出现在一个列表中。只有在你批准之后，应用才会创建日历事项或待办。",
        "日期和金额由固定规则核对，而不是只靠模型。文本中没有的日期绝不会被编造。",
      ],
    },
    {
      title: "它与聊天助手有何不同",
      paragraphs: [
        "ChatGPT 或 Claude 这样的聊天助手在你提问时才回答。SafePersonalAI 在后台自行工作：它读取收到的邮件，为你准备好下一步。",
        "它也被有意做得更受限。它只有少数几种能力，发送、付款和点击都不在其中。批准一项提议也不会开启这些能力。",
      ],
    },
    {
      title: "你的数据去哪里",
      paragraphs: [
        "使用本地 Ollama 模型时，邮件文本在你的 Mac 上处理，不会发往任何其他地方。",
        "如果你选择云端服务商，一次请求所需的文本会从你的 Mac 直接发送给该服务商，使用你自己的账户，并适用该服务商的条款。它不经过 SafePersonalAI 的服务器。你的密钥保存在你的 Mac 上。",
      ],
    },
    {
      title: "价格是多少",
      paragraphs: [
        "测试版可免费下载，所有模块开放 {days} 天。之后每个模块一次性购买：Base €{base}、Travel €{travel}、Wealth €{wealth}。三个模块合购在测试期间为 €{bundleBeta}，之后为 €{bundle}。目前尚未开放购买，所以今天不会收取任何费用。",
        "未购买的模块在 {days} 天后关闭。它的数据留在你的 Mac 上，添加该模块后即可恢复。",
      ],
    },
  ],
  forTitle: "适合谁",
  forItems: [
    "经常错过埋在邮件里的日期和截止时间的人。",
    "不愿让 AI 服务拥有发送邮件或花钱权限的人。",
    "更愿意一次买断软件、而不是每月付费的人。",
    "想看清自己的支出、又不想把银行登录信息交给应用的人。",
  ],
  notForTitle: "不适合谁",
  notForItems: [
    "你使用 Windows 或搭载 Intel 处理器的 Mac。",
    "你想要一个替你回复并发送邮件的助手。",
    "你希望 Mac 关机时它也能工作。它在你的 Mac 上运行，所以 Mac 必须开着。",
    "你希望自动连接银行。Wealth 读取的是你提供给它的对账单文件。",
  ],
  linksTitle: "延伸阅读",
  download: "下载免费测试版",
  pricing: "查看价格",
};
