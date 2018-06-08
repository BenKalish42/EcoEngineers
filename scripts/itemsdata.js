var items_data = [
	{
		"id": "can",
		"name": "Aluminum Cans",
		"recyclable": true,
		"special": false,
		"where": "Aluminum cans can be recycled in any regular blue-colored recycling bin.",
		"facts": "Americans throw away over $1 billion worth of aluminum cans every year. Discarded aluminum is more valuable than any other item in a recycling bin. Aluminum cans are 100% recyclable."
	},
	{
		"id": "paper",
		"name": "Paper",
		"recyclable": true,
		"special": false,
		"where": "Any clean type of paper or cardboard product can be recycled in any of the blue recycling bins.",
		"facts": "You cannot recycle dirty paper or cardboard. Making paper from recycled paper reduces the related contribution to air pollution by 95%. Recycling 1 ton of cardboard saves 46 gallons of oil."
	},
	{
		"id": "cardboard",
		"name": "Cardboard",
		"recyclable": true,
		"special": false,
		"where": "Any clean type of paper or cardboard product can be recycled in any of the blue recycling bins.",
		"facts": "You cannot recycle dirty paper or cardboard. Making paper from recycled paper reduces the related contribution to air pollution by 95%. Recycling 1 ton of cardboard saves 46 gallons of oil."
	},
	{
		"id": "plasticbottle",
		"name": "Plastic Bottles",
		"recyclable": true,
		"special": false,
		"where": "Plastics 1-5 are recyclable in any of the blue recycling bins.",
		"facts": "Only plastics 1-5 are recyclable: bottles, jugs, yogurt cups/tubs, 6-pack rings. Recycling one ton of plastic bottles saves the equivalent energy usage of a two person household for one year."
	},
	{
		"id": "glassbottle",
		"name": "Glass Bottles",
		"recyclable": true,
		"special": false,
		"where": "Plastics 1-5 are recyclable in any of the blue recycling bins.",
		"facts": "Only plastics 1-5 are recyclable: bottles, jugs, yogurt cups/tubs, 6-pack rings. Recycling one ton of plastic bottles saves the equivalent energy usage of a two person household for one year."
	},
	{
		"id": "glassjar",
		"name": "Glass Jars",
		"recyclable": true,
		"special": false,
		"where": "Plastics 1-5 are recyclable in any of the blue recycling bins.",
		"facts": "Only plastics 1-5 are recyclable: bottles, jugs, yogurt cups/tubs, 6-pack rings. Recycling one ton of plastic bottles saves the equivalent energy usage of a two person household for one year."
	},
	{
		"id": "battery",
		"name": "Batteries",
		"recyclable": false,
		"special": true,
		"where": "The Office of Research Safety (ORS) handles all battery waste, including lead-acid (automotive), mercury, lithium containing, alkaline (ordinary household), and rechargeable batteries. Batteries can be taken to Gwen Sullivan at the Technological Institute NG-71. ORS offers collection boxes for workspaces that must be picked up and returned to ORS.",
		"facts": "Recycling batteries helps conservation of natural resources, such as metals and minerals. It also helps prevent pollution by reducing the need to collect new, raw materials. It reduces greenhouse gas emissions that contribute to global climate change."
	},
	{
		"id": "plasticbag",
		"name": "Plastic Bags",
		"recyclable": false,
		"special": true,
		"where": "Staff: Place plastic bags in the bin on the ground floor of Norris, near the elevator during the academic year. Most grocery stores also take plastic bags for recycling. Students: Plastic bags are collected by Eco-Reps in the residence halls, who take them to the Recycling Hub on the ground floor of Norris, to the left of the elevator. The Associated Student Government Sustainability Committee collects the bags for recycling during the academic year.﻿ Alternatively bags can be taken to most grocery stores for recycling.",
		"facts": "Contrary to the slide show, according to the U.S. Environmental Protection Agency, about 10 percent of plastic bags and film are recycled annually in this country. More importantly, plastic bag recycling is relatively new, and the rates are growing rapidly. Between 2005 and 2006, the recycling of plastic bags and film shot up 24 percent to reach 812 million pounds in a single year. Of course, we can do better. With more and more grocery and retail chains implementing plastic bag recycling programs, and with some state and local governments taking action to promote plastic bag recycling, these numbers will continue to increase. In addition, over 90 percent of U.S. consumers reuse their bags for things like household waste basket liners and pet pick-up, but even so, plastic bags make up a small fraction (less than 0.5%) of the waste stream."
	},
	{
		"id": "inkcartridge",
		"name": "Ink Cartridges",
		"recyclable": false,
		"special": true,
		"where": "Staff: Laser and ink jet cartridges can be sent in a box or envelope via campus mail (attn: Cartridge Recycling) to the addresses below. For questions or cartridge mailing labels, contact Northwestern Recycling at 847-467-1374. \nEvanston Campus: Mail Services, 2020 Ridge Ave., EV 4314\nChicago Campus: Mail Services, 300 E. Superior, B-601 CH\nStudents: Ink cartridges are collected for recycling in the Kemper and Foster-Walker residence hall mailrooms during the academic year. This effort is brought to you by Eco-Reps.﻿",
		"facts": "Green House Gases emissions from manufacturing a single mono toner cartridge have been calculated to be approximately 4.8 kg CO2; per cartridge. This is for the cartridge only and excludes the toner inside. The Life Cycle Assessment of toner reveals that the GHG emissions are approximately 16 metric tons per 1 metric ton toner produced. On average a cartridge with a yield of 5000 pages contains 200 grams toner. This equals 3.2 kg CO2 emission per cartridge."
	},
	{
		"id": "computer",
		"name": "Computers",
		"recyclable": false,
		"special": true,
		"where": "Computers, printers, and anything with a plug can be recycled through the eCycling program. Lab equipment is included in e-waste collections. Check out the Lab Equipment Disposal Guide for more information.",
		"facts": "E-waste represents 2% of America's trash in landfills, but it equals 70% of overall toxic waste. 20 to 50 million metric tons of e-waste are disposed worldwide every year. Cell phones and other electronic items contain high amounts of precious metals like gold or silver."
	},
	{
		"id": "electronic",
		"name": "Electronics",
		"recyclable": false,
		"special": true,
		"where": "Computers, printers, and anything with a plug can be recycled through the eCycling program. Lab equipment is included in e-waste collections. Check out the Lab Equipment Disposal Guide for more information.",
		"facts": "E-waste represents 2% of America's trash in landfills, but it equals 70% of overall toxic waste. 20 to 50 million metric tons of e-waste are disposed worldwide every year. Cell phones and other electronic items contain high amounts of precious metals like gold or silver."
	},
	{
		"id": "lightbulb",
		"name": "Light Bulbs",
		"recyclable": false,
		"special": true,
		"where": "Staff: Light bulbs are replaced by custodians and electricians who collect them for proper handling. If you have a spent lamp, please contact Facilities Management.\nStudents: Place light bulbs in a sealed bag and give them to Housekeeping staff for proper disposal.﻿",
		"facts": "It is estimated that 670 million fluorescent light bulbs are placed into our environment annually in the United States alone. All of these light bulbs can potentially cause the release of as much as 4 tons of mercury each year into our environment."
	},
	{
		"id": "solocup",
		"name": "Solo Cups",
		"recyclable": false,
		"special": false,
		"where": "Throw these out in any trash can.",
		"facts": "Plastics will last forever because they are not biodegradable. Enough plastic is thrown away each year to circle the earth 4 times."
	},
	{
		"id": "papertowel",
		"name": "Paper Towels",
		"recyclable": false,
		"special": false,
		"where": "Throw these out in any trash can.",
		"facts": "Switching to reusable napkins will save you money over time and is much better for the environment."
	},
	{
		"id": "foodwrapper",
		"name": "Food Wrappers",
		"recyclable": false,
		"special": false,
		"where": "Throw these out in any trash can.",
		"facts": "The most recently compiled waste-generation statistics indicate that 245.7 million tons of MSW were generated in 2005, a decrease of 1.6 million tons since 2004 (EPA, 2006). The decrease in waste generation is partly attributable to the decreased rate of individual waste generation."
	},
	{
		"id": "papercup",
		"name": "Paper Cups",
		"recyclable": false,
		"special": false,
		"where": "Throw these out in any trash can.",
		"facts": "According to a study conducted by Starbucks and the Alliance for the Environmental Innovation (April 2000), each paper cup manufactured is responsible for 0.24 lbs of CO2 emissions."
	},
	{
		"id": "plasticbag",
		"name": "Plastic Bags",
		"recyclable": false,
		"special": false,
		"where": "Throw these out in any trash can.",
		"facts": "Each day the United States throws away enough trash to fill 63,000 garbage trucks. Almost 1/3 of the waste generated in the U.S. is packaging. Americans throw away 2.5 million plastic bottles every hour. Every year, Americans make enough plastic film to shrink-wrap the state of Texas."
	},
]