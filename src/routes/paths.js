// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_ADMIN = '/admin';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    banking: path(ROOTS_DASHBOARD, '/banking'),
    booking: path(ROOTS_DASHBOARD, '/booking'),
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all'),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    view: (name) => path(ROOTS_DASHBOARD, `/chat/${name}`),
  },
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  permissionDenied: path(ROOTS_DASHBOARD, '/permission-denied'),
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    new: path(ROOTS_DASHBOARD, '/user/new'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account'),
    edit: (name) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/e-commerce'),
    shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
    list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
    new: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    view: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}`),
    edit: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-blazer-low-77-vintage/edit'),
    demoView: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-air-force-1-ndestrukt'),
  },
  invoice: {
    root: path(ROOTS_DASHBOARD, '/invoice'),
    list: path(ROOTS_DASHBOARD, '/invoice/list'),
    new: path(ROOTS_DASHBOARD, '/invoice/new'),
    view: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}`),
    edit: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    new: path(ROOTS_DASHBOARD, '/blog/new'),
    view: (title) => path(ROOTS_DASHBOARD, `/blog/post/${title}`),
    demoView: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
  },
};
export const PATH_ADMIN = {
  root: path(ROOTS_ADMIN, '/app'),
  dashboard: path(ROOTS_ADMIN, '/app'),
  store_offers: {
    newstore: path(ROOTS_ADMIN, '/storesoffers/newstores'),
    edit: (name) => path(ROOTS_ADMIN, `/storesoffers/${name}/edit`),
    stores: path(ROOTS_ADMIN, '/storesoffers/stores'),
    storecashback: path(ROOTS_ADMIN, '/storesoffers/storecashback'),
    storecategories: path(ROOTS_ADMIN, '/storesoffers/storecategories'),
    couponoffers: path(ROOTS_ADMIN, '/storesoffers/couponoffers'),
    offercategories: path(ROOTS_ADMIN, '/storesoffers/offercategories'),
    dailydeals: path(ROOTS_ADMIN, '/storesoffers/dailydeals'),
    dealscategories: path(ROOTS_ADMIN, '/storesoffers/dealscategories'),
  },
  instaback_promo: {
    instabackoffers: path(ROOTS_ADMIN, '/instabackoffers'),
    instabackclicklog: path(ROOTS_ADMIN, '/instabackclicklog'),
  },
  cms: {
    menu_builder: path(ROOTS_ADMIN, '/menubuilder'),
    pages: path(ROOTS_ADMIN, '/pages'),
    content_blocks: path(ROOTS_ADMIN, '/contentblocks'),
    user_dashboard_pages: path(ROOTS_ADMIN, '/userdashboar_pages'),
    footer: path(ROOTS_ADMIN, '/footer'),
    pagewidget: path(ROOTS_ADMIN, '/pagewidget'),
    faq: path(ROOTS_ADMIN, '/faq'),
    faqcategories: path(ROOTS_ADMIN, '/faqcategories'),
  },
  affiliate_networks: {
    affiliatenetworks: path(ROOTS_ADMIN, '/affiliatenetworks'),
    campaignmaster: path(ROOTS_ADMIN, '/campaignmaster'),
    campaignrates: path(ROOTS_ADMIN, '/campaignrates'),
    postbacklog: path(ROOTS_ADMIN, '/postbacklog'),
    networkrun: path(ROOTS_ADMIN, '/networkrun'),
    networkcoupons: path(ROOTS_ADMIN, '/networkcoupons'),
    campaigncategories: path(ROOTS_ADMIN, '/campaigncategories'),
    couponcategories: path(ROOTS_ADMIN, '/couponcategories'),
    networkapilog: path(ROOTS_ADMIN, '/networkapilog'),
  },
  sales_cashback: {
    manualsalesimport: path(ROOTS_ADMIN, '/manualsalesimport'),
    clicklog: path(ROOTS_ADMIN, '/clicklog'),
    customconditions: path(ROOTS_ADMIN, '/customconditions'),
    salestransaction: path(ROOTS_ADMIN, '/salestransaction'),
    referraltransaction: path(ROOTS_ADMIN, '/referraltransaction'),
    cashbacktransaction: path(ROOTS_ADMIN, '/cashbacktransaction'),
    bonustransaction: path(ROOTS_ADMIN, '/bonustransaction'),
    paymentmodes: path(ROOTS_ADMIN, '/paymentmodes'),
    paymentmethodfields: path(ROOTS_ADMIN, '/paymentmethodfields'),
  },
  users: {
    users: path(ROOTS_ADMIN, '/users'),
    missingcbclaims: path(ROOTS_ADMIN, '/missingcbclaims'),
    userpaymentmodes: path(ROOTS_ADMIN, '/userpaymentmodes'),
    withdrawalrequests: path(ROOTS_ADMIN, '/withdrawalrequests'),
    userfavorites: path(ROOTS_ADMIN, '/userfavorites'),
    shareearnlinks: path(ROOTS_ADMIN, '/shareearnlinks'),
    contactform: path(ROOTS_ADMIN, '/contactform'),
  },
  reports_logs: {
    smslog: path(ROOTS_ADMIN, '/smslog'),
    earningbynetwork: path(ROOTS_ADMIN, '/earningbynetwork'),
    referralinvitelog: path(ROOTS_ADMIN, '/referralinvitelog'),
    earnbystores: path(ROOTS_ADMIN, '/earnbystores'),
    referralfrauddetection: path(ROOTS_ADMIN, '/referralfrauddetection'),
    earnbyusers: path(ROOTS_ADMIN, '/earnbyusers'),
  },
  settings: {
    settings: path(ROOTS_ADMIN, '/settings'),
    seourlredirect: path(ROOTS_ADMIN, '/seourlredirect'),
    labeltranslation: path(ROOTS_ADMIN, '/labeltranslation'),
    emailtemplates: path(ROOTS_ADMIN, '/emailtemplates'),
    emailtemplateeditor: path(ROOTS_ADMIN, '/emailtemplateeditor'),
    sitemap: path(ROOTS_ADMIN, '/sitemap'),
    currencymaster: path(ROOTS_ADMIN, '/currencymaster'),
    countrymaster: path(ROOTS_ADMIN, '/countrymaster'),
  },
  developer_setup: {
    languagesmaster: path(ROOTS_ADMIN, '/languagesmaster'),
    taskmanagement: path(ROOTS_ADMIN, '/taskmanagement'),
    webbackup: path(ROOTS_ADMIN, '/webbackup'),
    apibackup: path(ROOTS_ADMIN, '/apibackup'),
  },
  admin_panel: {
    adminusergroup: path(ROOTS_ADMIN, '/adminusergroup'),
    adminusers: path(ROOTS_ADMIN, '/adminusers'),
  },
  superadmin_control: {
    superadmin_control: path(ROOTS_ADMIN, '/superadmin_control'),
  }
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
