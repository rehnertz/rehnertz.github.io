---
article: true
category: [数学分析]
tag: [测度论]
---

# 测度论入门

本文是 Herbert Amann & Joachim Escher 所著《Analysis》的书摘：

- Amann H, Escher J. Elements of measure theory[M]// Amann H, Escher J. Analysis III. Levy S, Cargo M. trans. Basel: Birkhäuser Verlag, 2009: 1-57.

本章节介绍有关长度、面积、体积以及高维空间中的集合的一般理论：测度论．这一理论的动机来自于几何事实，我们会特别地用数学语言来为区间赋予长度测度，为矩形赋予面积测度，为长方体赋予体积测度．

我们自然不仅仅想为以上几种基本区域——即区间的笛卡尔积——赋予测度，我们更希望对一般的集合赋予测度．为此，我们会将一个集合拆分成若干互不相交的子区域，并用这些子区域的测度和来确定整个区域的测度．这种思想能够为 $\mathbb{R}^n$ 的所有开集赋予测度，并且可以为其附加一些期望的几何性质，例如测度不依赖于开集所处的位置（平移不变性）．此外，我们还可以通过开覆盖近似来将测度扩展到闭集上．不过这种方法无法为 $\mathbb{R}^n$ 的每个子集都赋予测度，因此存在“不可测集”．在实际学习过程中，我们会从一般的抽象测度论开始，到最后再介绍 $\mathbb{R}^n$ 上测度的刻画，如此会更加简单并深入理解到测度的本质．

第 1 节中我们介绍 $\sigma$ 代数，用于构成测度的定义域．在拓扑空间上，我们特别关注全体开集所确定的 $\sigma$ 代数：Borel $\sigma$ 代数．

第 2 节介绍一般测度的基本性质，并证明每个测度都有一个完备化测度．

第 3 节和第 4 节构造很常见的测度：Lebesgue、Stieltjes 和 Hausdorff 测度．构建测度的方法依赖于 Carathéodory 定理．

最后一节特别研究 Lebesgue 测度的性质．我们首先证明 Lebesuge 测度的 $\sigma$ 代数定义域是 Borel $\sigma$ 代数的完备化，然后研究 Lebesgue 测度在映射下的不变量，其中特别考虑刚体变换和平移．最后我们我们展示 Lebesgue 测度相对于其他局部有限 Borel 测度的特别指出，并用其构造 Lebesgue 不可测集．

<!-- more -->

<Catalog />