import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {

    L.mapbox.accessToken = 'pk.eyJ1IjoicmlwcGxlbWFpbCIsImEiOiJFa1kyeml3In0.t5lbvvQj6ufA6UVpV0mT4w';
    L.mapbox.map('mapbox-container', 'mapbox.streets').setView([34.8444, -82.3856], 13);
    // mapbox.comic may be too gimicky
    // mapbox.emerald may be best
    // mapbox.light good
    //
  }
});
