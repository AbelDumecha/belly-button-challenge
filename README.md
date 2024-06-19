# Project Title: Belly Button Challenge (Module 14)

## Overview 
* Belly Button Biodiversity Dashboard project involves creating an interactive dashboard to explore the fascinating world of microbes that colonize human navels. Using data from the Belly Button Biodiversity dataset, I built a dashboard that allows users to discover the diverse microbial species (operational taxonomic units or OTUs) found in human belly buttons.

## Project Steps
* Here's a detailed breakdown of how I completed this task:

## 1. Set Up the Project Repository 
I. Create New Repository:
* I created a new repository on GitHub called 'belly-button-challenge' and cloned this repository to my local computer. 

* 2. Copy Starter Code:
* Inside my local repository, I copied the files from the 'StarterCode' folder (provided in the Module 14 Challenge zip file), including `index.html`, `samples.json`, and the `static` folder. 

* 3. Push chnges to GitHub repository:
* * I commited and pushed these changes to my GitHub repository.

* 4. Deploy to GitHub Pages:
* * I deployed the repository to GitHub Pages for live version of my dashboard. 

## 2. Read in the JSON Data
* 1. Fetch Data with D3:
* * I used the D3 library to rea in `samples.json` from the URL `https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`.

## 3. Create Visualizations
* 1. Horizontal Bar Chart:
* * I added a dropdown menu to select different samples.
* * The bar chart displays the top 10 OTUs found in each individual.
* * I used `sample_values` as the values, `otu_ids` as the labels, and `otu_labels` as the hovertext for the bar chart. 
* 2. Bubble Chart:
* *  the bubble chart displays each sample.
* * I used `otu_ids` for the x-axis, `sample_values` for the y-axis, `sample_values` for the marker sizes, `otu_ids` for the marker colors, and `otu_labels` for the text values. 
* 3. Display Metadata: 
* *  I displayed each sample's metadata (i.e, individual's demographic information).
* *  I looped through each key-value pair in the metadata JSON object and appended an HTML tag with the key-value pair to the `#sample-metadata` panel. 

## 4. Update plots
* 1. Dynamic Updates:
* * I ensured that all plots and metadata update dynamically when a new sample is selected from the dropdown menu. 

## 5. Final Product
* *  Dropdown Menu: Allows users to select different samples and view their data. 
* * Bar Chart: Displays the top 10 OTUs for the selected sample. 
* *  Bubble Chart: Visualizes the sample values against OTU IDs. 
* *  Metadata Panel: Shows demographic information for the selected sample. 
* *  Interactive updates: All charts and metadata update dynamically when a new sample is selected.  


 




