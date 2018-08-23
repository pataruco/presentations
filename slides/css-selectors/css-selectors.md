class: center, middle

# .center[CSS Selectors, Specificity & Float layout]

## .center[Pedro Martin]

.logo[![](../../assets/ga.svg)]

---

# Agenda

- Review
- New CSS selectors
- Floats
- Lab

---

# Selectors

So far we've seen the following type of CSS selectors. They match the HTML elements in your document but are quite limiting when dealing with complex projects.

```css
p {
} /*_* element selector *_*/
h1,
h2,
h3 {
} /*_*multipleelements*_*/
header a {
} /*_* descendent element selector *_*/
```

---

# Selectors

To have more control over the sections of the page to be styled, there are a whole load of other selectors available.

These can further be combined by comma separating or descendent selectors.

---

# Pseudo selectors

Other selectors include pseudo selectors for styling state. A classic example is the `:hover` state when mousing over links or the `:focus` state when filling in a form.

```css
a {
  color: red;
}
a:hover {
  color: blue;
}
input {
  background: #fff;
}
input:focus {
  background: #eee;
}
```

---

# Pseudo elements

We also can style pseudo elements.

```css
p:first-child
p:first-letter
p:first-line
p:first-of-type
p:last-child
p:last-of-type
p:nth-child(exp)
p:nth-of-type(exp)
```

---

# Class & Id

By far the most targeted selectors to use are `class` or `id` selectors.

They allow us to target specific parts of a page regardless of the type of element.

---

# Class & Id

`class` and `id` are attributes that are added to the HTML and then selected from the CSS to apply styling.

```html
<div id="main-content" class="page-wrap"> ...
</div>
```

---

# Class & Id

## Ids are unique

They can be used **ONCE** per page - best for JavaScript

##Classes are not unique
They can be reused **MANY** times per page - best for CSS

---

# Class & Id

How to use them in CSS

```css
.page-wrap {
  /*_* styles go here *_*/
}

#main-content {
  /*_* styles go here *_*/
}
```

---

# Class & Id

<iframe height='265' scrolling='no' title='Classes and Id's' src='//codepen.io/pataruco/embed/Pdqrqw/?height=265&theme-id=dark&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/pataruco/pen/Pdqrqw/'>Classes and Id's</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[CodePen](https://codepen.io/pataruco/pen/Pdqrqw)

---

# When to use `class` and `id`

- Add `class` attributes to the HTML for targeting with CSS.
- Add `id` attributes to the HTML for targeting with JS.
- **Don't use** ~~`id`~~ for adding styling to elements.

---

# Specificity

When writing CSS it's common for there to be conflicting properties applied to the same element.

The styles that "win" and will be rendered in the browser are determined by 3 major criteria in this order:

1. Importance
2. Specificity
3. Source Order

---

# Specificity

Take the following example HTML:

```html
<h1 id="main-title" class="title">
  some title
</h1>
```

---

# Specificity

## Importance

CSS declarations with `!important` beat everything.
Avoid using this because it's a very heavy-handed.

```css
h1 {
  color: white !important; /*wins*/
}

#main-title {
  color: red;
}
```

---

#Specificity

We calculate a selectors specificity by counting the number of inline styles, ids, classes and element selectors.

- `style` is more powerful than
- `id` which is more powerful than
- `class` which is more powerful than
- `element` selectors

This produces a 4 digit number called the **specifcity value**.

---

# Specificity

1 `element` and 1 `id` beats 3 `elements`

```css
header #main-title {
  color: red; /* 0101 wins */
}
header div h1 {
  color: white; /* 0003 */
}
```

---

# Specificity

.table[

| Selector                                                       | style | Id  | Classes & attributes | Elements | Total specificity |
| -------------------------------------------------------------- | ----- | --- | -------------------- | -------- | ----------------- |
| `h1`                                                           | 0     | 0   | 0                    | 1        | **0001**          |
| `h1 + p::first-letter`                                         | 0     | 0   | 0                    | 3        | **0003**          |
| `li > a[href*="en-US"] > .inline-warning`                      | 0     | 0   | 2                    | 2        | **0022**          |
| `#identifier`                                                  | 0     | 1   | 0                    | 0        | **0100**          |
| No selector, with a rule inside an element's `style` attribute | 1     | 0   | 0                    | 0        | **1000**          |

]

---

# Source order

If two selectors have the same level of importance and specificity, the one that comes later will win.

```css
header .title { color: black; }
header .title { color: red; } `/* Wins !!*/`
```

---

# Floats

`float` is a property that can be used to have block elements _"float"_ next to each other.

The `float` property was never really designed for layout but rather to allow text to wrap around an image.

This was a popular design style back in the day of print and web designers wanted to mimick the effect.

---

# Floats

There are now a number of layout options available in CSS but (unfortunatly) float still remains a popular solution even though there are some weird side effects.

To enable two `block` elements to site next to each other, to create multi-column layouts, we need to `float` them.

This is because `block` elements normally stack vertically and `inline` elements don't respond to layout properties like `width` and `height`.

---

# Floats

An element can be floated to the `left` or the `right` side of its container.

```css
.main-content {
  width: 500px;
  float: left;
}
.sidebar {
  width: 300px;
  float: right;
}
```

---

# Floats

When elements float, surrounding elements try to flow around them which can cause some weird knock-on effects.

To get the layout back on track, we can `clear` the floats and bring everything back to normal.

```css
.footer {
  clear: both;
}
```

---

# Floats

We can clear to the `left`, `right`, or `both` sides. Which will clear the affect of elements floating to the left, right or both left and right.

---

# Floating sections

<iframe height='265' scrolling='no' title='Floating sections' src='//codepen.io/pataruco/embed/NLGKrV/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/pataruco/pen/NLGKrV/'>Floating sections</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[CodePen](https://codepen.io/pataruco/pen/NLGKrV?editors=1100)

---

# Homework

**Let's start to use GitHub!**

[Homework repo](https://github.com/pataruco/gla2-homeworks.git)

[Relaxr](./homework/starter_code)
