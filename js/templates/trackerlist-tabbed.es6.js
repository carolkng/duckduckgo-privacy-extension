const bel = require('bel');
const trackerListItems = require('./shared/trackerlist-items.es6.js');

module.exports = function () {

    if (!this.model) {

        return bel`<section class="sliding-subview sliding-subview--trackers-blocked sliding-subview--has-fixed-header">
            <nav class="sliding-subview__header card">
                <a href="#" class="sliding-subview__header__title sliding-subview__header__title--has-icon js-sliding-subview-close">
                    <span class="icon icon__arrow icon__arrow--left pull-left"></span>
                    Trackers
                </a>
                <ul class="sliding-subview__header__tabbed-nav">
                    <a href="#" class="js-nav-tab js-nav-tab-page">Page</a>
                    <a href="#" class="js-nav-tab js-nav-tab-all">All Time</a>
                </ul>
            </nav>
        </section>`;

    } else if (this.model.companyListMap) {

        return bel`<ol class="menu-list top-blocked__list card js-top-blocked-list">
            ${trackerListItems(this.model.companyListMap)}
        </ol>`;
    }

}

