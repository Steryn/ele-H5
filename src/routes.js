import msite from './components/msite'


import content from './components/content'

let routes = [{
  path: '/',
  name: 'msite',
  component: msite
}, {
  path: '/content',
  name: 'content',
  component: content
}];
export default routes;
