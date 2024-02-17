const generateNitro = require("./generateNitro")

generateNitro(process.env.npm_config_number ?? 1, process.env.npm_config_path)