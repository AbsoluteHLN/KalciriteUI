# ProjectHLN UI System — v4.1 Composite（综合初稿）

**v3.2 骨架 + v3.3 覆盖契约 + 部分吸收 v4 Folio。**
以 opt-in 叠加层形态发布：宿主在 UI 根写 `data-hln-ui-variant="hln-v41"`
（OverleafPlus 侧用 `overleafplus-v41`）时才生效，不写则零影响。

## 为什么是叠加层

v4 Folio 是 light-first 的新世代语言（暖纸底、软几何、双颜料），与 v3.x
宿主（如 OverleafPlus 的深色线性语言）是代际差异。全量切换会翻覆宿主既有的
主题体系与已冻结的界面契约。v4.1 只**吸收**不翻覆的部分：

| 吸收 | 落地 |
|---|---|
| soft geometry | `--hln-v41-radius-soft{,-md,-lg}` = 4/6/8px（**自带档位**，不引用宿主 canonical——部分宿主这些档位是 0px 直角） |
| hairline | `--hln-ui-hairline: 1px`（引用处带兜底值） |
| pigment pair | 复用宿主既有 `--hln-ui-accent` / `--hln-ui-accent-cool`，声明交互态/结构性区分语义 |
| static ambient | 环境面静态，`animation-iteration-count: 1` 收敛环境层钩子 |
| one-shot motion | spring + stagger，尊重 `prefers-reduced-motion` |
| **The Wash** | 选中态 = 主色 10% 淡底 + 主色字 600 + 2px 前导条（color-mix 派生，亮暗通用） |
| 排版微调 | 正文 15px/1.65、控件行高 1.4 + 字距 0.02em、等宽数字 |

| 不吸收 | 原因 |
|---|---|
| light-first 画布 | 翻覆宿主既有主题体系 |
| `folio-*` 主题 id | 宿主主题体系不动 |
| Running Head 眉标 | 会改宿主页头结构（OverleafPlus 页头契约已冻结） |
| 强制圆角化 | 撞宿主按钮契约的方钮形态 |

## 构建与使用

```bash
cd ui-source/v4.1 && node build.mjs   # 产出 dist/hln-ui-system-v4.1.css
```

宿主引入 dist 产物并在 UI 根挂 `data-hln-ui-variant` 即可；
组件类：`.hln-v41-wash` / `.hln-v41-wash-bar` / `.hln-v41-soft{,-md,-lg}` /
`.hln-v41-hairline` / `.hln-v41-enter` / `.hln-v41-stagger` / `.hln-v41-pigment-alt`。

## 宿主绑定的两条排版通则（2026-10-27 实测）

1. **表头与数据行的横向内边距必须同源，且 auto 列要右对齐。**
   宿主列表常写成 `grid-template-columns: 1fr auto auto`（列宽按内容占），
   若表头与行的 padding-inline 不同（如 20px vs 16px），三列起点会分别错位；
   即便 padding 相同，第 2/3 列是 auto 宽时**列边界仍随内容变化**
   （表头写「最近更新」、数据是「10-27 07:42」）⇒ 右缘也顶不齐。
   正解：统一 padding-inline，并让 auto 列 `justify-self: end`，
   必要时把末列固定宽度（本平台用 52px），三列右缘才会成线。

2. **不要在宿主已有关闭容器外再套一层带 padding 的容器。**
   典型如把面板主体包成 `.app-body > .sd-center`，两层 padding 叠加 16px，
   标题与正文列表就不在一条竖线上了（实测 272 vs 288）。
   先量宿主真实的层级（哪个元素承担 padding），再决定要不要容器。

## 首批实测踩坑（2026-10-27，OverleafPlus 本地核验）

1. **软档位引用宿主 canonical 会塌角** —— OverleafPlus v3.2 的
   `--hln-ui-radius-sm/md` 是 0px ⇒ v4.1 必须自带档位。
2. **hairline 无兜底塌 0** —— 宿主未定义该令牌时 `border-width` 会变 0。
3. **不要用 `--hln-ui-font-display` 做 UI/正文字体** —— 前三个候选
   （DIN/Bahnschrift/Futura）多数机器没有 ⇒ 直接落到 CJK 栈，
   拉丁字母用中文字形渲染。
4. **不要做 `:lang(zh)` 全局字体兜底** —— 宿主 `<html lang="zh-CN">` 时
   `:lang(zh)` 匹配所有元素，整站字体被换成 CJK 栈打头。
5. **不要碰宿主页头标题的字号/族/行高** —— OverleafPlus 实测：
   给标题设 19px 会把契约基线 22px/23.1px 改掉（页头契约 C1/C3 已冻结）。

## 实测记录（OverleafPlus 本地核验，2026-10-27）

同一 DOM 两态对照（v3.3 基线 vs v4.1）：冻结契约项全等（标题 22px/23.1px、
方钮四边、primary 底边 0、按钮等高 38）；正文 14px/21px → **15px/24.75px**；
控件行高 14.3 → 18.2px、字距 +0.26px、数字 tabular-nums。
