![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# Sass

### Pedro Martin

---

## Sass

Objective

* Add superpowers to your CSS

---

## Sass

* Sass is a pre-processor that gives **CSS** super powers.
* It's very similar to CSS but has lots of extra features that make writing your styling code faster, more eficient, more maintainable and more organised.
* Sass stands for **S**yntastically **A**wesomes **S**tyle **S**heets and was invented by Hampton Catlin in 2006.

---

## Sass

Sass syntax and CSS syntax are almost idential though, so learning CSS first is no bad thing. The identical syntax also makes it easy to switch to **Sass** from **CSS**.

---

## Sass

Sass provides lots of features that aren't possible or don't exist in normal CSS.

---

## Sass

Sass can do this because the code you write is run through a compiler before it reaches the browser.

The end result is just normal CSS.

---

## Sass files

We write Sass in a fille with a `.scss` file extension.

e.g.
`style.scss`

Any file with a `.scss` extension will be compiled into a corresponding `.css` file of the same name.

---

## Sass files

* Files that start with an **\_**underscore character aren't compiled but can be `@imported` into a Sass file that will be compiled.

* These files are called Sass partials and might look like `_nav.scss` or `_about-page.scss`.

* This helps with code organisation and instead of having one massive CSS file, we can have lots of smaller Sass files that get combined into one by the compiler.

---

## Sass

The Sass compiler enables us to do more powerful things like:

* Combining and compressing files
* Nested selectors and media queries
* Variables
* Maths
* Colour manipulation
* Functions
* Mixins
* Loops
* Conditional Statements
* And much more!

---

## Sass syntax

Sass looks a bit like this:

```scss
.site-header {
  .logo {
    float: left;
  }
  .nav {
    @include horizontal-nav;
    color: $color-brand;
  }
}
.site-content {
  // more styles
}
```

---

## Sassy CSS

[https://codepen.io/pataruco/pen/deNPmd](https://codepen.io/pataruco/pen/deNPmd)

---

## Compiling sass

We can use a tool like Codepen to compile our styles when experimenting.
But if we want to use Sass in a project we're building locally, we need an application that can compile Sass for us.

---

## Compiling sass

Sass is often compiled via the command line but this is quite advanced for beginners.
Here are some free apps you can use instead:

* Scout
* Koala
* Compass

---

## Compiling Sass
