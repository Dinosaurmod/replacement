/*
   This extension was made with TurboBuilder!
   https://turbobuilder-steel.vercel.app/
   edited by thepython555 for safety
*/
(function(Scratch) {
    const variables = {};
    const blocks = [];
    const menus = [];

    class Extension {
        getInfo() {
            return {
                "id": "dinosavedata",
                "name": "Save Data",
                "color1": "#1c9c31",
                "color2": "#006900",
                "blocks": blocks
            }
        }
    }
    blocks.push({
        opcode: `DSD_see`,
        blockType: Scratch.BlockType.REPORTER,
        text: `What is stored in [seeid]`,
        arguments: {
            "seeid": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'hiya',
            },
        }
    });
    Extension.prototype[`DSD_see`] = (args, util) => {
        return localStorage.getItem("DINO-SAVE-EXT-" + args["seeid"])
    };

    blocks.push({
        opcode: `DSD_colorsave`,
        blockType: Scratch.BlockType.COMMAND,
        text: `Save id [colorid], with [color]`,
        arguments: {
            "colorid": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'purple',
            },
            "color": {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#b48abc',
            },
        }
    });
    Extension.prototype[`DSD_colorsave`] = (args, util) => {
        localStorage.setItem("DINO-SAVE-EXT-" + args["colorid"], args["color"])
    };

    blocks.push({
        opcode: `DSD_savedata`,
        blockType: Scratch.BlockType.COMMAND,
        text: `Save with id [id], with data [data]`,
        arguments: {
            "id": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'hiya',
            },
            "data": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'pal',
            },
        }
    });
    Extension.prototype[`DSD_savedata`] = (args, util) => {
        localStorage.setItem("DINO-SAVE-EXT-" + args["id"], args["data"])
    };

    '#b48abc';

    Scratch.extensions.register(new Extension());
})(Scratch);
