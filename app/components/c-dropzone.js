import Ember from 'ember';

export default Ember.Component.extend({
  willInsertElement: function(){
    // this gets rid of the auto discovery problem
    Dropzone.autoDiscover = false,
    // Instantiation of the dropzone container
    this.$('#dropzone-container').dropzone({ url: "/file/post" });
  }
});
