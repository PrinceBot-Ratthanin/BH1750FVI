Blockly.JavaScript['BH1750FVI_init'] = function(block) {
  /*var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var number_RX = block.getFieldValue('RX');
  var number_TX = block.getFieldValue('TX');*/
  var code = `#EXTINC #include <BH1750FVI.h>\n#END
#VARIABLE BH1750FVI LightSensor(BH1750FVI::k_DevModeContLowRes);#END
LightSensor.begin();`;
  return code;
};
Blockly.JavaScript['BH1750FVI_GetLightIntensity'] = function(block) {
  var dropdown_color = block.getFieldValue('_Color');
  var code = 'LightSensor.GetLightIntensity()\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

