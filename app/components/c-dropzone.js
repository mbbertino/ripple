import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){

    // this gets rid of the auto discovery problem
    Dropzone.autoDiscover = false,

    // Instantiation of the dropzone container
    this.$('#dropzone-container').dropzone({
      thumbnailWidth: 945,
      thumbnailHeight: 525,
      url: "/file/post",
      // clickable: false

    });

  }
});
