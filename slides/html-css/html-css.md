class: center, middle

# .center[Advanced HTML & Intro to CSS]

## .center[Pedro Martin]

.logo[![](../../assets/ga.svg)]

---

# Agenda

- Recap
- Advanced HTML
  - Metadata
  - Applying CSS and JavaScript to HTML
  - Creating hyperlinks
  - Document and website structure
- Intro to CSS

---

# What is the HTML head?

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

---

# What is the HTML head?

## Metadata

```html
<head>
  <meta charset="utf-8">
  <meta name="author" content="Pedro Martin">
  <meta name="description" content="A Lesson about HTMLs">
</head>
```

---

# Applying CSS and JavaScript to HTML

```html
<link rel="stylesheet" href="my-css-file.css">
```

```html
<script src="my-js-file.js"></script>
```

---

# Setting the primary language of the document

```html
<html lang="en-GB">
```

---

# Creating links

```html
<p>I'm creating a link to
  <a href="https://en.wikipedia.org/wiki/Star_Wars" title="Star Wars Wikipedia page">
    Star Wars Wikipedia page
  </a>.
</p>
```

---

# Creating links

## Relative links

```html
<h2 id="Mailing_address">Mailing address</h2>
<p>Want to write us a letter? Use our <a href="contacts.html#Mailing_address">mailing address</a>.</p>
```

---

# Creating links

## Email links

```html
<p>
  <a href="mailto:mail@example.com">
    Send an email
  </a>
</p>
```

---

# Document and website structure

```html
<body>
  <header>
    ...
  </header>
  <nav>
    ...
  </nav>
  <main>
    <article>
      ...
    </article>
    <aside>
      ...
    </aside>
  </main>
  <footer>
    ...
  </footer>
</body>
```

---

# Document and website structure

<iframe scrolling='no' title='Document and website structure' src='//codepen.io/pataruco/embed/preview/qMBedq/?theme-id=dark&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; height: 30vh;'>See the Pen <a href='https://codepen.io/pataruco/pen/qMBedq/'>Document and website structure</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
---

# Intro to Cascading Style Sheets (CSS)

Web browsers apply CSS rules to a document to affect how they are displayed. A CSS rule is formed from:

- A set of properties, which have values set to update how the HTML content is displayed.
- A selector, which selects the element(s) you want to apply the updated property values to.

A set of CSS rules contained within a stylesheet determines how a webpage should look. You will learn a lot more about what CSS syntax looks like in the next article of the module.

---

# Intro to Cascading Style Sheets (CSS)

## How it looks?

```html
<h1>Hello World!</h1>
<p>This is my first CSS example</p>
```

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

---

# How does CSS actually work?

