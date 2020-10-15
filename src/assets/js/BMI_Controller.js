var app = angular.module("BMI_App", []);
app.controller("BMI_Controller", function($scope) {
    $scope.lang = "pl";
    $scope.page = "home";

    function defaultValues() {
        $scope.pageTitle = "Kalkulator wskaźnika BMI";
        $scope.weightPlaceholder = "waga w kilogramach";
        $scope.heightPlaceholder = "wzrost w centymetrach";
        $scope.yourBMI_label = "Twoje BMI: ";
        $scope.tabHeadLabel = [
            "Zakresy wartości BMI",
            "Znaczenie zakresu"
        ];
        $scope.tableOfBMI = [
            ["mniej niż 16",  "wygłodzenie"],
            ["16 - 16.99",    "wychudzenie"],
            ["17 - 18.49",    "niedowaga"],
            ["18.5 - 24.99",  "wartość prawidłowa"],
            ["25 - 29.99",    "nadwaga"],
            ["30 - 34.99",    "I stopień otyłości"],
            ["35 - 39.99",    "II stopień otyłości"],
            ["powyżej 40",    "otyłość skrajna"]
        ];
        $scope.definitionOfBMI = "Wskaźnik masy ciała (ang. body mass " +
            "index, BMI), także wskaźnik Queteleta II – współczynnik " +
            "powstały przez podzielenie masy ciała podanej w kilogramach " +
            "przez kwadrat wysokości podanej w metrach. Klasyfikacja " +
            "(zakres wartości) wskaźnika BMI została opracowana wyłącznie " +
            "dla dorosłych i nie może być stosowana u dzieci.";
        $scope.graphicsLinkLabel = "Grafika w tle pobrana z www.maxpixels.net";
        $scope.iconsLinkLabel = "Ikony flag pobrane z www.iconfinder.com";
        $scope.faviconLinkLabel = "Favicon stworzony przez Freepik z www.flaticon.com";
    }
    defaultValues();

    $scope.changeLanguage = function() {
        if ($scope.lang === "pl") {
            defaultValues();
        } else if ($scope.lang === "eng") {
            $scope.pageTitle = "BMI Calculator";
            $scope.weightPlaceholder = "weight in kilograms";
            $scope.heightPlaceholder = "height in centimeters";
            $scope.yourBMI_label = "Your BMI: ";
            $scope.tabHeadLabel = [
                "Range of BMI values",
                "Meaning of range"
            ];
            $scope.tableOfBMI = [
                ["less than 16",  "starvation"],
                ["16 - 16.99",    "emaciation"],
                ["17 - 18.49",    "underweight"],
                ["18.5 - 24.99",  "correct value"],
                ["25 - 29.99",    "overweight"],
                ["30 - 34.99",    "I degree of obesity"],
                ["35 - 39.99",    "II degree of obesity"],
                ["more than 40",  "extreme obesity"]
            ];
            $scope.definitionOfBMI = "Body mass index (BMI) is a value derived " +
                "from the mass (weight) and height of a person. The BMI is defined " +
                "as the body mass divided by the square of the body height, and is " +
                "universally expressed in units of kg/m2, resulting from mass in" +
                "kilograms and height in metres.";
            $scope.graphicsLinkLabel = "Background image downloaded from www.maxpixels.net";
            $scope.iconsLinkLabel = "Flag icons downloaded from www.iconfinder.com";
            $scope.faviconLinkLabel = "Favicon made by Freepik from www.flaticon.com";
        }
    };
});
