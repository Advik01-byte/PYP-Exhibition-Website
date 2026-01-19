# Meet Our Group
- **Advik Goyal** (10)
- **Atharv Agarwal** (11)
- **Kabir Taneja** (10)

________________________________________________

# Check out Our Website!
[PYP Exhibition](https://advik01-byte.github.io/PYP-Exhibition-Website)

# Check Out The Website's File Structure
[File Structure](https://github.com/Advik01-byte/PYP-Exhibition-Website/blob/main/File%20structure.txt)

# Some good things to know:

## Code:

### HTML:
```HTML
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1 class="heading1">My</h1>
    <h1 class="heading2">name</h1>
    <h1 class="heading3">is</h1>
    <h1 class="heading4">Advik</h1>
    <h1 class="heading5">Goyal</h1>
  </body>
</html>
```

### Instead of doing this in CSS:
```CSS
.heading1,
.heading2,
.heading3,
.heading4,
.heading5 {
  /* Your style */
}
```

### You can do this:
```CSS
[class^="heading"] {
  /* Your style */
}
```

## Explanation:

| **CSS Syntax** | **Explanation** |
|---|---|
| `[]` | Used to create attribute selectors, which select HTML elements based on the presence or value of a specific attribute. |
| `[class]` | Used to target the `class` attribute. |
| `^=` | Starts with |
| `"heading"` | The value of the attribute. |
