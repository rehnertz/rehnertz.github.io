---
article: false
order: 1
---

# 逻辑基础

我们通常使用符号逻辑描述数学关系，其中**陈述**（statement）可真可假．换言之，每条陈述都有一个**真值**（truth value），其要么为“真”（$\mathrm{T} = \mathrm{True}$），要么为“假”（$\mathrm{F} = \mathrm{False}$），且不可能既为真又为假．为真的陈述称为**命题**（proposition）．

::: tip 关于“陈述”和“命题”
“陈述”在德语原文中为“Aussage”，英语翻译为“statement”，其中文翻译确实是“陈述”，但在国内的数学教育中通常将可真可假的描述称为“命题”，将为真的命题称为“真命题”（命题逻辑这一研究方向里的 proposition 其实也是可真可假的）．为符合习惯，我们同时将“陈述”和“命题”作为 Aussage/statement 的翻译，其为真时称为“真命题”．不过当真命题作为类似定理的方式给出时，我们依然简称为“命题”．
:::

对任意陈述 $A$，其**非**（negation）$\neg A$（not $A$）与 $A$ 有相反的真值，可用以下真值表定义．

|      $A$     |   $\neg A$   |
| :----------: | :----------: |
| $\mathrm{T}$ | $\mathrm{F}$ |
| $\mathrm{F}$ | $\mathrm{T}$ |

对任意陈述 $A$ 和 $B$，我们可用**合取**（conjunction）$\land$ 与**析取**（disjunction）$\lor$ 将其组合为新陈述 $A \land B$（$A$ and $B$）与 $A \lor B$（$A$ or $B$），可用以下真值表定义．

|      $A$     |      $B$     |  $A \land B$ |  $A \lor B$  |
| :----------: | :----------: | :----------: | :----------: |
| $\mathrm{T}$ | $\mathrm{T}$ | $\mathrm{T}$ | $\mathrm{T}$ |
| $\mathrm{T}$ | $\mathrm{F}$ | $\mathrm{F}$ | $\mathrm{T}$ |
| $\mathrm{F}$ | $\mathrm{T}$ | $\mathrm{F}$ | $\mathrm{T}$ |
| $\mathrm{F}$ | $\mathrm{F}$ | $\mathrm{F}$ | $\mathrm{F}$ |

对于表达式 $E(x)$，若将 $x$ 替换为某个类（class）中的对象（object）后变为陈述，则称 $E$ 是一个**性质**（property）．语句“对象 $x$ 具有性质 $E$”所表达的含义就是“$E(x)$ 为真”．对任意类 $X$，若 $x$ 属于 $X$，则称 $x$ 是 $X$ 的一个**元素**，记 $x \in X$，否则记 $x \notin X$．

::: info 关于“类”
在集合论中我们不存在“所有集合构成的集合”，这会导致罗素悖论．我们只能称所有集合构成一个类，而集合是类的一种．由于集合论不是我们的主题，这里不过多深入．读者可以默认我们一般都使用集合，而需要描述“所有集合”时使用类．
:::

表达式
$$
  \{ x \in X \;|\; E(x) \}
$$
表示 $X$ 中所有具有性质 $E$ 的元素 $x$ 所构成的类．

**量词**（quantifier）$\exists$ 表示“存在”（exists）．陈述
$$
  \exists x \in X : E(x)
$$
表示存在类 $X$ 中的（至少一个）元素 $x$ 具有性质 $E$．我们用 $\exists! x \in X : E(x)$ 表示这样的 $x$ 存在且唯一．

量词 $\forall$ 表示“对所有的”（for all）．陈述
$$
  \forall x \in X : E(x)
$$
表示类 $X$ 中所有的元素 $x$ 都具有性质 $E$．该陈述也书写为
$$
  x \in X, \quad \forall x \in X,
$$
或省略量词 $\forall$ 写为
$$
  x \in X, \quad x \in X.
$$

对任意对象（或符号）$a$ 以及对象（或表达式）$b$，我们用
$$
  a := b
$$
表示 $a$ “定义为” $b$．

::: example
设 $A$ 与 $B$ 是陈述，$X$ 和 $Y$ 是类，$E$ 是性质，则有：

1. $\neg\neg A = A$；
2. $\neg(A \land B) = (\neg A) \lor (\neg B)$；
3. $\neg(A \lor B) = (\neg A) \land (\neg B)$；
4. $\neg(\forall x \in X : E(x)) = (\exists x \in X : \neg E(x))$；
5. $\neg(\exists x \in X: E(x)) = (\forall x \in X : \neg E(x))$；
6. $\neg(\forall x \in X : (\exists y \in Y : E(x, y))) = (\exists x \in X : (\forall y \in Y : \neg E(x, y)))$；
7. $\neg(\exists x \in X : (\forall y \in Y : E(x, y))) = (\forall x \in X : (\exists y \in Y : \neg E(x, y)))$．

:::

设 $A$ 和 $B$ 是陈述，我们可以定义一个称为**蕴含**（implication）的新陈述 $A \Longrightarrow B$，定义为
$$
  (A \Longrightarrow B) := (\neg A) \lor B.
$$
其表达式的含义是：假设 $A$ 为真，则 $B$ 为真．若 $A$ 为假，则蕴含一定为真．若蕴含 $A \Longrightarrow B$ 为真，则我们称 $A$ 是 $B$ 的**充分条件**（sufficient condition），称 $B$ 是 $A$ 的**必要条件**（necessary condition）．在证明 $A \Longrightarrow B$ 时，我们常常会说“为证 $B$ **只需**（it suffices to）证明 $A$”．

**等价**（equivalence）$A \Longleftrightarrow B$ 定义为
$$
  A \Longleftrightarrow B := (A \Longrightarrow B) \land (B \Longrightarrow A).
$$
若 $A$ 与 $B$ 等价，则称它们互为对方的**充要条件**（necessary and sufficient condition），并说“$A$ **当且仅当**（if and only if）$B$”．

容易验证
$$
  (A \Longrightarrow B) \Longleftrightarrow (\neg B \Longrightarrow \neg A),
$$
这说明欲证 $A \Longrightarrow B$，可以通过证明 $\neg B \Longrightarrow \neg A$ 完成．$\neg B \Longrightarrow \neg A$ 称为 $A \Longrightarrow B$ 的**逆否命题**（contrapositive）．

对于陈述 $A$ 和 $B$，若 $A$ 的真值定义为 $B$ 的真值，则我们记
$$
  A :\Longleftrightarrow B,
$$
也就是说在定义上 $A$ 和 $B$ 是等价的．

为证明陈述 $A \implies B$，只需假设 $A$ 为真，然后证明 $B$ 为真．

对于一般的数学研究，这些逻辑基础就足够了，我们不再深入命题逻辑这一领域．