![](https://mdn.mozillademos.org/files/11781/rendering.svg)

---

# How does CSS actually work?

## About the DOM

Document Object Model (**DOM**) represents the document in the computer's memory. It combines the document's content with its style.

A DOM has a tree-like structure. Each element, attribute and piece of text in the markup language becomes a DOM node in the tree structure. The nodes are defined by their relationship to other DOM nodes. Some elements are parents of child nodes, and child nodes have siblings.

---

# How does CSS actually work?

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

```text
P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
   └─ "Sheets"
```

---

# How to apply your CSS to your HTML

Using a `link` tag with a reference to a CSS file

```html
  <head>
    ...
    <link rel="stylesheet" href="style.css">
    ...
  </head>
```

---

# How to apply your CSS to your HTML

Using a `style` tag

```html
<head>
  <style>
    h1 {
      color: blue;
      background-color: yellow;
      border: 1px solid black;
    }

    p {
      color: red;
    }
  </style>
</head>

<body>
  <h1>Hello World!</h1>
  <p>This is my first CSS example</p>
</body>
```

---

# How to apply your CSS to your HTML

Using inline styles

```html
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
```

---

# CSS Building blocks

## Declarations

.image-half[![](https://mdn.mozillademos.org/files/3665/css%20syntax%20-%20declaration.png)]

---

# CSS Building blocks

## Declaration blocks

.image-half[![](https://mdn.mozillademos.org/files/3667/css%20syntax%20-%20declarations%20block.png)]

---

# CSS Building blocks

## Selectors and rules

.image-half[![](https://mdn.mozillademos.org/files/3668/css%20syntax%20-%20ruleset.png)]

---

# CSS values and units

Absolute vs relative

<iframe scrolling='no' title='CSS values and units' src='//codepen.io/pataruco/embed/preview/vzEKOO/?theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; height: 30vh;'>See the Pen <a href='https://codepen.io/pataruco/pen/vzEKOO/'>CSS values and units</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

class: center, middle

## ~~CSS Colours~~

# CSS Colors

---

# CSS Colors

There are many ways to specify color in CSS. The same color values can be used everywhere in CSS, whether you are specifying text color, background color, or whatever else.

The standard color system available in modern computers is 24 bit, which allows the display of about `16.7 million` distinct colors via a combination of different **red**, **green** and **blue** channels with 256 different values per channel

## 256 x 256 x 256 = 16,777,216

---

# CSS Colors

## Keywords

```html
<p>This paragraph has a red background</p>
```

```css
p {
  background-color: red;
}
```

[Full list of color names](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords)

---

# CSS Colors

## Hexadecimal values

Each hex value consists of a hash/pound symbol (#) followed by six hexadecimal numbers, each of which can take a value between 0 and f (which represents 15) — so **0123456789abcdef**.

Each pair of values represents one of the channels — **red**, **green** and **blue** — and allows us to specify any of the 256 available values for each (16 x 16 = 256.)

---

# CSS Colors

## Hexadecimal values

```css
/* equivalent to the red keyword */
p:nth-child(1) {
  background-color: #ff0000;
}

/* equivalent to the blue keyword */
p:nth-child(2) {
  background-color: #0000ff;
}

/* has no exact keyword equivalent */
p:nth-child(3) {
  background-color: #e0b0ff;
}
```

---

# CSS Colors

## RGB

An RGB value is a function — `rgb()` — which is given three parameters that represent the `red`, `green` and `blue` channel values of the colors, in much the same way as hex values. The difference with RGB is that each channel is represented not by two hex digits, but by a decimal number between **0** and **255**.

---

# CSS Colors

## RGB

```css
/* equivalent to the red keyword */
p:nth-child(1) {
  background-color: rgb(255, 0, 0);
}

/* equivalent to the blue keyword */
p:nth-child(2) {
  background-color: rgb(0, 0, 255);
}

/* has no exact keyword equivalent */
p:nth-child(3) {
  background-color: rgb(224, 176, 255);
}
```

---

# CSS Colors

## HSL

The `hsl()` function accepts **hue**, **saturation**, and **lightness** values, which are used to distinguish between the 16.7 million colors, but in a different way:

- **Hue**: the base shade of the color. This takes a value between 0 and 360, presenting the angles round a color wheel.
- **Saturation**: how saturated is the color? This takes a value from 0-100%, where 0 is no color (it will appear as a shade of grey), and 100% is full color saturation
- **Lightness**: how light or bright is the color? This takes a value from 0-100%, where 0 is no light (it will appear completely black) and 100% is full light (it will appear completely white)

---

# CSS Colors

## HSL

```css
/* equivalent to the red keyword */
p:nth-child(1) {
  background-color: hsl(0, 100%, 50%);
}

/* equivalent to the blue keyword */
p:nth-child(2) {
  background-color: hsl(240, 100%, 50%);
}

/* has no exact keyword equivalent */
p:nth-child(3) {
  background-color: hsl(276, 100%, 85%);
}
```

---

# CSS Colors

## RGBA and HSLA

RGB and HSL both have corresponding modes — RGBA and HSLA — that allow you to set not only what color you want to display, but also what transparency you want that color to have.

```css
/* Transparent red */
p:nth-child(1) {
  background-color: rgba(255, 0, 0, 0.5);
}

/* Transparent blue */
p:nth-child(2) {
  background-color: hsla(240, 100%, 50%, 0.5);
}
```
