nanoMedForLife.onReceivedNumberHandler(0, function (advancerSpeed) {
	
})
nanoMedForLife.setRadioGroup(1)
basic.forever(function () {
    nanoMedForLife.setAdvancerSpeed()
    basic.pause(50)
})
