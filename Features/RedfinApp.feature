Feature: Redfin Application Test
 @tag1
 Scenario: validate  Redfin Home Page Test 
   Given user open Browser
   When user enter url
   Then Validate Home Page Title
   When enter the cityName in searchbox and press the enter button
   Then validate pop up appears
   When On the pop up select the cityName
   And verify user  enter to  Real Estate page
   Then assert the Search box on the top left side has cityName
   When Select the min price  and max price 
   Then Verify all the homes listed are from searchResult, if no homes listed throw an errorMessage
   
   
  @tag2
   Scenario Outline:Verify list of homes with set of data
   Given  user open Browser
    When user enter url
    Then verify the home page using "<homePageTitle>"
   When  enter the "<cityName>" in searchbox and press the enter 
   Then  validate pop up appears
   When  On the pop up select the entry "<SelectionFromPopUp>"
   Then  verify the city Real Estate page using "<estatePageHeader>"
   Then  assert the Search box on the top left side has "<cityName>"
   
   When Select the min price as "<MinPriceIndex>" and max price as "<MaxPriceIndex>"
   Then Verify all the homes listed are from "<searchResult>", if no homes listed throw an errorMessage
   Examples:
   
   |cityName|SelectionFromPopUp| estatePageHeader|  MinPriceIndex|      MaxPriceIndex|     searchResult|        
    |Sunnyvale | https://www.redfin.com/city/19457/CA/Sunnyvale|Sunnyvale Real Estate|25|3|/CA/Sunnyvale/|
   |Sunnyvale|https://www.redfin.com/neighborhood/338644/TX/Dallas/Sunnyvale|Sunnyvale Real Estate|22|5|/TX/Dallas|
