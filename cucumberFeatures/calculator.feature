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

@Calculator
Scenario Outline: Perform Given Operation
Given Open the Calculator
And Enter the two numbers as "<num1>" and "<num2>"
And perform the given operation "<operation>"
When User clicks on Go Button
Then Addition of two numbers should displayed
Examples:
|num1|num2|operation|
|10|15|ADDITION|
|60|30|SUBTRACTION|
|5|50|MULTIPLICATION|
|100|50|DIVISION|
