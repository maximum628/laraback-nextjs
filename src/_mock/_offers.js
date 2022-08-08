import _mock from './_mock';
import { randomNumberRange, randomInArray } from './funcs';
export const _OfferLists = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  // avatarUrl: _mock.image.avatar(index),
  no: Number(index)+1,
  name: _mock.name.fullName(index),
  cashbackenabled: _mock.boolean(index),
  cashbackpercent: 80.00,
  cashbacktype: 'cashback',
  isfeatured: _mock.boolean(index),
  visits: 0,
  rating: '0.0',
  cicks: index,
  status: randomInArray(['active', 'draft']),
  updatedat: '2022-08-01',
  role: _mock.role(index),
}));
export const _OfferCategories = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  // avatarUrl: _mock.image.avatar(index),
  no: Number(index)+1,
  name: _mock.name.fullName(index),
  parentid: '',
  isfeatured: _mock.boolean(index),
  visits: 0,
  storecount: '0.0',
  updatedat: '2022-08-01',
}));
