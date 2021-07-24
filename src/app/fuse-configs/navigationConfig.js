import { authRoles } from 'app/auth';
import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'dashboards',
				title: '운동 통계',
				translate: '운동 통계',
				type: 'collapse',
				icon: 'dashboard',
				url: '/apps/dashboards/project',
			},
			{
				id: 'calendar',
				title: '운동 달력',
				translate: '운동 달력',
				type: 'item',
				icon: 'today',
				url: '/apps/calendar'
			},
			{
				id: 'feed',
				title: '운동 FEEDS',
				translate: '운동 FEEDS',
				type: 'item',
				icon: 'note',
				url: '/apps/notes'
			}
		]
	}
];

export default navigationConfig;
