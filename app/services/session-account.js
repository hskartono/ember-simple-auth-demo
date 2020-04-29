import RSVP from 'rsvp';
import Service, { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  session: service('session'),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const accountId = this.get('session.data.authenticated.account_id');
      if (!isEmpty(accountId)) {
        this.get('store').find('user-info', accountId).then((userInfo) => {
          this.set('userInfo', userInfo);
          resolve();
        }, reject);
      } else {
        resolve();
      }

      // const access_token = this.get('session.data.authenticated.access_token');
      // if(!isEmpty(access_token)) {
      //   return this.store.queryRecord('core-user', { me: true })
      //     .then(user=>{
      //       this.set('coreUser', user);
      //       resolve();
      //     }, reject);
      // }
      // resolve();
    });
  }
});
