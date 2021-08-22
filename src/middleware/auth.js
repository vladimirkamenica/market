import store from '@/store/Store';

export default function auth({ next, router }) {
    if (!store.getAuth) {
      return router.push({ name: 'Home' });
    }
  
    return next();
  }