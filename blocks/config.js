module.exports = [
	{
		name : "BH1750FVI",
		blocks : [
			"BH1750FVI_init",
            "BH1750FVI_GetLightIntensity",
            //"TCS34725_Color_Sensor_Read",
            /*{
                    xml : 
                    `<block type="TCS34725_Color_Sensor_Read">
                        <value name="_Color">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
            }, */  	
		]
	}	
];