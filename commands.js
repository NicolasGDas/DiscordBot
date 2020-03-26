const ascii = require("ascii-table");
const fs = require("fs");
const path = require("path");
function find_nested(dir, pattern) {
	let results = [];

	fs.readdirSync(dir).forEach(inner_dir => {
		inner_dir = path.resolve(dir, inner_dir);
		const stat = fs.statSync(inner_dir);

		if (stat.isDirectory()) {
			results = results.concat(find_nested(inner_dir, pattern));
		}

		if (stat.isFile() && inner_dir.endsWith(pattern)) {
			results.push(inner_dir);
		}
	});

	return results;
} 
    const comandfiles = find_nested("./commands", ".js");
const table = new ascii().setHeading("Command", "Load status");
module.exports = (bot) => {
    comandfiles.forEach(File =>{
        let pull = require(File);

            if(pull.name){
                bot.commands.set(pull.name, pull);
                table.addRow(File, 'check');
            }else {
                table.addRow(File,'Err -> missing something?');
            }
            if(pull.alliases && Array.isArray(pull)){
                pull.alliases.forEach(alias => bot.alliases.set(alias, pull.name));
            }
    });

    console.log(table.toString());
}