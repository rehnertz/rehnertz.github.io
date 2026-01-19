---
article: false
order: 2
---

# 集合

我们采用朴素集合论，即不定义什么是集合，而是直接使用集合这个概念．

## 基本事实

若 $X$ 和 $Y$ 为集合，则 $X \subseteq Y$ 表示 $X$ 的所有元素都属于 $Y$，即
$$
  \forall x \in X : x \in Y.
$$
此时称 $X$ 是 $Y$ 的**子集**（subset），也称 $X$ 包含于 $Y$．记号 $Y \supseteq X$ 表示 $X \subseteq Y$．集合的相等定义为
$$
  X = Y :\!\!\iff (X \subseteq Y) \land (Y \subseteq X),
$$

显然对任意集合 $X$、$Y$ 与 $Z$ 都有
$$
\begin{aligned}
  & X \subseteq X && \text{（自反性，reflexitivity）}, \\
  & (X \subseteq Y) \land (Y \subseteq Z) \implies (X \subseteq Z) && \text{（传递性，transitivity）}.
\end{aligned}
$$
若 $X \subseteq Y$ 且 $X \neq Y$，则称 $X$ 是 $Y$ 的**真子集**（proper subset），有时记作 $X \subset Y$ 或 $Y \supset X$，并称 $X$ 真包含于 $Y$．

::: tip 关于真包含的记号
按照符号的字面意思，$X$ 真包含于 $Y$ 应当记作 $X \subset Y$，但很多教材将其作为 $X \subseteq Y$ 的同义陈述，因此这个记号的含义取决于所阅读材料的上下文约定．
:::

若 $X$ 是集合，$E$ 是性质，则 $\{ x \in X \;|\; E(x) \}$ 是 $X$ 的子集，其中的元素都具有性质 $E$．$X$ 的**空子集**（empty subset）定义为
$$
  \emptyset_X := \{ x \in X \;|\; x \neq x \}.
$$

::: remark
设 $X$ 是集合，$E$ 是性质，则对所有的 $x \in X$ 都有
$$
  x \in \emptyset_X \implies E(x).
$$
:::

::: proof
根据蕴含的定义，
$$
  \bigl(x \in \emptyset_X \implies E(x) \bigr)
  = \neg(x \in \emptyset_X) \lor E(x).
$$
命题 $\neg x \in \emptyset_X$ 恒真． 
:::

::: remark
若 $X$ 和 $Y$ 是集合，则 $\emptyset_X = \emptyset_Y$．于是所有集合的空子集都是一样的，从而确定唯一的**空集**（empty set）$\emptyset$．
:::

::: proof
由于 $x \in \emptyset_X$ 和 $ 恒假，我们有 $x \in \emptyset_X \implies y \in \emptyset_Y$，于是 $\emptyset_X \subseteq \emptyset_Y$．同理 $\emptyset_Y \subseteq \emptyset_X$．
:::

对于只有一个元素 $x$ 的集合，我们记作 $\{x\}$．包含有限个元素 $a, b, \dots, {*}, {\odot}$ 的集合记作 $\{ a, b, \dots, {*}, {\odot} \}$．

## 幂集

若 $X$ 是集合，则 $X$ 的全体子集也构成集合，称之为 $X$ 的**幂集**，记作 $\mathcal{P}(X)$ 或 $2^X$．后者的含义会在后文解释．容易验证
$$
\begin{gathered}
  \emptyset \in \mathcal{P}(X), \quad X \in \mathcal{P}(X), \\
  \begin{aligned}
    x \in X &\iff \{x\} \in \mathcal{P}(X), \\
    Y \subseteq X &\iff Y \in \mathcal{P}(X).
  \end{aligned}
\end{gathered}
$$
特别地 $\mathcal{P}(X)$ 永不为空．

## 补集、交集与并集

设 $A$ 和 $B$ 都是集合 $X$ 的子集，定义
$$
  A \setminus B := \{ x \in X \;|\; (x \in A) \land (x \notin B) \},
