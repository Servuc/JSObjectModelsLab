(function () {
    'use strict';

    /* global test,equal,module,start,stop,window,$,ok,expect */


    /*---------------------------------*/
    /*     PART ONE: SIMPLE MODULE     */
    /*---------------------------------*/
    module('SpeedCheck Module');

    // TODO: Vérifier que la création d'objets SpeedCheck est Possible
    test('Test objects creating', function() {
      notEqual(createSpeedCheck(), null, 'Base constructor OKI');
      notEqual(createSpeedCheckFR(), null, 'Base constructor FR OKI');
      notEqual(createSpeedCheckBE(), null, 'Base constructor BE OKI');
    });



    // TODO: Vérifier que les objets créés directement avec creatSpeedCheck ne sont pas utilisables :
    test('Test base object editing', function() {
      var mySpeed = createSpeedCheck();
      throws(function() { mySpeed.speed = 42; }, "Speed editing - SHOULD throw a SpeedCheckError");
      throws(function() { mySpeed.licencePlate = '3-DFE-456'; }, "Licence plate editing - SHOULD throw a SpeedCheckError");

    });

    // TODO: Vérifier que TOUTES les fonctionnalités de createSpeedCheckFR sont correctes (effects de bords, valeurs négatives, etc.) pour tous les attributs (speed et licencePlate)
    test('SpeedCheck FR', function() {
      var mySpeed = createSpeedCheckFR();
      equal(mySpeed.speed, 0, "Base speed OKI");
      mySpeed.speed = 42;
      equal(mySpeed.speed, 42, "Modified speed OKI");
      throws(function() { mySpeed.speed = -42; }, "Invalid speed - negative - SHOULD throw a SpeedCheckError");
      equal(mySpeed.speed, 42, "Last good speed OKI");
      equal(mySpeed.infraction, false, "No infraction OKI (42km/h)");
      mySpeed.speed = 0;
      equal(mySpeed.infraction, false, "No infraction OKI (0km/h)");
      mySpeed.speed = 131;
      equal(mySpeed.infraction, true, "Infraction OKI (131km/h)");
      equal(mySpeed.licencePlate, "???", "Base licence plate");
      mySpeed.licencePlate = "BM-108-QE";
      equal(mySpeed.licencePlate, "BM-108-QE", "BM-108-QE licence plate");
      throws(function() { mySpeed.licencePlate = "123456"; }, "Invalid licence plate - 123456 - SHOULD throw a SpeedCheckError");
      equal(mySpeed.licencePlate, "BM-108-QE", "Last good licence plate");
      mySpeed.licencePlate = "BM108QE";
      equal(mySpeed.licencePlate, "BM108QE", "BM108QE licence plate without -");
      throws(function() { mySpeed.licencePlate = "123456"; }, "Invalid licence plate - 123456 - SHOULD throw a SpeedCheckError");
      equal(mySpeed.licencePlate, "BM108QE", "Last good licence plate without -");
      throws(function() { mySpeed.licencePlate = "B108QE"; }, "Invalid licence plate - B108QE - SHOULD throw a SpeedCheckError");
      throws(function() { mySpeed.licencePlate = "BM08QE"; }, "Invalid licence plate - BM08QE - SHOULD throw a SpeedCheckError");
      throws(function() { mySpeed.licencePlate = "BM108Q"; }, "Invalid licence plate - BM108Q - SHOULD throw a SpeedCheckError");
    });

    // TODO: Vérifier que TOUTES les fonctionnalités de createSpeedCheckBE sont correctes (effects de bords, valeurs négatives, etc.) pour tous les attributs (speed et licencePlate)
    test('SpeedCheck BE', function() {
      var mySpeed = createSpeedCheckBE();
      equal(mySpeed.speed, 0, "Base speed OKI");
      mySpeed.speed = 42;
      equal(mySpeed.speed, 42, "Modified speed OKI");
      throws(function() { mySpeed.speed = -42; }, "Invalid speed - negative - SHOULD throw a SpeedCheckError");
      equal(mySpeed.speed, 42, "Last good speed OKI");
      equal(mySpeed.infraction, false, "No infraction OKI (42km/h)");
      mySpeed.speed = 0;
      equal(mySpeed.infraction, false, "No infraction OKI (0km/h)");
      mySpeed.speed = 121;
      equal(mySpeed.infraction, true, "Infraction OKI (121km/h)");
      equal(mySpeed.licencePlate, "???", "Base licence plate");
      mySpeed.licencePlate = "1-ABC-123";
      equal(mySpeed.licencePlate, "1-ABC-123", "1-ABC-123 licence plate");
      throws(function() { mySpeed.licencePlate = "123456"; }, "Invalid licence plate - 123456 - SHOULD throw a SpeedCheckError");
      equal(mySpeed.licencePlate, "1-ABC-123", "Last good licence plate");
      throws(function() { mySpeed.licencePlate = "-ABC-123"; }, "Invalid licence plate - -ABC-123 - SHOULD throw a SpeedCheckError");
      throws(function() { mySpeed.licencePlate = "1-AC-123"; }, "Invalid licence plate - 1-AC-123 - SHOULD throw a SpeedCheckError");
      throws(function() { mySpeed.licencePlate = "1-ABC-23"; }, "Invalid licence plate - 1-ABC-23 - SHOULD throw a SpeedCheckError");
    });

    // TODO: Vérifier que la fonction toString() fonctionne bien.
    test('toString SpeedCheck', function() {
      var mySpeed = createSpeedCheckFR();
      mySpeed.speed = 135;
      mySpeed.licencePlate = "WD366MD";
      equal(mySpeed.toString(), "Véhicule WD366MD roule à 135 km/h. Infraction!", "FR : toString OKI (Véhicule WD366MD roule à 135 km/h. Infraction!)");
      mySpeed.speed = 105;
      equal(mySpeed.toString(), "Véhicule WD366MD roule à 105 km/h. Ça va, circulez...", "FR : toString OKI (Véhicule WD366MD roule à 105 km/h. Ça va, circulez...)");
      mySpeed = createSpeedCheckBE();
      mySpeed.speed = 121;
      mySpeed.licencePlate = "1-ABC-123";
      equal(mySpeed.toString(), "Véhicule 1-ABC-123 roule à 121 km/h. Infraction!", "BE : toString OKI (Véhicule 1-ABC-123 roule à 121 km/h. Infraction!)");
      mySpeed.speed = 101;
      equal(mySpeed.toString(), "Véhicule 1-ABC-123 roule à 101 km/h. Ça va, circulez...", "BE : toString OKI (Véhicule 1-ABC-123 roule à 101 km/h. Ça va, circulez...)");
    });



}());
