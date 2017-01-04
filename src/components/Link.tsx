import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {ILinkProps} from '../mixins/LinkMixin';
import {Badge} from './Badge';
import {Icon} from './Icon';
import {VueLink, VueLinkMixin} from '../../framework7-vue/framework7-vue';

import '../less/forms.less';

export const Link = reactifyF7Vue<ILinkProps>({
    component: VueLink,
    tag: 'f7-link',
    mixin: VueLinkMixin,
    instantiatedComponents: [
        Badge,
        Icon
    ],
    events: [
        'click'
    ]
});