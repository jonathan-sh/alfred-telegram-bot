module.exports = function (api) 
{
    api.cache(true);
    const presets = [["@babel/preset-env", { "targets": { "esmodules": true } }]];
    const plugins = ["@babel/plugin-proposal-class-properties"];
    process.argv.forEach((val) => 
    {
        let arg = val.toString().split("=");
        if (arg[0] == "profile") { global.profile = arg[1]; }
    });

    return { presets, plugins };
}