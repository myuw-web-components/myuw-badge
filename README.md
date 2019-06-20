# myuw-badge

![Screenshot showing 'Find it in MyUW' badge in each of the themes. A Madison-red theme including the Madison crest. A black theme with only the bare 'Find it in MyUW' text](badges.png "Badge themes")

A badge with two available themes to help users discover new widgets and content in MyUW.

## Getting Started

Add the following import to your page's `<head>`:

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-badge@^1?module"></script>
<script nomodule scr="https://unpkg.com/@myuw-web-components/myuw-badge@^1"></script>
```

**Important**: For responsiveness to many screen sizes, ensure you have included the viewport meta tag in your application:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Use the component's HTML tag wherever you want:

```HTML
<myuw-badge
    url=""
    dark-theme
    white-border
>
</myuw-badge>
```

### Configurable properties via attributes

- **url:** (Required) Set the URL the badge should link to (e.g. The detail page for a MyUW widget)
- **dark-theme:** If this attribute is present, the badge will use the black theme (red by default)
- **white-border:** If this attribute is present, the badge will have a white border (e.g. when using the badge on a dark background)

## Development and contribution

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```