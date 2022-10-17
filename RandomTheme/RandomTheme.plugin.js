/**
 * @name RandomTheme
 * @author slughead
 * @description Applies a random theme on client start/reload from your folder with options to exclude files.
 * @version 0.0.1
 */
 module.exports = class randomThemePlugin {
  start() {
    let themes = BdApi.Themes.getAll();
    let randomTheme = themes[Math.floor(Math.random() * themes.length)];
    console.log(`my choice is ${randomTheme.id}`);
    themes.forEach(theme => {
        if (theme === randomTheme) return;
        BdApi.Themes.disable(theme);  
    });
    BdApi.Themes.enable(randomTheme);
}
stop() { }
};