$$
称之为 $B$ 在 $A$ 中的**补集**（complement）．若 $X$ 在上下文中已确定，则可以记
$$
  A^c := X \setminus A,
$$
称之为 $A$ 的**补集**（complement）．

集合
$$
  A \cap B := \{ x \in X \;|\; (x \in A) \land (x \in B) \}
$$
称为 $A$ 与 $B$ 的**交集**（intersection）．若 $A \cap B = \emptyset$，则称 $A$ 与 $B$ **不相交**（disjoint）．显然 $A \setminus B = A \cap B^c$．

集合
$$
  A \cup B := \{ x \in X \;|\; (x \in A) \lor (x \in B) \}
$$
称为 $A$ 与 $B$ 的**并集**（union）．

容易验证集合运算具有以下性质：

::: proposition
设 $X$、$Y$ 和 $Z$ 都是某个集合的子集，则：

1. $X \cup Y = Y \cup X$，$X \cap Y = Y \cap X$（交换性）；
2. $X \cup (Y \cup Z) = (X \cup Y) \cup Z$，$X \cap (Y \cap Z) = (X \cap Y) \cap Z$（结合性）；
3. $\begin{aligned} X \cup (Y \cap Z) &= (X \cup Y) \cap (X \cup Z) \\ X \cap (Y \cup Z) &= (X \cap Y) \cup (X \cap Z) \end{aligned}$（分配性）；
4. $X \subseteq Y \iff X \cup Y = Y \iff X \cap Y = X$．

:::

## 积

对任意两个对象 $a$ 和 $b$，我们可以构建**有序对**（ordered pair）$(a, b)$．两个有序对 $(a, b)$ 和 $(a', b')$ 相等定义为
$$
  (a, b) = (a', b') :\!\!\iff (a = a') \land (b = b').
$$
$a$ 和 $b$ 分别称为有序对 $(a, b)$ 的第一与第二**分量**（component）．对于 $x = (a, b)$，定义
$$
  \operatorname{pr}_1(x) := a, \quad
  \operatorname{pr}_2(x) := b.
$$
我们将 $\operatorname{pr}_j(x)$ 称为 $x$ 的第 $j$ **投影**（projection）．

若 $X$ 和 $Y$ 是集合，则其（**笛卡尔**）**积**（Cartesian product）$X \times Y$ 定义为所有有序对 $(x, y)$ 构成的集合，其中 $x \in X$ 且 $y \in Y$．换言之
$$
  X \times Y := \{ (x, y) \;|\; x \in X, y \in Y \}.
$$

::: proposition
设 $X$ 和 $Y$ 是集合，则：

1. $X \times Y = \emptyset \iff (X = \emptyset) \lor (Y = \emptyset)$；
2. 一般来说 $X \times Y \neq Y \times X$．
:::

::: proof
1. 我们将等价“$\Longleftrightarrow$”分为“$\Longrightarrow$”和“$\Longleftarrow$”的两步证明．

“$\Longrightarrow$” 用反证法．假设 $X \times Y = \emptyset$ 且 $X \neq \emptyset$、$Y \neq \emptyset$，则存在 $x \in X$ 和 $y \in Y$，这意味着 $(x, y) \in X \times Y$，与 $X \times Y = \emptyset$ 矛盾．

“$\Longleftarrow$” 用反证法．假设 $(X = \emptyset) \lor (Y = \emptyset)$ 且 $X \times Y \neq \emptyset$，则存在 $(x, y) \in X \times Y$，其中 $x \in X$ 且 $y \in Y$，从而 $(x \neq \emptyset) \land (y \neq \emptyset) = \neg((X = \emptyset) \lor (Y = \emptyset))$，矛盾．

2. 任取不同的对象 $x$ 与 $y$，令 $X = \{x\}$ 且 $Y = \{y\}$，则  
  $$
    X \times Y = \{(x, y)\} \neq \{(y, x)\} = Y \times X.
  $$

:::

