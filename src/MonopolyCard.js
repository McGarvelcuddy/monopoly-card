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
        padding: 10px;
      }
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
      .outline {
        border: 1px solid black;
        padding: 15px;
      }
      .titleblock {
        border: 1px solid black;
        padding: 10px;
        background-color: var(--simple-colors-default-theme-accent-8);
      }
      .listcontainer {
        display: flex;
      }
      .itemdescription, .title {
        text-align: center;
        color: var(--simple-colors-default-theme-accent-2);
      }
      .itemdescription {
        font-size: 15px;
      }
      .title {
        font-size: 25px;
      }
      .slotbody {
        flex: 1;
      }
      .slotdetail {
        text-align: right;
      }
    `
        ];
    }

    static get properties() {
        return {
            itemDescription: { type: String },
            itemDescription: { attribute: "item-description" },
            title: { type: String },
            font: { type: String },
        };
    }

    constructor() {
        super();
        this.title = 'Title';
        this.font = 'arial'
    }

    render() {
            return html `
      <div class="card">
        <div class="outline">
          <div class="titleblock">
            ${this.itemDescription ? html`<div class="itemdescription" style="font-family: ${this.font}">${this.itemDescription}</div><br>` : html``}
            <div class="title" style="font-family: ${this.font}">${this.title}</div>
          </div>
          <div class="listcontainer">
            <div class="slotbody">
              <slot  name="body"></slot>
            </div>
            <div class="slotdetail">
              <slot name="listdetail"></slot>
            </div>
          </div>
          <hr><slot name="bottomdetails"></slot>
        </div>
      </div>
    `;
    }
}