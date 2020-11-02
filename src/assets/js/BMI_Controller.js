/* jshint esversion: 6 */

var app = angular.module("BMI_App", []);
app.controller("BMI_Controller", ($scope) => {
    $scope.lang = "pl";
    $scope.page = "home";
    $scope.bmi = 0;

    const defaultValues = () => {
        $scope.pageTitle = "Kalkulator wskaźnika BMI";
        $scope.weightPlaceholder = "waga w kilogramach";
        $scope.heightPlaceholder = "wzrost w centymetrach";
        $scope.yourBMI_label = "Twoje BMI: ";
        $scope.tabHeadLabel = [
            "Zakresy wartości BMI",
            "Znaczenie zakresu"
        ];
        $scope.tableOfBMI = [
            { from: 0.00, to: 15.99, label: "wygłodzenie" },
            { from: 16.00, to: 16.99, label: "wychudzenie" },
            { from: 17.00, to: 18.49, label: "niedowaga" },
            { from: 18.50, to: 24.99, label: "wartość prawidłowa" },
            { from: 25.00, to: 29.99, label: "nadwaga" },
            { from: 30.00, to: 34.99, label: "I stopień otyłości" },
            { from: 35.00, to: 39.99, label: "II stopień otyłości" },
            { from: 40.00, to: Infinity, label: "otyłość skrajna" }
        ];
        $scope.definitionOfBMI = "Wskaźnik masy ciała (ang. body mass " +
            "index, BMI), także wskaźnik Queteleta II – współczynnik " +
            "powstały przez podzielenie masy ciała podanej w kilogramach " +
            "przez kwadrat wysokości podanej w metrach. Klasyfikacja " +
            "(zakres wartości) wskaźnika BMI została opracowana wyłącznie " +
            "dla dorosłych i nie może być stosowana u dzieci.";

        $scope.links = [
            {
                text : "Grafika w tle pobrana z www.maxpixels.net",
                url : "https://www.maxpixels.net"
            },
            {
                text : "Ikony flag pobrane z www.iconfinder.com",
                url : "https://www.iconfinder.com"
            },
            {
                text : "Favicon stworzony przez Freepik z www.flaticon.com",
                url : "https://www.flaticon.com/authors/freepik"
            }
        ];
    };
    defaultValues();

    $scope.changeLanguage = () => {
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
            $scope.tableOfBMI[0].label = "starvation";
            $scope.tableOfBMI[1].label = "emaciation";
            $scope.tableOfBMI[2].label = "underweight";
            $scope.tableOfBMI[3].label = "correct value";
            $scope.tableOfBMI[4].label = "overweight";
            $scope.tableOfBMI[5].label = "I degree of obesity";
            $scope.tableOfBMI[6].label = "II degree of obesity";
            $scope.tableOfBMI[7].label = "extreme obesity";

            $scope.definitionOfBMI = "Body mass index (BMI) is a value derived " +
                "from the mass (weight) and height of a person. The BMI is defined " +
                "as the body mass divided by the square of the body height, and is " +
                "universally expressed in units of kg/m2, resulting from mass in" +
                "kilograms and height in metres.";
            $scope.links[0].text = "Background image downloaded from www.maxpixels.net";
            $scope.links[1].text = "Flag icons downloaded from www.iconfinder.com";
            $scope.links[2].text = "Favicon made by Freepik from www.flaticon.com";
        }
    };

    $scope.updateBMI = () => {
        let weight = document.getElementById("weight").value;
        let height = document.getElementById("height").value;
        let bmi = weight/(Math.pow(height/100, 2));
        $scope.bmi = bmi;
    };
});
