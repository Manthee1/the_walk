
const views = {
    startingView: "Game",
    _: "./views/",

    list: {
        MainMenu: { src: "MainMenu.html" },
        Game: { src: "Game.html" }
    }
}

const components = {
    _: "./components/",

    styles: {},

    list: {
        MainMenu: { src: "MainMenu.html" },
        Nav: { src: "Nav.html" },
        StatsList: { src: "StatsList.html" },
        StoryLog: { src: "StoryLog.html" },
        TextInput: { src: "TextInput.html" },
        Map: { src: "Map.html" },
        Options: { src: "Options.html" }
    },

    parse: async function (componentName) {
        if (!isDefined(document.querySelector(componentName))) {
            return true
        }
        if (isDefined(this.list[componentName])) {
            let componentPath = this.list[componentName].src

            console.log("Parsing", componentPath);
            let componentData = await fetch(this._ + componentPath)
            let componentText = await componentData.text()
            document.querySelectorAll(componentName).forEach(x => x.outerHTML = componentText)
        } else throw `There is no entry for ${componentName} in the component list`
    },

    run: async function () {
        for (const component of Object.keys(this.list)) {
            let componentName = component
            await this.parse(componentName) // Await so that the components load before we parse the import tags
        }
        for (let i = 0; isDefined(document.querySelector('import')) && i < 10; i++) {
            console.log(isDefined(document.querySelector('import')));
            await this.import();
        }
    },



    import: async function () {
        return new Promise(done => {
            document.querySelectorAll('import').forEach(async x => {
                let type = x.getAttribute('type').trim()
                let src = x.getAttribute('src').trim()
                switch (type) {
                    case "css":
                        if (!isDefined(this.styles[src])) {
                            document.querySelector('head').insertAdjacentHTML('beforeend', `<link type="text/css" rel="stylesheet" href=${src}>`)
                            this.styles[src] = true;
                        }
                        break;
                    case "components":
                    case "component":
                        let componentsList = src.split(" ");
                        for (let componentName of componentsList) {
                            console.log("Component Import ", componentName);
                            componentName = componentName.trim();
                            await this.parse(componentName);
                        }
                        break;
                    default:
                        break;
                }
                x.remove()
                done()
            });
        });
    },



}

router = {

    setView: async function (name) {
        if (isDefined(views.list[name])) {
            let viewData = await fetch(views._ + views.list[name].src);
            document.querySelector("body").innerHTML = await viewData.text()
            components.run();
            return true
        }
        console.error(`The view element '${name}' is not defined`);
    },
}

window.onload = async (event) => {
    router.setView(views.startingView)
}