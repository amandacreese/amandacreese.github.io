
# Policies Pop Out- Quick Implementation Guide

## About Policies Pop Out
Policies pop out has been created to introduce a way of looking at accessibility statement as a scripted piece of work. It has also been considered that it might become a ongoing solution for footer moving forward to decrease the amount of links within the footer. 

It has been implemented with it being in **footer**, however mark up can be easily amended to suit any scenario.

### Examples:
Example implementation can be viewed here: 

[Standalone Version](https://codepen.io/ggodzilogodlewski/pen/6ac93053544abf7b73cd689ae897c0a4?editors=0100)
[Implemented into Footer](https://codepen.io/ggodzilogodlewski/pen/07ac7894b78604dbf6523dab4d12f355?editors=0100)

### Live Example
*(Hover over Policies to see pop out, this has been done using default footer from Master Build Template)*
<iframe height="400" width="100%" scrolling="no" title="Footer Policies - Pop out" src="https://codepen.io/ggodzilogodlewski/embed/07ac7894b78604dbf6523dab4d12f355?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ggodzilogodlewski/pen/07ac7894b78604dbf6523dab4d12f355'>Footer Policies - Pop out</a> by Grzegorz Godziło-Godlewski

### Implementation:

#### Implementation for new builds (quick way)
*Below ideally will be implemented into the Master Build Template*

1. Open your website environment and go into theme editor

2. Open `base.html` and scroll down to `Footer`.
3.  In Footer within one of the `ul` tags (preferrably footer left) paste in HTML code from the [Standalone Version](https://codepen.io/ggodzilogodlewski/pen/6ac93053544abf7b73cd689ae897c0a4?editors=1000) and save.
4. In `style.css` replace entire `Footer` styling with the code from [here](https://codepen.io/ggodzilogodlewski/pen/07ac7894b78604dbf6523dab4d12f355?editors=0100) from Line 42 to Line 228 and save.
 
#### Standalone Implementation
*Instructions assume that pop out will be implemented in the footer*
1. Open your website environment and go into theme editor

2. Open `base.html` and scroll down to `Footer`.
3. In Footer within one of the `ul` tags (preferrably footer left) paste in HTML code from the [Standalone Version](https://codepen.io/ggodzilogodlewski/pen/6ac93053544abf7b73cd689ae897c0a4?editors=1000) and save.
4. In `style.css` preferrably under `Footer` styling paste in CSS styling from [Standalone Version](https://codepen.io/ggodzilogodlewski/pen/6ac93053544abf7b73cd689ae897c0a4?editors=1000) from line 5 to line 113 .
5. To immitate the hover effects from the footer etc. The code from [Standalone Version](https://codepen.io/ggodzilogodlewski/pen/6ac93053544abf7b73cd689ae897c0a4?editors=1000) from line 119 to 120 can be added to Footer like in example [here](https://codepen.io/ggodzilogodlewski/pen/07ac7894b78604dbf6523dab4d12f355?editors=0100) (see lines 78 to 84). 
6. If the above code is implemented in the `Footer` then please add code from  [Standalone Version](https://codepen.io/ggodzilogodlewski/pen/6ac93053544abf7b73cd689ae897c0a4?editors=1000) from line 130 to 143 to 980px media query within the `Footer` code.

### Accessibility Statement

 Please make sure to include the accessibility statement on your build. In the attached file called accessibility-statement.html make sure to change the theme name on Line 1 to match the name of your theme.
