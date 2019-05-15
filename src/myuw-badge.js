/**
 * MyUWBadge
 * From https://material.io/design/components/banners.html:
 * A banner displays an important, succinct message, and provides actions for users to 
 * address (or dismiss the banner). It requires a user action to be dismissed.
 * 
 * Banners should be displayed at the top of the screen, below a top app bar. 
 * They are persistent and nonmodal, allowing the user to either ignore them or interact with them at any time.
 */
import tpl from './myuw-badge.html';
import verlagTpl from './fonts.html';
import crestTpl from './crest.html';

const fonts = document.createElement('template');
fonts.setAttribute('style', 'display: none;');
fonts.innerHTML = verlagTpl;
document.head.appendChild(fonts.content);

class MyUWBadge extends HTMLElement {

  constructor() {
    super();

    // Create a shadowroot for this element
    this.attachShadow({mode: 'open'});

    // Append the custom HTML to the shadowroot
    this.shadowRoot.appendChild(MyUWBadge.template.content.cloneNode(true));

    this.crestTemplate = document.createElement('template');
    this.crestTemplate.setAttribute('style', 'display: none;');
    this.crestTemplate.innerHTML = crestTpl;
  }

  static get observedAttributes() {
    return [
      'url',
      'dark-theme',
      'white-border'
    ];
  }

  /**
  *   Web component lifecycle hook to update changed properties
  */
  attributeChangedCallback(name, oldValue, newValue) {
    // Update the attribute internally
    this[name] = newValue;
    // Update the component
    if (this.$badge) {
      this.updateComponent();
    }
  }

  /**
  *   When component is first attached to the DOM,
  *   get its defined attributes and set up listeners
  */
  connectedCallback() {
    // Get all attributes
    this['url']   = this.getAttribute('url') || '';
    
    this.$urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    this.$badge = this.shadowRoot.getElementById('badge');
    this.$crest = this.shadowRoot.getElementById('crest');
    
    if (this.$badge) {
      this.updateComponent();
    }
  }

  /**
  *   Update the component state
  */
  updateComponent() {
    // Set crest
    this.$crest.appendChild(this.crestTemplate.content);
    
    // Set border
    if (this.hasAttribute('white-border')) {
      this.$badge.style.border = '1px solid white';
    } else {
      this.$badge.style.border = 'none';
    }

    // Set black theme
    if (this.hasAttribute('dark-theme')) {
      this.$badge.className = 'theme-dark';
    } else {
      this.$badge.className = '';
    }

    // Set url
    if (this['url'].match(this.$urlRegex)) {
      this.$badge.setAttribute('href', this['url']);
      this.$badge.style.opacity = '1';
    } else {
      this.$badge.setAttribute('href', this['url']);
      console.warn(`myuw-badge: The url attribute did not match a generic url regex check (url: ${this['url']})`);
    }
  }
}

MyUWBadge.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-badge', MyUWBadge);
