/**
 * @file mofron-comp-framelblauty/index.js
 * @brief frame labelauty component for mofron
 * @license MIT
 */
const Radio     = require('mofron-comp-frameradio');
const Labelauty = require('mofron-comp-labelauty');
const HrzPos    = require('mofron-effect-hrzpos');
const ConfArg   = mofron.class.ConfArg;
const comutl    = mofron.util.common;

module.exports = class extends Radio {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname('FrmLabelauty');
            
	    /* init config */
            this.confmng().add('radioPos', { type:'string', select:['none','left','center'], init:'left' });

	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    afterRender () {
        try {
            super.afterRender();
	    if ('left' === this.radioPos()) {
	        
	    } else if ('center' === this.radioPos()) {
	        let hrzpos = new HrzPos({ style:'margin', target:this.radio().styleDom() });
                this.radio().effect(hrzpos);
	        hrzpos.execute();
            }
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    radioPos (prm) {
        try {
            return this.confmng('radioPos',prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    radio (prm) {
        try {
            return this.innerComp('radio', prm, Labelauty);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

}
/* end of file */
