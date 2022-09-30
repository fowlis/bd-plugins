/**
 * @name Reminders
 * @author slughead
 * @description Add custom reminders to Discord!
 * @version 0.0.1
 */

 module.exports = class reminderPlugin {
    start() {
      // Called when the plugin is activated (including after reloads)
      BdApi.alert("Hello World!", "This is my first plugin!");
    } 

    stop() {
      // Called when the plugin is deactivated
    }
}