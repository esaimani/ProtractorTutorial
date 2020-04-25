Feature: Validate Angular JS Calculator App
Scenario Outline: Perform Addition Operation
Given Open the Calculator
And Enter the two numbers as "<num1>" and "<num2>"
When User clicks on Go Button
Then Addition of two numbers should displayed
Examples:
|num1|num2|
|10|15|
|10|30|

Scenario: Perform Subtraction Operation
Given Open the Calculator
And Enter the two numbers 
When User clicks on Go Button
Then Addition of two numbers should displayed