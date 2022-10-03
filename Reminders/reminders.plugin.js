/**
 * @name Reminders
 * @author slughead
 * @description Add custom reminders to Discord!
 * @version 0.0.1
 */

 module.exports = class reminderPlugin {
    start() {
    // Grabbing current date/time from system
    var today = new Date();
    var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" +today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    console.log(date + " " + time);
    } 

    stop() {
      // Called when the plugin is deactivated
    }
}