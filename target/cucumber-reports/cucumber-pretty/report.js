$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sukhd/eclipse-workspace/Redfin_EstateV001Project/Features/RedfinApp.feature");
formatter.feature({
  "line": 1,
  "name": "Redfin Application Test",
  "description": "",
  "id": "redfin-application-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify list of homes with set of data",
  "description": "",
  "id": "redfin-application-test;verify-list-of-homes-with-set-of-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enter url",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "verify the home page using \"\u003chomePageTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "enter the \"\u003ccityName\u003e\" in searchbox and press the enter",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "validate pop up appears",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "On the pop up select the entry \"\u003cSelectionFromPopUp\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "verify the city Real Estate page using \"\u003cestatePageHeader\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "assert the Search box on the top left side has \"\u003ccityName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Select the min price as \"\u003cMinPriceIndex\u003e\" and max price as \"\u003cMaxPriceIndex\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Verify all the homes listed are from \"\u003csearchResult\u003e\", if no homes listed throw an errorMessage",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "redfin-application-test;verify-list-of-homes-with-set-of-data;",
  "rows": [
    {
      "cells": [
        "cityName",
        "SelectionFromPopUp",
        "estatePageHeader",
        "MinPriceIndex",
        "MaxPriceIndex",
        "searchResult"
      ],
      "line": 31,
      "id": "redfin-application-test;verify-list-of-homes-with-set-of-data;;1"
    },
    {
      "cells": [
        "Sunnyvale",
        "https://www.redfin.com/city/19457/CA/Sunnyvale",
        "Sunnyvale Real Estate",
        "25",
        "3",
        "/CA/Sunnyvale/"
      ],
      "line": 32,
      "id": "redfin-application-test;verify-list-of-homes-with-set-of-data;;2"
    },
    {
      "cells": [
        "Sunnyvale",
        "https://www.redfin.com/neighborhood/338644/TX/Dallas/Sunnyvale",
        "Sunnyvale Real Estate",
        "22",
        "5",
        "/TX/Dallas"
      ],
      "line": 33,
      "id": "redfin-application-test;verify-list-of-homes-with-set-of-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Verify list of homes with set of data",
  "description": "",
  "id": "redfin-application-test;verify-list-of-homes-with-set-of-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enter url",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "verify the home page using \"\u003chomePageTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "enter the \"Sunnyvale\" in searchbox and press the enter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "validate pop up appears",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "On the pop up select the entry \"https://www.redfin.com/city/19457/CA/Sunnyvale\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "verify the city Real Estate page using \"Sunnyvale Real Estate\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "assert the Search box on the top left side has \"Sunnyvale\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Select the min price as \"25\" and max price as \"3\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Verify all the homes listed are from \"/CA/Sunnyvale/\", if no homes listed throw an errorMessage",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps1.user_open_Browser()"
});
formatter.result({
  "duration": 6592541400,
  "status": "passed"
});
formatter.match({
  "location": "steps1.user_enter_url()"
});
formatter.result({
  "duration": 2025526900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003chomePageTitle\u003e",
      "offset": 28
    }
  ],
  "location": "steps1.verify_the_home_page_using(String)"
});
formatter.result({
  "duration": 123956400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunnyvale",
      "offset": 11
    }
  ],
  "location": "steps1.enter_the_in_searchbox_and_press_the_enter(String)"
});
formatter.result({
  "duration": 171023200,
  "status": "passed"
});
formatter.match({
  "location": "steps1.validate_pop_up_appears()"
});
formatter.result({
  "duration": 192766000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.redfin.com/city/19457/CA/Sunnyvale",
      "offset": 32
    }
  ],
  "location": "steps1.on_the_pop_up_select_the_entry(String)"
});
formatter.result({
  "duration": 3349413600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunnyvale Real Estate",
      "offset": 40
    }
  ],
  "location": "steps1.verify_the_city_Real_Estate_page_using(String)"
});
formatter.result({
  "duration": 3041788700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunnyvale",
      "offset": 48
    }
  ],
  "location": "steps1.assert_the_Search_box_on_the_top_left_side_has(String)"
});
formatter.result({
  "duration": 45004800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 25
    },
    {
      "val": "3",
      "offset": 47
    }
  ],
  "location": "steps1.select_the_min_price_as_and_max_price_as(String,String)"
});
formatter.result({
  "duration": 21232609700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/CA/Sunnyvale/",
      "offset": 38
    }
  ],
  "location": "steps1.verify_all_the_homes_listed_are_from_if_no_homes_listed_throw_an_errorMessage(String)"
});
formatter.result({
  "duration": 133293700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify list of homes with set of data",
  "description": "",
  "id": "redfin-application-test;verify-list-of-homes-with-set-of-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enter url",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "verify the home page using \"\u003chomePageTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "enter the \"Sunnyvale\" in searchbox and press the enter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "validate pop up appears",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "On the pop up select the entry \"https://www.redfin.com/neighborhood/338644/TX/Dallas/Sunnyvale\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "verify the city Real Estate page using \"Sunnyvale Real Estate\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "assert the Search box on the top left side has \"Sunnyvale\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Select the min price as \"22\" and max price as \"5\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Verify all the homes listed are from \"/TX/Dallas\", if no homes listed throw an errorMessage",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps1.user_open_Browser()"
});
formatter.result({
  "duration": 5183403500,
  "status": "passed"
});
formatter.match({
  "location": "steps1.user_enter_url()"
});
formatter.result({
  "duration": 1947481800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003chomePageTitle\u003e",
      "offset": 28
    }
  ],
  "location": "steps1.verify_the_home_page_using(String)"
});
formatter.result({
  "duration": 38703400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunnyvale",
      "offset": 11
    }
  ],
  "location": "steps1.enter_the_in_searchbox_and_press_the_enter(String)"
});
formatter.result({
  "duration": 157607500,
  "status": "passed"
});
formatter.match({
  "location": "steps1.validate_pop_up_appears()"
});
formatter.result({
  "duration": 152056400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.redfin.com/neighborhood/338644/TX/Dallas/Sunnyvale",
      "offset": 32
    }
  ],
  "location": "steps1.on_the_pop_up_select_the_entry(String)"
});
formatter.result({
  "duration": 2991764900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunnyvale Real Estate",
      "offset": 40
    }
  ],
  "location": "steps1.verify_the_city_Real_Estate_page_using(String)"
});
formatter.result({
  "duration": 3048745400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunnyvale",
      "offset": 48
    }
  ],
  "location": "steps1.assert_the_Search_box_on_the_top_left_side_has(String)"
});
formatter.result({
  "duration": 19304900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 25
    },
    {
      "val": "5",
      "offset": 47
    }
  ],
  "location": "steps1.select_the_min_price_as_and_max_price_as(String,String)"
});
formatter.result({
  "duration": 21195913700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/TX/Dallas",
      "offset": 38
    }
  ],
  "location": "steps1.verify_all_the_homes_listed_are_from_if_no_homes_listed_throw_an_errorMessage(String)"
});
formatter.result({
  "duration": 85575400,
  "status": "passed"
});
});