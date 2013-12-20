/**
 * AppController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/app/header`
   */
   header: function (req, res) {
      res.view() 
  },


  /**
   * Action blueprints:
   *    `/app/footer`
   */
   footer: function (req, res) {
    res.view()
  },


  /**
   * Action blueprints:
   *    `/app/body`
   */
   body: function (req, res) {
    res.view()
  },


  home: function (req, res) {
    res.view()
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to AppController)
   */
  _config: {}

  
};
