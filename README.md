# myuw-badge

![Screenshot showing 'Find it in MyUW' badge in each of the themes. A Madison-red theme including the Madison crest. A black theme with only the bare 'Find it in MyUW' text](badges.png "Badge themes")

A badge with two available themes to help users discover new widgets and content in MyUW.

## Getting Started

Include the component in your page:

```html
<!-- import the module -->
<script type="module" src="https://cdn.my.wisc.edu/@myuw-web-components/myuw-badge@latest/myuw-badge.min.mjs"></script>

<!-- fallback for browsers without ES2015 module support -->
<script nomodule scr="https://cdn.my.wisc.edu/@myuw-web-components/myuw-badge@latest/myuw-badge.min.js"></script>

<myuw-badge
  url=""
  dark-theme
  white-border
>
</myuw-badge>
```

_Note:_ The evergreen "latest" version can be used for convenience, but in production settings it is recommended to use the latest [release version](https://github.com/myuw-web-components/myuw-badge/releases) specifically, and upgrade only after testing!

### Configurable properties via attributes

- **url:** (Required) Set the URL the badge should link to (e.g. The detail page for a MyUW widget)
- **dark-theme:** If this attribute is present, the badge will use the black theme (red by default). The red theme is specific to UW-Madison; the black theme is appropriate for both UW-Madison and other MyUW contexts (e.g. my.wisconsin or my.uwrf)
- **white-border:** If this attribute is present, the badge will have a white border (e.g. when using the badge on a dark background)

## Development and contribution

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```
