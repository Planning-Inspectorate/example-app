// configure Babel to compile JavaScript files for a Node.js environment
module.exports = {
    presets: [["@babel/preset-env", 
        { targets: { node: "current" } 
    }]],
};