设 $X$、$Y$ 与 $Z$ 为集合，定义
$$
  X \times Y \times Z := (X \times Y) \times Z.
$$
一般地，对集合 $X_1, \dots, X_n$，递归定义
$$
  X_1 \times X_2 \times \cdots \times X_n = (X_1 \times X_2 \times \cdots X_{n - 1}) \times X_n.
$$
对于 $x \in X_1 \times \cdots \times X_n$，我们将其记作 $(x_1, \dots, x_n)$ 而不是 $\bigl( \cdots ((x_1, x_2), x_3), \dots, x_n \bigr)$（从代数角度看这两者是同构的）．我们称 $x_j$ 为 $x$ 的第 $j$ **投影**（projection），记作 $\operatorname{pr}_j(x)$．为简化书写，定义
$$
  \prod_{j = 1}^n X_j := X_1 \times \cdots \times X_n.
$$
若所有的 $X_j = X$，则上述记号也记作 $X^n$．

## 集合族

设 $\mathsf{A}$ 是非空集合，且对每个 $\alpha \in \mathsf{A}$ 都有一个相应的集合 $A_\alpha$，则 $\{ A_\alpha \;|\; \alpha \in \mathsf{A} \}$ 称为一个**集合族**（family of sets），$\mathsf{A}$ 为其**指标集**（index set）．

设 $X$ 为集合，$\mathcal{A} := \{ A_\alpha \;|\; \alpha \in \mathsf{A}\}$ 为 $X$ 的子集构成的集合族，我们可推广**交集**（intersection）与**并集**（union）的定义为
$$
  \bigcap_\alpha A_\alpha := \{ x \in X \;|\; \forall \alpha \in \mathsf{A} : x \in A_\alpha \}
$$
以及
$$
  \bigcup_\alpha A_\alpha := \{ x \in X \;|\; \exists \alpha \in \mathsf{A} : x \in A_\alpha \}.
$$
对于交集 $\bigcap_\alpha A_\alpha$，我们也将其记作 $\bigcap_{\alpha \in \mathsf{A}} A_\alpha$ 或 $\bigcap_\alpha \{ x \in X \;|\; x \in A_\alpha \}$，或者更简单地记作 $\bigcap_{A \in \mathcal{A}} A$ 或 $\bigcap \mathcal{A}$．当指标集为 $\{0, 1, \dots, n\}$ 时，$\mathcal{A} = \{ A_0, A_1, \dots, A_n\}$，我们将其交集记作 $\bigcap_{j = 0}^n A_j$．对于并集我们有类似的记号约定．

与两个集合的交、并运算相比，集合族的交、并运算有类似的性质．

::: proposition
设 $\{A_\alpha \;|\; \alpha \in \mathsf{A}\}$ 和 $\{B_\beta \;|\; \beta \in \mathsf{B}\}$ 是 $X$ 的子集构成的集合族，则：

1. $(\bigcap_\alpha A_\alpha) \cap (\bigcap_\beta B_\beta) = \bigcap_{(\alpha, \beta)} A_\alpha \cap B_\beta$，  
  $(\bigcup_\alpha A_\alpha) \cup (\bigcup_\beta B_\beta) = \bigcup_{(\alpha, \beta)} A_\alpha \cup B_\beta$（结合性）；
2. $(\bigcap_\alpha A_\alpha) \cup (\bigcap_\beta B_\beta) = \bigcap_{(\alpha, \beta)} A_\alpha \cup B_\beta$，  
  $(\bigcup_\alpha A_\alpha) \cap (\bigcup_\beta B_\beta) = \bigcup_{(\alpha, \beta)} A_\alpha \cap B_\beta$（分配性）；
3. $(\bigcap_\alpha A_\alpha)^c = \bigcup_\alpha A_\alpha^c$，  
  $(\bigcup_\alpha A_\alpha)^c = \bigcap_\alpha A_\alpha^c$（de Morgan 律），

其中 $(\alpha, \beta)$ 取遍 $\mathsf{A} \times \mathsf{B}$．
:::
