Blockly.Blocks['BH1750FVI_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup BH1750FVI I2C0")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Setup BH1750FVI I2C0");
 this.setHelpUrl("");
  }
};
/*Blockly.Blocks['BH1750FVI_GetLightIntensity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS34725_getRGB"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("TCS34725_getRGB");
 this.setHelpUrl("");
  }
};
*/
Blockly.Blocks['BH1750FVI_GetLightIntensity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BH1750FVI_GetLightIntensity")
    this.setOutput(true, "Number");
    this.setColour(135);
 this.setTooltip("BH1750FVI_GetLightIntensity");
 this.setHelpUrl("");
  }
};

