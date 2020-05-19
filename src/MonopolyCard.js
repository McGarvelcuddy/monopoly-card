import { html, css, LitElement } from 'lit-element';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class MonopolyCard extends SimpleColors {
    static get styles() {
        return [
            ...super.styles,
            css `
      :host {
        display: block;
        padding: 10px;
        color: var(--monopoly-card-text-color, #000);
      }
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 300px;
        border-layout: square;
        padding: 10px;
      }
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
      .outline {
        border-layout: square;
        border: 1px solid black;
        padding: 15px;
      }
      .titleblock {
        border-layout: square;
        border: 1px solid black;
        padding: 10px;
        background-color: var(--simple-colors-default-theme-accent-5);
      }
      .listcontainer {
        display: flex;
      }
      .itemdescription, .title {
        text-align: center;
        
      }
      .slotbody {
        flex: 1;
      }
      .slotdetail {
        flex: 0;
        text-align: right;
      }
    `
        ];
    }

    static get properties() {
        return {
            itemdescription: { type: String },
            title: { type: String },
        };
    }

    constructor() {
        super();
        this.title = 'Title';
    }

    render() {
            return html `
      <div class="card">
        <div class="outline">
          <div class="titleblock">
            ${this.itemdescription ? html`<h4 class="itemdescription">${this.itemdescription}</h4>` : html``}
            <h1 class="title">${this.title}</h1>
          </div>
          <div class="listcontainer">
            <div class="slotbody">
              <slot  name="body"></slot>
            </div>
            <div class="slotdetail">
              <slot  name="listdetail"></slot>
            </div>
          </div>
          <hr><slot name="bottomdetails"></slot>
        </div>
      </div>
    `;
    }
}