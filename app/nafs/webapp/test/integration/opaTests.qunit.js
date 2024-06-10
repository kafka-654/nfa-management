sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/nafs/test/integration/FirstJourney',
		'ns/nafs/test/integration/pages/NfasList',
		'ns/nafs/test/integration/pages/NfasObjectPage'
    ],
    function(JourneyRunner, opaJourney, NfasList, NfasObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/nafs') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheNfasList: NfasList,
					onTheNfasObjectPage: NfasObjectPage
                }
            },
            opaJourney.run
        );
    }
);