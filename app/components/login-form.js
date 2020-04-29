import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  session: service('session'),

  actions: {
    authenticateWithOAuth2() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password)
        .catch((e) => {
          if(e && e.responseJSON)
            this.set('errorMessage', e.responseJSON.error.message);
          else
            this.set('errorMessage', e.status);
        });
    }
  }
});
