---
article: false
order: 7
---

# 群与同态

在介绍自然数性质时我们引入了两个自然数的差 $n - m$ 和商 $n / m$．这两个表达式都有限制，并非对所有的自然数都有意义．为了使其有意义，我们需要扩充自然数集（分别扩充为整数集与有理数集），而扩充的方法包含了许多抽象代数的思维，因此我们转而介绍最基础的群论与环论．

## 群

群由一个集合、一个集合上的运算以及三条公理构成．设 $G$ 是集合，$\odot$ 是 $G$ 上的运算，且

- $(\mathrm{G}_1)$ $\odot$ 是结合的，
- $(\mathrm{G}_2)$ $\odot$ 有单位元 $e$，
- $(\mathrm{G}_3)$ 每个 $g \ in G$ 都存在**逆元**（inverse）$h \in G$，满足 $g \odot h = h \odot g = e$，

则称 $(G, {\odot})$ 为**群**（group）．若 $\odot$ 还是交换的，则称 $(G, {\odot})$ 是**交换群**（commutative group）或 **Abel 群**（Abelian group）．由于给定 $G$ 后，相应的运算 $\odot$ 可根据约定或上下文推断，我们一般简单地称 $G$ 为群．

---

设 $G = (G, {\odot})$ 为群．

1. 群的[单位元唯一](./relations-and-operations#prop:ident-unique)．
2. 对每个 $g \in G$，其逆元（暂时记作 $g^\flat$）唯一．特别地 $e^\flat = e$．

::: proof
设 $h, k \in G$ 都是 $g$ 的逆，则 $g \odot h = h \odot g = e$ 且 $g \odot k = k \odot g = e$．于是
$$
  h = h \odot e
  = h \odot (g \odot k)
  = (h \odot g) \odot k
  = e \odot k
  = k,
$$
即逆元唯一．由于 $e \odot e = e$，根据逆元的定义可知 $e$ 就是 $e$ 的逆元．
:::

3. 对每一对 $a, b \in G$，唯一存在 $x \in G$ 使得 $a \odot x = b$，且唯一存在 $y \in G$ 使得 $y \odot a = b$．

::: proof
令 $x := a^\flat \odot b$，$y := b \odot a^\flat$，则 $a \odot x = b$ 且 $y \odot a = b$，于是证明了存在性．我们证明 $x$ 的唯一性，而 $y$ 类似可证．

假设 $x, z \in G$ 满足 $a \odot x = b$ 且 $a \odot z = b$，则
$$
  x = (a^\flat \odot a) \odot x
  = a^\flat \odot (a \odot x)
  = a^\flat \odot b
  = a^\flat \odot (a \odot z)
  = (a^\flat \odot a) \odot z
  = z,
$$
从而说明了唯一性．
:::

注意上述命题说明了
$$
\begin{aligned}
  a \odot x = b & \implies x = a^\flat \odot b, \\
  y \odot a = b & \implies y = b \odot a^\flat.
\end{aligned}
$$

4. 对每个 $g \in G$ 都有 $(g^\flat)^\flat = g$．

::: proof
根据逆元的定义有
$$
\begin{aligned}
  g \odot g^\flat &= g^\flat \odot g = e, \\
  (g^\flat)^\flat \odot g^\flat &= g^\flat \odot (g^\flat)^\flat = e,
\end{aligned}
$$
这表明 $g$ 和 $(g^\flat)^\flat$ 都是 $g^\flat$ 的逆元．由于逆元唯一，$g = (g^\flat)^\flat$．
:::

5. 设 $H$ 是非空集合，其上有结合运算 $\circledast$，其单位元是 $e$．若每个 $h \in H$ 都存在相应的**左逆**（left inverse）$\overline{h}$ 满足 $\overline{h} \circledast h = e$，则 $(H, {\circledast})$ 是群且 $h^\flat = \overline{h}$．类似地，若每个 $h \in H$ 都存在相应的**右逆**（right inverse）满足 $h \circledast \underline{h} = e$，则 $(H, {\circledast})$ 是群且 $h^\flat = \underline{h}$．

::: proof
设 $h \in H$ 存在左逆 $\overline{h}$，则 $\overline{\overline{h}}$ 是 $\overline{h}$ 的左逆，于是 $\overline{overline{h}} \circledast \overline{h} = e$．进而
$$
  h = e \circledast h
  = (\overline{\overline{h}} \circledast \overline{h}) \circledast h
  =\overline{\overline{h}} \circledast (\overline{h} \circledast h)
  = \overline{\overline{h}}.
$$
于是由 $\overline{\overline{h}} \odot \overline{h} = e$ 得到 $h \odot \overline{h} = e$，即 $\overline{h}$ 是 $h$ 的右逆．故 $\overline{h}$ 是 $h$ 的逆．对于 $h \in H$ 存在右逆 $\underline{h}$ 的情形可同理证明．
:::

6. 对任意 $g, h \in G$ 都有 $(g \odot h)^\flat = h^\flat \odot g^\flat$．

::: proof
可直接验证
$$
  (h^\flat \odot g^\flat) \odot (g \odot h)
  = h^\flat \odot (g^\flat \odot g) \odot h
  = h^\flat \odot h
  = e,
$$
根据逆元的定义即得证．
:::

---

为说明公理 $(\mathrm{G}_1)\text{--}(\mathrm{G}_3)$ 是自洽的，我们给出一些群的具体例子．

::: example

1. 令 $G := \{e\}$ 为单元素集，则 $(G, {\odot})$ 是 Abel 群，其中唯一可能的运算是 $e \odot e = e$．这个群称为**平凡群**（trivial group）．
2. 令 $G := \{a, b\}$ 为二元素集，其上有如下表所示的运算，则 $(G, {\odot})$ 是 Abel 群．

| $\odot$ |  $a$  |  $b$  |
| :-----: | :---: | :---: |
|   $a$   |  $a$  |  $b$  |
|   $b$   |  $b$  |  $a$  |

3. 设 $X$ 为非空集合，$\mathsf{S}_X$ 是全体 $X$ 到其自身的双射构成的集合，$\circ$ 为函数复合运算，则 $\mathsf{S}_X := (\mathsf{S}_X, {\circ})$ 是群，其中 $\mathrm{id}_X$ 是单位元，而每个 $f \in \mathsf{S}_X$ 的逆元就是其反函数 $f^{-1}$．$\mathsf{S}_X$ 称为 $X$ 的**置换群**（permutaition group）．一般来说置换群不交换．
4. 设 $X$ 是非空集合，$(G, {\odot})$ 是群，则 $(G^X, {\odot})$ 也是群，其中的运算 $\odot$ 由 $G$ 上的运算诱导而得．函数 $f \in G^X$ 的逆元是函数
$$
  f^\flat : X \to G, \quad
  x \to \bigl( f(x) \bigr)^\flat.
$$
特别地，对于 $m \geq 2$，$G^m$ 是群，其上的运算为
$$
  (g_1, \dots, g_m) \odot (h_1, \dots, h_m) = (g_1 \odot h_1, \dots, g_m \odot h_m).
$$
5. 设 $G_1, \dots, G_m$ 为群，则 $G_1 \times \cdots \times G_m$ 也是群，其上的运算与前一例类似．这个群称为 $G_1, \dots, G_m$ 的**直积**（direct product）．
:::

## 子群

设 $(G, {\odot})$ 是群，$H$ 是 $G$ 的非空子集，并且在 $\odot$ 下封闭，即

- $(\mathrm{SG}_1)$ $H \odot H \subseteq H$．

如果 $H$ 还满足

- $(\mathrm{SG}_2)$ $\forall h \in H : h^\flat \in H$，

则 $H := (H, {\odot})$ 是群，称为 $G$ 的**子群**（subgroup）．由于 $H$ 是非空的，必然存在 $h \in H$，从而 $e = h^\flat \odot h \in H$．

---

::: example
设 $G = (G, {\odot})$ 是群．

1. 平凡群 $\{e\}$ 以及 $G$ 本身都是 $G$ 的子群．
2. 若 $\{ H_\alpha \;|\; \alpha \in \mathsf{A} \}$ 是一族 $G$ 的子群，则很容易验证 $\bigcap_{\alpha \in \mathsf{A}} H_\alpha$ 也是 $G$ 的子群．

:::

---

## 陪集

设 $N$ 是 $G$ 的子群，$g \in G$，则 $g \odot N$ 和 $N \odot g$ 分别称为 $g$ 关于 $N$ 的**左陪集**（left coset）和**右陪集**（right coset）．若定义关系
$$
  g \sim h :\!\!\iff g \in h \odot N,
$$
则容易验证 $\sim$ 是 $G$ 上的等价关系：由于 $e \in N$，$\sim$ 显然是自反的；若 $g \in h \odot N$ 且 $h \in k \odot N$，则
$$
  g \in (k \odot N) \odot N
  = k \odot (N \odot N)
  = k \odot N,
$$
故 $\sim$ 是传递的；若 $g \in h \odot N$，则存在某个 $n \in N$ 使得 $g = h \odot n$，则 $h = g \odot n^\flat \in g \odotN$，因此 $\sim$ 是对称的．

上述关系 $\sim$ 所确定的 $g \in G$ 的等价类就是左陪集：
$$
  [g] = g \odot N, \quad g \in G.
$$
因此我们将 $G/{\sim}$ 改写为 $G/N$，称之为 $G$ **模** $N$ 的**左陪集构成的集合**（set of left cosets of $G$ modulo $N$）．我们可类似定义右陪集所对应的等价关系，但我们默认符号 $G/N$ 是左陪集构成的集合．

若子群 $N$ 满足
$$
  g \odot N = N \odot g, \quad g \in G,
$$
则左陪集与右陪集相同．此时我们称 $N$ 为 $G$ 的**正规**（normal）子群，称 $g \odot N$ 为 $g$ **模** $N$ **的陪集**（coset of $g$ modulo $N$）．

若 $N$ 是 $G$ 的正规子集，则对任意 $g, h \in G$ 都有
$$
  (g \odot N) \odot (h \odot N)
  = g \odot (N \odot h) \odot N
  = (g \odot h) \odot N,
$$
因此 $\odot$ 在 $G/N$ 上诱导出了以下运算：
$$
\begin{aligned}
  (G / N) \times (G / N) &\to (G / N), \\
  (g \odot N, h \odot N) &\mapsto (g \odot h) \odot N.
\end{aligned}
$$
