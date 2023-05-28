import Blockly from 'blockly';
var toolbox = document.getElementById("toolbox-xml");

const theme = Blockly.Theme.defineTheme('blockify-classic', {
	'base': Blockly.Themes.Classic,
	'blockStyles': {
	   'logic_block	s': {
		//   'colourPrimary': '#4a148c'
	   },
	   'math_blocks': {}
	},
	'categoryStyles': {},
	'componentStyles': {},
	'fontStyle': {size:13, family: "sans"},
	'startHats': true
 });

var options = { 
	toolbox : toolbox,
	theme:theme,
	collapse : false, 
	comments : true, 
	disable : true, 
	maxBlocks : Infinity, 
	trashcan : true, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : false, 
	sounds : true,
	oneBasedIndex : true, 
	grid : {
		spacing : 32, 
		length : 12, 
		colour : '#888', 
		snap : true
	}
};

class CustomCategory extends Blockly.ToolboxCategory {
	/**
	* Constructor for a custom category.
	* @override
	*/
	constructor(categoryDef, toolbox, opt_parent) {
		super(categoryDef, toolbox, opt_parent);
	}
}
Blockly.registry.register(
	Blockly.registry.Type.TOOLBOX_ITEM,
	Blockly.ToolboxCategory.registrationName,
	CustomCategory, true);

Blockly.Blocks['on_ready'] = {
	init: function() {
		this.appendStatementInput("block")
		.setCheck(null)
		.appendField("On Ready");
		this.setColour(150);
		this.setTooltip("Runs when this component is ready.");
		this.setHelpUrl("");
	}
};

/* Inject your workspace */ 
var workspace = Blockly.inject("blockly-workspace", options);
/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("toolbox-xml"); 
/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);


