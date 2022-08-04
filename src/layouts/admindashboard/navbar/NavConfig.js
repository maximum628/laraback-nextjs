// routes
import { PATH_ADMIN } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  menuItem: getIcon('ic_menu_item'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'dashboard',
    items: [
      { title: 'dashboard', path: PATH_ADMIN.dashboard, icon: ICONS.dashboard },
      {
        title: 'store_offers',
        path: PATH_ADMIN.store_offers.stores,
        icon: ICONS.user,
        children: [
          { title: 'stores', path: PATH_ADMIN.store_offers.stores, icon: ICONS.ecommerce },
          { title: 'storecashback', path: PATH_ADMIN.store_offers.storecashback, icon: ICONS.analytics },
          { title: 'storecategories', path: PATH_ADMIN.store_offers.storecategories, icon: ICONS.banking },
          { title: 'couponoffers', path: PATH_ADMIN.store_offers.couponoffers, icon: ICONS.booking },
          { title: 'offercategories', path: PATH_ADMIN.store_offers.offercategories, icon: ICONS.booking },
          { title: 'dailydeals', path: PATH_ADMIN.store_offers.dailydeals, icon: ICONS.booking },
          { title: 'dealscategories', path: PATH_ADMIN.store_offers.dealscategories, icon: ICONS.booking },
        ],
      },
      {
        title: 'instaback promo',
        path: PATH_ADMIN.instaback_promo.instabackoffers,
        icon: ICONS.user,
        children: [
          { title: 'instabackoffers', path: PATH_ADMIN.instaback_promo.instabackoffers, icon: ICONS.ecommerce },
          { title: 'instabackclicklog', path: PATH_ADMIN.instaback_promo.instabackclicklog, icon: ICONS.analytics },
        ],
      },
      {
        title: 'cms',
        path: PATH_ADMIN.cms.menu_builder,
        icon: ICONS.user,
        children: [
          { title: 'menu_builder', path: PATH_ADMIN.cms.menu_builder, icon: ICONS.ecommerce },
          { title: 'pages', path: PATH_ADMIN.cms.pages, icon: ICONS.analytics },
          { title: 'content_blocks', path: PATH_ADMIN.cms.content_blocks, icon: ICONS.analytics },
          { title: 'user_dashboard_pages', path: PATH_ADMIN.cms.user_dashboard_pages, icon: ICONS.analytics },
          { title: 'footer', path: PATH_ADMIN.cms.footer, icon: ICONS.analytics },
          { title: 'pagewidget', path: PATH_ADMIN.cms.pagewidget, icon: ICONS.analytics },
          { title: 'faq', path: PATH_ADMIN.cms.faq, icon: ICONS.analytics },
          { title: 'faqcategories', path: PATH_ADMIN.cms.faqcategories, icon: ICONS.analytics },
        ],
      },
      {
        title: 'affiliate networks',
        path: PATH_ADMIN.affiliate_networks.affiliatenetworks,
        icon: ICONS.user,
        children: [
          { title: 'affiliatenetworks', path: PATH_ADMIN.affiliate_networks.affiliatenetworks, icon: ICONS.ecommerce },
          { title: 'campaignmaster', path: PATH_ADMIN.affiliate_networks.campaignmaster, icon: ICONS.analytics },
          { title: 'campaignrates', path: PATH_ADMIN.affiliate_networks.campaignrates, icon: ICONS.analytics },
          { title: 'postbacklog', path: PATH_ADMIN.affiliate_networks.postbacklog, icon: ICONS.analytics },
          { title: 'networkrun', path: PATH_ADMIN.affiliate_networks.networkrun, icon: ICONS.analytics },
          { title: 'networkcoupons', path: PATH_ADMIN.affiliate_networks.networkcoupons, icon: ICONS.analytics },
          { title: 'campaigncategories', path: PATH_ADMIN.affiliate_networks.campaigncategories, icon: ICONS.analytics },
          { title: 'couponcategories', path: PATH_ADMIN.affiliate_networks.couponcategories, icon: ICONS.analytics },
          { title: 'networkapilog', path: PATH_ADMIN.affiliate_networks.networkapilog, icon: ICONS.analytics },
        ],
      },
      {
        title: 'sales_cashback',
        path: PATH_ADMIN.sales_cashback.manualsalesimport,
        icon: ICONS.user,
        children: [
          { title: 'manualsalesimport', path: PATH_ADMIN.sales_cashback.manualsalesimport, icon: ICONS.ecommerce },
          { title: 'clicklog', path: PATH_ADMIN.sales_cashback.clicklog, icon: ICONS.analytics },
          { title: 'customconditions', path: PATH_ADMIN.sales_cashback.customconditions, icon: ICONS.analytics },
          { title: 'salestransaction', path: PATH_ADMIN.sales_cashback.salestransaction, icon: ICONS.analytics },
          { title: 'referraltransaction', path: PATH_ADMIN.sales_cashback.referraltransaction, icon: ICONS.analytics },
          { title: 'cashbacktransaction', path: PATH_ADMIN.sales_cashback.cashbacktransaction, icon: ICONS.analytics },
          { title: 'bonustransaction', path: PATH_ADMIN.sales_cashback.bonustransaction, icon: ICONS.analytics },
          { title: 'paymentmodes', path: PATH_ADMIN.sales_cashback.paymentmodes, icon: ICONS.analytics },
          { title: 'paymentmethodfields', path: PATH_ADMIN.sales_cashback.paymentmethodfields, icon: ICONS.analytics },
        ],
      },
      {
        title: 'users',
        path: PATH_ADMIN.users.users,
        icon: ICONS.user,
        children: [
          { title: 'users', path: PATH_ADMIN.users.users, icon: ICONS.ecommerce },
          { title: 'missingcbclaims', path: PATH_ADMIN.users.missingcbclaims, icon: ICONS.analytics },
          { title: 'userpaymentmodes', path: PATH_ADMIN.users.userpaymentmodes, icon: ICONS.analytics },
          { title: 'withdrawalrequests', path: PATH_ADMIN.users.withdrawalrequests, icon: ICONS.analytics },
          { title: 'userfavorites', path: PATH_ADMIN.users.userfavorites, icon: ICONS.analytics },
          { title: 'shareearnlinks', path: PATH_ADMIN.users.shareearnlinks, icon: ICONS.analytics },
          { title: 'contactform', path: PATH_ADMIN.users.contactform, icon: ICONS.analytics },
        ],
      },
      {
        title: 'reports_logs',
        path: PATH_ADMIN.reports_logs.smslog,
        icon: ICONS.user,
        children: [
          { title: 'smslog', path: PATH_ADMIN.reports_logs.smslog, icon: ICONS.ecommerce },
          { title: 'earningbynetwork', path: PATH_ADMIN.reports_logs.earningbynetwork, icon: ICONS.analytics },
          { title: 'referralinvitelog', path: PATH_ADMIN.reports_logs.referralinvitelog, icon: ICONS.analytics },
          { title: 'earnbystores', path: PATH_ADMIN.reports_logs.earnbystores, icon: ICONS.analytics },
          { title: 'referralfrauddetection', path: PATH_ADMIN.reports_logs.referralfrauddetection, icon: ICONS.analytics },
          { title: 'earnbyusers', path: PATH_ADMIN.reports_logs.earnbyusers, icon: ICONS.analytics },
        ],
      },
      {
        title: 'settings',
        path: PATH_ADMIN.settings.settings,
        icon: ICONS.user,
        children: [
          { title: 'settings', path: PATH_ADMIN.settings.settings, icon: ICONS.ecommerce },
          { title: 'seourlredirect', path: PATH_ADMIN.settings.seourlredirect, icon: ICONS.analytics },
          { title: 'labeltranslation', path: PATH_ADMIN.settings.labeltranslation, icon: ICONS.analytics },
          { title: 'emailtemplates', path: PATH_ADMIN.settings.emailtemplates, icon: ICONS.analytics },
          { title: 'emailtemplateeditor', path: PATH_ADMIN.settings.emailtemplateeditor, icon: ICONS.analytics },
          { title: 'sitemap', path: PATH_ADMIN.settings.sitemap, icon: ICONS.analytics },
          { title: 'currencymaster', path: PATH_ADMIN.settings.currencymaster, icon: ICONS.analytics },
          { title: 'countrymaster', path: PATH_ADMIN.settings.countrymaster, icon: ICONS.analytics },
        ],
      },
      {
        title: 'developer_setup',
        path: PATH_ADMIN.developer_setup.languagesmaster,
        icon: ICONS.user,
        children: [
          { title: 'languagesmaster', path: PATH_ADMIN.developer_setup.languagesmaster, icon: ICONS.ecommerce },
          { title: 'taskmanagement', path: PATH_ADMIN.developer_setup.taskmanagement, icon: ICONS.analytics },
          { title: 'webbackup', path: PATH_ADMIN.developer_setup.webbackup, icon: ICONS.analytics },
          { title: 'apibackup', path: PATH_ADMIN.developer_setup.apibackup, icon: ICONS.analytics },
        ],
      },
      {
        title: 'admin_panel',
        path: PATH_ADMIN.admin_panel.adminusergroup,
        icon: ICONS.user,
        children: [
          { title: 'adminusergroup', path: PATH_ADMIN.admin_panel.adminusergroup, icon: ICONS.ecommerce },
          { title: 'adminusers', path: PATH_ADMIN.admin_panel.adminusers, icon: ICONS.analytics },
        ],
      },
      { title: 'superadmin_control', path: PATH_ADMIN.superadmin_control.superadmin_control, icon: ICONS.ecommerce },
    ]
  },
];

export default navConfig;
